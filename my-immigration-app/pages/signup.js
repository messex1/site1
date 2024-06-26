// pages/signup.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>Sign Up - My Immigration App</title>
      </Head>
      <Header />
      <main>
        <SignUp />
      </main>
      <Footer />
    </div>
  );
}
