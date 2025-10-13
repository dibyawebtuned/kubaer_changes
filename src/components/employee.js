"use client";
import React from "react";
import Image from "next/image";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


import Emp1 from "/public/assets/img/about/members/1.jpg";
import Emp2 from "/public/assets/img/about/members/2.jpg";
import Emp3 from "/public/assets/img/about/members/3.jpg";
import Emp4 from "/public/assets/img/about/members/4.jpg";
import Emp5 from "/public/assets/img/about/members/5.jpg";

export default function Employee() {
    const employees = [
        { id: 1, name: "John Doe", position: "Frontend Developer", image: Emp1 },
        { id: 2, name: "Jane Smith", position: "UI/UX Designer", image: Emp2 },
        { id: 3, name: "Michael Lee", position: "Backend Developer", image: Emp3 },
        { id: 4, name: "Sarah Williams", position: "Project Manager", image: Emp4 },
        { id: 5, name: "David Kim", position: "QA Engineer", image: Emp5 },
        { id: 6, name: "David Kim", position: "QA Engineer", image: Emp5 },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
            <div className="container mx-auto flex flex-col gap-[50px]">
                {/* Section Header */}
                <div className="flex flex-col gap-[15px]">
                    {/* Title */}
                    <div className="text-center">
                        <span className="text-[32px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                            Meet Our Team
                        </span>
                    </div>
                    {/* Sub-Title */}
                    <div className="flex justify-center">
                        <div className={`text-[#533641] w-[60%] text-center ${roboto.className} leading-[25px] font-[400] tracking-[-1%]`}>
                            Passionate professionals dedicated to delivering innovative digital
                            solutions with precision and creativity.
                        </div>
                    </div>
                </div>

                {/* Employee Cards */}
                <div className="flex flex-wrap justify-center gap-10">
                    {employees.map((emp) => (
                        <div key={emp.id} className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-2 w-[220px]" >
                            {/* Image */}
                            <div className="w-28 h-28 mb-3 relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur-md opacity-30"></div>
                                <Image
                                    src={emp.image}
                                    alt={emp.name}
                                    className="rounded-full object-cover object-top w-28 h-28 border-4 border-white shadow-md relative z-10"
                                />
                            </div>

                            {/* Text */}
                            <div>
                                {/* Name */}
                                <div>
                                    <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                                        {emp.name}
                                    </span>
                                </div>

                                {/* Position */}
                                <div>
                                    <p className="!text-[#533641] text-sm mt-1">{emp.position}</p>
                                </div>
                            </div>

                            {/* Accent Line */}
                            <div className="w-10 h-[3px] bg-gradient-to-r from-[#86489B] to-[#F171AC] mt-3 rounded-full"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
