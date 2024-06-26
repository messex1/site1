// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
