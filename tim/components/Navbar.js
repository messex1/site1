"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold mr-4">
            My Future Canada
          </Link>
          <span className="text-lg font-medium">System Dashboard</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/rcic-login" className="hover:text-gray-300">
            RCIC Login
          </Link>
          <Link href="/client-login" className="hover:text-gray-300">
            Client Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
