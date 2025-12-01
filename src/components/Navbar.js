"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Logo from "/public/assets/img/new-logo.png";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import "/public/assets/css/custom.css";
import "/public/assets/css/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <header className="main-header w-full">
      <nav className="navbar">
        <div className="container d-flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="navbar-brand">
            <Image
              src={Logo}
              alt="Kubaer Logo"
              className="w-[200px] h-auto"
              priority
            />
          </Link>

          {/* MOBILE + TABLET MENU BUTTON (up to 1024px) */}
          <button
            className="lg:hidden flex flex-col gap-1 justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-[2px] w-6 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-[2px] w-6 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* FIXED MOBILE/TABLET MENU */}
          <div
            className={`
              nav-menu 
              ${menuOpen ? "open" : ""} 
              fixed top-[80px] left-0 w-full 
              bg-white/98 z-[9999]
              lg:static lg:w-auto lg:bg-transparent lg:z-auto
            `}
          >
            <ul className={`nav-list px-5!  font-[500] ${archivo.className}`}>

              {/* SERVICES DROPDOWN */}
              <li
                className={`has-dropdown ${servicesOpen ? "open" : ""} flex flex-col items-start!`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <button className="flex items-center gap-2 px-[8px] py-[5px] sm:py-[25px] font-[600] text-[#86489B] hover:text-[#F171AC]">
                  Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <ul className="dropdown">
                  <li><Link href="#">Home Loan</Link></li>
                  <li><Link href="#">Investment Loan</Link></li>
                  <li><Link href="#">Car & Personal Loan</Link></li>
                  <li><Link href="#">SMSF Loan</Link></li>
                  <li><Link href="#">Refinancing</Link></li>
                  <li><Link href="#">Business Loan</Link></li>
                  {/* <li><Link href="/home-loan">Home Loan</Link></li>
                  <li><Link href="/investment-loan">Investment Loan</Link></li>
                  <li><Link href="/car-personal-loan">Car & Personal Loan</Link></li>
                  <li><Link href="/smsf-loan">SMSF Loan</Link></li>
                  <li><Link href="/refinancing">Refinancing</Link></li>
                  <li><Link href="/business-loan">Business Loan</Link></li> */}
                </ul>
              </li>

              {/* ABOUT */}
              <li className="flex items-center gap-2 pb-[10px] sm:py-[15px]">
                <Link href="#" className="!font-[600] text-[#86489B] hover:text-[#F171AC] px-2">
                  About Us
                </Link>
                {/* <Link href="/about" className="!font-[600] text-[#86489B] hover:text-[#F171AC] px-2">
                  About Us
                </Link> */}
              </li>

              {/* CALCULATOR DROPDOWN */}
              <li
                className={`has-dropdown ${calculatorOpen ? "open" : ""} flex flex-col items-start!`}
                onClick={() => setCalculatorOpen(!calculatorOpen)}
              >
                <button className="flex items-center gap-2 px-[8px] py-[5px] sm:py-[25px] font-[600] text-[#86489B] hover:text-[#F171AC]">
                  Calculator
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${calculatorOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <ul className="dropdown">
                  <li><Link href="#">Stamp Duty</Link></li>
                  <li><Link href="#">Refinancing</Link></li>
                  <li><Link href="#">Borrowing Capacity</Link></li>
                  <li><Link href="#">Repayments</Link></li>
                  <li><Link href="#">Loan Comparison</Link></li>
                  <li><Link href="#">Budget Planner</Link></li>
                </ul>
                {/* <ul className="dropdown">
                  <li><Link href="/calculator/stampduty">Stamp Duty</Link></li>
                  <li><Link href="/calculator/refinancing">Refinancing</Link></li>
                  <li><Link href="/calculator/borrowcapital">Borrowing Capacity</Link></li>
                  <li><Link href="/calculator/repayment">Repayments</Link></li>
                  <li><Link href="/calculator/loancomparison">Loan Comparison</Link></li>
                  <li><Link href="/calculator/budgetplanner">Budget Planner</Link></li>
                </ul> */}
              </li>

              {/* BLOG */}
              <li className="flex items-center sm:py-[15px] text-[#86489B] hover:text-[#F171AC]">
                <Link href="#" className="font-[600]! px-2">Blog</Link>
              </li>
              {/* <li className="flex items-center sm:py-[15px] text-[#86489B] hover:text-[#F171AC]">
                <Link href="/BlogList" className="font-[600]! px-2">Blog</Link>
              </li> */}

              {/* FAQ */}
              <li className="flex items-center py-[10px] sm:py-[15px] text-[#86489B] hover:text-[#F171AC]">
                <Link href="#" className="font-[600]! px-2">FAQs</Link>
              </li>
              {/* <li className="flex items-center py-[10px] sm:py-[15px] text-[#86489B] hover:text-[#F171AC]">
                <Link href="/faq" className="font-[600]! px-2">FAQs</Link>
              </li> */}

              {/* CONTACT */}
              <li className="flex items-center pb-[10px] sm:py-[15px] text-[#86489B] hover:text-[#F171AC]">
                <Link href="#" className="font-[600]! px-2">Contact Us</Link>
              </li>
              {/* <li className="flex items-center pb-[10px] sm:py-[15px] text-[#86489B] hover:text-[#F171AC]">
                <Link href="/contact" className="font-[600]! px-2">Contact Us</Link>
              </li> */}
            </ul>

            {/* CALL BUTTON */}
            <div className="header-btn flex p-4 lg:p-0">
              <a href="tel:1300Kubaer" className="extra-btn btn-default">
                1300 Kubaer
              </a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
