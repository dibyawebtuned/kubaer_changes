"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessFlow from "@/components/ProcessFlow";
import CallAction from "@/components/CallAction";
import { Archivo, Roboto } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home, ClipboardList, DollarSign, CheckCircle } from "lucide-react";


const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });



export default function BudgetPlannerPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
        });
    }, []);


    const steps = [
        {
            icon: <Home size={20} />,
            title: "Plan Your Budget",
            desc: "Ensures you have enough funds ready.",
        },
        {
            icon: <ClipboardList size={20} />,
            title: "Avoid Surprises",
            desc: "Know the cost early.",
        },
        {
            icon: <DollarSign size={20} />,
            title: "Compare Properties",
            desc: "Choose smarter.",
        },
        {
            icon: <CheckCircle size={20} />,
            title: "Strategic Planning",
            desc: "Understand concessions.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                {/* Title, Description & Calculator */}
                <div className="container">
                    <div className="px-4 sm:px-10 md:px-20 lg:px-[120px] xl:px-[180px] 2xl:px-[220px] py-6 sm:py-15">
                        {/* Title + Description */}
                        <div className="flex flex-col gap-6">

                            {/* Title */}
                            <div
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                                data-aos-once="true"
                            >
                                <span className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] md:text-[42px] md:leading-[52px] lg:text-[48px] lg:leading-[60px] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                                    Calculate Budget Planner <br className="hidden sm:block" /> Instantly
                                </span>
                            </div>

                            {/* Description */}
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                data-aos-once="true"
                                className="flex justify-center"
                            >
                                <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed !font-[400] text-gray-700 sm:w-[70%]">
                                    Stamp duty is a government tax applied when you buy property,
                                    and it can often be one of the largest upfront costs in a property purchase.
                                    The amount you pay depends on the purchase price of the property, its location,
                                    and the current government regulations in your state or territory. Understanding
                                    how much you’ll owe is crucial for budgeting and planning your finances. Our
                                    Stamp Duty Calculator makes this process simple by providing a fast and accurate
                                    estimate, helping you make informed decisions before committing to a purchase.
                                    Whether you are a first-time buyer or an experienced investor, knowing your
                                    stamp duty in advance can save time, reduce stress, and ensure a smoother
                                    property buying experience.
                                </p>
                            </div>

                            {/* Calculator Placeholder */}
                            {/* 
      <div
        className="
          mt-5 
          w-full 
          h-[350px] 
          sm:h-[400px] 
          md:h-[450px] 
          lg:h-[500px] 
          bg-white 
          rounded-2xl 
          shadow-[0_0_25px_rgba(241,114,172,0.2)] 
          flex 
          items-center 
          justify-center
        "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        This is for calculator integration
      </div>
      */}

                        </div>
                    </div>
                </div>


                {/* Process */}
                <div className="bg-[#FAFAFA]">
                    <div className="px-[188px]">
                        <ProcessFlow
                            title="Why Calculate Budget Planner?"
                            steps={steps}
                        />
                    </div>
                </div>

                {/* Call Action */}
                <CallAction />

            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
