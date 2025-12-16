
"use client"
import { useState } from "react";
import Image from "next/image";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

import Bipin from "/public/assets/img/members/bipin.png";
import Bini from "/public/assets/img/members/bini.png";
import Kunju from "/public/assets/img/members/Kunju.png";
import Archana from "/public/assets/img/members/archana.png";
import Prekchya from "/public/assets/img/members/prekchya.png";
import Smita from "/public/assets/img/members/smita.png";
import Sunil from "/public/assets/img/members/sunil.png";

export default function TeamPage() {
    const [selected, setSelected] = useState(null);

    const team = [
        {
            name: "Bipin Joshi",
            role: "CEO, Mortgage Broker",
            tag: "Leadership",
            image: Bipin,
            bio: "Experienced leader overseeing strategic direction, operations, and client service excellence.",
        },
        {
            name: "Sunil Raj Joshi",
            role: "Credit Analyst",
            tag: "Finance",
            image: Sunil,
            bio: "Specialised in credit assessment, financial analysis, and lending risk evaluation.",
        },
        {
            name: "Kunju Shrestha",
            role: "HR Manager",
            tag: "People",
            image: Kunju,
            bio: "Responsible for employee experience, HR operations, and talent development.",
        },
        {
            name: "Archana Pathak",
            role: "Loan Processing Manager",
            tag: "Operations",
            image: Archana,
            bio: "Manages loan processing workflows with precision, accuracy, and client support.",
        },
        {
            name: "Smita Thapa",
            role: "Loan Processing Manager",
            tag: "Operations",
            image: Smita,
            bio: "Ensures seamless document handling, loan coordination, and client communication.",
        },
        {
            name: "Bini Gopali",
            role: "Client Relations Officer",
            tag: "Client",
            image: Bini,
            bio: "Supports clients with care, clarity, and dedicated follow-through.",
        },
        {
            name: "Prekchya Maharjan",
            role: "Marketing Associate",
            tag: "Client",
            image: Prekchya,
            bio: "Supports clients with care, clarity, and dedicated follow-through.",
        },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-[#f7f7fb] to-white px-4 py-12 flex justify-center">
            <div className="max-w-6xl w-full">

                {/* ---------------- SUBTEXT + GRID ---------------- */}
                <div className="flex flex-col gap-4 md:gap-3">

                    {/* SUBTEXT */}
                    <div className="flex flex-col gap-[15px]">
                        <div className="text-center w-full">
                            <h3 className="text-[24px]! sm:text-[28px]! md:text-[32px]! lg:text-[36px]! font-[600]! 
                                text-transparent! bg-clip-text! bg-gradient-to-r! from-[#86489B]! to-[#F171AC]!">
                                Meet Our Team
                            </h3>
                        </div>

                        <div className="flex justify-center">
                            <p className={`text-[#533641]! sm:w-[60%]! ${roboto.className}! leading-[25px]! font-[400]! tracking-[-1%]! text-center!`}>
                                A curated collection of profiles showcasing leadership,
                                client-facing experts, and specialist team members. Each profile
                                highlights professional experience and the role played in delivering
                                exceptional client outcomes.
                            </p>
                        </div>
                    </div>

                    {/* ---------------- TEAM GRID ---------------- */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                        {team.map((person, i) => (
                            <div
                                key={i}
                                onClick={() => setSelected(person)}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 
                                transition-shadow transition-transform duration-500 ease-in-out 
                                cursor-pointer border border-gray-100"
                            >
                                <div className="w-full h-100! sm:h-66! flex justify-center items-center overflow-hidden rounded-t-xl">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-3 flex flex-col gap-0.5">
                                    <div className="text-center font-bold text-gray-900 text-[20px] text-transparent bg-clip-text bg-linear-to-r from-[#86489B] to-[#F171AC]">
                                        {person.name}
                                    </div>
                                    <div className="text-center text-gray-500 text-[14px] font-medium!">
                                        {person.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}


                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-7!">
                        {team.map((person, i) => (
                            <div
                                key={i}
                                onClick={() => setSelected(person)}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1
                                transition-shadow transition-transform duration-500 ease-in-out 
                                cursor-pointer border border-gray-100 w-full"
                            >
                                <div className="w-full h-44 sm:h-48 md:h-64 lg:h-72 flex justify-center items-center overflow-hidden rounded-t-xl">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-2! sm:p-4! flex flex-col gap-0! sm:gap-0.5!">
                                    <div className="text-center font-bold text-gray-900 text-[16px]! sm:text-[16px]! md:text-[18px]! lg:text-[20px]! text-transparent bg-clip-text bg-linear-to-r from-[#86489B] to-[#F171AC]">
                                        {person.name}
                                    </div>
                                    <div className="text-center text-gray-500 text-[14px]! sm:text-[14px]! md:text-[14px]! font-medium leading-4.5">
                                        {person.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>

    );
}

























// "use client";
// import React from "react";
// import Image from "next/image";
// import { Archivo, Roboto } from "next/font/google";

// const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
// const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


// import Bipin from "/public/assets/img/about/Bipin Joshi.png";
// import Bini from "/public/assets/img/about/Bini Gopali (1).png";
// import Kunju from "/public/assets/img/about/Kunju Shrestha(1).png";
// import Archana from "/public/assets/img/about/Archana Pathak.png";
// import Prekchya from "/public/assets/img/about/Prekchya Maharjan 1.png";
// import Smita from "/public/assets/img/about/Smita Thapa.png";
// import Sunil from "/public/assets/img/about/Sunil Raj Joshi.png";

// export default function Employee() {
//     const employees = [
//         { id: 1, name: "Bipin Joshi", position: "CEO, Mortgage Broker", image: Bipin },
//         { id: 7, name: "Sunil Raj Joshi", position: "Credit Analyst", image: Sunil },
//         { id: 3, name: "Kunju Shrestha", position: "HR Manager", image: Kunju },
//         { id: 4, name: "Archana Pathak", position: "Loan Processing Manager", image: Archana },
//         { id: 6, name: "Smita Thapa", position: "Loan Processing Manager", image: Smita },
//         { id: 2, name: "Bini Gopali", position: "Client Relations Officer", image: Bini },
//         { id: 5, name: "Prekchya Maharjan", position: "Marketing Associate", image: Prekchya },
//     ];

//     return (
//         <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
//             <div className="container mx-auto flex flex-col gap-[50px]">
//                 <div className="flex flex-col gap-[15px]">
//                     <div className="text-center">
//                         <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
//                             Meet Our Team
//                         </span>
//                     </div>
//                     <div className="flex justify-center">
//                         <div className={`text-[#533641] sm:w-[60%] text-center ${roboto.className} leading-[25px] font-[400] tracking-[-1%]`}>
//                             Passionate professionals dedicated to delivering innovative digital
//                             solutions with precision and creativity.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
//                     {employees.map((emp) => (
//                         <div
//                             key={emp.id}
//                             className="relative p-6 flex flex-col items-center text-center w-[300px]"
//                         >
//                             <div className="w-40 h-40 mb-3 relative">
//                                 <Image
//                                     src={emp.image}
//                                     alt={emp.name}
//                                     className="rounded-full object-cover object-top w-40 h-40 border-4 border-white shadow-md relative z-10"
//                                 />
//                             </div>

//                             <div>
//                                 <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
//                                     {emp.name}
//                                 </span>
//                                 <p className="text-[#533641]! font-medium! text-sm mt-1">{emp.position}</p>
//                             </div>

//                             <div className="w-10 h-[3px] bg-linear-to-r from-[#86489B] to-[#F171AC] mt-0 rounded-full"></div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }







































// "use client";
// import React from "react";
// import Image from "next/image";
// import { Archivo, Roboto } from "next/font/google";

// const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
// const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


// import Bipin from "/public/assets/img/about/Bipin Joshi.png";
// import Bini from "/public/assets/img/about/Bini Gopali (1).png";
// import Kunju from "/public/assets/img/about/Kunju Shrestha(1).png";
// import Archana from "/public/assets/img/about/Archana Pathak.png";
// import Prekchya from "/public/assets/img/about/Prekchya Maharjan 1.png";
// import Smita from "/public/assets/img/about/Smita Thapa.png";
// import Sunil from "/public/assets/img/about/Sunil Raj Joshi.png";

// export default function Employee() {
//     const employees = [
//         { id: 1, name: "Bipin Joshi", position: "CEO, Mortgage Broker", image: Bipin },
//         { id: 2, name: "Bini Gopali", position: "Client Relations Officer", image: Bini },
//         { id: 3, name: "Kunju Shrestha", position: "HR Manager", image: Kunju },
//         { id: 4, name: "Archana Pathak", position: "Loan Processing Manager", image: Archana },
//         { id: 5, name: "Prekchya Maharjan", position: "Marketing Associate", image: Prekchya },
//         { id: 6, name: "Smita Thapa", position: "Loan Processing Manager", image: Smita },
//         { id: 7, name: "Sunil Raj Joshi", position: "Credit Analyst", image: Sunil },
//     ];

//     return (
//         <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6">
//             <div className="container mx-auto flex flex-col gap-[50px]">
//                 <div className="flex flex-col gap-[15px]">
//                     <div className="text-center">
//                         <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
//                             Meet Our Team
//                         </span>
//                     </div>
//                     <div className="flex justify-center">
//                         <div className={`text-[#533641] sm:w-[60%] text-center ${roboto.className} leading-[25px] font-[400] tracking-[-1%]`}>
//                             Passionate professionals dedicated to delivering innovative digital
//                             solutions with precision and creativity.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex flex-wrap justify-center gap-10">
//                     {employees.map((emp) => (
//                         <div key={emp.id} className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-2 w-[220px]" >
//                             <div className="w-40 h-40 mb-3 relative">
//                                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur-md opacity-30"></div>
//                                 <Image
//                                     src={emp.image}
//                                     alt={emp.name}
//                                     className="rounded-full object-cover object-top w-40 h-40 border-4 border-white shadow-md relative z-10"
//                                 />
//                             </div>

//                             <div>
//                                 <div>
//                                     <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
//                                         {emp.name}
//                                     </span>
//                                 </div>

//                                 <div>
//                                     <p className="!text-[#533641] text-sm mt-1">{emp.position}</p>
//                                 </div>
//                             </div>

//                             <div className="w-10 h-[3px] bg-gradient-to-r from-[#86489B] to-[#F171AC] mt-3 rounded-full"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }






















// "use client";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// import Bipin from "/public/assets/img/about/Bipin Joshi.png";
// import Bini from "/public/assets/img/about/Bini Gopali (1).png";
// import Kunju from "/public/assets/img/about/Kunju Shrestha(1).png";
// import Archana from "/public/assets/img/about/Archana Pathak.png";
// import Prekchya from "/public/assets/img/about/Prekchya Maharjan 1.png";
// import Smita from "/public/assets/img/about/Smita Thapa.png";
// import Sunil from "/public/assets/img/about/Sunil Raj Joshi.png";

// const teamMembers = [
//     { name: "Bipin Joshi", role: "CEO, Mortgage Broker", image: Bipin },
//     { name: "Sunil Raj Joshi", role: "Credit Analyst", image: Sunil },
//     { name: "Kunju Shrestha", role: "HR Manager", image: Kunju },
//     { name: "Archana Pathak", role: "Loan Processing Manager", image: Archana },
//     { name: "Smita Thapa", role: "Loan Processing Manager", image: Smita },
//     { name: "Bini Gopali", role: "Client Relations Officer", image: Bini },
//     { name: "Prekchya Maharjan", role: "Marketing Associate", image: Prekchya },
// ];

// export default function TeamSection() {
//     return (
//         <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 text-white">
//             <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-12 gap-12">

//                 <div className="md:col-span-4 flex flex-col justify-center">
//                     <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//                         Our people make us great
//                     </h2>

//                     <p className="text-gray-300 mt-5 text-lg">
//                         Here we focus on markets where technology, innovation, can unlock long-term value.
//                     </p>

//                     <p className="text-gray-300 mt-3 text-lg">
//                         You'll interact with talented professionals, will be challenged to solve difficult
//                         problems and think in new and creative ways.
//                     </p>

//                     <div>
//                         <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition">
//                             View more <ArrowRight size={18} />
//                         </button>
//                     </div>
//                 </div>

//                 <div className="md:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                     {teamMembers.map((member, index) => (
//                         <div
//                             key={index}
//                             className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg"
//                         >
//                             <div className="relative w-full h-56">
//                                 <Image
//                                     src={member.image}
//                                     alt="Team member photo"
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>

//                             <div className="p-4 text-center">
//                                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                                 <p className="text-gray-400 text-sm">{member.role}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }
































// "use client";
// import React from "react";
// import Image from "next/image";
// import { Archivo, Roboto } from "next/font/google";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const archivo = Archivo({
//     subsets: ["latin"],
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
// const roboto = Roboto({
//     subsets: ["latin"],
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// import Bipin from "/public/assets/img/about/Bipin Joshi.png";
// import Bini from "/public/assets/img/about/Bini Gopali (1).png";
// import Kunju from "/public/assets/img/about/Kunju Shrestha(1).png";
// import Archana from "/public/assets/img/about/Archana Pathak.png";
// import Prekchya from "/public/assets/img/about/Prekchya Maharjan 1.png";
// import Smita from "/public/assets/img/about/Smita Thapa.png";
// import Sunil from "/public/assets/img/about/Sunil Raj Joshi.png";

// export default function Employee() {
//     const employees = [
//         { id: 1, name: "Bipin Joshi", position: "CEO, Mortgage Broker", image: Bipin },
//         { id: 2, name: "Bini Gopali", position: "Client Relations Officer", image: Bini },
//         { id: 3, name: "Kunju Shrestha", position: "HR Manager", image: Kunju },
//         { id: 4, name: "Archana Pathak", position: "Loan Processing Manager", image: Archana },
//         { id: 5, name: "Prekchya Maharjan", position: "Marketing Associate", image: Prekchya },
//         { id: 6, name: "Smita Thapa", position: "Loan Processing Manager", image: Smita },
//         { id: 7, name: "Sunil Raj Joshi", position: "Credit Analyst", image: Sunil },
//     ];

//     return (
//         <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-20 px-4 sm:px-6 lg:px-10">
//             <div className="container mx-auto flex flex-col gap-10 md:gap-14 lg:gap-16">

//                 {/* Heading */}
//                 <div className="flex flex-col gap-4">
//                     <div className="text-center">
//                         <span className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-[700] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
//                             Meet Our Team
//                         </span>
//                     </div>
//                     <div className="flex justify-center">
//                         <p className={`text-[#533641] w-full sm:w-[70%] md:w-[60%] lg:w-[50%] text-center ${roboto.className} leading-[24px] md:leading-[28px] text-[14px] sm:text-[15px] md:text-[16px]`}>
//                             Passionate professionals dedicated to delivering innovative
//                             digital solutions with precision and creativity.
//                         </p>
//                     </div>
//                 </div>

//                 <Swiper
//                     modules={[Navigation, Autoplay]}
//                     spaceBetween={20}
//                     slidesPerView={1}
//                     autoplay={{ delay: 2500 }}
//                     loop={true}
//                     navigation
//                     breakpoints={{
//                         480: { slidesPerView: 1.3, spaceBetween: 20 },
//                         640: { slidesPerView: 2, spaceBetween: 25 },
//                         768: { slidesPerView: 2.5, spaceBetween: 25 },
//                         1024: { slidesPerView: 3, spaceBetween: 30 },
//                         1280: { slidesPerView: 4, spaceBetween: 30 },
//                     }}
//                     className="w-full custom-swiper-navs"
//                 >
//                     {employees.map((emp) => (
//                         <SwiperSlide key={emp.id}>
//                             <div className="relative h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px] w-full rounded-2xl overflow-hidden group border border-gray-200 bg-white">

//                                 <Image
//                                     src={emp.image}
//                                     alt={emp.name}
//                                     fill
//                                     className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                                 />

//                                 <div
//                                     className="
//                                     absolute bottom-0 left-0 w-full px-4 sm:px-5 md:px-6 
//                                     pt-4 sm:pt-5 md:pt-6 pb-4 
//                                     bg-gradient-to-t from-black/90 via-black/40 to-transparent
//                                     "
//                                 >
//                                     <h3 className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold! tracking-wide drop-shadow-lg text-start">
//                                         {emp.name}
//                                     </h3>

//                                     <p className="text-gray-300! text-[12px] sm:text-[13px] md:text-[14px] mt-1 text-start">
//                                         {emp.position}
//                                     </p>

//                                     <div className="text-start mt-2 w-14 h-[3px] bg-gradient-to-r from-[#86489B] to-[#F171AC] rounded-full"></div>
//                                 </div>

//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// }












