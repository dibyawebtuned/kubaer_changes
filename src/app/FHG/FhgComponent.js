"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import {
  Wallet,
  ShieldCheck,
  Star,
  Infinity,
  TrendingUp,
  Home,
} from "lucide-react";

const NAV_LINKS = ["How It Works", "Eligibility", "Benefits", "Property Caps", "FAQ"];

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });



const PRICE_CAPS = [
  { state: "New South Wales", metro: "Increased (Oct 2025)", regional: "Increased (Oct 2025)" },
  { state: "Victoria", metro: "Higher for Melbourne & Geelong", regional: "Updated" },
  { state: "Queensland", metro: "Brisbane, Gold Coast, Sunshine Coast increased", regional: "Updated" },
  { state: "Western Australia", metro: "Updated Oct 2025", regional: "Updated Oct 2025" },
  { state: "South Australia", metro: "Updated Oct 2025", regional: "Updated Oct 2025" },
  { state: "Tasmania", metro: "Updated Oct 2025", regional: "Updated Oct 2025" },
  { state: "ACT", metro: "Updated Oct 2025", regional: "—" },
  { state: "Northern Territory", metro: "Updated Oct 2025", regional: "Updated Oct 2025" },
];

const FAQS = [
  {
    q: "How does the Family Home Guarantee work?",
    a: "Eligible single parents can purchase a home with just a 2% deposit. The Australian Government guarantees up to 18% of the loan amount, allowing lenders to waive LMI entirely. The scheme is administered by Housing Australia.",
  },
  {
    q: "Can previous homeowners apply?",
    a: "Yes. The scheme is not limited to first-home buyers. Previous homeowners may apply as long as they do not currently hold any ownership interest in residential property at the time of settlement.",
  },
  {
    q: "What is considered a dependent child?",
    a: "A dependent child is generally one under 16 who lives with you, or a person aged 16–22 who is wholly or substantially dependent on you. For ages 16–22, their income must not exceed the government's specified threshold.",
  },
  {
    q: "Can both separated parents apply?",
    a: "Yes — each parent may apply individually for their own separate property purchase, provided both meet all eligibility criteria. Only one applicant can be listed on the home loan and title per purchase.",
  },
  {
    q: "Can I use gifted funds for the 2% deposit?",
    a: "Some lenders allow gifted funds from family members, but this depends on the individual lender's policies and documentation requirements. Always confirm with your lender before proceeding.",
  },
  {
    q: "Can I use the scheme with other government grants?",
    a: "Yes. In many cases, the Family Home Guarantee can be combined with the First Home Owner Grant and other state or territory initiatives, depending on your location.",
  },
  {
    q: "What loan types are eligible?",
    a: "Eligible loans must be owner-occupier, principal and interest repayment loans with a maximum 30-year term. Interest-only loans are generally not eligible under the scheme.",
  },
  {
    q: "What happens if I move out of the property?",
    a: "The scheme requires the property to be owner-occupied. Moving out and renting it while the guarantee is active may breach scheme conditions. Contact your lender before making any changes.",
  },
  {
    q: "Can I refinance using the Family Home Guarantee?",
    a: "No. The scheme is for purchasing or building a new home, not for refinancing an existing mortgage.",
  },
  {
    q: "How many places are available?",
    a: "From 1 October 2025, the scheme offers unlimited places. Eligible applicants no longer compete for limited annual allocations or face waiting lists.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Submit Home Loan Application",
    desc: "Apply through a participating lender. They assess your income, expenses, credit history, and borrowing capacity. If eligible, the lender requests a guarantee reservation — this typically takes around 14 days.",
    icon: "📋",
  },
  {
    num: "02",
    title: "Receive Pre-Approval",
    desc: "Once your financial position is assessed, the lender may issue pre-approval. Your scheme reservation can be extended up to 90 days while you search for an eligible property.",
    icon: "✅",
  },
  {
    num: "03",
    title: "Sign Contract of Sale",
    desc: "After finding a suitable property, sign the contract of sale. Immediately notify your lender — they must inform Housing Australia to extend the reservation by a further 30 days.",
    icon: "✍️",
  },
  {
    num: "04",
    title: "Loan Finalisation & Settlement",
    desc: "The lender completes all processing, documentation, and settlement arrangements. If requirements are satisfied within the reservation period, the loan proceeds to settlement.",
    icon: "🏠",
  },
];

const ELIGIBLE_PROPERTIES = [
  { type: "Established Homes", desc: "Existing houses, townhouses, or apartments already built and ready to move into.", icon: "🏠" },
  { type: "Newly Built Homes", desc: "Newly constructed properties purchased directly from a developer or builder.", icon: "🔑" },
  { type: "House & Land Packages", desc: "Buy land and enter a building contract — both must be part of the approved lending arrangement.", icon: "🏗️" },
  { type: "Off-the-Plan", desc: "Apartments or townhouses in developments still under construction.", icon: "📐" },
  { type: "Vacant Land + Build", desc: "Purchase vacant land and sign a building contract with a licensed builder.", icon: "🌱" },
];

const CHANGES = [
  { label: "2% Deposit", sub: "Minimum required", icon: "2%" },
  { label: "No Income Cap", sub: "Removed Oct 2025", icon: "∞" },
  { label: "Unlimited Places", sub: "No more waitlists", icon: "★" },
  { label: "18% Guarantee", sub: "Govt backs your loan", icon: "🛡" },
];

const newLocal = "linear-gradient(90deg, #86489B, #F171AC)";
export default function FhgComponent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      style={{ fontFamily: "'Georgia', serif", backgroundColor: "#FDF2F9", color: "#000000" }}
      className="min-h-screen"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; }

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        .purple-gradient { background: linear-gradient(135deg, #86489B, #F171AC); }

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

        .nav-link {
          position: relative;
          transition: color 0.2s;
          text-decoration: none;
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
        .warning-box {
          background: rgba(241,113,172,0.07);
          border-left: 4px solid #F171AC;
        }
      `}</style>

      {/* ══════════════════════════════════════ HERO ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="container mx-auto relative">
          <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-sm scroll-reveal" style={{ color: "#86489B" }}>
            <span className="w-2 h-2 rounded-full purple-gradient" style={{ display: "inline-block" }} />
            Major Expansions Active — October 1, 2025
          </div>

          <h1 className={`${archivo.className} text-5xl! md:text-7xl! font-medium! leading-none mb-6! scroll-reveal! `} style={{ animationDelay: "0.1s", color: "#000000" }}>
            A Home for Your
            <br />
            <span className="highlight-number italic">Family, Sooner.</span>
          </h1>

          <p className={`${roboto.className} text-lg! max-w-xl! font-normal! tracking-normal! mb-10 scroll-reveal`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
            The Australian {`Government's`} Family Home Guarantee supports eligible single parents in purchasing a home with as little as a <strong style={{ color: "#86489B" }}>2% deposit</strong> — with <strong style={{ color: "#86489B" }}>no Lenders Mortgage Insurance</strong>. No income caps. Unlimited places.
          </p>

          {/* <div className="flex flex-wrap gap-4 scroll-reveal" style={{ animationDelay: "0.3s" }}>
                        <a href="#eligibility" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
                            Check Eligibility →
                        </a>
                        <a href="#how-it-works" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
                            How It Works
                        </a>
                    </div> */}

          <div className={`flex flex-wrap gap-4 mb-16 scroll-reveal ${roboto.className}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-3 lg:p-0">
              <div className="">
                <a href="#eligibility" className="extra-btn btn-default">
                  Check Eligibility →
                </a>
              </div>

              <div className="">
                <a href="#how-to-works" className="btn-default">
                  How It Works
                </a>
              </div>
            </div>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 scroll-reveal" style={{ animationDelay: "0.4s" }}>
            {CHANGES.map((c) => (
              <div key={c.label} className="guarantee-card rounded-2xl p-5 card-hover">
                <div className={`${archivo.className} text-2xl! md:text-5xl! font-semibold! highlight-number mb-1! leading-none!`}>{c.icon}</div>
                <div className={`${roboto.className} text-sm! font-normal! mt-1!`} style={{ color: "#6B6B6B", lineHeight: 1.4 }}>{c.label}</div>
                {/* <div className="font-body text-xs mt-1" style={{ color: "#6B6B6B" }}>{c.sub}</div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ HOW IT WORK ══════════════════════════════════════ */}
      <section id="how-it-works" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            How the Guarantee Works
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The Government {`doesn't`} give you cash or take ownership. It guarantees a portion of your loan — removing the need for LMI entirely.
          </p>

          {/* visual 3-part split */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { pct: "2%", label: "Your Deposit", color: "#F171AC", desc: "You contribute a minimum 2% of the property value from genuine savings." },
              { pct: "18%", label: "Govt. Guarantee", color: "#86489B", desc: "The Government guarantees this portion to the lender on your behalf." },
              { pct: "80%", label: "Your Home Loan", color: "#000000", desc: "Standard loan — you are fully responsible for repaying 100% of the mortgage." },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-8 card-hover" style={{ backgroundColor: "#FDF2F9", border: `2px solid ${s.color}22` }}>
                <div className={`${archivo.className} text-5xl! font-semibold! mb-3!`} style={{ color: s.color }}>{s.pct}</div>
                <div className={`${archivo.className} font-medium! text-xl! mb-2!`} style={{ color: "#000000" }}>{s.label}</div>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* callout */}
          <div className="rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${archivo.className} text-3xl! font-semibold! text-white mb-4!`}>Built for single parents.</h3>
                <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl! text-white`} style={{ color: "#6B6B6B" }}>
                  Saving a 20% deposit while managing childcare, education, and daily living is incredibly difficult. The FHG reduces that bar to just <strong>2%</strong>, with the Government covering the gap so you can avoid costly LMI.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Only 2% deposit required",
                  "No Lenders Mortgage Insurance",
                  "You own 100% of your property",
                  "Open to first-home buyers and previous owners",
                  "No income limits from October 2025",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3 rounded-xl px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                    <span className="text-white text-lg">✓</span>
                    <span className={`${archivo.className} text-white font-medium! text-sm!`}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ ELIGIBILITY ══════════════════════════════════════ */}
      <section id="eligibility" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Eligibility Criteria
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The October 2025 updates have removed income limits and added unlimited places, making this scheme more accessible than ever.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Who Can Apply",
                items: [
                  "Australian citizens or permanent residents",
                  "At least 18 years of age",
                  "Single parent or legal guardian with at least one dependent child",
                  "Must not currently own any residential property",
                  "Previous homeowners who have sold their property may also apply",
                  "No income limits — removed October 2025",
                ],
                accent: "#86489B",
              },
              {
                title: "Property & Loan Requirements",
                items: [
                  "Minimum 2% genuine deposit (must be less than 20%)",
                  "Property must be your principal place of residence",
                  "Must be within location-specific property price caps",
                  "Owner-occupier principal & interest loan",
                  "Maximum 30-year loan term",
                  "Must move in within 6 months of settlement or completion",
                ],
                accent: "#F171AC",
              },
            ].map((col) => (
              <div key={col.title} className="bg-white rounded-2xl p-8 card-hover" style={{ border: `1.5px solid ${col.accent}33` }}>
                <h3 className={`${archivo.className} text-xl! font-semibold! mb-6!`} style={{ color: col.accent }}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className={`${archivo.className} flex items-start gap-3 font-body text-sm`} style={{ color: "#000000", lineHeight: 1.6 }}>
                      <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: col.accent }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dependent child explainer */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.15)" }}>
            <h3 className={`${archivo.className} text-xl font-medium! mb-4!`} style={{ color: "#F171AC" }}>What is a Dependent Child?</h3>
            <div className="grid md:grid-cols-2 gap-6 font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <div>
                <p className="font-medium mb-2" style={{ color: "#000000" }}>Qualifies as dependent:</p>
                <ul className="space-y-2">
                  {["A child under 16 who lives with you and is in your care", "A person aged 16–22 who is wholly or substantially dependent on you", "A person 16+ receiving a disability support pension who lives with you"].map(x => (
                    <li key={x} className={`${archivo.className} flex items-start gap-2`}><span style={{ color: "#86489B" }}>✓</span>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2" style={{ color: "#000000" }}>May not qualify if aged 16–22:</p>
                <ul className="space-y-2">
                  {["Not in full-time education and earns above the permitted income threshold", "Married or in a partner relationship with the applicant", "Receives social security benefits making them financially independent"].map(x => (
                    <li key={x} className={`${archivo.className} flex items-start gap-2`}><span style={{ color: "#F171AC" }}>✕</span>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* NOT eligible */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h4 className={`${archivo.className} font-semibold! text-lg! mb-4!`}>⚠ Not Eligible Under FHG</h4>
            <div className="grid md:grid-cols-3 gap-3 font-body text-sm" style={{ color: "#6B6B6B" }}>
              {["Investment or rental properties", "Holiday homes", "Commercial properties", "Owner-builder arrangements", "Interest-only loan structures", "Refinancing existing mortgages", "Buying vacant land without a build contract", "Applicants currently owning property"].map((x) => (
                <div key={x} className="flex items-center gap-2">
                  <span style={{ color: "#F171AC" }}>✕</span> {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ BENEFITS ══════════════════════════════════════ */}
      <section id="benefits" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Key Benefits
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The Family Home Guarantee removes the most significant financial barriers to homeownership for single-parent households.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
  {[
    {
      title: "Only 2% Deposit",
      body: "Reduce your required deposit from 20% to just 2%. On a $700,000 property that means $14,000 instead of $140,000 — a transformative difference for single-income households.",
      icon: Wallet,
    },
    {
      title: "Zero LMI",
      body: "The Government's 18% guarantee removes the need for Lenders Mortgage Insurance. LMI can add $10,000–$30,000+ to borrowing costs. Under the FHG, you pay none of it.",
      icon: ShieldCheck,
    },
    {
      title: "Unlimited Places",
      body: "From October 2025, the annual cap has been removed entirely. Eligible single parents can now apply year-round without competing for limited spots.",
      icon: Star,
    },
    {
      title: "No Income Limit",
      body: "Previously capped at $125,000 per year, the income threshold has been removed from October 2025, opening the scheme to higher-earning single parents who were previously excluded.",
      icon: Infinity,
    },
    {
      title: "Higher Price Caps",
      body: "Property price limits have been raised across all states and territories to reflect current market values, giving buyers access to a wider range of suitable properties.",
      icon: TrendingUp,
    },
    {
      title: "Stability for Families",
      body: "Beyond the financial savings, the scheme provides a platform for long-term housing security — helping families put down roots with the full protections of homeownership.",
      icon: Home,
    },
  ].map((c) => {
    const Icon = c.icon;

    return (
      <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
        <Icon className="w-7 h-7 mb-4 text-[#86489B]" />

          <h4 className={`${archivo.className} font-semibold! text-lg! mb-3!`} style={{ color: "#86489B" }}>{c.title}</h4>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
              
      </div>
    );
  })}
</div>

          {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Only 2% Deposit", body: "Reduce your required deposit from 20% to just 2%. On a $700,000 property that means $14,000 instead of $140,000 — a transformative difference for single-income households.", icon: "💰" },
              { title: "Zero LMI", body: "The Government's 18% guarantee removes the need for Lenders Mortgage Insurance. LMI can add $10,000–$30,000+ to borrowing costs. Under the FHG, you pay none of it.", icon: "🛡" },
              { title: "Unlimited Places", body: "From October 2025, the annual cap has been removed entirely. Eligible single parents can now apply year-round without competing for limited spots.", icon: "★" },
              { title: "No Income Limit", body: "Previously capped at $125,000 per year, the income threshold has been removed from October 2025, opening the scheme to higher-earning single parents who were previously excluded.", icon: "∞" },
              { title: "Higher Price Caps", body: "Property price limits have been raised across all states and territories to reflect current market values, giving buyers access to a wider range of suitable properties.", icon: "↑" },
              { title: "Stability for Families", body: "Beyond the financial savings, the scheme provides a platform for long-term housing security — helping families put down roots with the full protections of homeownership.", icon: "🏡" },
            ].map((c) => (
              <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h4 className={`${archivo.className} font-semibold! text-lg! mb-3!`} style={{ color: "#86489B" }}>{c.title}</h4>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div> */}

          {/* important note */}
          <div className="warning-box rounded-2xl p-6">
            <p className={`${archivo.className} text-sm! font-normal@ tracking-normal! m-0! italic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>Important:</strong> Although the scheme allows a 2% deposit, you must still have sufficient funds to cover additional costs such as stamp duty, legal fees, conveyancing, lender charges, and other government fees associated with property transactions. Always plan for these costs before applying.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ ELIGIBLE PROPERTY TYPES ══════════════════════════════════════ */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Eligible Property Types
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The scheme supports a variety of residential property types — all must be owner-occupied and within the applicable price cap.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ELIGIBLE_PROPERTIES.map((p) => (
              <div key={p.type} className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                {/* <div className="text-3xl mb-3">{p.icon}</div> */}
                <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`} style={{ color: "#86489B" }}>{p.type}</h4>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
            {/* ineligible callout */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(241,113,172,0.07)", border: "1px dashed rgba(241,113,172,0.4)" }}>
              {/* <div className="text-3xl mb-3">🚫</div> */}
              <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`} style={{ color: "#F171AC" }}>Not Eligible</h4>
              <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>Investment properties, holiday homes, commercial properties, and owner-builder arrangements are not eligible under the scheme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ PROPERTY PRICE CAPS ══════════════════════════════════════ */}
      <section id="property-caps" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Property Price Caps
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Effective October 2025, caps have been raised across all states and territories. Your property must fall at or below these thresholds.
          </p>

          <div className="overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            <table className="w-full font-body text-sm">
              <thead>
                <tr style={{ background: newLocal }}>
                  <th className={`${archivo.className} text-left px-6 py-4 text-white font-medium`}>State / Territory</th>
                  <th className={`${archivo.className} text-left px-6 py-4 text-white font-medium`}>Metro / Capital City</th>
                  <th className={`${archivo.className} text-left px-6 py-4 text-white font-medium`}>Regional</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_CAPS.map((row) => (
                  <tr key={row.state} className="table-row-alt" style={{ borderTop: "1px solid rgba(134,72,155,0.06)" }}>
                    <td className="px-6 py-4 font-medium" style={{ color: "#000000" }}>{row.state}</td>
                    <td className="px-6 py-4 font-body text-sm" style={{ color: "#86489B" }}>{row.metro}</td>
                    <td className="px-6 py-4 font-body text-sm" style={{ color: "#F171AC" }}>{row.regional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs mt-4" style={{ color: "#6B6B6B" }}>
            * Exact price caps vary by region. Always verify the most current thresholds at <strong>housingaustralia.gov.au</strong> before proceeding.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════ APPLICATION STEPS ══════════════════════════════════════ */}
      <section id="application" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            How to Apply
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            You cannot apply directly with the government. All applications go through participating lenders or an authorised mortgage broker.
          </p>

          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-6 items-start card-hover rounded-2xl p-6 bg-white" style={{ border: "1px solid rgba(134,72,155,0.1)" }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl text-white purple-gradient">
                  {s.num}
                </div>
                <div>
                  <h4 className={`${archivo.className} font-semibold! text-xl! mb-1!`} style={{ color: "#000000" }}>{s.title}</h4>
                  <p className={`${roboto.className} text-sm! font-normal! tracking-normal! m-0!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
                {/* <div className="ml-auto flex-shrink-0 text-2xl opacity-40">{s.icon}</div> */}
              </div>
            ))}
          </div>

          {/* timeframes */}
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { label: "Initial Assessment", time: "~14 days", desc: "Lender reviews your application and requests the guarantee reservation." },
              { label: "Property Search", time: "Up to 90 days", desc: "Pre-approval period — find and sign a contract on an eligible property." },
              { label: "Loan Finalisation", time: "+30 days", desc: "After signing the contract, finalise all documentation and proceed to settlement." },
            ].map((t) => (
              <div key={t.label} className="guarantee-card rounded-2xl p-6">
                <div className={`${archivo.className} text-2xl! font-semibold! highlight-number mb-1!`}>{t.time}</div>
                <div className={`${roboto.className} font-medium! text-base! mb-2!`} style={{ color: "#000000" }}>{t.label}</div>
                <p className={`${roboto.className}  text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ PARTICIPATING LENDERS ══════════════════════════════════════ */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Participating Lenders
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            More than 30 lenders are approved to offer the Family Home Guarantee, including major banks, regional banks, and credit unions.
          </p>

          <div className="mb-6">
            <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`} style={{ color: "#86489B" }}>Major Banks</h4>
            <div className="flex flex-wrap gap-3">
              {["Commonwealth Bank of Australia", "National Australia Bank", "Westpac"].map((b) => (
                <div key={b} className={`${roboto.className} lender-chip rounded-full px-5 py-2 font-body text-sm font-medium`} style={{ color: "#000000" }}>{b}</div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`} style={{ color: "#F171AC" }}>Regional Banks, Credit Unions & Customer-Owned Lenders</h4>
            <div className="flex flex-wrap gap-3">
              {["Many regional banks", "Customer-owned banks", "Credit unions", "Building societies", "Non-bank lenders"].map((b) => (
                <div key={b} className={`${roboto.className} lender-chip rounded-full px-5 py-2 font-body text-sm`} style={{ color: "#6B6B6B" }}>{b}</div>
              ))}
            </div>
          </div>

          <div className="guarantee-card rounded-2xl p-6">
            <p className={`${roboto.className} text-sm! font-normal! tracking-normal! m-0! italic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>Broker tip:</strong> Each lender has its own credit policies, income assessment rules, and documentation requirements. A mortgage broker can compare multiple participating lenders to help you find the best rate and the most flexible approval criteria for your situation — at no cost to you. For the most current lender list, visit <strong>housingaustralia.gov.au</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ FAQ ══════════════════════════════════════ */}
      <section id="faq" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Frequently Asked Questions
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Everything you need to know before you apply for the Family Home Guarantee.
          </p>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            {FAQS.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between px-6 py-4 gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className={`${archivo.className} font-bold text-base`} style={{ color: "#000000" }}>{f.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: openFaq === i ? "#86489B" : "#F171AC", transition: "background 0.2s" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-2">
                    <p className={`${roboto.className} text-[16px]! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.8 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      {/* <section className="px-6 md:px-12 py-24" style={{ background: "linear-gradient(135deg, #86489B 0%, #F171AC 100%)" }}>
                <div className="container mx-auto text-center">
                    <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Ready to secure a home
                        <br />
                        <em>for your family?</em>
                    </h2>
                    <p className="font-body text-lg text-white mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.7, opacity: 0.9 }}>
                        Speak to a participating lender or mortgage broker today. Verify your eligibility and take the first step towards a stable home for you and your children.
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
            </section> */}

    </div>
  );
}