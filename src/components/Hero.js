
"use client";

import Image from "next/image";
import RibbonStar from "/public/assets/img/star2.svg";
// import LandingImage from "/public/assets/img/landing-image4.jpg";
import LandingImage from "/public/assets/img/banner.jpg";
import "../../public/assets/css/hero.css";

import Link from "next/link";

export default function AboutHeader() {
  return (
    <div
      className="about-page-header relative overflow-hidden">
      {/* Full-Width Background Image as Overlay */}
      <div
        className="page-header-image wow fadeIn"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Image
          className="rounded-none!"
          src={LandingImage}
          alt="Hero Banner Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Dark Overlay (optional) */}
      <div className="landing__overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: -1,
        }}>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-page-header-box page-header-box">
              <div className="wow fadeInUp flex">
                <span className=" flex flex-row items-center hero_badge">
                  {/* Sparkles Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#86489b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                    <path d="M20 2v4" />
                    <path d="M22 4h-4" />
                    <circle cx="4" cy="20" r="2" />
                  </svg>{" "}
                  Trusted Finance Experts
                </span>
              </div>

              {/* <h1 className="wow fadeInUp" data-wow-delay="0.1s"> */}
              <div className="text-flipdrop 
              text-[28px] leading-[45px] 
    sm:text-[34px] sm:leading-[42px]
    md:text-[42px] md:leading-[52px]
    lg:text-[52px] lg:leading-[62px] 
    font-[700] text-white mb-[1rem]">
                Tailored solutions for every step of your property journey
              </div>

              <p className="
              // hero-subtitle 
              wow 
              fadeInUp 
              flex 
              items-center 
              gap-1
              text-[16px] 
    sm:text-[18px]
    md:text-[20px]
    lg:text-[22px]" 
              data-wow-delay="0.2s">
                Get started in 3 simple steps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </p>

              <ul className="hero__points">
                <li
                  className="hero__single-point wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <Image
                    src={RibbonStar}
                    alt="star bullet"
                    width={20}
                    height={20}
                  />
                  <p>Book your free call – Speak to a local expert</p>
                </li>
                <li
                  className="hero__single-point wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <Image
                    src={RibbonStar}
                    alt="star bullet"
                    width={20}
                    height={20}
                  />
                  <p>We compare 30+ lenders – You get the best deal</p>
                </li>
                <li
                  className="hero__single-point wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <Image
                    src={RibbonStar}
                    alt="star bullet"
                    width={20}
                    height={20}
                  />
                  <p>Secure your loan – With guidance all the way</p>
                </li>
              </ul>

              <div
                className="flex flex-row gap-4 wow fadeInUp "
                data-wow-delay="0.6s"
              >
                <div>
                  <Link href="tel:1300Kubaer" className="btn-default">
                    Book Your Free Discovery Call
                  </Link>
                </div>

                <div>
                  <Link
                    href="https://maps.app.goo.gl/VQT7EHtuWXBZaN6a9"
                    className="extra-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}