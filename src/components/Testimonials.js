"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { Archivo, Roboto } from "next/font/google";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


const testimonials = [
  {
    name: "Annie B",
    designation: "Our Happy Customer",
    content:
      "Bipin helped me through the whole process while buying my home. It was an overwhelming process and journey which he made simple and easy in every step. He took care of all other third parties and liaised with them which took pressure off me and my busy schedule. I highly recommend Bipin for any financial services.",
  },
  {
    name: "Subash Mishra",
    designation: "Our Happy Customer",
    content:
      "Bipin and the Kubaer Finance team guided us through our first home purchase. As first-time buyers, we were unsure of the process, but Bipin made it smooth and stress-free. His advice was clear, timely, and professional throughout. Highly recommend their service. We are very happy with the support.",
  },
  {
    name: "Monika Moktan",
    designation: "Our Happy Customer",
    content:
      "Mr. Bipin is professional, listens and understands his client well. He provided me the valuable information that assisted me in making my home buying journey easier. Easily approachable and always responsive. I highly recommend my mortgage broker Mr. Bipin.",
  },
  {
    name: "Adrian Hainz",
    designation: "Our Happy Customer",
    content:
      "Bipin has assisted us now several times. He is professional, up-front, and honest. He explains everything step by step, explains the best options, and made us feel at ease during the loan process. Our family looks forward to Bipin further assisting us in the future with our financial wellbeing.",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="section-title d-flex justify-content-center mb-40">
          <div>
            <h2>Testimonials</h2>
            <div className="gradient-divider"></div>
          </div>
        </div>
      </div>

      <div className="row mt-20 testimonial-section">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="quote">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <div className="content font-[400]">{item.content}</div>
                  <div className="details-review">
                    <div className="client-info">
                      <div className="client-name">{item.name}</div>
                      <div className="client-designation font-[400]">
                        {item.designation}
                      </div>
                    </div>
                    <div className="profile">
                      <span className="star">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section >
  );
}
