import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image
          src="/my_future_canada_logo.svg"
          alt="My Future Canada Logo"
          width={50}
          height={50}
          priority
        />
        <span className="ml-4">10630 124 Street NW, Edmonton, AB T5N 1S3</span>
      </div>
      <div className="text-right">
        <p>+1-780-990-5263</p>
        <p>info@myfuturecanada.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
