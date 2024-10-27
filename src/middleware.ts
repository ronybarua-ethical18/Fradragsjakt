'use client';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('next-auth.session-token')?.value;

  // Check if the token exists
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Specify the paths you want to protect
export const config = {
  matcher: ['/transactions', '/users', '/customer/dashboard'],
};
