import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero_image.png";
import Image from "next/image";
import Button from "@/components/buttons";

const Hero: FC = () => {
  return <section>
    <div className="grid md:grid-cols-12 md:h-screen items-stretch">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
      <h1 className="text-5xl  md:text-6xl font-bold leading-tight mt-40 md:mt-0 lg:text-7xl">
        Building modern, responsive digital experiences that blend creativity, performance, and purpose.
      </h1>
      <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
      <Button variant="secondary" iconAfter={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 12L12 17.5M12 17.5L6.5 12M12 17.5L12 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>}>
        <span>Check Out My Work</span>
        
      </Button>


        <Button variant="tertiary">
        Let&apos; Talk
        </Button>
      </div>
    </div>

      </div>
      <div className="md:col-span-5">
        <div className="mt-20 md:mt-0 h-full">
      <Image src={heroImage} alt="Hero Image" className="size-full object-cover"/>
    </div>

      </div>
    

    
    </div>
  </section>;
};

export default Hero;
