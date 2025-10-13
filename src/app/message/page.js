"use client";

import Image from "next/image";
import Founder from "/public/assets/img/founder.png";

import { Archivo, Roboto } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


export default function FounderMessage() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="section-title d-flex justify-content-center mb-40">
          <div>
            <h2>Message from Founder</h2>
            <div className="gradient-divider"></div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Founder Image */}
          <div className="col-md-5">
            <div className="wow fadeIn founder-image">
              <Image
                src={Founder}
                alt="founder"
                width={500}   
                height={500}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Founder Message */}
          <div className="col-md-7 founder-section">
            <p className="founder-message !font-[400]">
              At Kubaer Finance, our mission is to help working families and
              migrants in Adelaide build a secure financial future. With over 20
              years of experience in finance, healthcare, and retail, I started
              this journey to guide everyday Australians through life’s biggest
              financial decisions—whether it’s buying their first home, a car,
              or investing in property.
            </p>
            <p className="founder-message !font-[400]">
              We believe in more than just securing loans—we’re here to provide
              personalised guidance, clear strategies, and ongoing support at
              every stage. Your goals become our goals, and we’re committed to
              helping you achieve them with confidence.
            </p>
            <h4 className="founder-name !font-[700]">Bipin Joshi</h4>
            <h5 className="founder-title !font-[500]">Founder</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
