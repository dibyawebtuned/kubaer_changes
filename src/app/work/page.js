"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Landmark, Building2, Banknote, LineChart } from "lucide-react";

export default function HowItWorks() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="section-padding pt-0">
      <div className="container">
        {/* Title Section */}
        <div className="section-title d-flex justify-content-center mb-40">
          <div>
            <h2 data-aos="fade-up">How it Works</h2>
            <div className="gradient-divider" data-aos="fade-up"
              data-aos-delay="150"></div>
          </div>
        </div>

        {/* Steps Container */}
        <div className="steps-container">
          <div className="steps-grid">
            {/* Step 1 */}
            <div className="step-card step-4 wow fadeInUp" data-aos="fade-up"
              data-aos-delay="100">
              <div className="step-header">
                <div className="step-number">01</div>
                <div className="progress-dots">
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                </div>
              </div>
              <div className="step-icon-container">
                <div className="step-icon-glow"></div>
                <div className="step-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h4 className="step-title">Book a Free Call</h4>
                <p className="step-description">Talk to a local expert for tailored advice.</p>
              </div>
              <div className="hover-indicator"></div>
            </div>

            {/* Step 2 */}
            <div className="step-card step-1 wow fadeInUp" data-aos="fade-up"
              data-aos-delay="200">
              <div className="step-header">
                <div className="step-number">02</div>
                <div className="progress-dots">
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                </div>
              </div>
              <div className="step-icon-container">
                <div className="step-icon-glow"></div>
                <div className="step-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h4 className="step-title">Compare 30+ Lenders</h4>
                <p className="step-description">We find you the best deal in the market.</p>
              </div>
              <div className="hover-indicator"></div>
            </div>

            {/* Step 3 */}
            <div className="step-card step-2 wow fadeInUp" data-aos="fade-up"
              data-aos-delay="300">
              <div className="step-header">
                <div className="step-number">03</div>
                <div className="progress-dots">
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                </div>
              </div>
              <div className="step-icon-container">
                <div className="step-icon-glow"></div>
                <div className="step-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h4 className="step-title">Secure Your Loan</h4>
                <p className="step-description">Get step-by-step support to approval.</p>
              </div>
              <div className="hover-indicator"></div>
            </div>

            {/* Step 4 */}
            <div className="step-card step-3 wow fadeInUp" data-aos="fade-up"
              data-aos-delay="400">
              <div className="step-header">
                <div className="step-number">04</div>
                <div className="progress-dots">
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                  <div className="progress-dot"></div>
                </div>
              </div>
              <div className="step-icon-container">
                <div className="step-icon-glow"></div>
                <div className="step-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h4 className="step-title">Settle with Confidence</h4>
                <p className="step-description">We guide you through to the finish line.</p>
              </div>
              <div className="hover-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
