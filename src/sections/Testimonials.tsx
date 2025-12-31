import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const testimonialIndex = 0;
  return <section className="section">
    <h2 className="text-4xl font-bold md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
      <span className="whitespace-nowrap">Words from those I’ve had the pleasure to work with</span>
      <span className="whitespace-nowrap self-end text-red-orange-500">Words from those I’ve had the pleasure to work with</span>
    </h2>
    <div className="container">
      <div className="mt-20">
        {testimonials.map(({ name, company, role, quote, image, imagePositionY }, index) => index === testimonialIndex && (
            <div key={name} className="grid md:grid-cols-5 md:gap-8 lg:gap-20 md:items-center">
              <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                <Image src={image} alt={name} className="size-full object-cover" style={{
                  objectPosition: `50% ${imagePositionY * 100}%`
                }}/>
              </div>
              <blockquote className="md:col-span-3">
                <div className="text-3xl md:text-5xl lg:text-6xl mt-8">
                <span>&ldquo;</span>
                <span className="">
                  {quote}
                </span>
                
                <span>&rdquo;</span>
                </div>
                <cite className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl">
                  {name}, {role}, at {company}
                </cite>
              </blockquote>
            </div>

        ))}
      </div>
      <div className="flex gap-4 mt-6 lg:mt-10">
        <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>
        </button>
        <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
        </button>
      </div>
    </div>
  </section>;
};

export default Testimonials;
