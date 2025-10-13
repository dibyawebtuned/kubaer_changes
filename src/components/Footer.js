"use client";
import Image from "next/image";
import WhiteLogo from "../../public/assets/img/white-logo.png";
import Picture_1 from "../../public/assets/img/Footer/Picture_1-removebg-preview.png";
import Picture_2 from "../../public/assets/img/Footer/Picture_2-removebg-preview.png";
import Picture_3 from "../../public/assets/img/Footer/Picture_3-removebg-preview.png";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-8">
            {/* About Footer Start */}
            <div className="about-footer">
              <div className="footer__logo">
                <Image src={WhiteLogo} alt="Logo" />
              </div>

              <div>
                <p className="footer__description !font-[500]">
                  Kubaer Finance helps working families and migrants in Adelaide
                  secure home, car, and investment loans with personalised
                  guidance and expert financial strategies.
                </p>
              </div>

              {/* Footer Contact Box Start */}
              <div className="footer-contact-box">
                <div className="footer-contact-item">
                  <p className="!font-[500]">Call Us:</p>
                  <a className="!font-[700]" href="tel:08 8166 2682">1300 KUBAER</a>
                </div>
                <div className="footer-contact-item">
                  <p className="!font-[500]">Email Us:</p>
                  <a className="!font-[700]" href="mailto:loans@kubaer.com.au">loans@kubaer.com.au</a>
                </div>
                <div className="footer-contact-item">
                  <p className="!font-[500]">Location:</p>
                  <p className="!font-[500]">Plympton Park SA 5038, Australia</p>
                </div>
              </div>
              {/* Footer Contact Box End */}
            </div>
            {/* About Footer End */}
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-4">
            <div className="footer-quick-links">
              <div className="section-title">
                <h4 className="!font-[700]" style={{ color: "white" }}>Quick Links</h4>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><a className="!font-[600]" href="/about">about us</a></li>
                  <li><a className="!font-[600]" href="/services">services</a></li>
                  <li><a className="!font-[600]" href="/resources">resources</a></li>
                  <li><a className="!font-[600]" href="/BlogList">blog</a></li>
                  <li><a className="!font-[600]" href="/contact">contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4">
            <div className="footer-quick-links footer__services">
              <div className="section-title">
                <h4 className="!font-[700]" style={{ color: "white"}}>Services</h4>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><a className="!font-[600]" href="/home-loan">Home Loan</a></li>
                  <li><a className="!font-[600]" href="/investment-loan">Investment Loan</a></li>
                  <li><a className="!font-[600]" href="car-personal-loan">Car & Personal Loan</a></li>
                  <li><a className="!font-[600]" href="smsf-loan">SMSF Loan</a></li>
                  <li><a className="!font-[600]" href="/refinancing">Refinancing</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social / Newsletter */}
          <div className="col-lg-3 col-md-6">
            <div className="section-title">
              <h4 className="!font-[700]" style={{ color: "white"}}>Join our Community</h4>
            </div>

            <div className="footer-social-links">
              <p className="!font-[500]">Join Kubaer Finance for expert loans and trusted support.</p>

              {/* Newsletter Subscription */}
              <div className="newsletter">
                <form className="newsletter-form">
                  <div className="input-container">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="newsletter-input !font-[500] text-gray-950"
                    />
                    <button type="submit" className="arrow-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>

              <ul>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-copyright-text">
                <p>Copyright © Kubaer Finance {currentYear}.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-images d-flex justify-content-center gap-3">
                <Image src={Picture_1} alt="Image 1" width={50} height={50} />
                <Image src={Picture_2} alt="Image 2" width={50} height={50} />
                <Image src={Picture_3} alt="Image 3" width={50} height={50} />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-design-text">
                <p>
                  Designed & Developed by{" "}
                  <a href="https://www.murphystechnology.com.au/" target="_blank" rel="noopener noreferrer">
                    Murphys Technology Pty Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
