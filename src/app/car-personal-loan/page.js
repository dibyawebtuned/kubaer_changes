"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CarPersonalLoan() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 1. Introduction */}
      <Navbar />
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          Car & Personal Loans
        </h1>
        <p className="text-gray-700">
          Hit the road with confidence! Whether its a sleek new sedan, a robust SUV for family adventures, 
          or a trusty used car, Kubaer Finance offers flexible car loan solutions designed to get you behind the wheel. 
          We understand that a car is often more than just transport its freedom, convenience, and sometimes, a passion.
        </p>
      </section>

      {/* 2. Types of Car Loans */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Types of Car Loans
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Secured Car Loans:</strong> The car itself acts as security for the loan. Lower interest rates, ideal for new or relatively new vehicles.
          </li>
          <li>
            <strong>Unsecured Personal Loans (for Cars):</strong> No security needed, more flexible but higher interest rates. Suitable for older cars or unique circumstances.
          </li>
          <li>
            <strong>Dealer Finance vs. Broker Sourced Loans:</strong> We compare multiple lenders to secure the best rate and terms, often saving you money.
          </li>
          <li>
            <strong>Balloon Payments:</strong> Some loans allow a balloon payment at the end of the term, reducing regular repayments.
          </li>
        </ul>
      </section>

      {/* 3. Car Sourcing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Car Sourcing: Your Shortcut to the Perfect Car
        </h2>
        <p className="text-gray-700 mb-4">
          Buying a car shouldnt be a chore. At Kubaer Finance, were not just about financing your dreams — 
          we help you find them too. Our Car Sourcing service is your personal shortcut to the best vehicles across Australia.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-purple-500">
          How Our Car Sourcing Service Transforms Your Experience
        </h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Personalized Matchmaking:</strong> Tell us your style, budget, fuel efficiency, and features — well find the right options.
          </li>
          <li>
            <strong>Market Insider Access:</strong> Exclusive deals and vehicles you wont find on public listings.
          </li>
          <li>
            <strong>Hassle-Free Confidence:</strong> From history checks to inspections, we guarantee transparency and peace of mind.
          </li>
          <li>
            <strong>Integrated Finance Solutions:</strong> Seamlessly connect with competitive loan packages once you say yes to a car.
          </li>
        </ul>
      </section>

      {/* 4. How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Here How It Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li><strong>Tell Us Your Dream Car:</strong> Complete a quick consultation about your preferences and budget.</li>
          <li><strong>We Hunt Down Your Matches:</strong> Experts scour dealerships, auctions, and private sellers Australia-wide.</li>
          <li><strong>Inspection & Negotiation:</strong> We vet and negotiate the best deal on your behalf.</li>
          <li><strong>You Choose & Finance:</strong> Review options, select your car, and we arrange a suitable finance package.</li>
          <li><strong>Drive Away Happy:</strong> Coordinate delivery or pickup for a smooth car-buying journey.</li>
        </ol>
      </section>

      {/* 5. Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Why Choose Us for Your Car Loan?
        </h2>
        <p className="text-gray-700 mb-4">
          We focus on finding a car loan that matches your budget and lifestyle, not just getting you approved. 
          Our process is quick and transparent, getting you pre-approved so you can shop with confidence.
        </p>
      </section>

      {/* 6. Client Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Client Testimonials
        </h2>
        <div className="space-y-6 text-gray-700">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            I found my dream car, and Kubaer Finance got me the loan within days. Super efficient and a much better rate than the dealership offered!  Jessica L., Brisbane QLD
          </blockquote>
        </div>
      </section>

      {/* 7. Personal Loans Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">
          Personal Loans: Finance Your Next Life Event
        </h2>
        <p className="text-gray-700 mb-4">
          Life is full of moments that require financial flexibility : a dream wedding, a well-deserved overseas trip, consolidating debts, or unexpected expenses. 
          Kubaer Finance provides personal loan options that are clear, manageable, and tailored to your specific needs.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-purple-600">
          Types of Personal Loans
        </h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Unsecured Personal Loans:</strong> No assets required as security. Flexible, slightly higher interest rates.</li>
          <li><strong>Secured Personal Loans:</strong> Use an asset as security, potentially lower interest rates.</li>
          <li><strong>Debt Consolidation Loans:</strong> Combine multiple debts into one manageable loan, often with lower rates.</li>
          <li><strong>Fixed vs. Variable Rate Personal Loans:</strong> Choose consistent repayments (fixed) or potentially lower rates (variable).</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-purple-600">
          Your Benefits with a Kubaer Personal Loan
        </h3>
        <p className="text-gray-700 mb-4">
          We focus on responsible lending, ensuring the repayment structure is comfortable for your budget. 
          Our streamlined application process means faster access to funds, so you can focus on what matters most.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-purple-600">
          Client Testimonials
        </h3>
        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
          Consolidating my credit card debts with a personal loan from Kubaer Finance was the best financial decision I have made. The process was so easy, and now I am saving hundreds a month!  David R., Perth WA
        </blockquote>
      </section>
        {/* 6. Call to Action */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Ready to Optimise Your Loan?
        </h2>
        <p className="text-gray-700 mb-6">
          Speak to our experts today and find out how much you could save by refinancing your Car & Personal loan.
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

