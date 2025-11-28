"use client";
import React from "react";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProcessFlow = ({ steps }) => {
    return (
        <div className="sm:container sm:mx-auto px-4">
            <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
                {/* Heading */}
                <h2
                    className={`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    Your Journey with Us
                </h2>

                <div className="relative flex flex-col items-center mt-12">
                    {/* Gradient vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-[#86489B] to-[#F171AC] opacity-30 rounded-full"></div>

                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center w-full mb-10 md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay={100 + index * 100}
                            data-aos-once="true"
                        >
                            {/* Connector dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#86489B] to-[#F171AC] rounded-full shadow-md text-white">
                                {item.icon}
                            </div>

                            {/* Card */}
                            <div
                                className={`bg-white shadow-lg rounded-2xl p-6 mt-12 md:mt-0 w-full md:w-[45%] ${index % 2 === 0
                                    ? "md:mr-auto md:text-right"
                                    : "md:ml-auto md:text-left"
                                    } hover:shadow-pink-100 transition-all duration-500`}
                            >
                                <div className="font-[500] text-[18px] md:text-[20px] text-[#86489B] mb-2">
                                    {index + 1}. {item.title}
                                </div>
                                <div
                                    className={`text-[#6B6B6B] text-[14px] md:text-[15px] font-[400] leading-relaxed ${roboto.className}`}
                                >
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProcessFlow;
