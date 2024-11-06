import React from 'react';
import { ContentBank } from './components/write-offs/modals-content/ContentBank';
import { ContentDonation } from './components/write-offs/modals-content/ContentDonation';
import { ContentForeignIncome } from './components/write-offs/modals-content/ContentForeignIncome';
import { ContentHealthFamily } from './components/write-offs/modals-content/ContentHealthFamily';
import { ContentHobby } from './components/write-offs/modals-content/ContentHobby';
import { ContentWork } from './components/write-offs/modals-content/ContentWork';
import { FilterContent } from './components/expenses/ExpenseFilterContent';
import { HeaderMappingModal } from './components/expenses/ExpenseMappingModal';
import ErrorTrigger from './ErrorTrigger';

export default function Testmodal() {
  return (
    <div className="flex flex-col gap-2 m-2">
      <ContentBank />
      <ContentDonation />
      <ContentForeignIncome />
      <ContentHealthFamily />
      <ContentHobby />
      <ContentWork />
      <FilterContent />
      <HeaderMappingModal />
      <ErrorTrigger />
    </div>
  );
}
