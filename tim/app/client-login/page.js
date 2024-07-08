import Link from 'next/link';
import { useState } from 'react';

export default function ClientLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Username:', username, 'Password:', password);
    // Redirect to Client Dashboard after successful login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Client Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
