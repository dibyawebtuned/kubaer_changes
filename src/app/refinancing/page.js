"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Refinancing() {
  return (
    <div className="container mx-auto px-4 py-12">
        <Navbar />
      {/* 1. Introduction */}
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          Refinancing: Optimise Your Existing Loan
        </h1>
        <p className="text-gray-700 mb-4">
          Is your current home loan still working for you? Many Australians could save thousands by refinancing – that is, switching your existing home loan to a new one, either with your current lender or a new one. Life changes, interest rates shift, and better deals emerge. Refinancing with Kubaer Finance is about ensuring your mortgage always aligns with your financial goals and the current market.
        </p>
        {/* Optional: Mortgage Calculator */}
        <div className="my-6">
          {/* You can embed your mortgage calculator component here */}
        </div>
      </section>

      {/* 2. When to Consider Refinancing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          When to Consider Refinancing
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Lower Interest Rates: Secure a more competitive interest rate, reducing your monthly repayments and saving you money over the life of the loan.</li>
          <li>Better Features: Access features like offset accounts, redraw facilities, or the ability to make unlimited extra repayments.</li>
          <li>Debt Consolidation: Roll multiple debts into your home loan, simplifying finances.</li>
          <li>Accessing Equity: Use the equity in your home to fund renovations, investments, or major purchases.</li>
          <li>Change in Circumstances: Adapt your loan to income, family, or financial goals.</li>
          <li>Ending a Fixed Term: Review options before your fixed rate ends to avoid reverting to variable rates.</li>
        </ul>
      </section>

      {/* 3. How Does the Refinancing Process Work */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          How Does the Refinancing Process Work?
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-3">
          <li><strong>Review Your Current Loan:</strong> Assess interest rate, balance, and repayment terms.</li>
          <li><strong>Explore Better Options:</strong> Compare a wide panel of lenders for better deals and features.</li>
          <li><strong>Assess Costs & Savings:</strong> Calculate potential savings versus discharge fees, application fees, and break costs.</li>
          <li><strong>Application & Approval:</strong> We guide you through the refinancing application and handle paperwork.</li>
          <li><strong>Settlement & New Loan Starts:</strong> Old loan is paid off, and your new loan begins with better rates and features.</li>
        </ol>
      </section>

      {/* 4. The Refinancing Journey with Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          The Refinancing Journey with Us
        </h2>
        <p className="text-gray-700 mb-4">
          We make the refinancing process simple and transparent. We'll assess your current loan, compare it against hundreds of products from our panel of lenders, and identify opportunities for savings or improved features. We handle all the paperwork and liaise with your new lender, ensuring a seamless transition. Our goal is to put more money back in your pocket.
        </p>
      </section>

      {/* 5. Client Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Client Testimonials
        </h2>
        <div className="space-y-6 text-gray-700">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            “I hadn't reviewed my mortgage in years. Kubaer Finance showed me how much I could save by refinancing and handled everything. It was surprisingly easy and now I have a much better rate!” – Eleanor S., Canberra ACT
          </blockquote>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Ready to Optimise Your Loan?
        </h2>
        <p className="text-gray-700 mb-6">
          Speak to our experts today and find out how much you could save by refinancing.
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
