'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Sidebar from '../Sidebar';
import { useRouter } from 'next/navigation';
import Topbar from '../Topbar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { data: user, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (
      status !== 'authenticated' ||
      !user.user.role ||
      !user.user.hasAnswers
    ) {
      router.push('/login');
    }
    if (status === 'loading') return;
  }, [status, router, user]);

  return (
    <div className="h-screen fixed w-full">
      <div>
        <Topbar role={user?.user?.role || ''} />
        <div className="grid bg-[#EEF0F4]  h-[calc(100vh-60px)] gap-8 w-full md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr] px-8 lg:px-[128px]">
          <Sidebar role={user?.user?.role || ''} />
          <main className="flex-1 overflow-y-auto my-6 lg:mt-8 [&::-webkit-scrollbar]:hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
