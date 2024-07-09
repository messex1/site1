import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="text-left">
        <span className="text-lg font-bold">My Future Canada</span>
      </div>
      <div className="flex-1 flex justify-center">
        <span className="text-lg font-bold">My Future Canada System Dashboard</span>
      </div>
      <div className="flex space-x-4">
        <Link href="/rcic-login" legacyBehavior>
          <a className="text-blue-600 hover:underline">RCIC Login</a>
        </Link>
        <Link href="/client-login" legacyBehavior>
          <a className="text-blue-600 hover:underline">Client Login</a>
        </Link>
      </div>
    </nav>
  );
}
