
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Custom logic
  return NextResponse.next();
}

// Optional: specify paths where this middleware should run
export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
};

