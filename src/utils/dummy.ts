import ClothingImg from '../../public/images/expenses/clothing.png';
import TravelImg from '../../public/images/expenses/travel.png';
import TransportImg from '../../public/images/expenses/transport.png';
import GasImg from '../../public/images/expenses/gas.png';
import MealsImg from '../../public/images/expenses/meals.png';
import SuppliesImg from '../../public/images/expenses/supplies.png';
import InsuranceImg from '../../public/images/expenses/insurance.png';

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

export const expenseType = [
  {
    id: 1,
    imageSrc: ClothingImg,
    type: 'Clothing',
    quantity: 15,
    amount: 500,
  },
  {
    id: 2,
    imageSrc: TravelImg,
    type: 'Travel',
    quantity: 20,
    amount: 500,
  },
  {
    id: 3,
    imageSrc: TransportImg,
    type: 'Transport',
    quantity: 25,
    amount: 500,
  },
  {
    id: 4,
    imageSrc: GasImg,
    type: 'Gas',
    quantity: 40,
    amount: 500,
  },
  {
    id: 5,
    imageSrc: MealsImg,
    type: 'Meals',
    quantity: 15,
    amount: 500,
  },
  {
    id: 6,
    imageSrc: SuppliesImg,
    type: 'Supplies',
    quantity: 35,
    amount: 500,
  },
  {
    id: 7,
    imageSrc: InsuranceImg,
    type: 'Insurance',
    quantity: 40,
    amount: 500,
  },
];
