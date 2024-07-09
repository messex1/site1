'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RcicNavbar() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('rcicUsername');
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    // Clear the username from localStorage
    localStorage.removeItem('rcicUsername');
    router.push('/');
  };

  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="text-left font-bold">
        <span>My Future Canada System Dashboard</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Welcome, {username}</span>
        <button onClick={handleLogout} className="text-red-500">Logout</button>
      </div>
    </nav>
  );
}
