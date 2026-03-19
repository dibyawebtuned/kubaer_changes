import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import Link from "next/link";
import BlogDetailImage from "/public/assets/img/hero-image.jpg";

import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

/* ================= BLOG DATA ================= */

const blogs = [
  {
    id: "1",
    title: "Understanding Home Loans",
    image: "/assets/img/landing-image4.jpg",
    date: "Sep 28, 2025",
  },
  {
    id: "2",
    title: "Smart Real Estate Investment Tips",
    image: "/assets/img/landing-image.jpg",
    date: "Sep 20, 2025",
  },
  {
    id: "3",
    title: "Top 5 Mistakes to Avoid as a Buyer",
    image: "/assets/img/hero-image.jpg",
    date: "Sep 15, 2025",
  },
];

/* ================= REQUIRED FOR STATIC EXPORT ================= */

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

/* ================= PAGE ================= */

export default function BlogDetailsPage({ params }) {
  const { id } = params;

  const currentBlog = blogs.find((blog) => blog.id === id);

  if (!currentBlog) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-2xl font-semibold">Blog not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-white">
        {/* ===== HERO ===== */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src={currentBlog.image}
            alt={currentBlog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col gap-[10px] justify-center items-center text-center px-4">
            <span className="bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Refinance
            </span>
            <div className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
              {currentBlog.title}
            </div>
            <span className="text-md text-white mb-2 flex items-center gap-[5px]">
              <Calendar className="h-3 w-3" />
              <span>{currentBlog.date}</span>
            </span>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* ===== MAIN CONTENT ===== */}
            <div className="col-span-12 lg:col-span-8 prose text-gray-700 sm:py-6 sm:px-4">

              <div className="flex flex-col gap-1 mt-[30px]">
                <div className="text-[26px] sm:text-[34px] leading-snug font-medium pb-2 bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                  What We Offer: Loans for First Home Buyers
                </div>
                <p className="!font-[400] text-justify">
                  Embarking on the journey to buy your first home in Australia is one of life’s most exciting milestones.
                  It marks the beginning of independence, security, and long-term investment.
                </p>
              </div>

              <div className="w-full h-auto mt-6">
                <Image
                  src={BlogDetailImage}
                  alt="Blog Detail"
                  className="rounded-[20px]"
                />
              </div>

              <div className="mt-6">
                <div className="text-[22px] sm:text-[24px] font-[500]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                    Key Takeaways
                  </span>
                </div>
                <ol className="list-decimal list-inside space-y-2 mt-3">
                  <li>Smaller frequent payments can reduce total interest.</li>
                  <li>Fortnightly repayments often result in one extra payment annually.</li>
                  <li>Monthly repayments are convenient but may cost more long-term.</li>
                </ol>
              </div>

            </div>

            {/* ===== SIDEBAR ===== */}
            <div className="col-span-12 lg:col-span-4 prose text-gray-700 py-6 px-4 bg-[#FDF2F9]">
              <div className="text-[30px] font-semibold mb-4 bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                Other Blogs
              </div>

              <ul className="p-0">
                {blogs.map((blog) => (
                  <li
                    key={blog.id}
                    className="flex items-center gap-3 hover:bg-white p-2 rounded transition"
                  >
                    <div className="w-16 h-12 relative flex-shrink-0">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <Link
                        href={`/BlogList/${blog.id}`}
                        className="text-sm font-medium text-[#86489B] hover:text-[#F171AC]"
                      >
                        {blog.title}
                      </Link>
                      <div className="text-xs text-gray-500">{blog.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
