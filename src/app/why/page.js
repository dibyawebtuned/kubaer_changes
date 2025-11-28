"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

// Import images
import HumanIcon from "/public/assets/img/human.png";
import SmartChoiceIcon from "/public/assets/img/smart-choice.png";
import LocalSupportIcon from "/public/assets/img/local-support.png";
import SaveMoneyIcon from "/public/assets/img/save-money.png";
import QuickIcon from "/public/assets/img/quick.png";
import NeutralIcon from "/public/assets/img/neutral.png";

const points = [
  { img: HumanIcon, title: "We Speak Human, Not Bank", delay: 0 },
  { img: SmartChoiceIcon, title: "Better Value Than Just Rates", delay: 200 },
  { img: LocalSupportIcon, title: "Local Experts with a Global Mindset", delay: 400 },
  { img: SaveMoneyIcon, title: "We Help You Save Thousands", delay: 600 },
  { img: QuickIcon, title: "Fast, Responsive & Always There", delay: 900 },
  { img: NeutralIcon, title: "Independent, Unbiased Advice", delay: 1100 },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="wcus__container">

          {/* Title */}
          <div
            className="d-flex flex-column align-items-center justify-content-center mb-40"
            data-aos="fade-up"
          >
            <div className="mb-20">
              <h2 className="block text-white text-[38px] font-[600]! mb-0">Why Choose Us</h2>
              <div className="plain-divider"></div>
            </div>
          </div>

          {/* Points */}
          <div className="row">
            {points.map((point, index) => (
              <div
                key={index}
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={point.delay}
              >
                <div className="wcus__point">
                  <div className="wcus__icon">
                    <Image
                      src={point.img}
                      alt={point.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="wcus__content">
                    <h4>{point.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
