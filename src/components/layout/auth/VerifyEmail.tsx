'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'; // For toast notifications
import { trpc } from '@/utils/trpc'; // Assuming trpc setup exists
import CompanyLogo from '@/components/CompanyLogo';
import QuestionnairesStepper from '@/components/QuestionnairesStepper';
import { signIn, useSession } from 'next-auth/react';
import { ApiResponse } from '@/server/db/types';
import { IUser } from '@/server/db/interfaces/user';

export type SelectedAnswer = {
  question: string;
  answers: string[];
};
export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const { data: user, status } = useSession();
  const [verifiedUser, setVerifiedUser] = useState<ApiResponse<IUser>>();
  console.log('verifiedUser__', verifiedUser);
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);

  const toastShown = useRef(false); // Track if a toast has been triggered

  const { mutate: verifyEmail } = trpc.auth.verifyEmail.useMutation({
    onSuccess: (data) => {
      setIsVerifying(false);
      setVerifiedUser(data);
      if (!toastShown.current) {
        if (data.alreadyVerified) {
          setAlreadyVerified(true);
          toast.success('Your email was already verified.', { duration: 4000 });
        } else {
          setIsVerified(true);
          //toast.success('Email verified successfully!', { duration: 4000 });
        }
        toastShown.current = true; // Mark toast as shown
      }
    },
    onError: (error) => {
      setIsVerifying(false);
      setIsVerified(false);

      if (!toastShown.current) {
        toast.error(error.message || 'Verification failed. Please try again.');
        toastShown.current = true; // Mark toast as shown
      }
    },
  });

  const updateQuestionnaires = trpc.users.updateUser.useMutation();

  const mutateUpdateQestionnaires = useCallback(() => {
    updateQuestionnaires.mutate(
      { questionnaires: selectedAnswers },
      {
        onSuccess: () => {
          toast.success('Congrats! you have successfully onboarded');
          setLoading(false);
          router.push(`/${user?.user.role}/dashboard`);
        },
        onError: (error) => {
          console.error('Failed to update questionnaires:', error);
        },
      }
    );
  }, [selectedAnswers, router, updateQuestionnaires, user?.user.role]);

  const handleComplete = async () => {
    setLoading(true);
    await signIn(
      'credentials',
      {
        redirect: false,
        email: verifiedUser?.data?.email,
        password: verifiedUser?.data?.password,
      },
      {}
    );
  };

  useEffect(() => {
    if (token) {
      verifyEmail({ token });
    } else {
      setIsVerifying(false);
    }
  }, [token, verifyEmail]);

  useEffect(() => {
    if (status === 'authenticated') {
      mutateUpdateQestionnaires();
    }
  }, [status]);

  return (
    <div className="min-h-screen ">
      {(isVerified || alreadyVerified) && (
        <QuestionnairesStepper
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          handleComplete={handleComplete}
          loading={loading}
        />
      )}
      <div
        style={{
          textAlign: 'center',
          height: '100vh',
          backgroundColor: '#f2f5f8',
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <table
          role="presentation"
          style={{
            borderCollapse: 'collapse',
            backgroundColor: '#f2f5f8',
            width: '100%',
          }}
        >
          <tbody>
            <tr>
              <td align="center">
                <CompanyLogo />
              </td>
            </tr>
            <tr>
              <td align="center">
                <div
                  style={{
                    maxWidth: '700px',
                    margin: '30px',
                    backgroundColor: 'white',
                    padding: '30px',
                  }}
                >
                  {isVerifying ? (
                    <h3 style={{ color: '#333', fontSize: '18px' }}>
                      Verifying your email, please wait...
                    </h3>
                  ) : isVerified ? (
                    <>
                      <h3 style={{ fontWeight: 400, lineHeight: '34px' }}>
                        Thank you for trusting{' '}
                        <span style={{ fontWeight: 600 }}>Fradragsjakt!</span>
                      </h3>
                      <div style={{ color: '#5b6aff', margin: '30px 0px' }}>
                        <h3 style={{ fontSize: '24px' }}>
                          Your email has been verified successfully!
                        </h3>
                      </div>
                      <Link href="/login">
                        <button
                          style={{
                            height: '40px',
                            width: '146px',
                            backgroundColor: '#5b6aff',
                            color: 'white',
                            margin: '30px 0',
                            cursor: 'pointer',
                            borderRadius: '5px',
                          }}
                        >
                          Log in
                        </button>
                      </Link>
                    </>
                  ) : alreadyVerified ? (
                    <>
                      <h3 style={{ color: '#27ae60', fontSize: '24px' }}>
                        Your email is already verified!
                      </h3>
                      <Link href="/login">
                        <button
                          style={{
                            height: '40px',
                            width: '146px',
                            backgroundColor: '#5b6aff',
                            color: 'white',
                            margin: '30px 0',
                            cursor: 'pointer',
                            borderRadius: '5px',
                          }}
                        >
                          Log in
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <h3 style={{ color: '#e74c3c', fontSize: '24px' }}>
                        Email verification failed!
                      </h3>
                      <p style={{ color: '#555', marginTop: '15px' }}>
                        Please try again or contact support if the issue
                        persists.
                      </p>
                      <Link href="/resend-verification">
                        <button
                          style={{
                            height: '40px',
                            width: '220px',
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            margin: '30px 0',
                            cursor: 'pointer',
                            borderRadius: '5px',
                          }}
                        >
                          Resend Verification Email
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
