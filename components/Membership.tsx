import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Page = () => {
  return (
    <div className="bg-white dark:bg-slate-900 w-full h-full py-16">
      <div className="w-full flex flex-col items-center justify-center">
        <p className='text-primary'>Priser</p>
        <h1 className="text-black dark:text-white text-4xl font-bold">Medlemskap</h1>

        <Tabs className="flex flex-col justify-center items-center py-5">
          <TabsList className="flex justify-center grid-cols-2 w-[400px] py-6">
            <TabsTrigger value="månedlig">Månedlig Fakturering</TabsTrigger>
            <TabsTrigger value="årlig">Årlig Fakturering</TabsTrigger>
          </TabsList>
          <TabsContent value="månedlig">
            <div className="flex flex-wrap justify-center gap-8 px-20 pt-10">
              <div className="max-w-xs bg-black rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-auto px-4 py-6">
                  <h1 className="text-left text-primary font-semibold text-xl">Basic Package</h1>
                  <h1 className='text-5xl font-semibold mt-4 text-white'>980kr</h1>
                  <p className="text-left text-gray-300 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-primary rounded-lg w-2/3 text-center text-white py-3 hover:bg-blue-500">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-xs bg-primary rounded-xl shadow-lg overflow-hidden relative">
                <div className="bg-white absolute text-black font-bold rotate-45 right-[-50px] top-6 w-48 py-2 flex justify-center">Best Offer</div>
              <div className="w-full h-80 px-4 py-6">  
                <h1 className="text-left text-white font-semibold text-xl">Mid Package</h1>
                <h1 className='text-5xl text-white font-semibold mt-4'>1080kr</h1>
                <p className="text-left text-gray-100 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-black rounded-lg w-2/3 text-center text-white py-3 hover:opacity-80">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-xs bg-black rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-80 px-4 py-6">
                  <h1 className="text-left text-primary font-semibold text-xl">Pro Package</h1>
                  <h1 className='text-5xl text-white font-semibold mt-4'>1900kr</h1>
                  <p className="text-left text-gray-300 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-primary rounded-lg w-2/3 text-center text-white py-3 hover:bg-blue-500">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-xs bg-black rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-80 px-4 py-6">
                  <h1 className="text-left text-primary font-semibold text-xl">Athlete Package</h1>
                  <h1 className='text-5xl text-white font-semibold mt-4'>2100kr</h1>
                  <p className="text-left text-gray-300 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-primary rounded-lg w-2/3 text-center text-white py-3 hover:bg-blue-500">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="årlig">
            <div className="flex flex-wrap justify-center gap-8 px-20 pt-10">
              <div className="max-w-xs bg-black rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-auto px-4 py-6">
                  <h1 className="text-left text-primary font-semibold text-xl">Basic Package</h1>
                  <h1 className='text-5xl font-semibold mt-4 text-white'>4900kr</h1>
                  <p className="text-left text-gray-300 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-primary rounded-lg w-2/3 text-center text-white py-3 hover:bg-blue-500">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-xs bg-primary rounded-xl shadow-lg overflow-hidden relative">
                <div className="bg-white absolute text-black font-bold rotate-45 right-[-50px] top-6 w-48 py-2 flex justify-center">Best Offer</div>
              <div className="w-full h-80 px-4 py-6">  
                <h1 className="text-left text-white font-semibold text-xl">Mid Package</h1>
                <h1 className='text-5xl text-white font-semibold mt-4'>5400kr</h1>
                <p className="text-left text-gray-100 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-black rounded-lg w-2/3 text-center text-white py-3 hover:opacity-80">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-xs bg-black rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-80 px-4 py-6">
                  <h1 className="text-left text-primary font-semibold text-xl">Pro Package</h1>
                  <h1 className='text-5xl text-white font-semibold mt-4'>9500kr</h1>
                  <p className="text-left text-gray-300 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-primary rounded-lg w-2/3 text-center text-white py-3 hover:bg-blue-500">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="max-w-xs bg-black rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-80 px-4 py-6">
                  <h1 className="text-left text-primary font-semibold text-xl">Athlete Package</h1>
                  <h1 className='text-5xl text-white font-semibold mt-4'>10500kr</h1>
                  <p className="text-left text-gray-300 py-2">per måned</p>
                  <ul>
                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til treningsenter</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til gruppetimer</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Tilgang til garderober</p>
                    </li>

                    <li className="flex text-lg py-1 items-center">
                      <IoIosCheckmarkCircle fill="white" />
                      <p className="text-white font-bold ml-2">Én gratis treningsvurdering per år</p>
                    </li>
                    <li className="flex justify-center mt-16">
                      <Link href={"/"} className="bg-primary rounded-lg w-2/3 text-center text-white py-3 hover:bg-blue-500">Registrer Nå</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        {/*<div className="pt-4">
          <div className="bg-black dark:bg-white w-96 h-auto flex rounded-xl py-3 px-2">
            <div className='w-1/2 text-center bg-primary rounded-xl py-2'>Månedlig Fakturering</div>
            <div className='w-1/2 text-center py-2 opacity-60 text-white dark:text-black'>Årlig Fakturering</div>
          </div>
        </div>*/}
      </div>


    </div>
  );
};

export default Page;
