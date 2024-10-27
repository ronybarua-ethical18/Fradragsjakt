// QuestionariesModal.tsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaQuestion } from 'react-icons/fa';
import { questionnaires } from '@/lib/questionnaires';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';

type questionariesModalProps = {
  isOpen: boolean | undefined;
  setIsOpen: (status: boolean) => void;
};

type SelectedAnswer = {
  question: string;
  answers: string[];
};
export default function QuestionnairesModal({
  setIsOpen,
  isOpen,
}: questionariesModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const step = questionnaires[currentStepIndex];
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);
  console.log('selectedAnswers___', selectedAnswers);

  const handleAnswerClick = (answer: string, question: string): void => {
    setSelectedAnswers((prev) => {
      const existingQuestion = prev.find((item) => item.question === question);

      if (existingQuestion) {
        const isAnswerSelected = existingQuestion.answers.includes(answer);

        // If the answer is already selected, remove it
        const updatedAnswers = isAnswerSelected
          ? existingQuestion.answers.filter((ans) => ans !== answer)
          : [...existingQuestion.answers, answer];

        return prev.map((item) =>
          item.question === question
            ? { ...item, answers: updatedAnswers }
            : item
        );
      } else {
        // If it's the first time the question is answered, add it
        return [...prev, { question, answers: [answer] }];
      }
    });
  };

  const updateQuestionnaires = trpc.users.updateUser.useMutation();

  const handleComplete = () => {
    updateQuestionnaires.mutate(
      { questionnaires: selectedAnswers },
      {
        onSuccess: () => {
          setIsOpen(false);
          toast.success('Questionnaires updated successfully!');
        },
        onError: (error) => {
          console.error('Failed to update questionnaires:', error);
        },
      }
    );
  };
  // Navigation handlers
  const goToNextStep = () => setCurrentStepIndex((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStepIndex((prev) => prev - 1);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild className="sr-only">
        <Button variant="outline">
          <FaQuestion />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[560px] flex flex-col justify-between items-center h-[539px] w-full p-6">
        {/* Render Current Step */}

        <div className="text-center space-y-6">
          {/* Icon */}
          <Image
            src={step.icon ?? '/images/default-icon.svg'}
            alt="image"
            height={24}
            width={24}
            className="mx-auto"
          />

          <div className="space-y-3">
            {/* Title */}
            <h2 className="text-[var(--700,#18181B)] font-inter text-[20px] md:text-[24px] font-bold leading-normal">
              {step.question}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-center   text-[var(--500,#71717A)] font-inter text-[12px] font-medium leading-normal">
              This info allows Keeper to suggest tax savings. Select all that
              apply.
            </p>
          </div>
        </div>
        {/* Questions */}
        <div className="space-y-2 w-full flex flex-col max-h-[297px] overflow-y-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#5B52F9] [&::-webkit-scrollbar-thumb]:rounded-full">
          {step.answers?.map((answer, i) => (
            <label
              key={i}
              onClick={() => handleAnswerClick(answer, step.question)}
              className={cn(
                'cursor-pointer text-center transition-colors p-4 rounded-[6px] border',
                selectedAnswers
                  .find((item) => item.question === step.question)
                  ?.answers.includes(answer)
                  ? 'border-[var(--violet,#5B52F9)] bg-[var(--violet-2,#F0EFFE)]'
                  : 'border-[var(--grey,#E4E4E7)] bg-white hover:bg-gray-100'
              )}
            >
              <span
                className={cn(
                  'self-stretch text-center font-inter text-sm font-normal leading-[150%]',
                  selectedAnswers
                    .find((item) => item.question === step.question)
                    ?.answers.includes(answer)
                    ? 'text-[var(--violet,#5B52F9)]'
                    : 'text-black'
                )}
              >
                {answer}
              </span>
            </label>
          ))}
        </div>
        <div className="flex space-x-2 w-full justify-between">
          {/* Show Previous Button if not on the first step */}
          {currentStepIndex > 0 ? (
            <Button type="button" variant="white" onClick={goToPreviousStep}>
              Previous
            </Button>
          ) : (
            <span />
          )}

          {/* Show Next or Complete Button */}
          {currentStepIndex < questionnaires.length - 1 ? (
            <Button type="button" variant="purple" onClick={goToNextStep}>
              Next
            </Button>
          ) : (
            <Button
              disabled={selectedAnswers.length < 7}
              type="button"
              variant="purple"
              onClick={handleComplete}
            >
              Complete
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
