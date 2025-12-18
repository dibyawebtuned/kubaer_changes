"use client";
import Link from "next/link";
import Image from "next/image";
import WhiteLogo from "../../public/assets/img/white-logo.png";
import Picture_1 from "../../public/assets/img/Footer/Picture_1-removebg-preview.png";
import Picture_2 from "../../public/assets/img/Footer/Picture_2-removebg-preview.png";
import Picture_3 from "../../public/assets/img/Footer/Picture_3-removebg-preview.png";

import { Instagram, Facebook, Twitter } from "lucide-react";


import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer bg-[#0B1B30] text-white py-16">
      <div className="container mx-auto px-4">

        {/* ---- TOP GRID SECTION ---- */}
        <div className="
          grid
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4
          gap-10
        ">
          {/* ABOUT SECTION */}
          <div className="">
            <div className="footer__logo mb-4">
              <Image src={WhiteLogo} alt="Logo" className="w-40" />
            </div>

            <p className="text-sm leading-6 font-medium text-white">
              Kubaer Finance helps working families and migrants in Adelaide
              secure home, car, and investment loans with personalised guidance.
            </p>

            {/* CONTACTS */}
            <div className="mt-2 flex flex-col gap-3 text-white">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a className="font-bold text-white hover:text-[#F171AC]! transition-all duration-300" href="tel:08 8166 2682">1300 KUBAER</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a className="font-bold text-white hover:text-[#F171AC]! transition-all duration-300" href="mailto:loans@kubaer.com.au">
                  loans@kubaer.com.au
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p className="font-medium text-white m-0">Plympton Park SA 5038, Australia</p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:pl-10">
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>

            <ul className="space-y-3 pl-0!">
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/about">About us</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/services">Services</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/resources">Resources</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/BlogList">Blog</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>

            <ul className="space-y-3 pl-0!">
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/home-loan">Home Loan</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/investment-loan">Investment Loan</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/car-personal-loan">Car & Personal Loan</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/smsf-loan">SMSF Loan</Link></li>
              <li><Link className="font-semibold text-white hover:text-[#F171AC]! transition-all duration-300" href="/refinancing">Refinancing</Link></li>
            </ul>
          </div>

          {/* COMMUNITY / NEWSLETTER */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Join our Community</h4>

            <p className="text-sm leading-6 font-medium mb-4 text-white">
              Join Kubaer Finance for expert loans and trusted support.
            </p>

            {/* Newsletter */}
            <div>
              <form className="w-full mb-5">
                <div className="flex bg-white rounded-full overflow-hidden">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="px-3 py-2 flex-1 text-gray-900 text-sm outline-none"
                  />
                  <button className="px-4 bg-[#F171AC] text-white hover:bg-[#d85f97] transition-all duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>


            {/* SOCIAL LINKS */}
            <ul className="flex gap-4 text-xl p-0">
              <li className="p-2 rounded-full border border-white">
                <Link href="#">
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
              </li>

              <li className="p-2 rounded-full border border-white">
                <Link href="#">
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
              </li>

              <li className="p-2 rounded-full border border-white">
                <Link href="#">
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Line */}
        <div className="w-full h-[1px] bg-gray-300 mt-4"></div>

        {/* ---- COPYRIGHT SECTION ---- */}
        <div className="
          mt-4
          mb-4
          grid grid-cols-1
          md:grid-cols-3
          gap-8
          text-start
        ">
          <p className="text-sm text-white m-0!">
            © Kubaer Finance {currentYear}. All Rights Reserved.
          </p>

          <div className="flex justify-center gap-3 text-white">
            <Image src={Picture_1} alt="" className="w-[90px] h-auto" />
            <Image src={Picture_2} alt="" className="w-[90px] h-auto" />
            <Image src={Picture_3} alt="" className="w-[90px] h-auto" />
          </div>

          <p className="text-sm text-white m-0! sm:text-end">
            Designed & Developed by{" "}
            <a
              className="underline text-white hover:text-[#F171AC]! transition-all duration-300"
              href="https://www.murphystechnology.com.au/"
              target="_blank"
            >
              Murphys Technology Pty Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
