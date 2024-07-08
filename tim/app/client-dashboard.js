"use client";
import Link from 'next/link';

export default function ClientDashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-6">Client Dashboard</h1>
      <div className="mb-6">
        <p>Requested Documents</p>
        <ul>
          <li>
            Resume <span className="text-green-500">Complete</span> <Link href="#" className="text-blue-500 hover:text-blue-700">Upload</Link>
          </li>
          <li>
            Passport <span className="text-green-500">Complete</span> <Link href="#" className="text-blue-500 hover:text-blue-700">Upload</Link>
          </li>
          <li>
            Family Information <span className="text-red-500">Incomplete</span> <Link href="#" className="text-blue-500 hover:text-blue-700">Upload</Link>
          </li>
        </ul>
      </div>
      <p className="text-sm">
        Disclaimer: All documents must be completed and uploaded within 60 days of receiving a login.
      </p>
    </div>
  );
}
