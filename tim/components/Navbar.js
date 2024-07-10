import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold">My Future Canada System Dashboard</div>
      <div className="flex space-x-4">
        <Link href="/rcic-login" legacyBehavior>
          <a className="text-white hover:text-gray-300">RCIC Login</a>
        </Link>
        <Link href="/client-login" legacyBehavior>
          <a className="text-white hover:text-gray-300">Client Login</a>
        </Link>
      </div>
    </nav>
  );
}
