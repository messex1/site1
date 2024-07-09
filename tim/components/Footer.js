import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2 md:mr-8">
            <p>
              All personal information provided to MyFutureCanada Immigration is secure and collected only for the purpose of assessing your options under Canadian immigration selection criteria. myfuturecanada.com is committed to protecting the privacy of our clients.
            </p>
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="mb-4 flex items-center">
              <PhoneIcon className="mr-2" /> +1-780-990-5263
            </p>
            <p className="mb-4 flex items-center">
              <EmailIcon className="mr-2" /> info@myfuturecanada.com
            </p>
            <p className="mb-4 flex items-center">
              <PlaceIcon className="mr-2" /> 10630 124 Street NW, Edmonton, AB T5N 1S3
            </p>
            <p className="flex items-center">
              <PlaceIcon className="mr-2" /> Kiruddu Salaama Road, Kampala Uganda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
