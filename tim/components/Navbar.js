import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image
          src="/myfuturecanadalogo.svg"
          alt="My Future Canada Logo"
          width={200}
          height={50}
          className="w-12 h-auto md:w-16"
          priority
        />
      </div>
      <div className="text-center lg:text-right mt-4 lg:mt-0">
      <p classNameflex items-center ="justify-center lg:justify-end"> <PlaceIcon className="mr-2" />
          10630 124 Street NW, Edmonton, AB T5N 1S3
        </p>
        <p classNameflex items-center ="justify-center lg:justify-end">
          <PhoneIcon className="mr-2" />
          +1-780-990-5263
        </p>
        <p className="flex items-center justify-center lg:justify-end">
          <EmailIcon className="mr-2" />
          info@myfuturecanada.com
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
