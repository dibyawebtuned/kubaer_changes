"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import { Rocket, DollarSign, Landmark } from "lucide-react";
import { Search, Scale, FileText, Compass } from "lucide-react";
import { Wallet, Home } from "lucide-react";
import { Hammer, Building2 } from "lucide-react";
import { TrendingDown, Key } from "lucide-react";

const NAV_LINKS = ["About", "Eligibility", "Changes 2025", "Benefits", "Properties", "FAQ"];

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });



const FAQS = [
  {
    q: "Can I build a new home under the RFHBG?",
    a: "Yes. You can use the scheme to purchase land and build a new home, or buy a newly constructed property, provided it meets the scheme's price caps and eligibility criteria.",
  },
  {
    q: "Can I buy vacant land only?",
    a: "No. You cannot use the guarantee to purchase vacant land on its own. The scheme applies only if you are building a home on the land under an eligible construction contract.",
  },
  {
    q: "Do I still need genuine savings?",
    a: "Most participating lenders require genuine savings, typically demonstrated over a minimum three-month period. However, lender policies may vary, so it's important to confirm with your broker or lender.",
  },
  {
    q: "Can I apply if I'm self-employed?",
    a: "Yes. Self-employed applicants can apply, but you must provide standard income verification documents such as tax returns and financial statements, and meet credit requirements.",
  },
  {
    q: "Does the Government own part of my property?",
    a: "No. The government does not take ownership of your property. It simply guarantees a portion (up to 15%) of your home loan to the lender — you retain full ownership.",
  },
  {
    q: "Do I need to pay back the government guarantee?",
    a: "No. The guarantee is not a loan. It simply provides assurance to the lender, allowing you to borrow up to 95% of the property value without paying Lenders Mortgage Insurance (LMI).",
  },
  {
    q: "Can I rent out the property later?",
    a: "The property must be your principal place of residence. Renting it out immediately or using it as an investment property would breach the scheme conditions. If your circumstances change later, you should notify your lender.",
  },
  {
    q: "What happens if I default on the loan?",
    a: "If you default and the property is sold for less than the outstanding loan amount, the government may cover the guaranteed portion paid to the lender. However, you remain responsible for your loan obligations under your mortgage contract.",
  },
  {
    q: "Can I apply if I've previously owned property?",
    a: "Under updated rules from 1 July 2023, applicants who have not owned property in Australia within the last 10 years may be eligible, subject to scheme conditions.",
  },
  {
    q: "Can friends buy together under the scheme?",
    a: "Yes. Since 1 July 2023, friends, siblings, and other family members can apply jointly, provided all applicants meet eligibility criteria.",
  },
  {
    q: "Can I use the RFHBG with other government grants?",
    a: "Yes. In many cases you can combine the RFHBG with state-based first home buyer grants or concessions, such as the First Home Owner Grant or stamp duty concessions, depending on your eligibility and local regulations.",
  },
  {
    q: "What if property prices exceed the cap?",
    a: "If the purchase price exceeds the property price cap for your region, you will not be eligible under the scheme — even if it exceeds the cap by a small amount.",
  },
  {
    q: "What's the difference between the RFHBG and the First Home Guarantee?",
    a: "The primary difference was location: the RFHBG was specifically for regional areas, while the First Home Guarantee was available nationwide including major cities. From 1 October 2025, the two schemes have merged into the expanded First Home Guarantee.",
  },
];

// const PROPERTY_TYPES = [
//   { type: "Existing house, townhouse, or apartment", icon: "🏠" },
//   { type: "House and land package", icon: "🏗️" },
//   { type: "Vacant land with a separate contract to build", icon: "📋" },
//   { type: "Off-the-plan apartment or townhouse", icon: "🏢" },
// ];

const PROPERTY_TYPES = [
  { type: "Existing house, townhouse, or apartment", icon: Home },
  { type: "House and land package", icon: Hammer },
  { type: "Vacant land with a separate contract to build", icon: FileText },
  { type: "Off-the-plan apartment or townhouse", icon: Building2 },
];

const OLD_RULES = [
  { label: "Regional location", desc: "Must buy in an ABS SA4 area outside capital cities. At least one applicant must have lived in the region (or adjacent) for 12 months prior." },
  { label: "First home buyer status", desc: "Must not have owned property in Australia in the last 10 years." },
  { label: "5% minimum deposit", desc: "At least 5% of the property value saved as a deposit." },
  { label: "Income limits", desc: "$125,000 individual or $200,000 combined in the prior financial year." },
  { label: "Owner-occupier", desc: "Property must be your primary place of residence — not an investment." },
  { label: "Age & citizenship", desc: "Must be at least 18 and an Australian citizen or permanent resident." },
];

const NEW_RULES = [
  { label: "No separate RFHBG", desc: "Regional buyers now use the expanded First Home Guarantee — one unified scheme." },
  { label: "Income caps removed", desc: "Higher earners can now qualify if other criteria are met." },
  { label: "No residency requirement", desc: "No longer need 12 months' prior residence in the regional area." },
  { label: "Higher price caps", desc: "Caps increased and vary by region — up to $1.5M in some areas." },
  { label: "Unlimited places", desc: "No cap on the number of places available, unlike the earlier RFHBG allocation." },
];

export default function RfhbgComponent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      style={{ backgroundColor: "#FDF2F9", color: "#000000" }}
      className="min-h-screen"
    >
      <style>{`

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
        .faq-item:last-child { border-bottom: none; }
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
        .highlight-number {
          background: linear-gradient(135deg, #86489B, #F171AC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .scroll-reveal { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .warning-box {
          background: rgba(241,113,172,0.07);
          border-left: 4px solid #F171AC;
        }
        .info-box {
          background: rgba(134,72,155,0.07);
          border-left: 4px solid #86489B;
        }
        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(134,72,155,0.08);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #000;
          line-height: 1.6;
        }
        .checklist-item:last-child { border-bottom: none; }
        .flow-arrow {
          color: #F171AC;
          font-size: 1.5rem;
          text-align: center;
        }
        .change-row:nth-child(even) { background: rgba(134,72,155,0.03); }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="container mx-auto relative">
          <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-sm scroll-reveal" style={{ color: "#86489B" }}>
            <span className="w-2 h-2 rounded-full purple-gradient" style={{ display: "inline-block" }} />
            Now merged into the expanded First Home Guarantee from Oct 2025
          </div>

          <h1 className={`${archivo.className} text-5xl! md:text-7xl! font-medium! leading-none mb-6! scroll-reveal! `} style={{ animationDelay: "0.1s", color: "#000000" }}>
            Regional First Home
            <br />
            <span className="highlight-number italic">Buyer Guarantee.</span>
          </h1>

          <p className={`${roboto.className} text-lg! max-w-xl! font-normal! tracking-normal! mb-10 scroll-reveal`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
            The <strong style={{ color: "#86489B" }}>RFHBG</strong> helped eligible first-home buyers in regional Australia purchase with just a <strong style={{ color: "#86489B" }}>5% deposit</strong> and no LMI — the government guaranteed up to <strong style={{ color: "#86489B" }}>15% of the loan</strong>. From October 2025, it merged into the unified First Home Guarantee with expanded access.
          </p>

          {/* <div className="flex flex-wrap gap-4 mb-16 scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <a href="#eligibility" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
              Check Eligibility →
            </a>
            <a href="#changes-2025" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
              2025 Changes
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
                <a href="#changes-2025" className="btn-default">
                  2025 Changes
                </a>
              </div>
            </div>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 scroll-reveal" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "5%", label: "Minimum deposit required" },
              { number: "15%", label: "Government guarantee on loan" },
              { number: "95%", label: "Maximum loan-to-value ratio" },
              { number: "$0", label: "Lenders Mortgage Insurance" },
            ].map((s) => (
              <div key={s.label} className="guarantee-card rounded-2xl p-5 card-hover">
                <div className={`${archivo.className} text-2xl! md:text-5xl! font-semibold! highlight-number mb-1! leading-none!`}>{s.number}</div>
                <div className={`${roboto.className} text-sm! font-normal! mt-1!`} style={{ color: "#6B6B6B", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            How the Guarantee Works
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-14! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The RFHBG does not give you money — it gives lenders confidence. By guaranteeing part of your loan, the government removes the need for LMI and lets you buy sooner with a smaller deposit.
          </p>

          {/* visual flow */}
          {/* <div className="grid md:grid-cols-5 gap-3 items-center mb-14">
            {[
              { label: "Save a 5% deposit", sub: "From your own genuine savings", color: "#86489B", icon: "💰" },
              null,
              { label: "Gov guarantees up to 15%", sub: "Not cash — a legal guarantee to lender", color: "#F171AC", icon: "🏛️" },
              null,
              { label: "Borrow up to 95% — no LMI", sub: "You save thousands upfront", color: "#86489B", icon: "🏡" },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="flow-arrow hidden md:block">→</div>
              ) : (
                <div key={i} className="rounded-2xl p-6 text-center card-hover" style={{ backgroundColor: "#FDF2F9", border: `2px solid ${item.color}22` }}>
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <div className={`${archivo.className} font-bold text-sm mb-1`}
                    style={{ color: item.color }}>{item.label}</div>
                  <div className={`${roboto.className} text-xs font-normal`}
                    style={{ color: "#6B6B6B" }}>{item.sub}</div>
                </div>
              )
            )}
          </div> */}

          <div className="grid md:grid-cols-5 gap-3 items-center mb-14">
  {[
    {
      label: "Save a 5% deposit",
      sub: "From your own genuine savings",
      color: "#86489B",
      icon: Wallet,
    },
    null,
    {
      label: "Gov guarantees up to 15%",
      sub: "Not cash — a legal guarantee to lender",
      color: "#F171AC",
      icon: Landmark,
    },
    null,
    {
      label: "Borrow up to 95% — no LMI",
      sub: "You save thousands upfront",
      color: "#86489B",
      icon: Home,
    },
  ].map((item, i) =>
    item === null ? (
      <div key={i} className="flow-arrow hidden md:flex justify-center text-xl text-[#86489B]">
        →
      </div>
    ) : (
      <div
        key={i}
        className="rounded-2xl p-6 text-center card-hover"
        style={{
          backgroundColor: "#FDF2F9",
          border: `2px solid ${item.color}22`,
        }}
      >
        <div className="flex justify-center mb-3">
          {(() => {
            const Icon = item.icon;
            return <Icon className="w-7 h-7" style={{ color: item.color }} />;
          })()}
        </div>

        <div
          className={`${archivo.className} font-bold text-sm mb-1`}
          style={{ color: item.color }}
        >
          {item.label}
        </div>

        <div
          className={`${roboto.className} text-xs font-normal`}
          style={{ color: "#6B6B6B" }}
        >
          {item.sub}
        </div>
      </div>
    )
  )}
</div>

          {/* Newcastle worked example */}
          <h3 className={`${archivo.className} text-2xl! font-semibold! mb-6!`}>Example: $800,000 Property in Newcastle</h3>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { value: "$40,000", label: "Your 5% deposit", desc: "The minimum genuine savings required to enter the scheme.", color: "#F171AC" },
              { value: "15%", label: "Government guarantee", desc: "The government backs 15% of the loan value — not paid to you, but assurance given to the lender to waive LMI.", color: "#86489B" },
              { value: "$0", label: "LMI you pay", desc: "Without the scheme, LMI on a 95% LVR loan could add thousands of dollars to your upfront costs.", color: "#86489B" },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-2xl p-6 card-hover" style={{ border: `1.5px solid ${c.color}33` }}>
                <div className={`${archivo.className} text-4xl font-black mb-2`} style={{ color: c.color }}>{c.value}</div>
                <div className={`${archivo.className} font-bold text-base mb-2`} style={{ color: "#000000" }}>{c.label}</div>
                <p className={`${archivo.className} text-sm font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="info-box rounded-2xl px-5 py-4 m-0!">
            <p className={`${archivo.className} text-sm! font-normal! tracking-normal! m-0! italic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>Important:</strong> The government guarantee is not cash paid to the borrower. It is a legal backing that gives lenders confidence so they can waive LMI fees and allow a smaller deposit. You still own 100% of your home.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ELIGIBILITY
      ══════════════════════════════════════ */}
      <section id="eligibility" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Eligibility Criteria
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The traditional RFHBG rules applied before October 2025. Regional buyers now access the same benefits through the expanded First Home Guarantee — with broader eligibility.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
              <h3 className={`${archivo.className} text-xl font-medium! mb-6!`} style={{ color: "#86489B" }}>Traditional Rules (Pre-Oct 2025)</h3>
              <ul className="space-y-0">
                {OLD_RULES.map((item) => (
                  <li key={item.label} className="checklist-item">
                    <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: "#86489B" }}>✓</span>
                    <div>
                      <div className={`${archivo.className} font-medium text-sm mb-0.5`} style={{ color: "#000000" }}>{item.label}</div>
                      <div className={`${roboto.className} text-xs font-normal tracking-normal`} style={{ color: "#6B6B6B" }}>{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              {/* regional area definition */}
              <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(241,113,172,0.25)" }}>
                <h3 className={`${archivo.className} text-xl font-medium! mb-6!`} style={{ color: "#F171AC" }}>What Is a Regional Area?</h3>
                <ul className="space-y-2">
                  {[
                    "ABS Statistical Area Level 4 (SA4) regions outside capital cities",
                    "Norfolk Island",
                    "Jervis Bay Territory",
                    "Christmas Island",
                    "Cocos (Keeling) Islands",
                  ].map((p) => (
                    <li key={p} className={`${archivo.className} flex items-center gap-2 text-sm! font-normal tracking-normal`} style={{ color: "#000000" }}>
                      <span style={{ color: "#86489B" }}>✓</span> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(241,113,172,0.07)", border: "1px solid rgba(241,113,172,0.2)" }}>
                  <p className={`${roboto.className} text-xs font-normal! tracking-normal! m-0!`} style={{ color: "#6B6B6B" }}>
                    <strong style={{ color: "#F171AC" }}>Excluded:</strong> The Australian Capital Territory (ACT) and all greater capital city areas are not eligible under the RFHBG.
                  </p>
                </div>
              </div>

              {/* occupier requirement */}
              <div className="info-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-sm! mb-2!`} style={{ color: "#86489B" }}>Owner-Occupier Requirement</h4>
                <p className={`${archivo.className} text-sm! font-normal! tracking-normal! m-0!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                  The property must be your <strong style={{ color: "#000000" }}>principal place of residence</strong>. Investment properties do not qualify. If your circumstances change after purchase, you must notify your lender.
                </p>
              </div>

              {/* loan criteria note */}
              <div className="warning-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-sm! mb-2!`} style={{ color: "#86489B" }}>Still Need to Qualify for a Loan</h4>
                <p className={`${archivo.className} text-sm! font-normal! tracking-normal! m-0!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                  The guarantee removes LMI — but you must still meet the {`lender's`} servicing requirements, pass credit checks, provide full income verification, and satisfy responsible lending obligations. The scheme does not guarantee loan approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2025 CHANGES
      ══════════════════════════════════════ */}
      <section id="changes-2025" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Changes from October 2025
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            From 1 October 2025, the RFHBG merged into the expanded First Home Guarantee under the broader Home Guarantee Scheme — simplifying access and broadening eligibility for regional buyers.
          </p>

          {/* before / after */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.15)" }}>
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: "rgba(134,72,155,0.1)" }}>📋</div> */}
                <h3 className={`${archivo.className} text-xl font-semibold!`} style={{ color: "#86489B" }}>Before — RFHBG</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Separate regional scheme with its own allocation",
                  "Income cap: $125K individual / $200K combined",
                  "Must have lived in the region for 12 months prior",
                  "Annual place limit (e.g. 10,000 in FY2024–25)",
                  "Separate price caps for regional areas",
                ].map((item) => (
                  <li key={item} className={`${roboto.className} flex items-start gap-2 text-sm font-normal tracking-normal`} style={{ color: "#6B6B6B" }}>
                    <span style={{ color: "#86489B", marginTop: 2 }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>✨</div> */}
                <h3 className={`${archivo.className} text-xl font-semibold! text-white`}>After — Unified First Home Guarantee</h3>
              </div>
              <ul className="space-y-3">
                {NEW_RULES.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                    <span className="text-white mt-0.5">✓</span>
                    <div>
                      <div className={`${archivo.className} text-sm font-medium text-white`}>{item.label}</div>
                      <div className={`${roboto.className} text-xs font-normal text-white`} style={{ opacity: 0.85 }}>{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="info-box rounded-2xl px-5 py-4">
            <p className={`${roboto.className} text-sm m-0! tracking-normal! font-normal! italic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>What stays the same:</strong> Regional buyers continue to purchase with a 5% deposit, borrow up to 95% of the property value, and pay no LMI. Price caps and other conditions still apply — confirm your area with a Participating Lender.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENEFITS
      ══════════════════════════════════════ */}
      <section id="benefits" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Key Benefits
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The RFHBG was designed to make regional homeownership more accessible — with real financial advantages for eligible buyers.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Rocket,
                title: "Buy sooner",
                desc: "Enter the property market earlier without needing to save the traditional 20% deposit — cutting years off your savings timeline.",
                color: "#86489B",
              },
              {
                icon: DollarSign,
                title: "No LMI costs",
                desc: "Eligible buyers avoid Lenders Mortgage Insurance entirely — saving thousands of dollars that would otherwise be added to your upfront costs or loan.",
                color: "#F171AC",
              },
              {
                icon: Landmark,
                title: "Government-backed",
                desc: "The government guarantees up to 15% of the loan value, reducing lender risk and allowing you to borrow up to 95% of the property value confidently.",
                color: "#86489B",
              },
            ].map((b) => {
              const Icon = b.icon;

              return (
                <div key={b.title} className="guarantee-card rounded-2xl p-7 card-hover">
                  <Icon className="w-8 h-8 mb-4" style={{ color: b.color }} />

                  <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`} style={{ color: b.color }}>{b.title}</h4>
                  <p className={`${roboto.className} text-sm! tracking-normal! font-normal! m-0! itlaic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{b.desc}</p>

                </div>
              );
            })}
          </div>

          {/* <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "🏃", title: "Buy sooner", desc: "Enter the property market earlier without needing to save the traditional 20% deposit — cutting years off your savings timeline.", color: "#86489B" },
              { icon: "💸", title: "No LMI costs", desc: "Eligible buyers avoid Lenders Mortgage Insurance entirely — saving thousands of dollars that would otherwise be added to your upfront costs or loan.", color: "#F171AC" },
              { icon: "🏛️", title: "Government-backed", desc: "The government guarantees up to 15% of the loan value, reducing lender risk and allowing you to borrow up to 95% of the property value confidently.", color: "#86489B" },
            ].map((b) => (
              <div key={b.title} className="guarantee-card rounded-2xl p-7 card-hover">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`} style={{ color: b.color }}>{b.title}</h4>
                <p className={`${roboto.className} text-sm! tracking-normal! font-normal! m-0! itlaic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div> */}

          {/* broker value */}
          <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
            <h3 className={`${archivo.className} text-xl! font-bold! mb-6!`} style={{ color: "#F171AC" }}>Why Use a Mortgage Broker?</h3>
            {/* <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Assess eligibility", desc: "Brokers determine whether you qualify for the RFHBG or other Home Guarantee Schemes before you apply.", icon: "🔍" },
                { label: "Compare lender options", desc: "Evaluate multiple participating lenders to find the best loan structure, interest rates, and features for your situation.", icon: "⚖️" },
                { label: "Prepare your application", desc: "Ensure your application is complete, accurate, and meets all lender and government requirements — reducing errors.", icon: "📄" },
                { label: "Guide you to settlement", desc: "From submission through to settlement, receive step-by-step support that makes the journey smoother and less stressful.", icon: "🧭" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl p-4" style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(134,72,155,0.1)" }}>
                  <div className="text-xl mt-0.5">{item.icon}</div>
                  <div>
                    <div className={`${roboto.className} font-medium text-sm mb-1`} style={{ color: "#86489B" }}>{item.label}</div>
                    <div className={`${roboto.className}  text-xs font-normal tracking-normal`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  label: "Assess eligibility",
                  desc: "Brokers determine whether you qualify for the RFHBG or other Home Guarantee Schemes before you apply.",
                  icon: Search,
                },
                {
                  label: "Compare lender options",
                  desc: "Evaluate multiple participating lenders to find the best loan structure, interest rates, and features for your situation.",
                  icon: Scale,
                },
                {
                  label: "Prepare your application",
                  desc: "Ensure your application is complete, accurate, and meets all lender and government requirements — reducing errors.",
                  icon: FileText,
                },
                {
                  label: "Guide you to settlement",
                  desc: "From submission through to settlement, receive step-by-step support that makes the journey smoother and less stressful.",
                  icon: Compass,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{
                      backgroundColor: "#FDF2F9",
                      border: "1px solid rgba(134,72,155,0.1)",
                    }}
                  >
                    <Icon className="w-5 h-5 mt-1" style={{ color: "#86489B" }} />

                    <div>
                      <div
                        className={`${roboto.className} font-medium text-sm mb-1`}
                        style={{ color: "#86489B" }}
                      >
                        {item.label}
                      </div>

                      <div
                        className={`${roboto.className} text-xs font-normal tracking-normal`}
                        style={{ color: "#6B6B6B", lineHeight: 1.6 }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ELIGIBLE PROPERTIES
      ══════════════════════════════════════ */}
      <section id="properties" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Eligible Properties
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The property must be purchased as your principal place of residence and fall within the {`scheme's`} regional price caps for your area.
          </p>

{/* =======================  ======================= */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
              <h3 className={`${archivo.className} text-xl! font-semibold! mb-5!`} style={{ color: "#86489B" }}>Eligible Property Types</h3>
              <div className="space-y-4">
                {PROPERTY_TYPES.map((p) => (
                  <div key={p.type} className="flex items-center gap-4 rounded-xl p-4" style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(134,72,155,0.1)" }}>
                    <span className="text-2xl">{p.icon}</span>
                    <span className={`${archivo.className} text-sm font-medium`} style={{ color: "#000000" }}>{p.type}</span>
                  </div>
                ))}
              </div>
            </div> */}
            <div
  className="bg-white rounded-2xl p-8 card-hover"
  style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}
>
  <h3
    className={`${archivo.className} text-xl font-semibold mb-5`}
    style={{ color: "#86489B" }}
  >
    Eligible Property Types
  </h3>

  <div className="space-y-4">
    {PROPERTY_TYPES.map((p) => {
      const Icon = p.icon;

      return (
        <div
          key={p.type}
          className="flex items-center gap-4 rounded-xl p-4"
          style={{
            backgroundColor: "#FDF2F9",
            border: "1px solid rgba(134,72,155,0.1)",
          }}
        >
          <Icon className="w-6 h-6 text-[#86489B]" />

          <span
            className={`${archivo.className} text-sm font-medium`}
            style={{ color: "#000000" }}
          >
            {p.type}
          </span>
        </div>
      );
    })}
  </div>
</div>

{/* =======================  ======================= */}

            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(241,113,172,0.25)" }}>
                <h3 className={`${archivo.className} text-xl! font-semibold! mb-5!`} style={{ color: "#F171AC" }}>Refinancing Rules</h3>
                <div className="space-y-3">
                  {[
                    { label: "New purchases only", desc: "The RFHBG cannot be used to refinance an existing home loan — it is for new home purchases or new builds only." },
                    { label: "Refinancing later", desc: "You may refinance, but the guarantee only transfers if the new lender is also a participating lender under the Home Guarantee Scheme." },
                  ].map((r) => (
                    <div key={r.label} className="rounded-xl p-4" style={{ backgroundColor: "#FEF3F8", border: "1px solid rgba(241,113,172,0.15)" }}>
                      <div className={`${roboto.className} text-sm font-medium mb-1`} style={{ color: "#000000" }}>{r.label}</div>
                      <div className={`${roboto.className} text-xs font-normal tracking-normal`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{r.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="warning-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-xl! mb-2!`} style={{ color: "#86489B" }}>Price Cap Rule</h4>
                <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>
                  If the purchase price exceeds the property price cap for your region, you will not be eligible — even if it exceeds the cap by a small amount. Always confirm the cap for your specific area with a Participating Lender before proceeding.
                </p>
              </div>

              <div className="info-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-xl! mb-2!`} style={{ color: "#86489B" }}>Combining with Other Grants</h4>
                <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>
                  You may be able to combine the RFHBG with state-based benefits such as <strong style={{ color: "#000000" }}>stamp duty concessions</strong> or the <strong style={{ color: "#000000" }}>First Home Owner Grant</strong>, depending on your eligibility and state regulations.
                </p>
              </div>
            </div>
          </div>

          {/* negative equity note */}
          {/* <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "If property values fall", body: "You remain responsible for repaying the full loan amount. The government guarantee only covers a portion of the loan to the lender in case of default — it does not protect you from market fluctuations or negative equity.", icon: "📉", color: "#F171AC" },
              { title: "Government doesn't own your home", body: "The government guarantee is not shared equity. The government does not take ownership of your property or receive a share of any future capital gains — you own 100% from settlement.", icon: "🔑", color: "#86489B" },
            ].map((c) => (
              <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h4 className={`${archivo.className} font-semibold! text-base! mb-2!`} style={{ color: c.color }}>{c.title}</h4>
                <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div> */}

          <div className="grid md:grid-cols-2 gap-5">
  {[
    {
      title: "If property values fall",
      body: "You remain responsible for repaying the full loan amount. The government guarantee only covers a portion of the loan to the lender in case of default — it does not protect you from market fluctuations or negative equity.",
      icon: TrendingDown,
      color: "#F171AC",
    },
    {
      title: "Government doesn't own your home",
      body: "The government guarantee is not shared equity. The government does not take ownership of your property or receive a share of any future capital gains — you own 100% from settlement.",
      icon: Key,
      color: "#86489B",
    },
  ].map((c) => {
    const Icon = c.icon;

    return (
      <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
        <Icon className="w-6 h-6 mb-3" style={{ color: c.color }} />

                        <h4 className={`${archivo.className} font-semibold! text-base! mb-2!`} style={{ color: c.color }}>{c.title}</h4>


                        <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>

      </div>
    );
  })}
</div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section id="faq" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Frequently Asked Questions
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Everything you need to know about the Regional First Home Buyer Guarantee.
          </p>

          <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
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
            Regional home ownership,
            <br />
            <em>made more accessible.</em>
          </h2>
          <p className="font-body text-lg text-white mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.7, opacity: 0.95 }}>
            From October 2025, regional buyers access the same benefits through the unified First Home Guarantee — with no income caps, no residency requirement, and no annual place limit. Speak to a participating lender to find out if you qualify.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.housingaustralia.gov.au/support-buy/first-home-guarantee"
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "white", color: "#86489B", textDecoration: "none" }}
            >
              Housing Australia →
            </a>
            <a
              href="https://www.housingaustralia.gov.au/support-buy/first-home-guarantee/participating-lenders"
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}
            >
              Find a Participating Lender
            </a>
          </div>
        </div>
      </section> */}

    </div>
  );
}