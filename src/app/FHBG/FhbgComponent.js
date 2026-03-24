"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import Link from "next/link";


const NAV_LINKS = ["How It Works", "Eligibility", "Benefits", "Property Caps", "FAQ"];

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


const PRICE_CAPS = [
  { state: "New South Wales", metro: "$1,500,000", regional: "$1,500,000" },
  { state: "Victoria", metro: "$950,000", regional: "$950,000" },
  { state: "Queensland", metro: "$900,000", regional: "$900,000" },
  { state: "Western Australia", metro: "$850,000", regional: "$850,000" },
  { state: "South Australia", metro: "$800,000", regional: "$800,000" },
  { state: "Tasmania", metro: "$750,000", regional: "$750,000" },
  { state: "ACT", metro: "$1,000,000", regional: "—" },
  { state: "Northern Territory", metro: "$700,000", regional: "$700,000" },
];

const LMI_SAVINGS = [
  { price: "$500,000", deposit: "$25,000", lmiWithout: "~$10,000", lmiWith: "$0", saving: "~$10,000" },
  { price: "$700,000", deposit: "$35,000", lmiWithout: "~$20,000–$30,000", lmiWith: "$0", saving: "~$25,000" },
  { price: "$1,000,000", deposit: "$50,000", lmiWithout: "~$30,000–$40,000", lmiWith: "$0", saving: "~$35,000" },
  { price: "$1,500,000", deposit: "$75,000", lmiWithout: "~$45,000–$60,000", lmiWith: "$0", saving: "~$52,000" },
];

const FAQS = [
  {
    q: "Does the Government own part of my property?",
    a: "No. You own 100% of the property. The Government does not take equity or ownership. It only guarantees a portion of the loan to the lender.",
  },
  {
    q: "Can friends or siblings buy together?",
    a: "Yes. Two eligible applicants can purchase together — they don't need to be married or in a de facto relationship. Both must individually meet eligibility criteria.",
  },
  {
    q: "Can I combine the FHBG with other first-home buyer benefits?",
    a: "Yes. You can combine it with the First Home Owner Grant, state-based stamp duty exemptions, and First Home Super Saver Scheme withdrawals.",
  },
  {
    q: "What happens if I move out later?",
    a: "You must initially move in as your main residence. After meeting minimum occupancy requirements, you may be able to rent out the property — subject to lender policy.",
  },
  {
    q: "Can I refinance while on the scheme?",
    a: "Yes, but the guarantee does not transfer to a new lender. If you refinance before reaching 80% LVR, you may need to pay LMI. It's best to refinance after your LVR drops below 80%.",
  },
  {
    q: "How long do I have to find a property after pre-approval?",
    a: "Typically 90 days to sign a contract of sale, then an additional 30 days to finalise loan documentation.",
  },
  {
    q: "Is there still an income limit?",
    a: "No. From 1 October 2025, income caps have been completely removed, making the scheme accessible to all eligible first home buyers.",
  },
  {
    q: "What if I already own investment property?",
    a: "You are generally not eligible if you currently own, or have owned, property in Australia within the last 10 years.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Verify Eligibility",
    desc: "Use Housing Australia's online Eligibility Tool. Check residency, age, ownership history, and property price caps for your target location.",
    icon: "✓",
  },
  {
    num: "02",
    title: "Gather Documents",
    desc: "Prepare proof of identity, Medicare card, ATO Notice of Assessment, payslips, savings evidence, and a completed Home Buyer Declaration.",
    icon: "📄",
  },
  {
    num: "03",
    title: "Apply via Participating Lender",
    desc: "Submit through one of 30+ approved lenders or an authorised mortgage broker. They assess your credit history and serviceability.",
    icon: "🏦",
  },
  {
    num: "04",
    title: "Reserve Your Place",
    desc: "Once approved, your place is reserved for 14 days for formal submission, then you get 90 days to find an eligible property.",
    icon: "🔒",
  },
  {
    num: "05",
    title: "Sign & Settle",
    desc: "After signing your contract, you have 30 days to finalise loan paperwork. Move in after settlement to maintain the guarantee.",
    icon: "🏠",
  },
];

const CHANGES = [
  { label: "No Income Caps", sub: "Removed October 2025", icon: "∞" },
  { label: "Unlimited Places", sub: "No more waitlists", icon: "★" },
  { label: "5% Deposit", sub: "Zero LMI required", icon: "%" },
  { label: "Higher Price Caps", sub: "Up to $1.5M in Sydney", icon: "↑" },
];

export default function FirstHomeGuaranteePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("metro");

  return (
    <div
      style={{ fontFamily: "'Georgia', serif", backgroundColor: "#FDF2F9", color: "#000000" }}
      className="min-h-screen"
    >
      {/* ── CUSTOM STYLES ── */}
      <style>{`

        * { box-sizing: border-box; }
        body { margin: 0; }

        .hero-gradient {
          background: linear-gradient(135deg, #86489B 0%, #F171AC 60%, #FDF2F9 100%);
        }
        .purple-gradient {
          background: linear-gradient(135deg, #86489B, #F171AC);
        }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(134,72,155,0.18);
        }
        .faq-item {
          border-bottom: 1px solid rgba(134,72,155,0.15);
          transition: background 0.2s;
        }
        .faq-item:hover { background: rgba(241,113,172,0.05); }

        .step-line::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -2rem;
          width: 2px;
          height: 2rem;
          background: linear-gradient(to bottom, #86489B, transparent);
        }
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #F171AC;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #86489B; }
        .nav-link:hover::after { width: 100%; }

        .badge-pill {
          background: linear-gradient(90deg, rgba(134,72,155,0.12), rgba(241,113,172,0.12));
          border: 1px solid rgba(134,72,155,0.2);
        }
        .section-divider {
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #86489B, #F171AC);
          border-radius: 2px;
        }
        .guarantee-card {
          background: linear-gradient(135deg, rgba(134,72,155,0.08), rgba(241,113,172,0.08));
          border: 1px solid rgba(134,72,155,0.15);
        }
        .table-row-alt:nth-child(even) {
          background: rgba(134,72,155,0.04);
        }
        .highlight-number {
          background: linear-gradient(135deg, #86489B, #F171AC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .scroll-reveal {
          animation: fadeUp 0.6s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lender-chip {
          background: white;
          border: 1px solid rgba(134,72,155,0.2);
          transition: border-color 0.2s, background 0.2s;
        }
        .lender-chip:hover {
          border-color: #86489B;
          background: rgba(134,72,155,0.05);
        }
      `}</style>


      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="container mx-auto relative">
          <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-sm scroll-reveal" style={{ color: "#86489B" }}>
            <span className={`w-2 h-2 rounded-full purple-gradient animate-pulse ${archivo.className}!`} style={{ display: "inline-block" }} />
            Updated October 1, 2025 — Major Expansions Now Active
          </div>

          <h1 className={`${roboto.className} font-display text-5xl! font-black leading-none mb-6 scroll-reveal`} style={{ animationDelay: "0.1s", color: "#000000" }}>
            Own Your First
            <br />
            <span className="highlight-number italic">Home Sooner.</span>
          </h1>

          <p className={`font-body text-lg! font-normal! max-w-2xl mb-10 scroll-reveal ${archivo.className}`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
            The Australian Government's First Home Guarantee lets eligible buyers purchase with as little as a <strong style={{ color: "#86489B" }}>5% deposit</strong> — with <strong style={{ color: "#86489B" }}>zero Lenders Mortgage Insurance</strong>. No income caps. No waitlists.
          </p>

          <div className="flex flex-wrap gap-4 scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <Link href="#eligibility" className=" font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
              Check Eligibility →
            </Link>
            <a href="#how-it-works" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
              How It Works
            </a>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 scroll-reveal" style={{ animationDelay: "0.4s" }}>
            {CHANGES.map((c) => (
              <div key={c.label} className="guarantee-card rounded-2xl p-5 card-hover">
                <div className="font-display text-3xl font-bold highlight-number mb-1">{c.icon}</div>
                <div className="font-display font-bold text-base" style={{ color: "#000000" }}>{c.label}</div>
                <div className="font-body text-xs mt-1" style={{ color: "#6B6B6B" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section id="how-it-works" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            How the Guarantee Works
          </h2>
          <p className="font-body text-lg mb-16 max-w-2xl" style={{ color: "#6B6B6B" }}>
            The Government acts as your mortgage insurer — not a co-owner. You keep 100% of your property.
          </p>

          {/* visual explainer */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { pct: "5%", label: "Your Deposit", color: "#F171AC", desc: "You contribute a minimum 5% from genuine savings" },
              { pct: "15%", label: "Govt. Guarantee", color: "#86489B", desc: "Government guarantees this portion to the lender" },
              { pct: "80%", label: "Your Home Loan", color: "#000000", desc: "Standard loan — you repay 100% of the mortgage" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-8 card-hover" style={{ backgroundColor: "#FDF2F9", border: `2px solid ${s.color}22` }}>
                <div className="font-display text-5xl font-black mb-3" style={{ color: s.color }}>{s.pct}</div>
                <div className="font-display font-bold text-xl mb-2" style={{ color: "#000000" }}>{s.label}</div>
                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* key benefit callout */}
          <div className="rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">Why does this matter?</h3>
                <p className="font-body text-white opacity-90 text-lg" style={{ lineHeight: 1.7 }}>
                  Normally, if your deposit is under 20%, lenders charge LMI — a fee that protects <em>them</em>, not you. This can add <strong>$10,000–$60,000</strong> to your upfront costs. The FHBG eliminates this entirely.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {["No LMI payment required", "Interest rates equivalent to 80% LVR loans", "You own 100% of your property", "No repayment to government"].map((b) => (
                  <div key={b} className="flex items-center gap-3 bg-white bg-opacity-20 rounded-xl px-5 py-3">
                    <span className="text-white text-lg">✓</span>
                    <span className="font-body text-white font-medium text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ELIGIBILITY
      ══════════════════════════════════════ */}
      <section id="eligibility" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            Eligibility Criteria
          </h2>
          <p className="font-body text-lg mb-12 max-w-2xl" style={{ color: "#6B6B6B" }}>
            Significant changes from October 1, 2025 have opened this scheme to more Australians than ever before.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Who Can Apply",
                items: [
                  "Australian citizens or permanent residents",
                  "At least 18 years of age",
                  "First home buyers OR haven't owned property in last 10 years",
                  "Individuals or two joint applicants (friends, siblings, couples)",
                  "No income limits — removed Oct 2025",
                ],
                accent: "#86489B",
              },
              {
                title: "Property Requirements",
                items: [
                  "Minimum 5% genuine deposit",
                  "Must be your primary place of residence",
                  "Property below location-specific price caps",
                  "Established homes, townhouses, apartments",
                  "House & land packages, off-the-plan, vacant land + build",
                ],
                accent: "#F171AC",
              },
            ].map((col) => (
              <div key={col.title} className="bg-white rounded-2xl p-8 card-hover" style={{ border: `1.5px solid ${col.accent}33` }}>
                <h3 className="font-display text-xl font-bold mb-6" style={{ color: col.accent }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm" style={{ color: "#000000", lineHeight: 1.6 }}>
                      <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: col.accent }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* NOT eligible */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h4 className="font-display font-bold text-lg mb-4" style={{ color: "#000000" }}>⚠ Not Eligible Under FHBG</h4>
            <div className="grid md:grid-cols-3 gap-3 font-body text-sm" style={{ color: "#6B6B6B" }}>
              {["Owner-builder arrangements", "Investment properties (not owner-occupied)", "Properties above price caps", "Non-citizens / non-permanent residents", "Company title interests owned within 10 years", "Loans without principal & interest repayments"].map((x) => (
                <div key={x} className="flex items-center gap-2">
                  <span style={{ color: "#F171AC" }}>✕</span> {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LMI SAVINGS / BENEFITS
      ══════════════════════════════════════ */}
      <section id="benefits" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            Your LMI Savings
          </h2>
          <p className="font-body text-lg mb-12 max-w-2xl" style={{ color: "#6B6B6B" }}>
            Avoiding Lenders Mortgage Insurance is the scheme's most immediate benefit. Here's what you could save.
          </p>

          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            <table className="w-full font-body text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #86489B, #F171AC)" }}>
                  {["Property Price", "Your 5% Deposit", "LMI Without Scheme", "LMI With FHBG", "Your Saving"].map((h) => (
                    <th key={h} className="text-left px-5 py-4 text-white font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LMI_SAVINGS.map((row, i) => (
                  <tr key={row.price} className="table-row-alt">
                    <td className="px-5 py-4 font-display font-bold" style={{ color: "#86489B" }}>{row.price}</td>
                    <td className="px-5 py-4" style={{ color: "#000000" }}>{row.deposit}</td>
                    <td className="px-5 py-4" style={{ color: "#6B6B6B" }}>{row.lmiWithout}</td>
                    <td className="px-5 py-4 font-bold" style={{ color: "#F171AC" }}>{row.lmiWith}</td>
                    <td className="px-5 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold" style={{ background: "linear-gradient(90deg,#86489B,#F171AC)" }}>
                        Save {row.saving}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Competitive Rates", body: "Receive interest rates equivalent to 80% LVR loans — even on a 5% deposit. Normally, a 95% LVR loan commands a higher rate." },
              { title: "Faster Market Entry", body: "A 5% deposit instead of 20% means you could buy years sooner. In a rising market, that headstart is invaluable." },
              { title: "Greater Borrowing Power", body: "Because LMI is waived (not added to the loan balance), your overall debt stays lower and your monthly repayments remain manageable." },
            ].map((c) => (
              <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
                <h4 className="font-display font-bold text-lg mb-3" style={{ color: "#86489B" }}>{c.title}</h4>
                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROPERTY PRICE CAPS
      ══════════════════════════════════════ */}
      <section id="property-caps" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            Property Price Caps
          </h2>
          <p className="font-body text-lg mb-10 max-w-2xl" style={{ color: "#6B6B6B" }}>
            Effective October 2025, caps have been raised to better reflect today's market. Your property must fall below these thresholds.
          </p>

          <div className="overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            <table className="w-full font-body text-sm">
              <thead>
                <tr style={{ background: "linear-gradient(90deg, #86489B, #F171AC)" }}>
                  <th className="text-left px-6 py-4 text-white font-medium">State / Territory</th>
                  <th className="text-left px-6 py-4 text-white font-medium">Metro / Capital City</th>
                  <th className="text-left px-6 py-4 text-white font-medium">Regional</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_CAPS.map((row, i) => (
                  <tr key={row.state} className="table-row-alt" style={{ borderTop: "1px solid rgba(134,72,155,0.06)" }}>
                    <td className="px-6 py-4 font-medium" style={{ color: "#000000" }}>{row.state}</td>
                    <td className="px-6 py-4 font-display font-bold text-base" style={{ color: "#86489B" }}>{row.metro}</td>
                    <td className="px-6 py-4 font-display font-bold text-base" style={{ color: "#F171AC" }}>{row.regional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs mt-4" style={{ color: "#6B6B6B" }}>
            * The Regional First Home Buyer Guarantee has been consolidated into the FHBG from October 2025. Always verify current caps at housingaustralia.gov.au.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STEP-BY-STEP APPLICATION
      ══════════════════════════════════════ */}
      <section id="application" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            How to Apply
          </h2>
          <p className="font-body text-lg mb-16 max-w-2xl" style={{ color: "#6B6B6B" }}>
            Applications are made through approved lenders — not directly with the government. Here's the full journey.
          </p>

          <div className="relative space-y-6">
            {STEPS.map((s, idx) => (
              <div key={s.num} className="flex gap-6 items-start card-hover rounded-2xl p-6" style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(134,72,155,0.1)" }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl text-white purple-gradient">
                  {s.num}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2" style={{ color: "#000000" }}>{s.title}</h4>
                  <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
                <div className="ml-auto flex-shrink-0 text-2xl opacity-40">{s.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PARTICIPATING LENDERS
      ══════════════════════════════════════ */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            Participating Lenders
          </h2>
          <p className="font-body text-lg mb-10 max-w-2xl" style={{ color: "#6B6B6B" }}>
            30+ lenders are approved to offer the FHBG. Choose one that suits your needs — or use a mortgage broker to compare.
          </p>

          <div className="mb-6">
            <h4 className="font-display font-bold text-lg mb-4" style={{ color: "#86489B" }}>Major Banks</h4>
            <div className="flex flex-wrap gap-3">
              {["Commonwealth Bank", "National Australia Bank", "Westpac", "St. George Bank", "Bank of Melbourne", "BankSA"].map((b) => (
                <div key={b} className="lender-chip rounded-full px-5 py-2 font-body text-sm font-medium" style={{ color: "#000000" }}>{b}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4" style={{ color: "#F171AC" }}>Regional & Customer-Owned Banks</h4>
            <div className="flex flex-wrap gap-3">
              {["Bendigo Bank", "Great Southern Bank", "Bank Australia", "Auswide Bank", "MyState Bank", "Beyond Bank Australia", "Regional Australia Bank", "Gateway Bank", "QBank", "Unity Bank", "Teachers Mutual Bank", "Police Bank", "Australian Military Bank"].map((b) => (
                <div key={b} className="lender-chip rounded-full px-5 py-2 font-body text-sm" style={{ color: "#6B6B6B" }}>{b}</div>
              ))}
            </div>
          </div>

          <div className="mt-8 guarantee-card rounded-2xl p-6">
            <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>Tip:</strong> A mortgage broker can access multiple participating lenders simultaneously, helping you find the best interest rate and most flexible approval policy for your situation — at no cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section id="faq" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg mb-12" style={{ color: "#6B6B6B" }}>
            Everything you need to know before you apply.
          </p>

          <div className="space-y-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            {FAQS.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between px-6 py-5 gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="font-display font-bold text-base" style={{ color: "#000000" }}>{f.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: openFaq === i ? "#86489B" : "#F171AC", transition: "background 0.2s" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.8 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FOOTER BANNER
      ══════════════════════════════════════ */}
      <section className="px-6 md:px-12 py-24" style={{ background: "linear-gradient(135deg, #86489B 0%, #F171AC 100%)" }}>
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to take the
            <br />
            <em>first step?</em>
          </h2>
          <p className="font-body text-lg text-white opacity-90 mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Verify your eligibility today through Housing Australia's official portal and speak to a participating lender or broker to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.housingaustralia.gov.au"
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "white", color: "#86489B", textDecoration: "none" }}
            >
              Official Housing Australia →
            </a>
            <a
              href="#faq"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}
            >
              Read the FAQs
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}