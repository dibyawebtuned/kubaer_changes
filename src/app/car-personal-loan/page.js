"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import ImageExample from "/public/assets/img/services/image-removebg-preview (42).png";
import {
  TrendingUp,
  Search,
  ShieldCheck,
  Shield,
  Layers,
  DollarSign, Activity, CreditCard, CheckCircle, ClipboardList, FileCheck, Landmark, Handshake, Home, RefreshCcw, Settings, Car, Scale, Repeat
} from "lucide-react";
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

import banner_image from "/public/assets/img/banner.jpg";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

const loanOptions = [
  {
    title: "Secured Car Loans",
    description:
      "The most common type, where the car itself acts as security for the loan. This typically results in lower interest rates due to reduced risk for the lender. Ideal for new or relatively new vehicles.",
    icon: <Car size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Unsecured Personal Loans (for Cars)",
    description:
      "If you prefer not to use the car as security, an unsecured loan might be an option. These generally have higher interest rates but offer more flexibility as they're not tied to the vehicle's value. Suitable for older vehicles or unique circumstances.",
    icon: <CreditCard size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Dealer Finance vs. Broker Sourced Loans",
    description:
      "While car dealerships offer finance, we can often secure more competitive rates and terms by comparing options from multiple lenders, saving you money in the long run.",
    icon: <Scale size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Balloon Payments",
    description:
      "Some loans allow for a 'balloon payment' at the end of the term, reducing your regular repayments. This can be a good option if you plan to sell or trade in the car at the end of the loan, or if you anticipate having a lump sum available.",
    icon: <Repeat size={32} className="text-[#f171ac]" />,
  },

  // {
  //   title: "Family Equity Investment Loans",
  //   description:
  //     "Leverage a family member’s equity to help you start your investment journey sooner",
  //   icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  // },
];


const loanTypes = [
  {
    id: 1,
    title: "Unsecured Personal Loans",
    description:
      "These loans don't require any assets as security. They offer great flexibility for a range of purposes but may have slightly higher interest rates than secured loans.",
    icon: <CreditCard size={32} className="text-[#f171ac]" />,
  },

  {
    id: 2,
    title: "Secured Personal Loans",
    description: "You might use an asset (like a car or boat) as security, potentially leading to lower interest rates.",
    icon: <Shield size={32} className="text-[#f171ac]" />,
  },
  {
    id: 3,
    title: "Debt Consolidation Loans",
    description: "Combine multiple smaller debts (credit cards, store finance) into one manageable personal loan with a single repayment, often at a lower interest rate, simplifying your finances and reducing stress.",
    icon: <Layers size={32} className="text-[#f171ac]" />,
  },
  {
    id: 4,
    title: "Fixed vs. Variable Rate Personal Loans",
    description: "Choose between consistent repayments (fixed) or the potential for lower rates if market rates fall (variable).",
    icon: <Activity size={32} className="text-[#f171ac]" />,
  },
];

// Steps Content
const steps = [
  {
    icon: <ClipboardList size={26} />,
    title: "Tell Us Your Dream Car",
    desc: "Complete a quick consultation about your preferences and budget.",
  },
  {
    icon: <Search size={26} />,
    title: "We Hunt Down Your Matches",
    desc: "Our experts scour dealerships, auctions, and private sellers Australia-wide.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Inspection & Negotiation",
    desc: " We vet and negotiate the best deal, so you don’t have to.",
  },
  {
    icon: <CreditCard size={26} />,
    title: "You Choose & Finance",
    desc: "Review your options, select your car, and we’ll helparrange finance that fits you perfectly.",
  },
  {
    icon: <Car size={26} />,
    title: "Drive Away Happy",
    desc: "We coordinate delivery or pickup, making your car-buying journey truly effortless.",
  },
];




// Clients Feedback
// const InvestmentLoanTestimonials = [
//   {
//     content: "Kubaer Finance helped us structure our first investment loan perfectly. We’ve already added a second property to our portfolio",
//     author: "Suresh & Reena, Campbelltown",
//   },
//   {
//     content: "They explained interest-only loans and tax strategies in a way I could understand. I’ve recommended them to friends already.",
//     author: "Michael T., Seaton",
//   },
//   {
//     content: "The team found an investor-friendly lender and made sure my equity was used wisely. The whole process was smooth",
//     author: "Ayesha K., Northfield",
//   },
// ];


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
                  Hit the road with confidence! Whether it is a sleek new sedan, a robust SUV for family
                  adventures, or a trusty used car, Kubaer Finance offers flexible car loan solutions designed to get
                  you behind the wheel. We understand that a car is often more than just transport, it’s freedom,
                  convenience, and sometimes, a passion.
                </div>

                {/* Call Button */}
                <div>
                  <a
                    href="tel:1300KUBAER"
                    className="bg-purple-100 text-[#86489B] hover:!bg-[#F172AC] hover:!text-white py-[12px] px-[20px] rounded-[10px] transition duration-300 text-center w-max"
                  >
                    1300KUBAER
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
              Types of Car Loans <br />
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

        {/* 5. More Than Just Car Sourcing — It’s Your Path to Smarter Buying */}
        <div
          className="
    container mx-auto
    px-4 sm:px-6 md:px-8
    py-4 sm:py-5 md:py-6
    bg-gradient-to-r from-[#86489B] to-[#F171AC]
    rounded-[20px]
    flex flex-col items-center justify-center
    gap-[10px] sm:gap-[12px] md:gap-[14px]
    text-center
  "
        >
          <h5
            className={`
      !text-white !font-semibold
      text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
      leading-snug sm:leading-normal
      ${archivo.className}
    `}
          >
            More Than Just Car Sourcing — It’s Your Path to Smarter Buying
          </h5>

          <span
            className={`
      !text-gray-200
      text-[14px] sm:text-[14px] md:text-[15px]
      font-[400]
      leading-relaxed
      max-w-full sm:max-w-[90%] md:max-w-[80%]
      ${roboto.className}
    `}
          >
            Kubaer Finance is with you every step of the way, turning a complex, overwhelming process into
            a smooth, enjoyable experience. Ready to get behind the wheel without the usual hassle? Let’s get
            started today.
          </span>
        </div>


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


        {/* 6. Why Choose Us for Your Car Loan? */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-5 bg-gradient-to-r from-[#86489B] to-[#F171AC] rounded-[20px]">
          <div className="flex flex-col lg:flex-row gap-[20px] items-center">

            <div className="flex-1 flex flex-col gap-[20px]">
              <h2
                className={`text-[20px] sm:text-[22px] md:text-[24px] !font-semibold !leading-[30px] sm:!leading-[34px] md:!leading-[40px] text-white ${archivo.className}`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Why Choose Us for <br /> Your Car Loan? <br />
              </h2>

              <p
                className={`!text-[#d8d8d8] !text-[14px] sm:!text-[15px] md:!text-[16px] !font-normal ${roboto.className} !leading-[22px] sm:!leading-[25px] md:!leading-[28px] !tracking-[-1%] !m-0`}
              >
                We focus on finding a car loan that matches your budget and lifestyle, not just getting you
                approved. Our process is quick and transparent, getting you pre-approved so you can shop for
                your car with confidence, knowing your finance is sorted.
              </p>

              <div className="flex flex-col sm:flex-row gap-[12px]">
                <div className="flex-1">
                  <ul className="m-0 p-0 list-none flex flex-col gap-[5px]">
                    <li className="flex items-center gap-[10px]">
                      <CheckCircle size={20} className="text-gray-200" />
                      <span
                        className={`text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] font-normal ${roboto.className} leading-[22px] sm:leading-[25px] md:leading-[28px] tracking-[-1%]`}
                      >
                        Quick Approval
                      </span>
                    </li>
                    <li className="flex items-center gap-[10px]">
                      <CheckCircle size={20} className="text-gray-200" />
                      <span
                        className={`text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] font-normal ${roboto.className} leading-[22px] sm:leading-[25px] md:leading-[28px] tracking-[-1%]`}
                      >
                        Transparent Terms
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex-1">
                  <ul className="m-0 p-0 list-none flex flex-col gap-[5px]">
                    <li className="flex items-center gap-[10px]">
                      <CheckCircle size={20} className="text-gray-200" />
                      <span
                        className={`text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] font-normal ${roboto.className} leading-[22px] sm:leading-[25px] md:leading-[28px] tracking-[-1%]`}
                      >
                        Life Style Matched
                      </span>
                    </li>
                    {/* <li className="flex items-center gap-[10px]">
                      <CheckCircle size={20} className="text-gray-200" />
                      <span
                        className={`text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] font-normal ${roboto.className} leading-[22px] sm:leading-[25px] md:leading-[28px] tracking-[-1%]`}
                      >
                        Life Style Matched
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full max-h-[280px] sm:max-h-[350px] md:max-h-[450px] rounded-[20px] overflow-hidden">
              <Image src={banner_image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>



        {/* 7. Personal Loans: Finance Your Next Life Event */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 lg:py-16 flex flex-col gap-[40px] sm:gap-[50px] my-15 lg:my-0">

          <div className="flex flex-col items-center">
            <h2
              className={`text-[20px] sm:text-[22px] md:text-[24px] text-center !font-semibold mb-4 !leading-[30px] sm:!leading-[34px] md:!leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              Personal Loans: Finance Your Next <br />Life Event
            </h2>

            <span
              className={`text-[#6b6b6b] !text-center text-[14px] sm:text-[15px] md:text-[16px] font-normal ${roboto.className} leading-[22px] sm:leading-[25px] md:leading-[28px] tracking-[-1%]`}
            >
              Life is full of moments that require financial flexibility – <br />
              a dream wedding, a well-deserved overseas trip, consolidating debts, or unexpected expenses. <br />
              Kubaer Finance provides personal loan options that are clear, manageable, and tailored <br />
              to your specific needs, helping you achieve your goals without financial strain.
            </span>
          </div>

          {/* Types of Personal Loans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px]">
            {loanTypes.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center text-center rounded-[15px] gap-4 flex-1 p-4 sm:p-5 lg:p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transform transition-transform transition-shadow duration-1000 ease-in-out hover:-translate-y-2 border-b-4 border-[#F172AC]"
              >
                <div>{item.icon}</div>

                <div className="flex flex-col">
                  <span
                    className={`text-[16px] sm:text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`text-[13px] sm:text-[14px] md:text-[15px] text-gray-700 font-[400] ${roboto.className} leading-relaxed`}
                  >
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* 8. Your Benefits with a Kubaer Personal Loan */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 lg:py-16 flex flex-col lg:flex-row gap-[20px] bg-linear-to-r from-[#86489B] to-[#F171AC] rounded-[20px] my-15 lg:my-0">
          <div className="flex-1 flex flex-col">
            <h2
              className={`pt-12 sm:pt-0 text-[20px] sm:text-[22px] md:text-[24px] !font-semibold mb-4 !leading-[30px] sm:!leading-[34px] md:!leading-[40px] !text-white ${archivo.className}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              Your Benefits with a <br />Kubaer Personal Loan
            </h2>

            <span
              className={`text-gray-200 !text-center lg:!text-left text-[14px] sm:text-[15px] md:text-[16px] font-normal ${roboto.className} leading-[22px] sm:leading-[25px] md:leading-[28px] tracking-[-1%]`}
            >
              We focus on responsible lending, ensuring the repayment structure is comfortable for your
              budget. Our streamlined application process means faster access to funds, so you can focus on
              what matters most.
            </span>

            <div className="flex flex-col gap-[15px] mt-4">
              <div className="flex items-center gap-[15px]">
                <div className="bg-[#F171AC]/40 w-10 h-10 flex items-center justify-center rounded-full">
                  <CheckCircle size={20} className="text-gray-200" />
                </div>

                <div className="flex flex-col">
                  <span className={`text-gray-200 font-medium text-[16px] sm:text-[18px] ${roboto.className}`}>
                    Responsible Lending
                  </span>
                  <span className={`text-gray-200 font-normal text-[13px] sm:text-[14px] ${roboto.className}`}>
                    Tailored to your budget
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[15px]">
                <div className="bg-[#F171AC]/40 w-10 h-10 flex items-center justify-center rounded-full">
                  <CheckCircle size={20} className="text-gray-200" />
                </div>

                <div className="flex flex-col">
                  <span className={`text-gray-200 font-medium text-[16px] sm:text-[18px] ${roboto.className}`}>
                    Streamlined Application
                  </span>
                  <span className={`text-gray-200 font-normal text-[13px] sm:text-[14px] ${roboto.className}`}>
                    Faster access to funds
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[20px] px-4 py-4 border border-pink-700 bg-pink-950/10 rounded-[20px] !mb-12 !sm:mb-0">
            <div>
              <h4 className={`text-white font-bold text-[18px] sm:text-[20px] ${roboto.className}`}>
                Choose Your Rate Style
              </h4>
            </div>

            <div className="flex flex-col gap-[15px]">
              <div className="bg-[#F171AC]/30 border border-white/40 rounded-[15px] flex flex-col p-3">
                <h6 className={`text-white font-medium text-[18px] sm:!text-[20px] ${roboto.className}`}>
                  Fixed Rates
                </h6>
                <span className={`text-gray-200 font-normal text-[13px] sm:text-[14px] ${roboto.className}`}>
                  Consistent repayments you can plan for.
                </span>
              </div>

              <div className="bg-[#F171AC]/30 border border-white/40 rounded-[15px] flex flex-col p-3">
                <h6 className={`text-white font-medium text-[18px] sm:!text-[20px] ${roboto.className}`}>
                  Variable Rates
                </h6>
                <span className={`text-gray-200 font-normal text-[13px] sm:text-[14px] ${roboto.className}`}>
                  Potential for lower rates if market rates fall.
                </span>
              </div>
            </div>
          </div>
        </div>



        {/* 5. Client Testimonials */}
        <div className="bg-[#fdf2f9] py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            {/* <div className={`text-[32px] text-center font-semibold mb-10 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]`}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true">
              Client Testimonials
            </div> */}

            {/* Swiper Carousel */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true">
              <TestimonialsSlider
                title="What Our Clients Say"
                testimonials={[
                  {
                    name: "Annie B",
                    designation: "Our Happy Customer",
                    content: "Bipin helped me through the whole process while buying my home. It was an overwhelming process and journey which he made simple and easy in every step. He took care of all other third parties and liaised with them which took pressure off me and my busy schedule. I highly recommend Bipin for any financial services.",
                  },
                  {
                    name: "Subash Mishra",
                    designation: "Our Happy Customer",
                    content:
                      "Bipin and the Kubaer Finance team guided us through our first home purchase. As first-time buyers, we were unsure of the process, but Bipin made it smooth and stress-free. His advice was clear, timely, and professional throughout. Highly recommend their service. We are very happy with the support.",
                  },
                  {
                    name: "Monika Moktan",
                    designation: "Our Happy Customer",
                    content:
                      "Mr. Bipin is professional, listens and understands his client well. He provided me the valuable information that assisted me in making my home buying journey easier. Easily approachable and always responsive. I highly recommend my mortgage broker Mr. Bipin.",
                  },
                  {
                    name: "Adrian Hainz",
                    designation: "Our Happy Customer",
                    content:
                      "Bipin has assisted us now several times. He is professional, up-front, and honest. He explains everything step by step, explains the best options, and made us feel at ease during the loan process. Our family looks forward to Bipin further assisting us in the future with our financial wellbeing.",
                  },
                ]}
              />
            </div>
          </div>
        </div>

      </main>
      {/* Content Ends */}

      <Footer />
    </div>
  );
}
