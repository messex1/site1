import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RcicNavbar() {
  const router = useRouter();
  const username = 'John Doe'; // Replace this with the actual username from context or props

  const handleLogout = () => {
    // Handle logout logic here
    router.push('/');
  };

  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      <div>
        <span className="font-bold">Welcome {username} to your RCIC Dashboard</span>
      </div>
      <div>
        <button onClick={handleLogout} className="text-blue-600">Logout</button>
      </div>
    </nav>
  );
}
