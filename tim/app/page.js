import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative w-full flex justify-center items-center">
          <div className="w-2/3 md:w-1/2 lg:w-1/3">
            <Image
              src="/myfuturecanadalogo.svg"
              alt="My Future Canada Logo"
              width={100}
              height={50}
              className="object-contain w-full"
              priority
            />
          </div>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link href="/rcic-login" legacyBehavior>
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">
                RCIC Login{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Login to your account details.
              </p>
            </a>
          </Link>
          <Link href="/rcic-signup" legacyBehavior>
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">
                RCIC Sign-Up{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Sign Up to begin the RCIC application process!.
              </p>
            </a>
          </Link>
          <Link href="/client-login" legacyBehavior>
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">
                Client Login{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Log in to your client account to view your application status.
              </p>
            </a>
          </Link>
          <Link href="/client-signup" legacyBehavior>
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className="mb-3 text-2xl font-semibold">
                Client Sign-Up{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Sign Up to begin the application process!.
              </p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
