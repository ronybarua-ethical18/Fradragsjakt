import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import CategoryCard from './components/categories/CategoryCard';
import CategoryOverview from './components/categories/CategoryOverview';

export default function CustomerCategories() {
  return (
    <ProtectedLayout>
      <CategoryCard />
      <CategoryOverview />
    </ProtectedLayout>
  );
}
