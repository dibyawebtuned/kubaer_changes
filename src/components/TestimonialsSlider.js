"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Register modules manually
SwiperCore.use([Autoplay, Pagination]);

export default function TestimonialsSlider({ testimonials = [] }) {
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <Swiper
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
            }}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <blockquote className="border-l-4 border-purple-500 bg-white p-6 pl-6 flex flex-col gap-[30px] rounded-xl">
                        <div className="text-[14px] leading-[20px] tracking-[0.3px] italic">
                            "{testimonial.content}"
                        </div>
                        <span className="text-[16px] font-semibold not-italic">
                            – {testimonial.author}
                        </span>
                    </blockquote>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
