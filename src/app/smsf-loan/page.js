
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SMSFLoan() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 1. Introduction */}
      <Navbar />
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          SMSF Loans (Self-Managed Super Fund)
        </h1>
        <p className="text-gray-700 mb-4">
          Looking to take control of your retirement strategy? An SMSF loan allows you to purchase an investment property using your superannuation fund. 
          It’s a powerful way to grow your wealth, but strict compliance rules mean expert guidance is essential. At Kubaer Finance, we specialise in structuring compliant SMSF property loans with your accountant and financial adviser.
        </p>
      </section>

      {/* 2. Why Consider an SMSF Loan */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Why Consider an SMSF Loan?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Build long-term wealth through residential or commercial property</li>
          <li>Tax-effective strategy for your retirement</li>
          <li>Use rental income and super contributions to repay the loan</li>
          <li>No personal liability when properly structured</li>
        </ul>
      </section>

      {/* 3. What We Offer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>SMSF loan structuring and borrowing strategy</li>
          <li>Access to lenders who specialise in SMSF-compliant products</li>
          <li>Collaboration with your SMSF adviser or accountant</li>
          <li>Help with property due diligence and trust documentation</li>
        </ul>
      </section>

      {/* 4. Eligibility Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Eligibility Checklist
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>✅ You have an established SMSF</li>
          <li>✅ You intend to purchase property for investment only</li>
          <li>✅ Your fund has enough balance or contributions to support the loan</li>
          <li>✅ You have a corporate trustee in place</li>
        </ul>
      </section>

      {/* 5. Client Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Real Results from Real Clients
        </h2>
        <div className="space-y-6 text-gray-700">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            “I always thought buying property through my super was too complex. Kubaer made it incredibly easy and compliant.” – Mehul P., Mawson Lakes
          </blockquote>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            “They worked directly with my accountant and made the SMSF lending process stress-free. Highly recommend!” – Leanne J., Golden Grove
          </blockquote>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Start Your SMSF Property Journey with Confidence
        </h2>
        <p className="text-gray-700 mb-6">
          Get expert support from day one. Book your discovery call with Kubaer Finance today.
        </p>
        <a
          href="/contact"
          className="btn-default px-6 py-3 rounded-md text-white bg-purple-700 hover:bg-purple-800 transition duration-300"
        >
          Book Your Discovery Call
        </a>
      </section>
    </div>
  );
}

