import React from 'react';
import ProtectedLayout from '../ProtectedLayout';
import CategoryCard from './components/categories/CategoryCard';
import CategoryTable from './components/categories/CategoryTable';

export default function CustomerCategories() {
  return (
    <ProtectedLayout>
      <CategoryCard />
      <CategoryTable />
    </ProtectedLayout>
  );
}
