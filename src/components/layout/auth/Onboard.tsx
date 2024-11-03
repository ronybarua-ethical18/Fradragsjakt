'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { trpc } from '@/utils/trpc';
import QuestionnairesStepper from '@/components/QuestionnairesStepper';
import { signIn, useSession } from 'next-auth/react';
import { ApiResponse } from '@/server/db/types';
import { IUser } from '@/server/db/interfaces/user';

export type SelectedAnswer = {
  question: string;
  answers: string[];
};
export default function Onboard() {
  const router = useRouter();
  const { data: user, status } = useSession();
  const [verifiedUser] = useState<ApiResponse<IUser>>();
  console.log('verifiedUser__', verifiedUser);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);

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
    if (status === 'authenticated') {
      mutateUpdateQestionnaires();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="min-h-screen ">
      <QuestionnairesStepper
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        handleComplete={handleComplete}
        loading={loading}
      />
    </div>
  );
}
