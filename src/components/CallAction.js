"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export default function CallAction() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <section className="w-full relative py-[60px] px-4 overflow-hidden">
            {/* Blurred Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[6px] scale-105"
                style={{
                    backgroundImage: "url('/assets/img/hero-image.jpg')",
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>

            {/* Content */}
            <div className="container relative z-10 mx-auto text-center flex flex-col items-center justify-center gap-[15px] max-w-full sm:max-w-3xl sm:px-[188px]!">
                {/* Heading */}
                <h2
                    className={`text-2xl sm:text-3xl text-center !font-semibold !leading-[40px] text-white ${archivo.className}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    Ready to Buy Your Property?
                </h2>

                {/* Description */}
                <div
                    className={`text-[#E8E8E8] text-[15px] sm:text-[16px] leading-relaxed m-0 px-2 font-[400] ${roboto.className}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    Whether you are purchasing your first home or upgrading to your dream
                    property, we are here to guide you at every step. Enjoy a smooth and
                    transparent loan experience tailored to your goals.
                </div>

                {/* Call to Action Button */}
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                    <Link href="/contact">
                        <button
                            className={`px-8 py-2 !rounded-[10px] text-white font-medium text-lg bg-[#F171AC] hover:bg-[#86489B] transition-all duration-500 ease-in-out transform hover:scale-105 shadow-[0_10px_25px_rgba(241,114,172,0.3)] ${archivo.className}`}
                        >
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
