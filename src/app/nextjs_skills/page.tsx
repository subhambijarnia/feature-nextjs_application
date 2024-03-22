"use client"
import Image from 'next/image';
import RandomImage from '../_components/RandomImage';


const NextjsSkills: React.FC = () => {

  return (
    <div className="container bg-white w-screen">
      <h2 className="text-center text-3xl font-bold text-sky-600 pb-[2rem]">Hi this is Next.js Skills test page</h2>

      <div className="flex justify-center w-screen relative">
        <Image
          src={`https://cdn.pixabay.com/photo/2024/01/29/20/04/mountains-8540738_1280.jpg`}
          alt={`test img`}
          width={0}
          height={0}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 60vw"
          style={{ width: '100%', height: 'auto', margin: 'auto' }}
        />
      </div>

      <RandomImage />
    </div>
  );
};

export default NextjsSkills;






