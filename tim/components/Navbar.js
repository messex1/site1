import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-gray-800">
      <div className="flex-1 text-center">
        <h1 className="text-2xl font-bold italic" style={{ fontFamily: 'Open Sans, sans-serif' }}>My Future Canada - System Dashboard  </h1>
      </div>
      <div className="flex-1 flex justify-end space-x-4">
        <Link href="/rcic-login" legacyBehavior>
          <a className="text-blue-500 hover:underline">RCIC Login</a>
        </Link>
        <Link href="/client-login" legacyBehavior>
          <a className="text-blue-500 hover:underline">Client Login</a>
        </Link>
      </div>
    </nav>
  );
}
