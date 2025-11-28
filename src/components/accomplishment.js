"use client";
import React from "react";
import { Trophy, Award, Star, Target } from "lucide-react";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


export default function Accomplishment() {
    const stories = [
        {
            id: 1,
            title: "Best Innovation Award 2024",
            description:
                "Recognized for introducing an AI-driven system that improved workflow efficiency by 40% and enhanced client satisfaction across multiple departments.",
            icon: <Trophy className="w-10 h-10 text-yellow-500" />,
        },
        {
            id: 2,
            title: "Top Performing Team 2023",
            description:
                "Our development team successfully delivered multiple enterprise solutions ahead of schedule, setting a new company benchmark for excellence.",
            icon: <Star className="w-10 h-10 text-blue-500" />,
        },
        {
            id: 3,
            title: "Client Excellence Recognition",
            description:
                "Honored by international clients for maintaining 100% on-time delivery with exceptional product quality and seamless communication throughout projects.",
            icon: <Award className="w-10 h-10 text-green-500" />,
        },
        {
            id: 4,
            title: "Sustainability & Impact Award",
            description:
                "Acknowledged for implementing sustainable ICT infrastructure practices, reducing carbon footprint and optimizing energy usage within company operations.",
            icon: <Target className="w-10 h-10 text-purple-500" />,
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
            <div className="container mx-auto flex flex-col gap-[50px]">
                {/* Section Header */}
                <div className="flex flex-col gap-[15px]">
                    {/* Title */}
                    <div className="text-center">
                        <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                            Our Accomplishment Stories
                        </span>
                    </div>
                    {/* Sub-Title */}
                    <div className="flex justify-center">
                        <div className={`text-[#533641] sm:w-[60%] text-center ${roboto.className} leading-[25px] font-[400] tracking-[-1%]`}>
                            Celebrating our journey of excellence, innovation, and impact through
                            remarkable achievements and milestones.
                        </div>
                    </div>
                </div>

                {/* Accomplishment Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 sm:p-7 md:p-8" >
                            {/* Icon & Title */}
                            <div className="flex items-center mb-4 sm:mb-5">
                                {/* Icon */}
                                <div
                                    className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full shadow-inner mr-4">
                                    {story.icon}
                                </div>

                                {/* Title */}
                                <div>
                                    <span
                                        className="block text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                                        {story.title}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {story.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
