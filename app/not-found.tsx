// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="mb-6">Sorry, we couldn’t find that page.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#c29e2f] transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
