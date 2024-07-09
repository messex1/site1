'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RcicNavbar() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('username');
    setUsername(user || 'User');
  }, []);

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="text-left">
        <span className="text-lg font-bold">Welcome {username} to your RCIC Dashboard</span>
      </div>
      <div className="flex space-x-4">
        <button onClick={handleLogout} className="text-blue-600 hover:underline">Logout</button>
      </div>
    </nav>
  );
}
