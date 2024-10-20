import Image from 'next/image';

const News = () => {
    return (
        <div className="bg-gray-100 w-full h-full py-36">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-pink-600 text-4xl font-bold">Nyheter</h1>
                <div className="pt-2">
                    <div className="bg-pink-600 w-24 h-1" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 px-20 pt-10">

                <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-80">
                        <Image
                            src="/news.png"
                            layout="fill"
                            objectFit="cover"
                            alt="News 1"
                        />
                    </div>
                    <div className="p-4 bg-pink-500 text-white">
                        <h2 className="text-lg font-semibold mb-2">
                            Ny på FlexFit? Få en rask oversikt over
                        </h2>
                        <p className="text-sm">
                            åpningstider, hvordan du bruker medlemskortet, og hva du
                            trenger å vite om introduksjonstimer og renhold.
                        </p>
                        <button className="mt-4 bg-white text-pink-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
                            Les mer
                        </button>
                    </div>
                </div>

                <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-80">
                        <Image
                            src="/news.png"
                            layout="fill"
                            objectFit="cover"
                            alt="News 2"
                        />
                    </div>
                    <div className="p-4 bg-pink-500 text-white">
                        <h2 className="text-lg font-semibold mb-2">
                            Ny på FlexFit? Få en rask oversikt over
                        </h2>
                        <p className="text-sm">
                            åpningstider, hvordan du bruker medlemskortet, og hva du
                            trenger å vite om introduksjonstimer og renhold.
                        </p>
                        <button className="mt-4 bg-white text-pink-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
                            Les mer
                        </button>
                    </div>
                </div>

                <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-80">
                        <Image
                            src="/news.png"
                            layout="fill"
                            objectFit="cover"
                            alt="News 3"
                        />
                    </div>
                    <div className="p-4 bg-pink-500 text-white">
                        <h2 className="text-lg font-semibold mb-2">
                            Ny på FlexFit? Få en rask oversikt over
                        </h2>
                        <p className="text-sm">
                            åpningstider, hvordan du bruker medlemskortet, og hva du
                            trenger å vite om introduksjonstimer og renhold.
                        </p>
                        <button className="mt-4 bg-white text-pink-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
                            Les mer
                        </button>
                    </div>
                </div>

                <div className="max-w-xs bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative w-full h-80">
                        <Image
                            src="/news.png"
                            layout="fill"
                            objectFit="cover"
                            alt="News 4"
                        />
                    </div>
                    <div className="p-4 bg-pink-500 text-white">
                        <h2 className="text-lg font-semibold mb-2">
                            Ny på FlexFit? Få en rask oversikt over
                        </h2>
                        <p className="text-sm">
                            åpningstider, hvordan du bruker medlemskortet, og hva du
                            trenger å vite om introduksjonstimer og renhold.
                        </p>
                        <button className="mt-4 bg-white text-pink-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
                            Les mer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
