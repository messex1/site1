// pages/services.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div>
      <Head>
        <title>Our Services - My Immigration App</title>
      </Head>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
