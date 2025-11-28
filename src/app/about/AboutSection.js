"use client";

import Image from "next/image";
import HomeLoanImg from "/public/assets/img/home-loan.png";
import InvestmentImg from "/public/assets/img/investment.png";
import CarImg from "/public/assets/img/car.png";
import SMSFImg from "/public/assets/img/smsf.png";
import RefinancingImg from "/public/assets/img/refinancing.png";
import BusinessImg from "/public/assets/img/business.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    { title: "Home Loan", img: HomeLoanImg, delay: 0 },
    { title: "Investment Loan", img: InvestmentImg, delay: 0.2 },
    { title: "Car & Personal Loan", img: CarImg, delay: 0.4 },
    { title: "SMSF Loan", img: SMSFImg, delay: 0.6 },
    { title: "Refinancing", img: RefinancingImg, delay: 0.8 },
    { title: "Business Loan", img: BusinessImg, delay: 1 },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="about-content">
            <div className="section-title d-flex justify-content-center mb-40">
              <div>
                <h2 className="text-center" data-aos="fade-up">Services</h2>
                <div className="gradient-divider" data-aos="fade-up" data-aos-delay="150"></div>
              </div>
            </div>

            {/* Services List */}
            <div className="why-choose-list">
              <div className="row">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-4 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={service.delay}
                  >
                    <a
                      href="#"
                      className="why-choose-item wow fadeInUp"
                      data-wow-delay={`${service.delay}s`}
                    >
                      <div className="icon-box">
                        <Image
                          src={service.img}
                          alt={service.title}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="why-choose-item-content text-center">
                        <h3>{service.title}</h3>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
