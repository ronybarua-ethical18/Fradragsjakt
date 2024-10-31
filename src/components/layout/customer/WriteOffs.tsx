import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import QuestionnairesReviewSection from './components/write-offs/QuestionnairesReviewSection';
import WriteOffsTopSection from './components/write-offs/WriteOffsTopSection';
import WriteOffsTableSection from './components/write-offs/WriteOffsTableSection';

export default function CustomerWriteOffs() {
  return (
    <ProtectedLayout>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-9">
          <WriteOffsTopSection />
          <WriteOffsTableSection />
        </div>
        <QuestionnairesReviewSection />
      </div>
    </ProtectedLayout>
  );
}
