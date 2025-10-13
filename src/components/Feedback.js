"use client";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


export default function ContactFormSection() {
  return (
    <section className="form-section section-padding pt-0">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Info */}
          <div className="col-lg-6">
            <div className="section-title contact__title-box">
              <h2 className="contact__title">
                We will work with you to build strategies to overcome the
                challenges you face
              </h2>
              <p className="contact__subtitle !font-[500]">
                We will assist you in obtaining the loans you need to buy your
                first home, your cars, and investment properties that create
                wealth and opportunity for your family.
              </p>
            </div>

            <a href="#contact" className="btn-default">
              Get Started
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6">
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
                    <div className="col-md-6">
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
                    <div className="col-md-6">
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
      </div>
    </section>
  );
}
