'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Import session hook
import ProfileDropdown from '../Dropdown';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';
import Link from 'next/link';
import CompanyLogo from '../CompanyLogo';
import { BellDot } from 'lucide-react';
import SearchInput from '../SearchInput';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { data: user, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!user || status !== 'authenticated') {
      router.push('/login');
    }
    if (status === 'loading') return;
  }, [status, router, user]);

  return (
    <>
      {status === 'loading' && (
        <Loading size="extra_large"> Loading...</Loading>
      )}
      <div className="h-screen w-full overflow-hidden">
        <header className="flex bg-[#00104B] justify-between h-14 items-center px-7  lg:h-[60px] lg:px-[128px]">
          <MobileNav role={user?.user?.role || ''} />
          <div className="hidden md:flex items-center ">
            <Link href="/" className="">
              <CompanyLogo />
              <p className="text-xs text-white font-medium">Welcome</p>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <SearchInput className="hidden md:block" />
            <BellDot size={24} color="#FFFF" />
            <ProfileDropdown />
          </div>
        </header>

        <div className="grid bg-[#EEF0F4]  h-[calc(100vh-60px)] gap-8 w-full md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr] px-8 lg:px-[128px]">
          <Sidebar role={user?.user?.role || ''} />
          <main className="flex-1 bg-white overflow-y-auto mt-6 lg:mt-8 [&::-webkit-scrollbar]:hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
