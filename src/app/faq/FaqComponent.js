"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Archivo, Roboto } from "next/font/google";
import faqs from "../../data/faqs.json";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FaqComponent() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);

    const faqCategories = faqs;
    const categories = ["All", ...Object.keys(faqCategories)];

    const [activeTab, setActiveTab] = useState(categories[0]);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const currentFaqs =
        activeTab === "All"
            ? Object.values(faqCategories).flat()
            : faqCategories[activeTab] ?? [];

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 flex flex-col gap-[30px] sm:gap-[60px]">

                {/* Heading */}
                <div className="sm:text-center flex flex-col gap-[10px] pt-6 sm:pt-15">
                    <div data-aos="fade-down" data-aos-delay="100">
                        <span className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <div
                        className={`text-gray-600 text-[14px] sm:text-[16px] font-[400] ${roboto.className}`}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Do you need information about different financial terms or guidance
                        on starting your home loan journey?
                    </div>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden lg:block w-fit mx-auto rounded-full p-[2px] bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                    <div className="flex bg-white rounded-full! p-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveTab(category);
                                    setOpenIndex(null);
                                }}
                                className={`px-6 py-2 text-sm font-medium rounded-full! transition-all duration-300
                                ${activeTab === category
                                        ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white shadow-md"
                                        : "text-gray-600 hover:text-[#86489B]"
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Tabs */}
                <div className="lg:hidden flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveTab(category);
                                setOpenIndex(null);
                            }}
                            className={`px-4 py-2 text-sm font-medium rounded-full! border transition-all duration-300
                            ${activeTab === category
                                    ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white border-transparent"
                                    : "bg-white text-gray-600 border-gray-200 hover:text-[#86489B]"
                                }
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="flex flex-col gap-[20px] pb-6 sm:pb-15">
                    {currentFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl bg-white shadow-sm transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center px-4 pt-4 text-left"
                            >
                                <div
                                    className={`text-lg md:text-xl font-medium ${archivo.className}
                                    ${openIndex === index
                                            ? "text-[#86489B]"
                                            : "text-gray-700"
                                        }
                                `}
                                >
                                    {faq.question}
                                </div>

                                <span
                                    className={`text-2xl font-bold transition-transform duration-300
                                    ${openIndex === index
                                            ? "rotate-45 text-[#86489B]"
                                            : "text-gray-400"
                                        }
                                `}
                                >
                                    +
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-6 pb-4 text-gray-600 font-normal text-sm md:text-base transition-all duration-500 overflow-hidden ${archivo.className}
                                ${openIndex === index
                                        ? "max-h-96 opacity-100 mt-2"
                                        : "max-h-0 opacity-0 mt-0"
                                    }
                            `}
                            >
                                {faq.answer && (
                                    faq.answer.includes("\n") ? (
                                        <ul className="list-disc list-inside space-y-1 p-0!">
                                            {faq.answer
                                                .split("\n")
                                                .filter(Boolean)
                                                .map((line, idx) => (
                                                    <li key={idx}>{line.replace(/^- /, "")}</li>
                                                ))}
                                        </ul>
                                    ) : (
                                        <p
                                            className={`text-gray-600! font-normal! text-sm md:text-base`}
                                        >{faq.answer}</p>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
