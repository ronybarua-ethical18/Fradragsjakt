// src/components/layout/auth/Register.tsx
'use client';
import { signIn, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import QuestionariesModal from "@/components/QuestionariesModal";
import { FormInput } from '@/components/FormInput';
import { trpc } from '@/utils/trpc'; // Adjust the import according to your project structure
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

export default function Register() {
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null); // State to track error

  useEffect(() => {
    if (session?.user) router.push(`/${session?.user?.role}/dashboard`);
  }, [session, router]);

  const mutation = trpc.auth.signup.useMutation({
    onSuccess: () => {
      toast.success(
        'Email verification link has been sent to your email please check',
        {
          duration: 4000, // Duration in milliseconds
        }
      );

      reset(); // Reset form after successful submission
      // router.push("/login"); // Redirect to login page after successful registration
    },
    onError: (error) => {
      setError(error.message || 'Failed to register. Please try again.');
    },
  });

  const onSubmit = (data: FormData) => {
    setError(null); // Reset error state before submission
    mutation.mutate(data); // Call the tRPC mutation
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
        {/* <QuestionariesModal /> */}
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}{' '}
        {/* Display error message */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-2">
            {/* First Name */}
            <FormInput
              name="firstName"
              control={control}
              type="text"
              placeholder="First Name"
              required
            />

            {/* Last Name */}
            <FormInput
              name="lastName"
              control={control}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email */}
          <FormInput
            name="email"
            control={control}
            type="email"
            placeholder="Email"
            required
          />

          {/* Password */}
          <FormInput
            name="password"
            control={control}
            type="password"
            placeholder="Password"
            required
          />

          {/* Role (Select) */}
          <FormInput
            name="role"
            control={control}
            type="select"
            placeholder="Select Role"
            options={[
              { title: 'Auditor', value: 'auditor' },
              { title: 'Customer', value: 'customer' },
            ]}
            required
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full text-white">
            Sign Up
          </Button>
        </form>
        <div className="flex items-center justify-between">
          <span className="border-t w-full   inline-block"></span>
          <span className="px-4 min-w-[145px] text-gray-500">
            or continue with
          </span>
          <span className="border-t w-full inline-block"></span>
        </div>
        {/* Google Sign In Button */}
        <Button
          variant="outline"
          onClick={() => signIn('google')}
          className="w-full flex items-center justify-center"
        >
          <FcGoogle className="text-lg" />
          <span className="flex-1 text-center ms-[-16px] text-[#1B1B28] font-medium">
            Google
          </span>
        </Button>
        <p className="text-sm text-[#71717A] font-medium">
          Already have an account?{' '}
          <Link href="/login" className="text-[#00104B]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
