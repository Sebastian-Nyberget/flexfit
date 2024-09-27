import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return ( 
        <div className='relative w-full h-[900px]'>
            <Image
                src="/hero.png"
                alt='image'
                layout='fill'
                className='w-full'
            />
            <div className='absolute inset-0 container flex items-start justify-start mx-auto'>
                <div className='p-4 gap-5 absolute mx-auto bottom-[20%] object-cover'>
                    <Image 
                        src="/flexfitw.svg"
                        width={200}
                        height={200}
                        alt=''
                    />
                    <h1 className='text-6xl pb-5'>Din styrke, <br /> din vei</h1>
                    <div className='bg-white w-40 py-3 text-center border-2 border-secondary rounded-lg hover:bg-gray-300'>
                        <Link href="/" className="text-black">Kom i gang</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;
