"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


// Import your partner images from /public
import Sophos from "/public/assets/img/about/sponsors/image_1.png";
import Fortinet from "/public/assets/img/about/sponsors/image_2.png";
import HPE from "/public/assets/img/about/sponsors/image_3.png";
import Microsoft from "/public/assets/img/about/sponsors/image_1.png";
import DellEMC from "/public/assets/img/about/sponsors/image_2.png";
import QNAP from "/public/assets/img/about/sponsors/image_3.png";
import Ruckus from "/public/assets/img/about/sponsors/image_1.png";

// Partner data
const partnerData = [
  { src: Sophos, alt: "Sophos", link: "" },
  { src: Fortinet, alt: "Fortinet", link: "" },
  { src: HPE, alt: "HPE", link: "" },
  { src: Microsoft, alt: "Microsoft", link: "" },
  { src: DellEMC, alt: "Dell EMC", link: "" },
  { src: QNAP, alt: "QNAP", link: "" },
  { src: Ruckus, alt: "Ruckus", link: "" },
];

export default function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container mx-auto flex flex-col gap-[50px]">
        {/* Title & Sub-title */}
        <div className="flex flex-col gap-[15px]"
          data-aos="fade-up"
          data-aos-duration="1000">
          {/* Title */}
          <div className="text-center">
            <span className="text-[32px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
              Sposorships
            </span>
          </div>
          {/* Subb-Title */}
          <div className="flex justify-center">
            <div className={`text-[#533641] w-[60%] text-center ${roboto.className} leading-[25px] font-[400] tracking-[-1%]`}>
              Celebrating our journey of excellence, innovation, and impact through
              remarkable achievements and milestones.
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div
          className="flex flex-wrap justify-center items-center gap-8"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {partnerData.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center items-center"
            >
              <div className="relative w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[100px] flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain transition-transform duration-300"
                  sizes="(max-width: 768px) 160px, 220px"
                />
              </div>

            </a>
          ))}
        </div>


      </div>

      {/* Optional subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-transparent to-white opacity-50 -z-10"></div>
    </section>
  );
}
