"use client";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


export default function FaqComponent() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);

    const faqCategories = {
        General: [
            {
                question: "How do you compare and choose the right home loan for me?",
                answer: "There are a few processes we undertake to determine the right solutions. We also try and give you 3 options to consider so you can see a range of different lenders that suit your needs. But the critical aspects are: Who can provide you with the best policies, income assessment and guidelines that suit your income or employment type for example What lender has the best price depending on your deposit size, your equity position, or your loan purpose. Did you know that Investment loans and owner occupied loans have different interest rates for example. The right finance option for you goes beyond who has the cheapest interest rate online. If that's all that went into it, you would just do it yourself. Policy is just as important as price in a lot of cases.",
            },
        ],
        Loans: [
            {
                question: "What is a Mortgage?",
                answer: "A mortgage is a loan specifically for purchasing property, where the property itself acts as collateral. Failing to make payments may result in the lender taking ownership of the property.",
            },
            {
                question: "What is Borrowing Capacity?",
                answer: "Borrowing capacity is the maximum amount a lender will allow you to borrow based on your income, expenses, and other financial commitments.",
            },
        ],
        Refinancing: [
            {
                question: "What is Refinancing?",
                answer: "Refinancing means replacing your current loan with a new one, usually to get a better interest rate or modify repayment terms. It can save money over the life of the loan.",
            },
        ],
        Taxes: [
            {
                question: "What is Stamp Duty?",
                answer: "Stamp duty is a government tax applied when you purchase property. The amount varies by property value and location.",
            },
        ],
    };

    // Create categories including "All"
    const categories = ["All", ...Object.keys(faqCategories)];
    const [activeTab, setActiveTab] = useState(categories[0]);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Flatten all FAQs if "All" is selected
    const currentFaqs =
        activeTab === "All"
            ? Object.values(faqCategories).flat()
            : faqCategories[activeTab];

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 flex flex-col gap-[30px] sm:gap-[60px]">
                {/* Heading */}
                <div className="sm:text-center flex flex-col gap-[10px] pt-6 sm:pt-15">
                    {/* Title */}
                    <div
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        data-aos-once="true">
                        <span className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                            Frequently Asked Questions
                        </span>
                    </div>

                    {/* Sub-title */}
                    <div className={`text-gray-600 text-[14px] sm:text-[16px] font-[400] ${roboto.className} leading-[22px] sm:leading-[25px] tracking-[-0.5%]`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        Do you need information about different financial terms or guidance
                        on starting your home loan journey?
                    </div>
                </div>

                {/* Tabs */}
                <div className="hidden sm:block w-full rounded-full p-[2px] bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                    <div className="flex justify-between items-center bg-white rounded-full px-1 py-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveTab(category);
                                    setOpenIndex(null);
                                }}
                                style={{ borderRadius: '30px' }}
                                className={`flex-1 text-sm font-medium text-center px-4 py-2 transition 
                ${activeTab === category
                                        ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white"
                                        : "text-gray-600 hover:text-[#86489B] hover:font-bold"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tabs for Mobile */}
                <div className="w-full rounded-full p-[2px] bg-gradient-to-r from-[#86489B] to-[#F171AC] sm:hidden">
                    <div className="flex flex-wrap justify-center gap-2 bg-white rounded-full px-2 py-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveTab(category);
                                    setOpenIndex(null);
                                }}
                                style={{ borderRadius: '30px' }}
                                className={`text-sm font-medium px-4 py-2 transition
          ${activeTab === category
                                        ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white"
                                        : "text-gray-600 hover:text-[#86489B] hover:font-bold"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>



                {/* FAQ Section */}
                <div className="flex flex-col gap-[20px] pb-6 sm:pb-15">
                    {currentFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(134,72,155,0.15)] hover:shadow-[0_6px_20px_rgba(241,113,172,0.25)] transition-shadow duration-300 bg-white"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 150}
                            data-aos-once="true"
                        >
                            <button onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center px-4 pt-4 text-left cursor-pointer focus:outline-none"
                            >
                                <div
                                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${roboto.className} 
                                    ${openIndex === index ? "text-[#86489B]" : "text-gray-800"} 
                                    group-hover:text-[#86489B]`}
                                >
                                    {faq.question}
                                </div>
                                <div className={`text-2xl font-bold transition-transform duration-300 ${openIndex === index
                                    ? "rotate-45 text-[#86489B]" : "text-gray-400"} 
                                    hover:text-[#86489B]`}>
                                    +
                                </div>
                            </button>

                            {/* Answer */}
                            <div className={`px-4 pb-4 text-gray-600 text-sm md:text-base text-justify overflow-hidden transition-all duration-500 font-[400] ${roboto.className} ${openIndex === index
                                ? "max-h-96 opacity-100 mt-2"
                                : "max-h-0 opacity-0 mt-0"
                                }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
