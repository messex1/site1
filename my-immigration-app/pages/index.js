// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Immigration App</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <AboutUs />
        <Services />
        <HowItWorks />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
