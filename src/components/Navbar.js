"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Logo from "../../public/assets/img/new-logo.png";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

// Import your custom CSS files
import "../../public/assets/css/custom.css";
import "../../public/assets/css/navbar.css";

export default function Navbar() {
  // State for menu and dropdowns
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="container d-flex justify-between items-center">
          {/* --------------------------------------------------- */}
          {/*                     LOGO SECTION                    */}
          {/* --------------------------------------------------- */}
          <Link href="/" className="navbar-brand">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[200px] h-auto"
            />
          </Link>

          {/* --------------------------------------------------- */}
          {/*                MOBILE MENU TOGGLE BUTTON             */}
          {/* --------------------------------------------------- */}
          <button
            className="mobile-toggle d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* --------------------------------------------------- */}
          {/*                   NAVIGATION MENU                    */}
          {/* --------------------------------------------------- */}
          <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <ul className={`nav-list font-[500] ${archivo.className}`}>

              {/* =================================================== */}
              {/*                     SERVICES DROPDOWN               */}
              {/* =================================================== */}
              <li
                className={`has-dropdown ${servicesOpen ? "open" : ""}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <button className="flex items-center gap-2 px-[8px] py-[25px] font-[600] text-[#86489B] hover:text-[#F171AC] cursor-pointer transition-colors duration-300">
                  Services

                  {/* Dropdown arrow icon */}
                  <ChevronDown
                    size={20}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu for Services */}
                <ul className="dropdown">
                  <li>
                    <Link href="/home-loan">Home Loan</Link>
                  </li>

                  <li>
                    <Link href="/investment-loan">Investment Loan</Link>
                  </li>

                  <li>
                    <Link href="/car-personal-loan">Car & Personal Loan</Link>
                  </li>

                  <li>
                    <Link href="/smsf-loan">SMSF Loan</Link>
                  </li>

                  <li>
                    <Link href="/refinancing">Refinancing</Link>
                  </li>

                  <li>
                    <Link href="/business-loan">Business Loan</Link>
                  </li>
                </ul>
              </li>

              {/* =================================================== */}
              {/*                   ABOUT              */}
              {/* =================================================== */}
              <li className="flex items-center gap-2 px-[8px] py-[15px] cursor-pointer transition-colors duration-300">
                <Link
                  href="/about"
                  className="!font-[600]"
                >
                  About Us
                </Link>
              </li>

              {/* =================================================== */}
              {/*                   CALCULATOR DROPDOWN              */}
              {/* =================================================== */}
              <li
                className={`has-dropdown ${calculatorOpen ? "open" : ""}`}
                onClick={() => setCalculatorOpen(!calculatorOpen)}
              >
                <button className="flex items-center gap-2 px-[8px] py-[25px] font-[600] text-[#86489B] hover:text-[#F171AC] cursor-pointer transition-colors duration-300">
                  Calculator

                  {/* Dropdown arrow icon */}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${calculatorOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu for Calculator */}
                <ul className="dropdown">
                  <li>
                    <Link href="/calculator/stampduty">Stamp Duty</Link>
                  </li>

                  <li>
                    <Link href="/calculator/refinacnig">Refinancing</Link>
                  </li>

                  <li>
                    <Link href="/borrow-capacity">Borrowing Capacity</Link>
                  </li>

                  <li>
                    <Link href="/repayment">Repayments</Link>
                  </li>

                  <li>
                    <Link href="/loan-comparison">Loan Comparison</Link>
                  </li>

                  <li>
                    <Link href="/budget-planner">Budget Planner</Link>
                  </li>
                </ul>
              </li>

              {/* =================================================== */}
              {/*                   OTHER MAIN LINKS                 */}
              {/* =================================================== */}

              <li className="flex items-center gap-2 px-[8px] py-[15px] font-[600] text-[#86489B] hover:text-[#F171AC] cursor-pointer transition-colors duration-300">
                <Link href="/BlogList"
                  className="!font-[600]">
                  Blog
                </Link>
              </li>

              <li className="flex items-center gap-2 px-[8px] py-[15px] text-[#86489B] hover:text-[#F171AC] cursor-pointer transition-colors duration-300">
                <Link href="/faq"
                  className="!font-[600]">
                  FAQs
                </Link>
              </li>

              <li className="flex items-center gap-2 px-[8px] py-[15px] font-[600] text-[#86489B] hover:text-[#F171AC] cursor-pointer transition-colors duration-300">
                <Link href="/contact"
                  className="!font-[600]">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* =================================================== */}
            {/*                   CALL BUTTON AREA                  */}
            {/* =================================================== */}
            <div className="header-btn flex">
              <a
                href="tel:1300Kubaer"
                className="extra-btn btn-default"
              >
                1300 Kubaer
              </a>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}