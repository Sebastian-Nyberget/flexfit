'use client';

import Image from 'next/image';
import { Contact } from "@/features/contact/components/contact";
import GoogleMapComponent from "@/features/contact/components/googlemap";
import { Separator } from '@/components/ui/separator';

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screem bg-white px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Om Oss</h2>
          <p className="text-lg">
            Vi tror på å styrke deg til å nå dine mål på din egen måte. Gjennom innovative 
            løsninger og personlig tilpassede tjenester, er vi her for å støtte deg hele veien. 
            Din styrke – din vei.
          </p>
        </div>
        <div className="flex-1">
          <div className="w-64 h-64 rounded-full overflow-hidden mx-auto md:mx-0">
            <Image 
              src="/about.png" 
              alt="Person working out"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Contact />
      <Separator className='m-10'/>
      <GoogleMapComponent />
    </div>
  );
};

export default AboutUs;
