import Link from 'next/link';

export default function RCICDashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-6">RCIC Dashboard</h1>
      <p className="mb-6">Welcome to the RCIC Dashboard.</p>
      <Link href="/client-list" className="text-blue-500 hover:text-blue-700">
        Select a Client
      </Link>
    </div>
  );
}
