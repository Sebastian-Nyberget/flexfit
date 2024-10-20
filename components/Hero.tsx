import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='relative w-full h-[100vh]'>
            <Image
                src="/hero.png"
                alt='Hero background image'
                layout='fill'
                objectFit='cover'
                quality={100}
                className='w-full h-full'
                priority
            />
            <div className='absolute inset-0 container flex items-start justify-start mx-auto'>
                <div className='p-4 gap-5 absolute mx-auto bottom-[20%] sm:left-[5%] left-[10%]'>
                    <Image 
                        src="/flexfitw.svg"
                        width={200}
                        height={200}
                        alt='Flexfit logo'
                        quality={100}
                    />
                    <h1 className='text-4xl sm:text-6xl pb-5 text-white dark:text-black'>
                        Din styrke, <br /> din vei
                    </h1>
                    <div className='bg-white w-40 py-3 text-center border-2 border-tertiary rounded-lg hover:bg-gray-300'>
                        <Link href="/" className="text-black">
                            Kom i gang
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
