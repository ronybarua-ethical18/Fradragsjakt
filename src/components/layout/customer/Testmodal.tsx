import React from 'react';
import { ContentBank } from './components/modalcontent/ContentBank';
import { ContentDonation } from './components/modalcontent/ContentDonation';
import { ContentForeignIncome } from './components/modalcontent/ContentForeignIncome';
import { ContentHealthFamily } from './components/modalcontent/ContentHealthFamily';

export default function Testmodal() {
  return (
    <div className="flex flex-col gap-2">
      <ContentBank />

      <ContentDonation />
      <ContentForeignIncome />
      <ContentHealthFamily />
    </div>
  );
}
