"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import ImageExample from "/public/assets/img/services/five.png";
import { TrendingUp, DollarSign, Activity, CreditCard, CheckCircle, ClipboardList, FileCheck, Landmark, Handshake, Home, RefreshCcw, Settings, Circle, HardDrive, FileText } from "lucide-react";
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
    title: "Unsecured Business Loans",
    description:
      "No collateral needed. Approvals in as little as 24–48 hours.",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Secured Loans",
    description:
      "Lower rates using property or business assets as security.",
    icon: <DollarSign size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Line of Credit",
    description:
      "Flexible funds on standby. Draw what you need, when you need it.",
    icon: <Activity size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Equipment Finance",
    description:
      "Purchase or lease vehicles, tools, or machinery without upfront capital.",
    icon: <HardDrive size={32} className="text-[#f171ac]" />,
  },

  {
    title: "Invoice Finance",
    description:
      "Get paid now on invoices due in 30–90 days.",
    icon: <FileText size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Commercial Property Loans",
    description:
      "Buy or refinance warehouses, offices, or investment property.",
    icon: <Home size={32} className="text-[#f171ac]" />,
  },
];


// Steps Content
const steps = [
  {
    icon: <ClipboardList size={26} />,
    title: "Quick Chat",
    desc: "We get to know your business goals, cash flow, and challenges. No jargon, no pressure.",
  },
  {
    icon: <FileCheck size={26} />,
    title: "Tailored Options",
    desc: "We compare 30+ trusted lenders—including non-bank options—and show you the best fit.",
  },
  {
    icon: <Landmark size={26} />,
    title: "Smooth Application",
    desc: "We handle the paperwork and make your case strong. You stay focused on business.",
  },
  {
    icon: <CheckCircle size={26} />,
    title: "Fast Funding",
    desc: "Get funds in your account in days—not weeks.",
  },
  // {
  //   icon: <Handshake size={26} />,
  //   title: "Settlement",
  //   desc: "We coordinate with solicitors and the lender to ensure smooth and timely settlement.",
  // },
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


export default function BusinessLoanPage() {
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
      <main className="grow">
        {/* Top */}
        <div className="text-white bg-linear-to-r from-[#86489B] to-[#F171AC]">
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
                    Business Loan
                  </span>
                </div>

                {/* title */}
                <div className={`text-3xl md:text-4xl font-[500] ${archivo.className}`}>
                  Business Loan in Australia
                </div>

                {/* Description */}
                <div
                  className={`text-[#d8d8d8] text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}
                >
                  Your Business Has Big Plans. Let’s Make Them Happen.
                  Running a business in Australia isn’t easy. You juggle customers, staff, cash flow, and a hundred
                  other things every day. Sometimes, what you need most is a little financial breathing room—or a
                  boost to take things to the next level.
                  <br />
                  That’s where we come in.
                  <br />
                  At Kubaer Finance, we help business owners access smart, flexible loans tailored to real business
                  needs—not cookie-cutter bank offers.

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
              Smart Funding Options, <br />Built Around You
            </h2>

            {/* <div className="flex flex-col gap-8">
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
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {loanOptions.map((loan, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl 
                  shadow-[0_4px_15px_rgba(241,114,172,0.2)]
                  hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)]
                  transform transition-all duration-500 ease-in-out 
                  hover:-translate-y-2 items-start 
                  border-l-4 border-[#F172AC]"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 200}
                  data-aos-once="true"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 text-[#F171AC]">
                    {loan.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <div
                      className={`text-[18px] md:text-[20px] text-transparent bg-clip-text 
                      bg-gradient-to-r from-[#86489B] to-[#F171AC] 
                      font-[500] mb-2 ${archivo.className}`}
                    >
                      {loan.title}
                    </div>

                    <div
                      className={`text-[14px] md:text-[15px] text-gray-700 
                      font-[400] leading-relaxed ${roboto.className}`}
                    >
                      {loan.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>
        </div>

        {/* 3. Lenders */}
        <div className="bg-[#fdf2f9]">
          <div className="container mx-auto px-4">
            <section className="flex flex-col gap-0 sm:gap-[30px] py-12 sm:py-16">
              <div>
                <h2 className="{`text-2xl text-center font-semibold! mb-4 leading-10! text-transparent! bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                  We Help When Banks Say No or <br /> Say Nothing at All
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {[
                    // "Major Banks",
                    // "Second-Tier",
                    // "Non-Bank",
                    // "Investors",
                    // "Credit Unions",
                    { name: "Tired of endless paperwork and waiting weeks for a 'maybe'?", icon: CheckCircle },
                    { name: "Need quick funds to cover a large order or launch a new product?", icon: CheckCircle },
                    { name: "Want to upgrade equipment without draining your cash reserves?", icon: CheckCircle },
                    { name: "Looking to invest in staff, marketing, or a second location?", icon: CheckCircle },
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
                        <div className="relative flex items-center gap-3 px-4 py-3 rounded-[10px] bg-white border-2 border-transparent drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)] transition-all duration-500 ease-in-out hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)] hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box] hover:cursor-pointer">
                          {/* <CreditCard size={32} className="text-[#F171AC] relative z-10" /> */}
                          <IconComponent size={32} className="text-[#F171AC] relative z-10" />
                          <div
                            className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500] relative z-10`}
                          >
                            {/* {lender} */}
                            {item.name}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className={`text-center text-[#6B6B6B] text-[14px] leading-5 font-[400] ${roboto.className} pt-4`}>
                Whatever your goal, we match you with the right lender, right structure, and <br /> the right terms, so
                you can focus on running your business, not chasing money.
              </div>
            </section>
          </div>
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
              How We Make It Easy <br />
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




        {/* 5. What Our Clients Finance */}
        {/* <div className="bg-[#fdf2f9] py-16">
          <div className="container mx-auto px-4">
            <div className={`text-[32px] text-center font-semibold mb-10 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]`}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true">
              What Our Clients Finance
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
              {[
                {
                  name: "Renovating a retail shop",
                },
                {
                  name: "Buying stock ahead of peak season",
                },
                {
                  name: "Upgrading tools and machinery",
                },
                {
                  name: "Expanding to a second location",
                },
                {
                  name: "Covering ATO obligations",
                },
                {
                  name: "Purchasing commercial vehicles",
                },
                {
                  name: "Bridging cash flow gaps",
                },
                {
                  name: "Hiring new staff",
                },

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
                    <div className="relative flex flex-col items-center justify-center gap-2.5 px-4 py-3 rounded-[10px] bg-white border-2 border-transparent drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)] transition-all duration-500 ease-in-out hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)] hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box] hover:cursor-pointer">
                      <div className="flex flex-col gap-[5px] items-center">
                        <div
                          className={`text-[18px] text-center md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500] relative z-10`}
                        >
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <div className="bg-[#fdf2f9] py-16">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div
              className="text-[32px] text-center font-semibold mb-10 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              What Our Clients Finance
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
              {[
                "Renovating a retail shop",
                "Buying stock ahead of peak season",
                "Upgrading tools and machinery",
                "Expanding to a second location",
                "Covering ATO obligations",
                "Purchasing commercial vehicles",
                "Bridging cash flow gaps",
                "Hiring new staff",
              ].map((name, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={200 + index * 150}
                  data-aos-once="true"
                  className="h-[120px] sm:h-[90px] md:h-[90px] lg:h-[90px] rounded-[10px] transition-all duration-500 ease-in-out"
                >
                  <div className="flex flex-col items-center justify-center gap-2.5 px-4 py-3 h-full rounded-[10px] bg-white border-2 border-transparent drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)] transition-all duration-500 ease-in-out hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)] hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box] hover:cursor-pointer">

                    {/* Card Text */}
                    <div
                      className={`text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500]`}
                    >
                      {name}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>






        {/* 6. Your Business. Your Reasons. Your Loan. */}
        <div className="container mx-auto px-4 py-4 bg-gradient-to-r from-[#86489B] to-[#F171AC] my-12 lg:my-16 rounded-[20px]">
          <div className="flex flex-col md:flex-row gap-[20px]">
            <div className="flex-1 flex flex-col gap-[7px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className={`text-white !text-3xl !font-semibold !leading-[40px] ${archivo.className}`}>Your Business. Your Reasons. <br /> Your Loan.</h2>
                <p className={`m-0 !text-gray-200 !text-[16px] !md:text-[16px] !font-normal ${roboto.className} !leading-[25px] !md:leading-[28px] !tracking-[-1%]`}>
                  You don’t need a loan.
                  You need the right loan—built for what your business is doing today, and where you want to take
                  it tomorrow.
                </p>
              </div>

              <div>
                <ul className="flex flex-col gap-[10px] p-0 m-0 list-none">
                  <li className="flex items-center gap-[10px]">
                    <CheckCircle size={20} className="text-gray-200" />
                    <span className={`text-gray-200 text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>Need cash flow to cover wages or suppliers?</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <CheckCircle size={20} className="text-gray-200" />
                    <span className={`text-gray-200 text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>Want to purchase a delivery van or new equipment?</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <CheckCircle size={20} className="text-gray-200" />
                    <span className={`text-gray-200 text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>Thinking about expanding your premises?</span>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <CheckCircle size={20} className="text-gray-200" />
                    <span className={`text-gray-200 text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>Trying to consolidate debts into one simple repayment?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1 px-4 py-4 border border-pink-700 bg-pink-950/10 rounded-[20px]">
              <div className="flex flex-col gap-[10px] pb-4">
                <div className="flex items-center gap-[10px]">
                  <CheckCircle size={20} className="text-gray-200" />
                  <span className={`text-white !text-2xl !font-semibold !leading-[40px] ${archivo.className}`}>Most of our lenders require:</span>
                </div>

                <ul className="m-0 p-0">
                  <li className="flex items-center gap-[10px]">
                    <Circle className="text-gray-200 fill-gray-200" size={10} />
                    <span className={`text-gray-200 text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>An ABN or ACN</span>
                  </li>

                  <li className="flex items-center gap-[10px]">
                    <Circle className="text-gray-200 fill-gray-200" size={10} />
                    <span className={`text-gray-200 text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>At least 6 months in business</span>
                  </li>

                  <li className="flex items-center gap-[10px]">
                    <Circle className="text-gray-200 fill-gray-200" size={10} />
                    <span className={`text-gray-200 text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>Regular turnover (usually $5K–$10K+ per month)</span>
                  </li>

                  <li className="flex items-center gap-[10px]">
                    <Circle className="text-gray-200 fill-gray-200" size={10} />
                    <span className={`text-gray-200 text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}>Basic documents (bank statements, BAS, or tax returns)</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <span className={`text-gray-200 text-[14px] md:text-[16px] font-medium leading-[25px] md:leading-[28px] tracking-[-1%] ${roboto.className} !italic`}>Not sure? We’ll guide you. No pressure. No obligation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Client Testimonials */}
        {/* <div className="bg-[#fdf2f9] py-16">
          <div className="container mx-auto px-4">
            <div className={`text-[32px] text-center font-semibold mb-10 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]`}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true">
              Client Testimonials
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true">
              <TestimonialsSlider showTitle={false} testimonials={InvestmentLoanTestimonials} />
            </div>
          </div>
        </div> */}
      </main>
      {/* Content Ends */}

      <Footer />
    </div>
  );
}
