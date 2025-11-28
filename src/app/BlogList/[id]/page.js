import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from 'lucide-react';
import Link from "next/link";
import BlogDetailImage from "/public/assets/img/hero-image.jpg";

import { Archivo, Roboto } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


const otherBlogs = [
    {
        id: 1,
        title: "Understanding Home Loans",
        image: "/assets/img/founder.png",
        date: "Sep 28, 2025",
    },
    {
        id: 2,
        title: "Smart Real Estate Investment Tips",
        image: "/assets/img/landing-image.jpg",
        date: "Sep 20, 2025",
    },
    {
        id: 3,
        title: "Top 5 Mistakes to Avoid as a Buyer",
        image: "/assets/img/hero-image.jpg",
        date: "Sep 15, 2025",
    },
];

export default function BlogDetailComponent() {
    return (
        <>
            {/* Header */}
            <Navbar />

            {/* Blog Detail Content Section */}
            <section className="bg-white">
                {/* Hero Section */}
                <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                        src="/assets/img/landing-image4.jpg"
                        alt="Weekly vs Fortnightly vs Monthly Home Loan Repayments"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col gap-[10px] justify-center items-center text-center px-4">
                        <span className="bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Refinance
                        </span>
                        <div className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
                            Understanding Home Loans
                        </div>
                        <span className="text-md text-white mb-2 flex items-center gap-[5px]">
                            <Calendar className="h-3 w-3" />
                            <span>Sep 28, 2025</span>
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Main Content - 8/12 */}
                        <div className="col-span-12 lg:col-span-8 prose text-gray-700 py-6 px-4">
                            {/* Description */}
                            <div className="flex flex-col gap-1 mt-[30px]">
                                <div className="text-[34px] font-medium pb-2 bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                                    What We Offer: Loans for First Home Buyers
                                </div>
                                <p className="!font-[400] text-justify">
                                    Embarking on the journey to buy your first home in Australia is one of life’s most exciting milestones. It marks the beginning of independence, security, and long-term investment — but it also comes with a significant financial commitment.
                                    <br />
                                    At Kubaer Finance, we understand that navigating the home loan landscape can be daunting, especially with so many loan types and government schemes available. That’s why we’re here — to simplify the process, explain your options, and guide you every step of the way toward owning your first home.
                                </p>
                            </div>

                            {/* Understanding Repayment */}
                            <div className="mt-2 flex flex-col gap-1">
                                <div className="text-[24px] font-[500]">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                                        What We Offer: Loans for First Home Buyers
                                    </span>
                                </div>
                                <p className="!font-[400] text-justify mt-1">
                                    <span>Buying your first home in Australia can feel complex, but the good news is — you’re not alone.
                                        The Australian Government and individual state and territory governments offer several initiatives designed to help eligible first home buyers enter the market faster. These programs can:
                                    </span>
                                    <ol className="list-decimal list-inside space-y-2 mt-3">
                                        <li>Reduce the deposit required</li>
                                        <li>Minimise or eliminate Lenders Mortgage Insurance (LMI)</li>
                                        <li>Provide grants or tax benefits for new builds or purchases</li>
                                    </ol>
                                    <span>At Kubaer Finance, we break down each of these options in plain language and help you identify which ones suit your situation best — so you can step confidently onto the property ladder.</span>
                                </p>
                            </div>

                            {/* Images */}
                            <div className="w-full h-auto">
                                <Image
                                    src={BlogDetailImage}
                                    alt="Blog Detail Image"
                                    className="rounded-[20px]" />
                            </div>

                            {/* Fortnightly Repayments */}
                            <div className="mt-4">
                                <div className="text-[24px] font-[500]">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">Fortnightly Repayments</span>
                                </div>
                                <p className="!font-[400] text-justify mt-1">
                                    Fortnightly payments are made every two weeks. This method usually
                                    results in an extra payment each year, helping you pay off your loan
                                    faster.
                                </p>
                            </div>

                            {/* Monthly Repayments */}
                            <div className="mt-4">
                                <div className="text-[24px] font-[500]">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">Monthly Repayments</span>
                                </div>
                                <p className="!font-[400] text-justify mt-1">
                                    Monthly repayments are the most common. While convenient, they might
                                    result in paying slightly more interest compared to weekly or
                                    fortnightly options.
                                </p>
                            </div>

                            {/* Key Takeaways */}
                            <div className="mt-4">
                                <div className="text-[24px] font-[500]">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">Key Takeaways</span>
                                </div>
                                <p className="!font-[400] text-justify">
                                    <ol className="list-decimal list-inside space-y-2 mt-3">
                                        <li>Smaller frequent payments can reduce total interest.</li>
                                        <li>Fortnightly repayments often result in one extra payment annually.</li>
                                        <li>Monthly repayments are easy but may cost slightly more in interest.</li>
                                    </ol>
                                </p>
                            </div>
                        </div>

                        {/* Sidebar / Secondary Content - 4/12 */}
                        <div className="col-span-12 lg:col-span-4 prose text-gray-700 py-6 px-4 bg-[#FDF2F9]">
                            <div className="text-[30px] font-semibold mb-2 pb-2 bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                                Other Blogs
                            </div>

                            <ul className="p-0 mb-6">
                                {otherBlogs.map((blog) => (
                                    <li
                                        key={blog.id}
                                        className="flex items-center gap-3 hover:bg-white p-2 rounded transition cursor-pointer"
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
                                                className="text-sm font-medium text-[#86489B] hover:text-[#F171AC] transition"
                                            >
                                                {blog.title.length > 40
                                                    ? blog.title.slice(0, 40) + "..."
                                                    : blog.title}
                                            </Link>
                                            <div className="text-xs text-gray-500">{blog.date}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Sticky Subscribe Form */}
                            <div className="sticky top-24">
                                <div className="flex flex-col p-3 bg-[#86489B] shadow rounded-xl">
                                    <div className="flex flex-col gap-2 pt-[10px]">
                                        <div className="text-[30px] text-white font-semibold">Stay Updated</div>
                                        <p className="!text-gray-100 text-[14px] !font-[500]">
                                            Get the latest articles delivered to your inbox
                                        </p>
                                    </div>

                                    <form className="flex flex-col gap-[10px]">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-3 py-2 rounded-md text-[12px] text-gray-900 bg-gray-100 font-[500]"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-white text-[#86489B] px-5 py-2 !rounded-md text-sm font-medium hover:bg-gray-100 transition duration-300"
                                        >
                                            Subscribe
                                        </button>
                                    </form>

                                    <div className="text-xs !text-gray-200 mt-2 pt-[10px] pb-[10px]">
                                        <span className="font-[400]">
                                            We respect your privacy. Unsubscribe anytime.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
