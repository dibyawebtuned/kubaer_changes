"use client";

import Link from "next/link";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


export default function ContactFormSection() {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row gap-10 items-center pb-16">
        {/* Left Side - Info */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="section-title contact__title-box">
            <h2 className="contact__title">
              We will work with you to build strategies to overcome the
              challenges you face
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#4A4A4A] font-[400]!">
              We will assist you in obtaining the loans you need to buy your
              first home, your cars, and investment properties that create
              wealth and opportunity for your family.
            </p>
          </div>

          <div>
            <Link href="#contact" className="btn-default">
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 rounded-2xl shadow-lg">
          <div className="contact-form-box">
            {/* Section Title */}
            <div className="d-flex justify-content-center mb-20">
              <h2 className="form__title">Get in touch with us</h2>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <form action="#" method="post" className="message-form">
                {/* Name & Phone */}
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 sm:mb-0">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                {/* Email & Loan Amount */}
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 sm:mb-0">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="loanAmount"
                      className="form-control"
                      placeholder="Loan Amount"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-20">
                  <textarea
                    className="form-control"
                    rows={2}
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="extra-btn contact__form--btn !font-[600]"
                  >
                    Talk to an Expert
                  </button>
                </div>

                <div className="form-message"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}