// pages/login.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login - My Immigration App</title>
      </Head>
      <Header />
      <main>
        <Login />
      </main>
      <Footer />
    </div>
  );
}
