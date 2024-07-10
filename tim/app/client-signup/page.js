'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClientSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // Handle sign-up logic here
      setMessage('Account Created Successfully!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Client Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 p-2 w-full border rounded-md text-black"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">Sign Up</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {message === 'Account Created Successfully!' && (
          <Link href="/client-login" legacyBehavior>
            <a className="mt-4 text-blue-600">Login here</a>
          </Link>
        )}
      </div>
    </div>
  );
}
