"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import ImageExample from "/public/assets/img/services/services_one.png";
import {
  TrendingUp,
  DollarSign,
  Activity,
  CreditCard,
  CheckCircle,
  ClipboardList,
  FileCheck,
  Landmark,
  Handshake,
  Home,
  RefreshCcw,
  Settings,
  Percent,
  SlidersHorizontal,
  Users,
  Target,
  Calculator,
  SearchCheck
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

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

const loanOptions = [
  {
    title: "Interest-Only Loans",
    description:
      "Pay interest only for a set period (typically 1–5 years) to maximise cash flow and tax-deductible interest.",
    icon: <Percent size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Principle and Interest Loans",
    description:
      "Pay down both the principal and interest to build equity while managing long-term costs.",
    icon: <PiggyBank size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Fixed or Variable Rate Loans",
    description:
      "Choose between rate stability (fixed) or flexibility (variable), or split the loan to enjoy both benefits.",
    icon: <SlidersHorizontal size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Equity Release",
    description:
      "Use the equity in your existing home or investment to fund a new purchase without needing a full deposit.",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },

  {
    title: "Family Equity Investment Loans",
    description:
      "Leverage a family member’s equity to help you start your investment journey sooner.",
    icon: <Users size={32} className="text-[#f171ac]" />,
  },
];


// Steps Content
const steps = [
  {
    icon: <Target size={26} />,
    title: "Strategy Session",
    desc: "We assess your investment goals, income, and long-term vision.",
  },
  {
    icon: <Calculator size={26} />,
    title: "Assess Borrowing Capacity",
    desc: "We calculate how much you can borrow based on rental income and liabilities.",
  },
  {
    icon: <FileCheck size={26} />,
    title: "Pre-Approval",
    desc: "We submit your application to a lender suited to investment needs, including interest-only or high-LVR loans.",
  },
  {
    icon: <SearchCheck size={26} />,
    title: "Property Review",
    desc: "We liaise with your agent or buyer’s advocate to review the investment property’s yield and structure.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Settlement",
    desc: "We coordinate with solicitors and the lender to ensure smooth and timely settlement.",
  },
  {
    icon: <RefreshCcw size={26} />,
    title: "Ongoing Investment Support",
    desc: "We review your loan annually and assist with future purchases, refinancing, orportfolio expansion.",
  },
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


export default function InvestmentLoanPage() {
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
                    Investment Loan
                  </span>
                </div>

                {/* title */}
                <div className={`text-3xl md:text-4xl font-[500] ${archivo.className}`}>
                  Investment Property Loans in Australia
                </div>

                {/* Description */}
                <div
                  className={`text-[#d8d8d8] text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}
                >
                  Investing in property is one of the most effective ways to build long-term wealth in Australia.
                  Whether you are purchasing your first investment property or expanding your portfolio, the right
                  loan structure can make a significant difference to your cash flow and tax strategy.
                  At Kubaer Finance, we help both new and seasoned investors navigate the complexities of
                  investment lending, including loan structuring, interest-only options, and equity access—all while
                  comparing offers from over 35+ lenders.
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
        <div className="bg-[#fdf2f9]">
          <div className="container mx-auto px-4">
            <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
              <div>
                <h2
                  className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Lenders We Deal With
                </h2>

                {/* ICONS + LABELS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Major Banks",
                      desc: "Commonwealth Bank, Westpac, NAB, ANZ ",
                      icon: Landmark
                    },
                    {
                      name: "Non-Bank Lenders",
                      desc: "Resimac, Pepper, Liberty",
                      icon: Building
                    },
                    {
                      name: "Investor-Focused Banks",
                      desc: "Macquarie Bank, ING",
                      icon: LineChart
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

                          {/* DYNAMIC ICON */}
                          <div>
                            <IconComponent className="w-8 h-8 text-[#F171AC] relative z-10" />
                          </div>

                          <div className="flex flex-col gap-[5px] items-center">
                            <div
                              className={`text-[18px] text-center md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500] relative z-10`}
                            >
                              {item.name}
                            </div>
                            <div className={`text-center text-[#6B6B6B] text-[14px] leading-5 font-[400] ${roboto.className}`}>
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`text-center text-[#6B6B6B] text-[14px] leading-5 font-[400] ${roboto.className} pt-2`}>
                Every lender has different policies on rental income, negative gearing, and interest-only
                <br /> periods—we help you find the right fit for your strategy.
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
              Your Investment Loan Journey <br /> with Kubaer Finance
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
            {/* <div className={`text-[32px] text-center font-semibold mb-10 leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]`}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true">
              Client Testimonials
            </div> */}

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
