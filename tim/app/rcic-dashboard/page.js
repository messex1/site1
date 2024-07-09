'use client';

import { useState } from 'react';
import RcicNavbar from '../../components/RcicNavbar';

export default function RcicDashboard() {
  const [selectedClient, setSelectedClient] = useState('');

  const handleClientChange = (e) => {
    setSelectedClient(e.target.value);
  };

  return (
    <div>
      <RcicNavbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">RCIC Dashboard</h1>
        <div className="mb-4">
          <label htmlFor="client-select" className="block text-sm font-medium text-gray-700">
            Select a Client:
          </label>
          <select
            id="client-select"
            value={selectedClient}
            onChange={handleClientChange}
            className="mt-1 p-2 w-full border rounded-md text-black"
          >
            <option value="">Select a client</option>
            <option value="client1">Client 1</option>
            <option value="client2">Client 2</option>
            <option value="client3">Client 3</option>
          </select>
        </div>
        {selectedClient && (
          <div className="mt-4 w-full space-y-4">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">
              Request Documents
            </button>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">
              Needs Attention
            </button>
            <p className="text-red-500">
              Client file requires attention
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
