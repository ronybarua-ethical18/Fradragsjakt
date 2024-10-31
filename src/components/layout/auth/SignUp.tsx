// src/components/layout/auth/Register.tsx
'use client';
import { signIn, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import QuestionariesModal from "@/components/QuestionariesModal";
import { FormInput } from '@/components/FormInput';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import CompanyLogo from '@/components/CompanyLogo';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  /* role: string; */
};

export default function SignUp() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormData>();

  useEffect(() => {
    if (session?.user.role) router.push(`/${session?.user?.role}/dashboard`);
  }, [session, router]);

  const mutation = trpc.auth.signup.useMutation({
    onSuccess: () => {
      toast.success(
        'Email verification link has been sent to your email. Please check.',
        {
          duration: 4000,
        }
      );
      reset();
      setLoading(false); // Reset loading state on success
    },
    onError: (error) => {
      setError(error.message || 'Failed to register. Please try again.');
      setLoading(false); // Reset loading state on error
    },
  });

  const onSubmit = (data: FormData) => {
    setError(null); // Reset error state before submission
    setLoading(true); // Start loading state
    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col space-y-8 items-center text-black justify-center h-screen bg-gray-100">
      <CompanyLogo color="#5B52F9" height="32" width="152" />

      <div className="w-full max-w-md p-8 space-y-6 text-center bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Sign up </h2>
          <p className="text-sm">Create a new account</p>
        </div>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex space-x-2">
            <FormInput
              name="firstName"
              control={control}
              type="text"
              placeholder="First Name"
              required
            />
            <FormInput
              name="lastName"
              control={control}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          <FormInput
            name="email"
            control={control}
            type="email"
            placeholder="Email"
            required
          />

          <FormInput
            name="password"
            control={control}
            type="password"
            placeholder="Password"
            required
          />

          {/* <FormInput
            name="role"
            control={control}
            type="select"
            placeholder="Select Role"
            options={[
              { title: 'Auditor', value: 'auditor' },
              { title: 'Customer', value: 'customer' },
            ]}
            required
          /> */}

          <Button
            type="submit"
            className="w-full text-white"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
        </form>

        <div className="flex items-center justify-between">
          <span className="border-t w-full inline-block"></span>
          <span className="px-4 min-w-[155px] text-gray-500">
            or continue with
          </span>
          <span className="border-t w-full inline-block"></span>
        </div>

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
