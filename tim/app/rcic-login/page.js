'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RcicLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      // Store the username in localStorage
      localStorage.setItem('rcicUsername', username);
      router.push('/rcic-dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">RCIC Login</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
      <Link href="/" legacyBehavior>
        <a className="mt-4 text-blue-600">Back to Home</a>
      </Link>
    </div>
  );
}
