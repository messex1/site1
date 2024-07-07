import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white text-lg font-medium">
              <img src="/myfuturecanadalogo.svg" alt="My Future Canada Logo" className="h-8" />
            </a>
          </Link>
          <div className="text-white text-lg font-medium text-center flex-grow">
            My Future Canada System Dashboard
          </div>
        </div>
        <div className="flex space-x-4">
          <Link href="/rcic-login" legacyBehavior>
            <a className="text-white">RCIC Login</a>
          </Link>
          <Link href="/client-login" legacyBehavior>
            <a className="text-white">Client Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
