"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>
        All personal information provided to MyFutureCanada Immigration is secure and collected only for the purpose of assessing your options under Canadian immigration selection criteria. myfuturecanada.com is committed to protecting the privacy of our clients.
      </p>
      <div className="mt-4">
        <p className="flex items-center justify-center">
          <PhoneIcon className="mr-2" />
          +1-780-990-5263
        </p>
        <p className="flex items-center justify-center">
          <EmailIcon className="mr-2" />
          info@myfuturecanada.com
        </p>
        <p className="flex items-center justify-center">
          <PlaceIcon className="mr-2" />
          10630 124 Street NW, Edmonton, AB T5N 1S3
        </p>
        <p className="flex items-center justify-center">
          <PlaceIcon className="mr-2" />
          Kiruddu Salaama Road, Kampala Uganda
        </p>
      </div>
    </footer>
  );
};

export default Footer;
