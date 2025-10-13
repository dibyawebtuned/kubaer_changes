"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import ImageExample from "/public/assets/img/services/service_2.png";
import { TrendingUp, DollarSign, Activity, CreditCard, CheckCircle, ClipboardList, FileCheck, Landmark, Handshake, Home, RefreshCcw, Settings } from "lucide-react";
import { Archivo, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialsSlider from "@/components/Testimonials";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

const HomeLoanTestimonials = [
  {
    content: "As first home buyers, Kubaer Finance made it incredibly simple.",
    author: "Sarah & Tom, Sydney NSW",
  },
  {
    content: "They found me a fantastic loan and handled all the paperwork.",
    author: "Michael P., Melbourne VIC",
  },
  {
    content: "Explaining every step and helping us secure the First Home Buyer Guarantee.",
    author: "Emily R., Brisbane QLD",
  },
];



const loanOptions = [
  {
    title: "Standard Variable Rate Loans",
    description:
      "Interest rate fluctuates with market conditions. Flexible with extra repayments and redraw facilities.",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Fixed Rate Loans",
    description:
      "Lock in your interest rate for a period. Predictable repayments and financial stability.",
    icon: <DollarSign size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Interest Only Loans",
    description:
      "Pay only interest for an initial period. Useful for investment properties or cash flow management.",
    icon: <Activity size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Low Doc Loans",
    description:
      "Simplified documentation for self-employed borrowers. Quick approval with minimal paperwork.",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },
];


// Steps Content
const steps = [
  {
    icon: <ClipboardList size={26} />,
    title: "Initial Consultation & Needs Assessment",
    desc: "We understand your goals and financial situation to design the right path forward.",
  },
  {
    icon: <FileCheck size={26} />,
    title: "Eligibility Check & Pre-Approval",
    desc: "We assess your eligibility for various loans and government grants, securing pre-approval efficiently.",
  },
  {
    icon: <Landmark size={26} />,
    title: "Loan Structuring & Comparison",
    desc: "We compare suitable products from our trusted panel of lenders to get you the best deal.",
  },
  {
    icon: <CheckCircle size={26} />,
    title: "Application & Submission",
    desc: "We guide you through documentation and ensure your application is complete and ready for submission.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Lender Liaison & Approval",
    desc: "We stay in touch with the lender, tracking progress and ensuring smooth approvals.",
  },
  {
    icon: <Home size={26} />,
    title: "Settlement Support",
    desc: "We coordinate with your conveyancer or solicitor for a seamless settlement process.",
  },
  {
    icon: <RefreshCcw size={26} />,
    title: "Ongoing Support",
    desc: "Even after settlement, we’re here for reviews, questions, or changing financial needs.",
  },
];


export default function HomeLoanPage() {
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
                    Home Loan
                  </span>
                </div>

                {/* title */}
                <div className={`text-3xl md:text-4xl font-[500] ${archivo.className}`}>
                  Loans for First Home Buyers
                </div>

                {/* Description */}
                <div
                  className={`text-[#d8d8d8] text-justify text-[16px] md:text-[16px] font-normal ${roboto.className} leading-[25px] md:leading-[28px] tracking-[-1%]`}
                >
                  Embarking on the journey to buy your first home in Australia is an
                  exciting milestone. It also a significant financial commitment, and
                  understanding the landscape is key. The Australian government, along
                  with state and territory governments, offers various initiatives to
                  support eligible first home buyers, aiming to make homeownership more
                  accessible. These schemes can often help reduce the required deposit
                  or minimise additional costs, paving the way for you to step onto the
                  property ladder sooner. We are here to demystify these opportunities
                  and help you navigate them with confidence.
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
              Types of First Home Buyer Loans <br /> & Government Support
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
              <h2 className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                Lenders We Deal With
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  "Major Banks",
                  "Second-Tier",
                  "Non-Bank",
                  "Mutual Banks",
                  "Credit Unions",
                ].map((lender, index) => (
                  <div
                    key={index}
                    className="relative rounded-[10px] transition-all duration-500 ease-in-out"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={200 + index * 200}
                    data-aos-once="true"
                  >
                    <div className="relative flex items-center justify-center gap-3 px-4 py-3 rounded-[10px] bg-white border-2 border-transparent drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)] transition-all duration-500 ease-in-out hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)] hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box] hover:cursor-pointer">
                      <CreditCard size={32} className="text-[#F171AC] relative z-10" />
                      <div
                        className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500] relative z-10`}
                      >
                        {lender}
                      </div>
                    </div>
                  </div>
                ))}
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
              Your Home Loan Journey <br /> with Us
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
              <TestimonialsSlider showTitle={false} testimonials={HomeLoanTestimonials} />
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
