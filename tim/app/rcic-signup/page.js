'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RcicSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      validationErrors.username = 'Username can only contain letters and numbers';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters';
    } else if (!/[A-Z]/.test(password)) {
      validationErrors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(password)) {
      validationErrors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(password)) {
      validationErrors.password = 'Password must contain at least one digit';
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Account Created Successfully!');
      // Clear the form fields
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">RCIC Sign-Up</h1>
        <form onSubmit={handleSubmit}>
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
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
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
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
        {successMessage && (
          <div className="mt-4">
            <p className="text-green-500 text-lg">{successMessage}</p>
            <Link href="/rcic-login" legacyBehavior>
              <a className="text-blue-600 hover:underline text-align:center">Login here</a>
            </Link>
          </div>
        )}
      </div>
      <Link href="/" legacyBehavior>
        <a className="mt-4 text-blue-600">Back to Home</a>
      </Link>
    </div>
  );
}
