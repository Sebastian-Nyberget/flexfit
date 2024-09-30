import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-white w-full h-full py-16">
      <div className="w-full flex flex-col items-center justify-center">
        <p className='text-primary'>Priser</p>
        <h1 className="text-black text-4xl font-bold">Medlemskap</h1>
        <div className="pt-4">
          <div className="bg-slate-900 w-96 h-auto flex rounded-xl py-4 px-2">
            <div className='w-1/2 text-center bg-primary rounded-xl py-2'>Månedlig Fakturering</div>
            <div className='w-1/2 text-center py-2 opacity-60'>Årlig Fakturering</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-20 pt-10">
        <div className="max-w-xs bg-slate-900 rounded-xl shadow-lg overflow-hidden">
          <div className="w-full h-80 px-4 py-6">
            <h1 className="text-left text-primary font-semibold text-xl">Basic Package</h1>
            <h1 className='text-4xl font-semibold'>980kr</h1>
            <p className="text-left text-gray-300 mt-2">This is the perfect package for beginners looking to get started.</p>
            <p className="text-left text-white mt-2 font-bold">$19.99/month</p>
          </div>
        </div>

        <div className="max-w-xs bg-primary rounded-xl shadow-lg overflow-hidden">
          <div className="w-full h-80 px-4 py-6">
            <h1 className="text-left text-white font-semibold text-xl">Mid Package</h1>
            <h1 className='text-4xl font-semibold'>980kr</h1>
            <p className="text-left text-gray-300 mt-2">This is the perfect package for beginners looking to get started.</p>
            <p className="text-left text-white mt-2 font-bold">$19.99/month</p>
          </div>
        </div>

        <div className="max-w-xs bg-slate-900 rounded-xl shadow-lg overflow-hidden">
          <div className="w-full h-80 px-4 py-6">
            <h1 className="text-left text-primary font-semibold text-xl">Pro Package</h1>
            <h1 className='text-4xl font-semibold'>980kr</h1>
            <p className="text-left text-gray-300 mt-2">This is the perfect package for beginners looking to get started.</p>
            <p className="text-left text-white mt-2 font-bold">$19.99/month</p>
          </div>
        </div>

        <div className="max-w-xs bg-slate-900 rounded-xl shadow-lg overflow-hidden">
          <div className="w-full h-80 px-4 py-6">
            <h1 className="text-left text-primary font-semibold text-xl">Athlete Package</h1>
            <h1 className='text-4xl font-semibold'>980kr</h1>
            <p className="text-left text-gray-300 mt-2">This is the perfect package for beginners looking to get started.</p>
            <p className="text-left text-white mt-2 font-bold">$19.99/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
