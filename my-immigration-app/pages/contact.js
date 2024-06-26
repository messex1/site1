// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - My Immigration App</title>
      </Head>
      <Header />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
