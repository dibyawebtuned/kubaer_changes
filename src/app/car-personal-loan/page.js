"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import ImageExample from "/public/assets/img/services/image-removebg-preview (42).png";
import { TrendingUp, DollarSign, Activity, CreditCard, CheckCircle, ClipboardList, FileCheck, Landmark, Handshake, Home, RefreshCcw, Settings } from "lucide-react";
import {
  Building,
  Banknote,
  LineChart,
  PiggyBank
} from "lucide-react";
import { Archivo, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialsSlider from "@/components/Testimonials";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

const loanOptions = [
  {
    title: "Secured Car Loans",
    description:
      "The most common type, where the car itself acts as security for the loan. This typically results in lower interest rates due to reduced risk for the lender. Ideal for new or relatively new vehicles.",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Unsecured Personal Loans",
    description:
      "If you prefer not to use the car as security, an unsecured loan might be an option. These generally have higher interest rates but offer more flexibility as they're not tied to the vehicle's value. Suitable for older vehicles or unique circumstances.",
    icon: <DollarSign size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Dealer Finance vs. Broker Sourced Loans",
    description:
      "While car dealerships offer finance, we can often secure more competitive rates and terms by comparingoptions from multiple lenders, saving you money in the long run.",
    icon: <Activity size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Balloon Payments",
    description:
      "Some loans allow for a balloon payment at the end of the term, reducing your regular repayments. This can be a good option if you plan to sell or trade in the car at the end of the loan, or if you anticipate having a lump sum available.",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },

  // {
  //   title: "Family Equity Investment Loans",
  //   description:
  //     "Leverage a family member’s equity to help you start your investment journey sooner",
  //   icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  // },
];


// Steps Content
const steps = [
  {
    icon: <ClipboardList size={26} />,
    title: "Tell Us Your Dream Car",
    desc: "Complete a quick consultation about your preferences and budget.",
  },
  {
    icon: <FileCheck size={26} />,
    title: "We Hunt Down Your Matches",
    desc: "Our experts scour dealerships, auctions, and private sellers Australia-wide.",
  },
  {
    icon: <Landmark size={26} />,
    title: "Inspection & Negotiation",
    desc: " We vet and negotiate the best deal, so you don’t have to.",
  },
  {
    icon: <CheckCircle size={26} />,
    title: "You Choose & Finance",
    desc: "Review your options, select your car, and we’ll helparrange finance that fits you perfectly.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Drive Away Happy",
    desc: "We coordinate delivery or pickup, making your car-buying journey truly effortless.",
  },
  // {
  //   icon: <Home size={26} />,
  //   title: "Ongoing Investment Support",
  //   desc: "We review your loan annually and assist with future purchases, refinancing, orportfolio expansion.",
  // },
  // {
  //   icon: <RefreshCcw size={26} />,
  //   title: "Ongoing Support",
  //   desc: "Even after settlement, we’re here for reviews, questions, or changing financial needs.",
  // },
];




// Clients Feedback
const InvestmentLoanTestimonials = [
  {
    content: "Kubaer Finance helped us structure our first investment loan perfectly. We’ve already added a second property to our portfolio",
    author: "Suresh & Reena, Campbelltown",
  },
  {
    content: "They explained interest-only loans and tax strategies in a way I could understand. I’ve recommended them to friends already.",
    author: "Michael T., Seaton",
  },
  {
    content: "The team found an investor-friendly lender and made sure my equity was used wisely. The whole process was smooth",
    author: "Ayesha K., Northfield",
  },
];


export default function CarPersonalLoanPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Content Starts */}
      <main className="flex-grow">
        {/* Top */}
        <div className="text-white bg-gradient-to-r from-[#86489B] to-[#F171AC]">
          <div className="container mx-auto px-4 py-[60px]">
            {/* 1. Introduction */}
            <section className="flex flex-col md:flex-row gap-[30px] items-center py-[50px]">
              {/* Left: Text Content */}
              <div
                className="flex-1 flex flex-col gap-[20px]"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                {/*  */}
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100/90 text-[#86489B] font-[500] text-sm">
                    <Settings size={16} className="text-[#86489B]" />
                    Car & Personal Loan
                  </span>
                </div>

                {/* title */}
                <div className={`text-3xl md:text-4xl font-[500] ${archivo.className}`}>
                  Car & Personal Loan in Australia
                </div>

                {/* Description */}
                <div
                  className={`text-[#d8d8d8] text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}
                >
                  Hit the road with confidence! Whether it is a sleek new sedan, a robust SUV for family adventures, or a trusty used car, Kubaer Finance offers flexible car loan solutions designed to get you behind the wheel. We understand that a
                  car is often more than just transport it is freedom, convenience, and sometimes, a passion.
                </div>

                {/* Call Button */}
                <div>
                  <a
                    href="tel:1300Kubaer"
                    className="bg-purple-100 text-[#86489B] hover:!bg-[#F172AC] hover:!text-white py-[12px] px-[20px] rounded-[10px] transition duration-300 text-center w-max"
                  >
                    1300 Kubaer
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div
                className="flex-1 flex items-center justify-center w-full mt-8 md:mt-0"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Image
                  src={ImageExample}
                  alt="Example Image"
                  className="object-cover rounded-lg w-full max-w-[500px] md:max-w-full transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </section>
          </div>
        </div>

        {/* 2. Types of First Home Buyer Loans & Government Support */}
        <div className="container mx-auto px-4">
          <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
            <h2 className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
              Types of Investment Property Loans <br />
            </h2>

            <div className="flex flex-col gap-8">
              {/* First row with first two items */}
              <div className="flex flex-col sm:flex-row gap-6">
                {loanOptions.slice(0, 2).map((loan, index) => (
                  <div
                    key={index}
                    className="flex gap-4 flex-1 p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transform transition-transform transition-shadow duration-1000 ease-in-out hover:-translate-y-2 items-start border-l-4 border-[#F172AC]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 200}
                    data-aos-once="true"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 text-[#F171AC]">{loan.icon}</div>

                    {/* Text */}
                    <div className="flex flex-col">
                      <div
                        className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}
                      >
                        {loan.title}
                      </div>
                      <div className={`text-[14px] md:text-[15px] text-gray-700 font-[400] ${roboto.className} leading-relaxed`}>
                        {loan.description}
                      </div>
                    </div>
                  </div>

                ))}
              </div>

              {/* Remaining items */}
              <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
                {loanOptions.slice(2).map((loan, index) => (
                  <div
                    key={index}
                    className="flex gap-4 flex-1 p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transition-all duration-300 items-start border-l-4 border-[#F172AC]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 300}
                    data-aos-once="true"
                  >
                    <div className="flex-shrink-0 text-[#F171AC]">{loan.icon}</div>
                    <div className="flex flex-col">
                      <div
                        className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}
                      >
                        {loan.title}
                      </div>
                      <div className={`text-[14px] md:text-[15px] text-gray-700 font-[400] ${roboto.className} leading-relaxed`}>
                        {loan.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 3. Lenders */}
        {/* <div className="bg-[#fdf2f9]">
          <div className="container mx-auto px-4">
            <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
              <h2
                className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Lenders We Deal With
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "Major Banks", icon: Landmark },
                  { name: "Second-Tier", icon: Building },
                  { name: "Non-Bank", icon: Banknote },
                  { name: "Investors", icon: LineChart },
                  { name: "Credit Unions", icon: PiggyBank },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative rounded-[10px] transition-all duration-500 ease-in-out"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={200 + index * 200}
                      data-aos-once="true"
                    >
                      <div className="relative flex items-center justify-center gap-3 px-4 py-3 rounded-[10px] bg-white border-2 border-transparent drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)] transition-all duration-500 ease-in-out hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)] hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box] hover:cursor-pointer">

                        <IconComponent size={32} className="text-[#F171AC] relative z-10" />

                        <div
                          className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500] relative z-10`}
                        >
                          {item.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div> */}



        {/* 4. Home Loan Journey */}
        <div className="container mx-auto px-4">
          <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
            {/* Heading */}
            <h2
              className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              Journey with Us
            </h2>

            <div className="relative flex flex-col items-center mt-12">
              {/* Gradient vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-[#86489B] to-[#F171AC] opacity-30 rounded-full"></div>

              {steps.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center w-full mb-10 md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
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
                    className={`bg-white shadow-lg rounded-2xl p-6 mt-12 md:mt-0 w-full md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"} hover:shadow-pink-100 transition-all duration-500`}
                  >
                    <div className="font-[500] text-[18px] md:text-[20px] text-[#86489B] mb-2">
                      {index + 1}. {item.title}
                    </div>
                    <div className={`text-[#6B6B6B] text-[14px] md:text-[15px] font-[400] leading-relaxed ${roboto.className}`}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>




        {/* 5. Client Testimonials */}
        <div className="bg-[#fdf2f9] py-16">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className={`text-[32px] text-center font-semibold mb-10 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]`}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true">
              Client Testimonials
            </div>

            {/* Swiper Carousel */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true">
              <TestimonialsSlider showTitle={false} testimonials={InvestmentLoanTestimonials} />
            </div>
          </div>
        </div>

        {/* 6. Call to Action */}
        {/* <div className="container mx-auto px-4 py-12">
          <section className="text-center">
            <div className={`text-[32px] text-center font-semibold mb-4 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}>
              Ready to Optimise Your Loan?
            </div>
            <p className="text-gray-700 mb-6">
              Speak to our experts today and find out how much you could save by refinancing your home loan.
            </p>
            <a
              href="/contact"
              className="btn-default px-6 py-3 rounded-md text-white bg-purple-700 hover:bg-purple-800 transition duration-300"
            >
              Book Your Discovery Call
            </a>
          </section>
        </div> */}
      </main>
      {/* Content Ends */}

      <Footer />
    </div>
  );
}
