"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about_image from "/public/assets/img/about/about_us.webp";
import core_value_image from "/public/assets/img/about/core_values.webp";
import { Target, Eye } from "lucide-react";
import { Archivo, Roboto } from "next/font/google";
import Awards from "../../components/Awards";
import Employee_Section from "../../components/employee";
import Accomplishment_Section from "../../components/accomplishment";
import Sponsorship_Section from "../../components/sponsorship";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


export default function AboutComponent() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);

    // InView hook for statistics section
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div className="bg-white">
            <div className="container mx-auto flex flex-col gap-8 sm:gap-12">
                <div className="flex flex-col md:flex-row gap-[10px] md:gap-[60px] sm:items-center pt-6 sm:pt-15">
                    <div className={`${archivo.className} flex-1 text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[54px] font-[500] leading-snug text-left text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]`}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-once="true">
                        Empowering Your <br />
                        Financial Future
                    </div>

                    <div className="flex-1 text-left flex flex-col gap-[15px]"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        data-aos-once="true">
                        <div className={`text-[14px] sm:text-[16px] !font-[400] !m-0 !leading-[25px] text-justify ${roboto.className}`}>
                            We’re a modern banking and investment partner committed to helping you grow, save, and invest with confidence. We’re a modern banking and investment.
                        </div>
                        <div className=" hover:cursor-pointer">
                            <Link href="/contact" className="extra-btn btn-default">Contact Us</Link>
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="relative w-full h-64 sm:h-96 md:h-[500px] overflow-hidden mb-6 sm:mb-15"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                    data-aos-once="true">
                    <Image
                        src={about_image}
                        alt="About Us Illustration"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Statistics Section with CountUp */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-[30px] text-white"
                style={{ background: 'linear-gradient(to right, #86489B, #F171AC)' }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true">
                <div>
                    <div className="text-3xl md:text-4xl font-bold">
                        {statsInView && <CountUp end={2.3} duration={2} decimals={1} suffix="+" />}
                    </div>
                    <span className="mt-1">Active Customer</span>
                </div>

                <div>
                    <div className="text-3xl md:text-4xl font-bold">
                        {statsInView && <CountUp end={230} duration={2} suffix="B+" />}
                    </div>
                    <span className="mt-1">Capital Managed</span>
                </div>

                <div>
                    <div className="text-3xl md:text-4xl font-bold">
                        {statsInView && <CountUp end={99} duration={2} suffix="%" />}
                    </div>
                    <span className="mt-1">Customer Satisfaction</span>
                </div>

                <div>
                    <div className="text-3xl md:text-4xl font-bold">
                        {statsInView && <CountUp end={79} duration={2} suffix="%" />}
                    </div>
                    <span className="mt-1">Yearly Growth</span>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container">
                <div className="py-6 sm:py-15 flex flex-col gap-8 md:gap-5">
                    {/* Title */}
                    <div className="flex flex-col gap-[15px]"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-once="true">
                        <div>
                            <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">What Drives Us Forward</span>
                        </div>
                        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2">
                            <span className={` font-[400] text-[#533641] ${roboto.className}`}>A passion for financial empowerment, a commitment to innovation, and a dedication to earning your trust — these are the values that fuel our journey every day.</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-5">
                        {/* Image */}
                        <div className="relative w-full md:flex-1 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]">
                            <Image
                                src={about_image}
                                alt="About Us Illustration"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Mission */}
                        <div className="flex-1 flex flex-col justify-center gap-[25px]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            data-aos-once="true">
                            <div className="inline-flex">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="url(#targetGradient)" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#86489B" />
                                            <stop offset="100%" stopColor="#F171AC" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="12" cy="12" r="10" stroke="url(#targetGradient)" strokeWidth="2" fill="none" />
                                    <circle cx="12" cy="12" r="6" stroke="url(#targetGradient)" strokeWidth="2" fill="none" />
                                    <circle cx="12" cy="12" r="2" fill="url(#targetGradient)" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">Our Mission</div>
                                <div className={`text-[#533641] ${roboto.className} !leading-[25px] !font-[400] tracking-[-1%]`}>
                                    To empower individuals and businesses with secure, innovative, and accessible financial solutions — helping them save, invest, and grow with confidence.
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex-1 flex flex-col justify-center gap-[25px]"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            data-aos-once="true">
                            <div className="inline-flex">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="url(#eyeGradient)" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="eyeGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#86489B" />
                                            <stop offset="100%" stopColor="#F171AC" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                                </svg>
                            </div>



                            <div>
                                <div className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">Our Vision</div>
                                <div className={`text-[#533641] ${roboto.className} !leading-[25px] !font-[400] tracking-[-1%]`}>
                                    To be a trusted leader in modern banking and investment services, shaping a financially inclusive future where everyone has the tools to achieve
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="container mx-auto px-4 py-16 text-white bg-[linear-gradient(to_right,_#86489B,_#F171AC)] rounded-[20px] mb-[50px] ">
                <div className="py-6 sm:py-15 flex flex-col gap-12">
                    {/* Core Values Title */}
                    <div className="flex flex-col gap-[15px] justify-center">
                        <div className="text-2xl sm:text-3xl md:text-[33px] text-center font-semibold"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            data-aos-once="true">
                            Our Core Values
                        </div>
                        <div className="flex justify-center">
                            <div className={`text-[#d8d8d8] w-full sm:w-4/5 md:w-3/5 text-center ${roboto.className} leading-[22px] sm:leading-[24px] md:leading-[25px] font-[400] tracking-[-1%]`}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                data-aos-once="true">
                                We’re guided by integrity, innovation, and a client-first approach. Our values shape how we build trust, deliver smart financial solutions, and help you move forward with confidence.
                            </div>
                        </div>
                    </div>

                    {/* Core Values Cards */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-5">
                        {/* Cards Left */}
                        <div className="flex flex-col gap-8 lg:gap-[40px] items-center lg:items-start">
                            {/* Communication */}
                            <div className="flex justify-center items-center w-full"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                                data-aos-once="true">
                                <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-[300px] md:w-[350px] bg-white/25 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-white text-center transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <div className="text-lg sm:text-xl md:text-xl font-semibold text-start">Communication</div>
                                    <div>
                                        <p className="text-white text-start m-0 text-sm sm:text-base md:text-[15px]">We believe in clear, open, and honest communication to build lasting relationships with our clients and team as an opportunity to lead.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Growth */}
                            <div className="flex justify-center items-center w-full"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                data-aos-once="true">
                                <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-[300px] md:w-[350px] bg-white/25 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-white text-center transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <div className="text-lg sm:text-xl md:text-xl font-semibold text-start">Growth</div>
                                    <div>
                                        <p className="text-white text-start m-0 text-sm sm:text-base md:text-[15px]">We’re committed to continuous improvement—helping our clients grow financially while growing as individuals and</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Core Values Image */}
                        <div
                            className="w-full lg:w-auto flex justify-center"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-once="true" >
                            <Image
                                src={core_value_image}
                                alt="About Us Illustration"
                                className="w-auto h-[600px]"
                            />
                            {/* <Image
                            src={core_value_image}
                            alt="Core Values Illustration"
                            className="w-full sm:w-[500px] md:w-[550px] lg:w-auto h-auto max-h-[400px] lg:max-h-[600px]"
                        /> */}
                        </div>

                        {/* Cards Right */}
                        <div className="flex flex-col gap-8 lg:gap-[40px] items-center lg:items-start">
                            {/* Teamwork */}
                            <div className="flex justify-center items-center"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                                data-aos-once="true">
                                <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-[300px] md:w-[350px] bg-white/25 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-white text-center transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <div className="text-lg sm:text-xl md:text-xl font-semibold text-start">Teamwork</div>
                                    <div>
                                        <p className="text-white text-start m-0 text-sm sm:text-base md:text-[15px]">Collaboration is at the core of our success. We work together across all levels to achieve shared goals and deliver exceptional results.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Ownership */}
                            <div className="flex justify-center items-center w-full"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                data-aos-once="true">
                                <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-[300px] md:w-[350px] bg-white/25 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-white text-center transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <div className="text-lg sm:text-xl md:text-xl font-semibold text-start">Ownership</div>
                                    <div>
                                        <p className="text-white text-start m-0 text-sm sm:text-base md:text-[15px]">We take responsibility for our actions, follow through on commitments, and treat every challenge as an opportunity to lead</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Awards */}
            <div className="pb-[60px]">
                <Awards showTitle={false} />
            </div>

            {/* Accomplishment_Section */}
            <div>
                <Accomplishment_Section />
            </div>

            {/* Sponsorship_Section */}
            <div>
                <Sponsorship_Section />
            </div>

            {/* Emplyee Section */}
            <div>
                <Employee_Section />
            </div>

        </div>
    );
}
