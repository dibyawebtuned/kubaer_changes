// ContactComponent.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ContactComponent() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);

    return (
        <div className="mt-5 sm:mt-0!">
            <div className="container mx-auto px-4 py-6 lg:py-15">
                {/* Contact Section */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Content: Info & Icons */}
                    <div className="flex-1 flex flex-col gap-6 lg:gap-8">
                        {/* Title */}
                        <div
                            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-once="true"
                        >
                            Let’s get to know <br /> each other!
                        </div>

                        {/* Sub-title */}
                        <div
                            className={`text-gray-600 text-[14px] sm:text-[16px] font-[400] ${roboto.className} leading-[22px] sm:leading-[25px] tracking-[-0.5%]`}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            data-aos-once="true"
                        >
                            Talk to us about your home loan needs and we will package up a home
                            loan with the features you want and tailor the rate to your circumstance.
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4">
                            {/* Row 1 */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Email */}
                                <div
                                    className="flex-1 flex items-center gap-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                >
                                    <MailIcon />
                                    <div>
                                        <div className="text-[16px] sm:text-[18px] font-semibold text-[#4d4d4d]">Email Us</div>
                                        <span className="text-sm sm:text-[14px]">loans@kubaer.com.au</span>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div
                                    className="flex-1 flex items-center gap-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                    data-aos-once="true"
                                >
                                    <PhoneIcon />
                                    <div>
                                        <div className="text-[16px] sm:text-[18px] font-semibold text-[#4d4d4d]">Call Us</div>
                                        <span className="text-sm sm:text-[14px]">1300 KUBAER</span>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Address */}
                                <div
                                    className="flex-1 flex items-center gap-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="300"
                                    data-aos-once="true"
                                >
                                    <AddressIcon />
                                    <div>
                                        <div className="text-[16px] sm:text-[18px] font-semibold text-[#4d4d4d]">Address</div>
                                        <span className="text-sm sm:text-[14px]">Plympton Park SA 5038, Australia</span>
                                    </div>
                                </div>

                                {/* Website */}
                                <div
                                    className="flex-1 flex items-center gap-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="400"
                                    data-aos-once="true"
                                >
                                    <WebsiteIcon />
                                    <div>
                                        <div className="text-[16px] sm:text-[18px] font-semibold text-[#4d4d4d]">Website</div>
                                        <span className="text-sm sm:text-[14px]">https://kubaer.com.au/</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Form */}
                    <div
                        className="flex-1 w-full"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-once="true"
                    >
                        <form className="flex flex-col gap-4 w-full">
                            {/* Name Fields */}
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac] w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac] w-full"
                                />
                            </div>

                            {/* Contact & Email */}
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Contact"
                                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac] w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac] w-full"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Anything else you'd like us to know"
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac] w-full min-h-[100px]"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-2 text-white bg-[#f171ac] px-6 py-2 rounded-lg hover:bg-[#86489b] transition w-full md:w-auto"
                            >
                                Submit Form
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Responsive iframe */}
            <div
                className="w-full overflow-hidden mt-12"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
            >
                <div className="relative w-full h-72 sm:h-[400px] md:h-[450px] lg:h-[500px]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.567066126427!2d151.0488392151968!3d-33.82783788067812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2fba18cf7df%3A0x3b3b928d9a9e74a2!2sRhodes%20NSW%202138!5e0!3m2!1sen!2sau!4v1693234557403!5m2!1sen!2sau"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </div>
    );
}

// You can create these as separate components for better readability
function MailIcon() {
    return (
        <svg width="25" height="25" viewBox="0 0 24 24" className="flex-shrink-0">
            <defs>
                <linearGradient id="mail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#86489B" />
                    <stop offset="100%" stopColor="#F171AC" />
                </linearGradient>
            </defs>
            <path fill="url(#mail-grad)" d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="25" height="25" viewBox="0 0 24 24" className="flex-shrink-0">
            <defs>
                <linearGradient id="phone-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#86489B" />
                    <stop offset="100%" stopColor="#F171AC" />
                </linearGradient>
            </defs>
            <path
                fill="url(#phone-grad)"
                d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.49 22 2 13.51 2 3a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.35.26 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.43 2.8z"
            />
        </svg>
    );
}

function AddressIcon() {
    return (
        <svg width="25" height="25" viewBox="0 0 24 24" className="flex-shrink-0">
            <defs>
                <linearGradient id="address-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#86489B" />
                    <stop offset="100%" stopColor="#F171AC" />
                </linearGradient>
            </defs>
            <path
                fill="url(#address-grad)"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
            />
        </svg>
    );
}

function WebsiteIcon() {
    return (
        <svg width="25" height="25" viewBox="0 0 24 24" className="flex-shrink-0">
            <defs>
                <linearGradient id="website-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#86489B" />
                    <stop offset="100%" stopColor="#F171AC" />
                </linearGradient>
            </defs>
            <path
                fill="url(#website-grad)"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.93 6h-3.2a15.35 15.35 0 0 0-1.46-3.42 8.006 8.006 0 0 1 4.66 3.42zM12 4c.73 0 1.44.17 2.1.47A13.945 13.945 0 0 0 12 10a13.96 13.96 0 0 0-2.1-5.53A7.962 7.962 0 0 1 12 4zm-3.68.58A15.35 15.35 0 0 0 6.92 10H3.72a8.006 8.006 0 0 1 4.6-5.42zM4.07 12h3.2a15.35 15.35 0 0 0 1.46 3.42A8.006 8.006 0 0 1 4.07 12zm3.2 2.58a15.35 15.35 0 0 0-1.46 3.42h3.2a8.006 8.006 0 0 1-1.74-3.42zm5.93 3.42h3.2a8.006 8.006 0 0 1-1.74 3.42 15.35 15.35 0 0 0-1.46-3.42zm1.46-1.42a15.35 15.35 0 0 0 1.46-3.42h-3.2a8.006 8.006 0 0 1 1.74 3.42zm-4.92 0h-3.2a8.006 8.006 0 0 1 1.74-3.42 15.35 15.35 0 0 0 1.46 3.42z"
            />
        </svg>
    );
}
