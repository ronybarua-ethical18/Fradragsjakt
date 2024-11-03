'use client';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { trpc } from '@/utils/trpc';
import QuestionnairesStepper from '@/components/QuestionnairesStepper';
import { useSession } from 'next-auth/react';
import Loading from '@/app/loading';

export type SelectedAnswer = {
  question: string;
  answers: string[];
};
export default function Onboard() {
  const router = useRouter();
  const { data: user, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);
  const hasToasted = useRef(false);

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
    mutateUpdateQestionnaires();
  };

  useEffect(() => {
    if (status === 'unauthenticated' && !hasToasted.current) {
      toast.error('You are not logged in yet!');
      hasToasted.current = true;
      router.push('/login');
    }
    if (status === 'authenticated' && user?.user.role && user.user.hasAnswers) {
      router.push(`/${user?.user.role}/dashboard`);
    }
  }, [status, user, router]);

  return (
    <>
      {status !== 'authenticated' ? (
        <Loading />
      ) : (
        <div className="min-h-screen ">
          <QuestionnairesStepper
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
            handleComplete={handleComplete}
            loading={loading}
          />
        </div>
      )}
    </>
  );
}
