"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Founder from "/public/assets/img/about/Bipin Joshi.png";

import { Archivo, Roboto } from "next/font/google";
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FounderMessage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">

        {/* Section Title */}
        <div
          className="section-title flex justify-center mb-40"
          data-aos="fade-up"
        >
          <div>
            <h2>Message from Founder</h2>
            <div className="gradient-divider"></div>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Founder Image */}
          <div
            className="w-full md:w-5/12"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <div className="founder-image h-[400px] w-auto overflow-hidden rounded-2xl">
              <Image
                src={Founder}
                alt="founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Message */}
          <div
            className="w-full md:w-7/12 founder-section"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#4A4A4A] mb-4 font-[400]!">
              At Kubaer Finance, our mission is to help working families and
              migrants in Adelaide build a secure financial future. With over 20
              years of experience in finance, healthcare, and retail, I started
              this journey to guide everyday Australians through life’s biggest
              financial decisions—whether it’s buying their first home, a car,
              or investing in property.
            </p>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#4A4A4A] mb-4 font-[400]!">
              We believe in more than just securing loans—we’re here to provide
              personalised guidance, clear strategies, and ongoing support at
              every stage. Your goals become our goals, and we’re committed to
              helping you achieve them with confidence.
            </p>

            <h4 className="text-xl sm:text-2xl text-[#86489B] font-[700]! leading-tight">
              Bipin Joshi
            </h4>
            <div className="text-[16px]! font-[500]! italic text-[#86489B]">
              Founder
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
