'use client';

import { useState } from 'react';
import RcicNavbar from '../../components/RcicNavbar';

export default function RcicDashboard() {
  const [selectedClient, setSelectedClient] = useState('');

  return (
    <div>
      <RcicNavbar />
      <main className="flex flex-col items-center p-8">
        <div className="w-full max-w-3xl">
          <div className="mb-8">
            <label htmlFor="client-select" className="block mb-2 text-xl font-semibold">Select a Client:</label>
            <select
              id="client-select"
              className="w-full p-2 border rounded-md"
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
            >
              <option value="">-- Select a Client --</option>
              <option value="client1">Client 1</option>
              <option value="client2">Client 2</option>
              <option value="client3">Client 3</option>
            </select>
          </div>

          {selectedClient && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Request Documents</h2>
              <div className="border p-4 rounded-md">
                <h3 className="text-xl font-semibold">Request Document</h3>
                <p>Select documents to request from the client or upload forms for the client to complete.</p>
              </div>
              <div className="border p-4 rounded-md">
                <h3 className="text-xl font-semibold">Needs Attention</h3>
                <p>Client file requires attention.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
