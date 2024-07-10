'use client';

import { useState } from 'react';
import RcicNavbar from '../components/RcicNavbar';
import RequestedDocuments from '../components/RequestedDocuments';

export default function RcicDashboard() {
  const [selectedClient, setSelectedClient] = useState('');

  return (
    <div>
      <RcicNavbar />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold mb-6">RCIC Dashboard</h1>
        <div className="mb-6">
          <label htmlFor="client-select" className="mr-2">Select a Client:</label>
          <select
            id="client-select"
            className="p-2 border rounded"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="">Select a client</option>
            <option value="client1">Client 1</option>
            <option value="client2">Client 2</option>
          </select>
        </div>
        {selectedClient && <RequestedDocuments />}
      </main>
    </div>
  );
}
