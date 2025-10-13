"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BusinessLoan() {
  return (
    <div className="container mx-auto px-4 py-12">
        <Navbar />
      {/* 1. Introduction */}
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          Business Loans That Work
        </h1>
        <p className="text-gray-700 mb-4">
          Your Business Has Big Plans. Let’s Make Them Happen.
        </p>
        <p className="text-gray-700">
          Running a business in Australia isn’t easy. You juggle customers, staff, cash flow, and a hundred other things every day. Sometimes, what you need most is a little financial breathing room—or a boost to take things to the next level. At Kubaer Finance, we help business owners access smart, flexible loans tailored to real business needs—not cookie-cutter bank offers.
        </p>
      </section>

      {/* 2. Why We Help */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          We Help When Banks Say No—or Say Nothing at All
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Tired of endless paperwork and waiting weeks for a "maybe"?</li>
          <li>Need quick funds to cover a large order or launch a new product?</li>
          <li>Want to upgrade equipment without draining your cash reserves?</li>
          <li>Looking to invest in staff, marketing, or a second location?</li>
        </ul>
      </section>

      {/* 3. Smart Funding Options */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Smart Funding Options, Built Around You
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Unsecured Business Loans – No collateral needed. Approvals in as little as 24–48 hours.</li>
          <li>Secured Loans – Lower rates using property or business assets as security.</li>
          <li>Line of Credit – Flexible funds on standby. Draw what you need, when you need it.</li>
          <li>Equipment Finance – Purchase or lease vehicles, tools, or machinery without upfront capital.</li>
          <li>Invoice Finance – Get paid now on invoices due in 30–90 days.</li>
          <li>Commercial Property Loans – Buy or refinance warehouses, offices, or investment property.</li>
        </ul>
      </section>

      {/* 4. How We Make It Easy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          How We Make It Easy
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Quick Chat:</strong> We get to know your business goals, cash flow, and challenges. No jargon, no pressure.</li>
          <li><strong>Tailored Options:</strong> We compare 30+ trusted lenders—including non-bank options—and show you the best fit.</li>
          <li><strong>Smooth Application:</strong> We handle the paperwork and make your case strong. You stay focused on business.</li>
          <li><strong>Fast Funding:</strong> Get funds in your account in days—not weeks.</li>
        </ul>
      </section>

      {/* 5. Your Reasons */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Your Business. Your Reasons. Your Loan.
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Need cash flow to cover wages or suppliers?</li>
          <li>Want to purchase a delivery van or new equipment?</li>
          <li>Thinking about expanding your premises?</li>
          <li>Trying to consolidate debts into one simple repayment?</li>
        </ul>
      </section>

      {/* 6. What Our Clients Finance */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          What Our Clients Finance
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Renovating a retail shop</li>
          <li>Buying stock ahead of peak season</li>
          <li>Upgrading tools and machinery</li>
          <li>Expanding to a second location</li>
          <li>Covering ATO obligations</li>
          <li>Purchasing commercial vehicles</li>
          <li>Bridging cash flow gaps</li>
          <li>Hiring new staff</li>
        </ul>
      </section>

      {/* 7. Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Do You Qualify?
        </h2>
        <p className="text-gray-700 mb-4">
          Most of our lenders require:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>An ABN or ACN</li>
          <li>At least 6 months in business</li>
          <li>Regular turnover (usually $5K–$10K+ per month)</li>
          <li>Basic documents (bank statements, BAS, or tax returns)</li>
        </ul>
      </section>

      {/* 8. Mortgage / Business Loan Calculator */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Business Loan Calculator
        </h2>
        <div className="mb-6">
          {/* Embed your calculator component here */}
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Ready to Grow Your Business?
        </h2>
        <p className="text-gray-700 mb-6">
          Speak to our experts today and secure the right loan for your business needs.
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
