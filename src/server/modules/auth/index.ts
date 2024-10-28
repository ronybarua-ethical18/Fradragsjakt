import { TRPCError } from '@trpc/server';
import { z } from 'zod'; // Import Zod for validation
import { publicProcedure, router } from '@/server/trpc';
import User from '@/server/db/models/user';
import bcrypt from 'bcrypt';
import sendEmail from '../../services/mail/sendMail';
import { VERIFY_EMAIL_TEMPLATE } from '../../services/mail/constants';
import jwt from 'jsonwebtoken'; // Import JWT for token generation
import { authValidation } from './auth.validation';

export const authRouter = router({
  // Sign Up Procedure
  signup: publicProcedure
    .input(authValidation.signupSchema) // Validate input with Zod schema
    .mutation(async ({ input }) => {
      const { email, password, firstName, lastName /* role */ } = input;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists'); // Handle user already existing
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        /* role, */
      });

      await newUser.save(); // Save user to the database

      // Generate JWT token for email verification
      const token = jwt.sign(
        { id: newUser._id, email: newUser.email, role: newUser.role }, // Payload (user info)
        process.env.JWT_SECRET as string, // JWT secret from env
        { expiresIn: '1h' } // Token expiration
      );

      // Send verification email with the token
      sendEmail(
        [newUser.email],
        {
          subject: 'Email Verification',
          data: {
            firstName: newUser.firstName,
            token: `${process.env.CLIENT_URL}?token=${token}`,
          },
        }, // Pass token to template context
        VERIFY_EMAIL_TEMPLATE
      );

      return {
        message: 'User registered successfully, please verify your email.',
        status: 200,
        user: newUser,
        token, // Send token if you want to use it on the client side immediately
      };
    }),
  verifyEmail: publicProcedure
    .input(
      z.object({
        token: z.string(), // Expect a token as input
      })
    )
    .mutation(async ({ input }) => {
      const { token } = input;

      // Decode the token and extract user info
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
      };

      // Find the user by ID
      const user = await User.findById(decoded.id);
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }

      // Check if the user is already verified
      if (user.isVerified) {
        return {
          message: 'User is already verified.',
          alreadyVerified: true,
          status: 200,
        };
      }

      // Update the user's verification status
      user.isVerified = true;
      await user.save();

      return {
        message: 'Email verified successfully.',
        status: 200,
        alreadyVerified: false,
        data: user,
      };
    }),
});
