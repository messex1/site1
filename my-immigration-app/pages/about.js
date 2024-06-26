// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us - My Immigration App</title>
      </Head>
      <Header />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
