import {
  LayoutDashboard,
  HandCoins,
  Landmark,
  CircleDollarSign,
  Newspaper,
} from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import { FcLineChart, FcPackage } from 'react-icons/fc';

export const menuConfig = {
  admin: [
    {
      href: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/orders',
      label: 'Orders',
      icon: HandCoins,
      badge: 6,
    },
    {
      href: '/products',
      label: 'Products',
      icon: FcPackage,
      subItems: [
        { href: '/products/categories', label: 'Categories' },
        { href: '/products/new', label: 'New Product' },
      ],
    },
    {
      href: '/customers',
      label: 'Customers',
      icon: FaUser,
    },
    {
      href: '/analytics',
      label: 'Analytics',
      icon: FcLineChart,
      subItems: [
        { href: '/analytics/sales', label: 'Sales' },
        { href: '/analytics/traffic', label: 'Traffic' },
      ],
    },
  ],
  seller: [
    {
      href: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/orders',
      label: 'Orders',
      icon: HandCoins,
      badge: 3,
    },
    {
      href: '/products',
      label: 'Products',
      icon: FcPackage,
      subItems: [
        { href: '/products/inventory', label: 'Inventory' },
        { href: '/products/new', label: 'New Product' },
      ],
    },
  ],
  customer: [
    {
      href: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: '/expenses',
      label: 'Expenses',
      icon: HandCoins,
      subItems: [{ href: '/expenses/categories', label: 'Categories' }],
    },
    {
      href: '/rule',
      label: 'Rules',
      icon: HandCoins,
    },
    {
      href: '/deductions',
      label: 'Deductions',
      icon: Landmark,
      subItems: [
        { href: '/deductions/2024', label: '2024' },
        { href: '/deductions/2023', label: '2023' },
        { href: '/deductions/2022', label: '2022' },
      ],
    },
    {
      href: '/tax-file',
      label: 'Tax File',
      icon: Newspaper,
    },
    {
      href: '/write-offs',
      label: 'Write-offs',
      icon: CircleDollarSign,
    },
  ],
};
