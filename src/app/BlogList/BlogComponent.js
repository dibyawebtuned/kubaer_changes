"use client";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Calendar } from 'lucide-react';
import Image from "next/image";
import { Archivo, Roboto } from "next/font/google";

import Blog_img_1 from "/public/assets/img/founder.png";
import Blog_img_2 from "/public/assets/img/landing-image.jpg";
import Blog_img_3 from "/public/assets/img/hero-image.jpg";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export default function BlogComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const router = useRouter();

  const tabs = ["All", "Investment", "Home Buying", "Tips", "Buying", "Mortgage"];

  const blogs = [
    {
      id: 1,
      title: "Understanding Home Loans",
      desc: "",
      image: Blog_img_1,
      category: "Home Buying",
    },
    {
      id: 2,
      title: "Smart Real Estate Investment Tips",
      desc: "",
      image: Blog_img_2,
      category: "Buying",
    },
    {
      id: 3,
      title: "Top 5 Mistakes to Avoid as a Buyer",
      desc: "Learn about the most common mistakes new home buyers make and how to avoid them.",
      image: Blog_img_3,
      category: "Tips",
    },
    {
      id: 4,
      title: "Top 5 Mistakes to Avoid as a Buyer",
      desc: "Learn about the most common mistakes new home buyers make and how to avoid them.",
      image: Blog_img_3,
      category: "Mortgage",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/blogs?search=${encodeURIComponent(query)}`);
  }

  // Filter blogs based on active tab
  const filteredBlogs =
    activeTab === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeTab);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-[60px]">
        {/* Heading & Search */}
        <div className="w-full flex flex-col gap-[30px]">
          {/* Heading */}
          <div className="text-center flex flex-col gap-[10px]">
            {/* Title */}
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-once="true">
              <span className="text-[40px] md:text-5xl font-[500] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                Our Blogs
              </span>
            </div>

            {/* Sub-title */}
            <div className={`text-gray-600 text-[16px] font-[400] ${roboto.className} leading-[25px] tracking-[-1%]`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Explore our range of articles to guide your journey as a home buyer or investor.
            </div>
          </div>

          {/* Search */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center shadow-sm rounded-full overflow-hidden"
              role="search"
              aria-label="Blog search"
            >
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blogs..."
                className="w-full rounded-full border border-gray-200 py-3 pl-12 pr-12 text-base focus:border-blue-700 focus:ring-2 focus:ring-blue-200 outline-none"
              />

              {/* Magnifier Icon */}
              <span className="absolute left-4 text-gray-400 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                  />
                </svg>
              </span>

              {/* Clear Button */}
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-4 text-gray-400 hover:text-gray-600 text-lg"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Tabs & Cards */}
        <div className="">
          {/* Tabs */}
          <div className="w-full mb-10 rounded-full p-[2px] bg-gradient-to-r from-[#86489B] to-[#F171AC]">
            <div className="flex justify-between items-center bg-white rounded-full px-1 py-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{ borderRadius: '30px' }}
                  className={`flex-1 text-sm font-medium text-center px-4 py-2 transition
          ${activeTab === tab
                      ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white shadow-[0_4px_15px_rgba(134,72,155,0.3),0_0_10px_rgba(241,113,172,0.2)]"
                      : "text-gray-600 hover:text-[#86489B] hover:font-bold"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards */}
          <div className="flex flex-wrap gap-[25px]">
            {filteredBlogs.map((blog, index) => (
              <Link
                key={blog.id}
                href={`/BlogList/${blog.id}`}
                className="group w-full sm:w-[320px] md:w-[370px] lg:w-[400px] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-200"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 150}
                data-aos-once="true"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden rounded-t-xl hover:cursor-pointer">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 370px, 400px"
                    />
                  </div>

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 z-10 transition duration-300"
                    style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
                  ></div>

                  {/* Category Badge */}
                  <span className={`absolute top-3 left-3 text-xs font-medium text-white px-3 py-1 rounded-full shadow z-20
               bg-gradient-to-r from-[#86489B] to-[#F171AC] ${roboto.className}`}>
                    {blog.category}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-3 w-full flex flex-col">
                  {/* Blog Date */}
                  <span className={`text-sm text-[#86489B] mb-2 flex items-center gap-[5px] ${roboto.className}`}>
                    <Calendar className="h-3 w-3" />
                    {blog.date || "Sep 28, 2025"}
                  </span>

                  <div className="flex flex-col">
                    {/* Blog Title */}
                    <div className={`text-[22px] font-[500] leading-[1.25] mb-2 text-[#3f3f3f] hover:cursor-pointer
          group-hover:bg-gradient-to-r group-hover:from-[#86489B] group-hover:to-[#F171AC] 
          group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {blog.title}
                    </div>

                    {/* Blog Description */}
                    <div className={`mb-2 text-gray-500 text-justify font-[400] ${roboto.className} leading-[25px] tracking-[-0.1px]`}>
                      {blog.desc ||
                        "Understanding the fundamentals of home loans is crucial for anyone planning to buy a house. Interest rates can vary depending on the lender, loan type, and repayment term."}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
