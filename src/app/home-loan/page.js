"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import ImageExample from "/public/assets/img/services/service_2.png";
import { TrendingUp, DollarSign, Activity, CreditCard, CheckCircle, ClipboardList, FileCheck, Landmark, Handshake, Home, RefreshCcw, Settings, Lock, Split, Users, FileText, MapPin, Building2, MessageCircle, FileSearch, Scale, FilePlus } from "lucide-react";
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


import {
  Gift,
  ReceiptText,
  HandCoins,
} from "lucide-react";



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
      "These are the most common, where the interest rate can fluctuate with market conditions. They often offer flexibility with extra repayments and redraw facilities. ",
    icon: <TrendingUp size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Fixed Rate Loans",
    description:
      "Lock in your interest rate for a set period (typically 1-5 years), providing repayment certainty regardless of market shifts. This can be great for budgeting. ",
    icon: <Lock size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Split Loans",
    description:
      "A popular hybrid option, allowing you to split your loan into both fixed and variable portions, giving you a balance of certainty and flexibility.",
    icon: <Split size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Guarantor Loans",
    description:
      "If you have a family member willing to offer the equity in their property as security, a guarantor loan can help you enter the market with a smaller deposit, potentially avoiding Lenders Mortgage Insurance (LMI). ",
    icon: <Users size={32} className="text-[#f171ac]" />,
  },
  {
    title: "Low-Doc/Alt-Doc Loans",
    description:
      "Designed for self-employed individuals or those with non-traditional income, these loans offer more flexible documentation requirements, though they may come with higher interest rates.",
    icon: <FileText size={32} className="text-[#f171ac]" />,
  },
];


// Steps Content
const steps = [
  {
    icon: <MessageCircle size={26} />,
    title: "Initial Consultation & Needs Assessment",
    desc: "We start with a friendly chat to understand your goals, financial situation, and what you're looking for in your first home. We'll explain the various schemes and options available.",
  },
  {
    icon: <FileSearch size={26} />,
    title: "Eligibility Check & Pre-Approval",
    desc: "We'll assess your eligibility for different loans and government grants based on Australian policies. We then work to secure a pre-approval, giving you a clear budget and confidence when house hunting.",
  },
  {
    icon: <Scale size={26} />,
    title: "Loan Structuring & Comparison",
    desc: "Based on your needs, we'll compare suitable loan products from our panel of lenders, presenting you with a clear, easy-to-understand comparison of rates, fees, and features.",
  },
  {
    icon: <FilePlus size={26} />,
    title: "Application & Submission",
    desc: "We'll guide you through gathering all necessary documentation and meticulously prepare your loan application, submitting it to your chosen lender.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Lender Liaison & Approval",
    desc: "We act as your advocate, communicating directly with the lender to track your application, address any queries, and work towards a swift approval. ",
  },
  {
    icon: <Home size={26} />,
    title: "Settlement Support",
    desc: "We coordinate with your conveyancer/solicitor and the lender to ensure a smooth settlement process.",
  },
  {
    icon: <RefreshCcw size={26} />,
    title: "Ongoing Support",
    desc: "Our relationship doesn't end at settlement. We're here for future reviews, questions about your loan, or when your financial needs change.",
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
                  Embarking on the journey to buy your first home in Australia is an exciting milestone. It’s also a
                  significant financial commitment, and understanding the landscape is key. The Australian
                  government, along with state and territory governments, offers various initiatives to support
                  eligible first home buyers, aiming to make homeownership more accessible. These schemes can
                  often help reduce the required deposit or minimise additional costs, paving the way for you to
                  step onto the property ladder sooner. We are here to demystify these opportunities and help you
                  navigate them with confidence.

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

          <section className="pb-10 flex flex-col gap-[10px] sm:gap-[30px]">
            <h4 className={`!text-2xl text-center !font-semibold !mb-4 !leading-[30px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}>
              Beyond the loan types, crucial government initiatives <br /> can significantly assist first home buyers:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "First Home Buyer Guarantee (FHBG)",
                  description:
                    "Allows eligible first home buyers to purchase a home with as little as a 5% deposit without paying Lenders Mortgage Insurance (LMI).",
                  icon: Gift,
                },
                {
                  title: "Regional First Home Buyer Guarantee (RFHBG)",
                  description:
                    "Similar to the FHBG, but specifically for eligible regional first home buyers in designated regional areas.",
                  icon: MapPin,
                },
                {
                  title: "Family Home Guarantee (FHG)",
                  description:
                    "Supports eligible single parents with dependants to purchase a home with a deposit as low as 2%.",
                  icon: Users,
                },
                {
                  title: "First Home Owner Grant (FHOG)",
                  description:
                    "A one-off grant offered by state and territory governments for eligible first home buyers purchasing or building new homes. Eligibility and grant amounts vary by state.",
                  icon: HandCoins,
                },
                {
                  title: "First Home Super Saver (FHSS) Scheme",
                  description:
                    "This allows you to save for your first home inside your superannuation fund, benefiting from concessional tax rates. You can then withdraw these voluntary contributions and associated earnings to help with your deposit.",
                  icon: PiggyBank,
                },
                {
                  title: "Help to Buy Scheme (Coming Soon)",
                  description:
                    "A proposed shared equity scheme where the government would contribute to the purchase price of a home, reducing the amount you need to borrow. We'll keep you updated as this becomes available. We'll help you understand which of these schemes you might be eligible for and how they can best be leveraged for your unique situation.",
                  icon: Building2,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4 flex-1 p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transition-all duration-300 items-start border-l-4 border-[#F172AC]"
                  >
                    {/* ICON */}
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#F171AC]" />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <div className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}>
                        {item.title}
                      </div>
                      <p className={`!text-[14px] !md:text-[15px] !text-gray-700 !font-[400] !${roboto.className} !leading-relaxed`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* 3. Lenders */}
        <div className="bg-[#fdf2f9]">
          <div className="container mx-auto px-4">
            <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
              <div>
                <h2 className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                  Lenders We Deal With
                </h2>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
                  {[
                    {
                      name: "Major Banks",
                      desc: "Commonwealth Bank, Westpac, NAB, ANZ ",
                      icon: Landmark
                    },
                    {
                      name: "Second-Tier Lenders",
                      desc: "Macquarie Bank, ING, Suncorp, Bendigo & Adelaide Bank, Bank of Queensland, & more",
                      icon: Building2
                    },
                    {
                      name: "Non-Bank Lenders",
                      desc: "Specialist lenders like Firstmac, Pepper Money, Athena, and others who offer flexible solutions for various circumstances.",
                      icon: Banknote
                    },
                    {
                      name: "Credit Unions & Mutual Banks",
                      desc: "Member-focused institutions offering competitive rates and personalised service.",
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
                        <div className="relative flex flex-col items-center justify-center gap-[15px] px-4 py-4 rounded-[10px] bg-white border-2 border-transparent drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)] transition-all duration-500 ease-in-out hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)] hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box] hover:cursor-pointer">
                          <div>
                            <IconComponent className="w-8 h-8 text-[#F171AC] relative z-10" />
                          </div>
                          <div className="flex flex-col gap-[10px] items-center">
                            <div
                              className={`text-[18px] text-center md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500] relative z-10`}
                            >
                              {item.name}
                            </div>

                            <div className="flex flex-row flex-wrap gap-x-1 gap-y-2 justify-center items-center">
                              {item.desc.split(",").map((point, i) => (
                                <div
                                  key={i}
                                  className={`bg-[#F171AC]/30 px-3 py-1 rounded-full flex items-center gap-2 text-center text-[#930045] text-[12px] leading-tight font-[400] ${roboto.className}`}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#F171AC] flex-shrink-0"></div>
                                  <div>{point.trim()}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div> */}






                <div className="flex justify-center w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
                    {[
                      {
                        name: "Major Banks",
                        desc: "Commonwealth Bank, Westpac, NAB, ANZ ",
                        icon: Landmark
                      },
                      {
                        name: "Second-Tier Lenders",
                        desc: "Macquarie Bank, ING, Suncorp, Bendigo & Adelaide Bank, Bank of Queensland, & more",
                        icon: Building2
                      },
                      {
                        name: "Non-Bank Lenders",
                        desc: "Specialist lenders like Firstmac, Pepper Money, Athena, and others who offer flexible solutions for various circumstances.",
                        icon: Banknote
                      },
                      {
                        name: "Credit Unions & Mutual Banks",
                        desc: "Member-focused institutions offering competitive rates and personalised service.",
                        icon: LineChart
                      },
                    ].map((item, index) => {
                      const IconComponent = item.icon;

                      return (
                        <div
                          key={index}
                          className="flex justify-center"
                          data-aos="fade-up"
                          data-aos-duration="800"
                          data-aos-delay={200 + index * 200}
                          data-aos-once="true"
                        >
                          {/* Card */}
                          <div
                            className="
                            relative flex flex-col items-center justify-center
                            gap-[15px] px-3 py-4
                            rounded-[10px] bg-white
                            border-2 border-transparent
                            drop-shadow-[0_4px_10px_rgba(241,114,172,0.15)]
                            transition-all duration-500 ease-in-out
                            hover:shadow-[0_6px_20px_rgba(241,114,172,0.4)]
                            hover:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#86489B,#F172AC)_border-box]
                            hover:cursor-pointer

                            w-full
                            // max-w-[280px]
                            h-[280px]
                            sm:h-[300px]
                            md:h-[320px]
                            lg:h-[320px]
                          "
                          >
                            {/* Icon */}
                            <IconComponent className="w-8 h-8 text-[#F171AC]" />

                            {/* Content */}
                            <div className="flex flex-col items-center gap-[10px] w-full">
                              {/* Title */}
                              <div
                                className={`text-[18px] md:text-[20px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className} font-[500]`}
                              >
                                {item.name}
                              </div>

                              {/* Pills */}
                              <div className="flex flex-wrap gap-x-1 gap-y-2 justify-center">
                                {item.desc.split(",").map((point, i) => (
                                  <div
                                    key={i}
                                    className={`bg-[#F171AC]/30 px-3 py-1 rounded-full flex items-center gap-2 text-[#930045] text-[12px] leading-tight font-[400] ${roboto.className}`}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F171AC] flex-shrink-0"></span>
                                    <span>{point.trim()}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className={`text-center text-[#6B6B6B] text-[14px] leading-5 font-[400] ${roboto.className} pt-2`}>
                {`Our broad panel means we are not tied to any single institution. Instead, we shop around to find the
                most competitive rates and suitable products from a diverse range of lenders, ensuring you get a
                loan tailored to your needs, not just a bank's agenda.`}
              </div>
            </section>
          </div>
        </div>

        {/* 4. Home Loan Journey */}
        <div className="container mx-auto px-4">
          <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
            {/* Heading */}
            <div className="flex flex-col">
              <h2
                className="{`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Your Home Loan Journey <br /> with Us
              </h2>
              <p className={`m-0 text-center !font-[400] !leading-relaxed !${roboto.className}`}>
                Buying your first home is a big step, and we are committed to making the finance part as smooth
                and stress-free as possible. <br /> {`Here's`} what your journey with Kubaer Finance typically looks like
              </p>
            </div>

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
                    name: "Sarah & Tom",
                    designation: "Sydney NSW",
                    content: "As first home buyers, the process seemed daunting. Kubaer Finance made it incredibly simple, explaining every step and helping us secure the First Home Buyer Guarantee. We wouldn't be in our dream home without them!",
                  },
                  {
                    name: "Michael P.",
                    designation: "Melbourne VIC",
                    content: "I was struggling to understand all the government schemes, but Kubaer Finance patiently walked me through everything. They found me a fantastic loan and handled all the paperwork. Highly recommend!",
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
