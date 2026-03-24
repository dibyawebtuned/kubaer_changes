"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import { Briefcase, Percent, Home } from "lucide-react";
import { Landmark } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Search, Upload, PenLine, Wallet, } from "lucide-react";
import { Clock, Pencil, AlertTriangle } from "lucide-react";



const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


const NAV_LINKS = ["About", "Eligibility", "Contributions", "Tax", "How to Access", "FAQ"];

const FAQS = [
  {
    q: "Can I use my super for my first home deposit?",
    a: "Yes. The FHSS scheme lets eligible first-home buyers withdraw voluntary contributions made to their super fund to help fund a home deposit. You can access up to $50,000 in total contributions plus associated earnings.",
  },
  {
    q: "What are the cons of the FHSS scheme?",
    a: "Contributions are limited by annual ($15,000) and lifetime ($50,000) caps, which may slow savings growth. Strict timing rules apply when requesting a release and signing a contract. Incorrect processes may result in tax implications, such as paying FHSS tax on released amounts.",
  },
  {
    q: "How long does it take to release my FHSS savings?",
    a: "After submitting a release request to the ATO, it usually takes 15–25 business days. Delays may occur if your information or identification is incomplete.",
  },
  {
    q: "What if I don't end up buying a home?",
    a: "You have two options: recontribute the released amount back into your super as a non-concessional contribution, or keep the money and pay 20% FHSS tax on the assessable amount. You may also apply for a 12-month extension if you need more time.",
  },
  {
    q: "How much tax can I save with FHSS?",
    a: "Contributions are taxed at just 15% when added to your super — lower than most people's marginal tax rate. When you withdraw, the assessable amount receives a 30% tax offset. For someone in the 39% marginal tax bracket (including Medicare levy), the effective withdrawal tax rate can be as low as 9%.",
  },
  {
    q: "Can I combine FHSS with other people?",
    a: "Yes. Couples, friends, or family members can each have their own FHSS contributions applied to the purchase of the same property. Eligibility is assessed individually. If one person is ineligible because they previously owned property, it does not prevent the other eligible applicants from accessing their savings.",
  },
  {
    q: "Can I use FHSS with other government schemes?",
    a: "Yes. FHSS can be combined with the First Home Guarantee, First Home Owner Grant, stamp duty concessions, and other state or federal home buyer schemes. FHSS releases won't reduce HELP, SFSS, or AASL balances.",
  },
  {
    q: "Does FHSS affect my HECS/HELP debt repayments?",
    a: "FHSS withdrawals do not count as repayment income, so they won't increase your HECS/HELP repayment for the year you access your funds. However, salary sacrifice contributions do count as reportable employer super contributions — review your PAYG withholding with your employer.",
  },
  {
    q: "Can I change my mind after withdrawing the money?",
    a: "Yes. After withdrawal, if you don't purchase a home, you can recontribute the released amount into your super (non-concessional, no tax deduction), or keep the funds and pay a 20% FHSS tax on the assessable portion. Extensions of up to 12 months may be available.",
  },
  {
    q: "Can I become eligible again if I previously owned property?",
    a: "Yes, in some cases. The ATO may grant eligibility if you experienced financial hardship that caused you to lose ownership of all property — such as bankruptcy, divorce, loss of employment, serious illness, or natural disasters.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Request an FHSS Determination",
    desc: "Sign in to myGov → ATO → Super → Manage → First Home Saver. Request a determination to see the maximum amount you can withdraw. Check your contributions match your super statement — don't rely solely on your payslip.",
    icon: <Search className="h-6 w-6" />,
    detail:
      "Salary sacrifice contributions from 2017–18 must be entered manually. If errors are found, request a new or amended determination before property settlement.",
  },
  {
    num: "02",
    title: "Submit an FHSS Release Request",
    desc: "Only possible after receiving your determination. Specify the amount to release (up to your maximum), which super fund(s) to release from, and your bank account for payment.",
    icon: <Upload className="h-6 w-6" />,
    detail:
      "Only one release request is allowed — include the total amount. Release must happen before signing a contract, or within 90 days of your determination (for determinations after 15 Sep 2024). Processing takes 15–20 business days.",
  },
  {
    num: "03",
    title: "Sign a Property Contract & Notify the ATO",
    desc: "Sign a contract to purchase or build a home within 12 months of your release request. Extensions of up to 24 months may be granted automatically by the ATO.",
    icon: <PenLine className="h-6 w-6" />,
    detail:
      "Notify the ATO within 90 days of signing (for determinations after 15 Sep 2024). If no contract is signed, you must either recontribute to super or pay 20% FHSS tax on the assessable amount.",
  },
  {
    num: "04",
    title: "Receive Your FHSS Amount",
    desc: "The ATO issues a release authority to your super fund. Tax is withheld, and amounts may be offset against outstanding ATO debts. Payment arrives 15–20 business days after fund release.",
    icon: <Wallet className="h-6 w-6" />,
    detail:
      "A payment summary is provided at year-end showing concessional contributions, associated earnings, and tax withheld. Include all amounts in your tax return. The 30% tax offset applies.",
  },
];

const INELIGIBLE_CONTRIBUTIONS = [
  { label: "Compulsory employer contributions", desc: "Mandatory Super Guarantee (e.g. 11.5%) contributions don't count — only voluntary contributions." },
  { label: "Excess contributions above caps", desc: "Contributions above $15,000 per year or $50,000 total, or above concessional/non-concessional caps." },
  { label: "Previously withdrawn FHSS amounts", desc: "Funds already released under FHSS cannot be counted again." },
  { label: "Spouse or third-party contributions", desc: "Contributions made by someone else into your account don't count unless made in your name." },
  { label: "Insurance or fee components", desc: "Contributions directed toward insurance premiums or super fund fees are not eligible." },
];

const INELIGIBLE_PROPERTIES = [
  "Vacant land only (without a build contract)",
  "Premises that cannot be used as a residence",
  "Houseboats",
  "Motor homes",
  "Caravans or other movable dwellings",
  "Investment properties (must be owner-occupied)",
];

const HARDSHIP_SITUATIONS = [
  "Bankruptcy",
  "Divorce, separation, or relationship breakdown",
  "Loss of employment",
  "Serious illness",
  "Natural disasters or similar major events",
];

export default function FhssComponent() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openStep, setOpenStep] = useState(null);

  return (
    <div
      style={{ fontFamily: "'Georgia', serif", backgroundColor: "#FDF2F9", color: "#000000" }}
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

        .step-item {
          border-bottom: 1px solid rgba(134,72,155,0.1);
          transition: background 0.2s;
        }
        .step-item:last-child { border-bottom: none; }

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
        .tax-row:nth-child(even) { background: rgba(134,72,155,0.04); }
        .contribution-type-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .contribution-type-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(134,72,155,0.14);
        }
        .flow-arrow {
          color: #F171AC;
          font-size: 1.5rem;
          text-align: center;
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
            Save inside super — pay less tax on your deposit
          </div>

          <h1 className={`${archivo.className} text-5xl! md:text-7xl! font-medium! leading-none mb-6! scroll-reveal! `} style={{ animationDelay: "0.1s", color: "#000000" }}>
            First Home
            <br />
            <span className="highlight-number italic">Super Saver.</span>
          </h1>

          <p className={`${roboto.className} text-lg! max-w-xl! font-normal! tracking-normal! mb-10 scroll-reveal`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
            The <strong style={{ color: "#86489B" }}>FHSS Scheme</strong> lets eligible first-home buyers save for a deposit inside their superannuation — where contributions are taxed at just <strong style={{ color: "#86489B" }}>15%</strong> instead of your full marginal rate. Withdraw up to <strong style={{ color: "#86489B" }}>$50,000</strong> plus earnings when you are ready to buy.
          </p>

          {/* <div className="flex flex-wrap gap-4 mb-16 scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <a href="#eligibility" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
              Check Eligibility →
            </a>
            <a href="#how-to-access" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
              How to Withdraw
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
                <a href="#how-to-access" className="btn-default">
                  How to Withdraw
                </a>
              </div>
            </div>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "$50,000", label: "Maximum total withdrawal" },
              { number: "$15,000", label: "Maximum per financial year" },
              { number: "15%", label: "Tax on concessional contributions" },
              { number: "30%", label: "Tax offset on withdrawal" },
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
            How the FHSS Scheme Works
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-14! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Instead of saving in a regular bank account where earnings are taxed at your full marginal rate, you save inside super — where the tax advantages compound over time.
          </p>

          {/* visual flow */}
          <div className="grid md:grid-cols-5 gap-3 items-center mb-14">
            {[
              {
                label: "Make voluntary super contributions",
                sub: "Salary sacrifice or personal after-tax",
                color: "#86489B",
                icon: <Briefcase className="h-8 w-8" />,
              },
              null,
              {
                label: "Contributions taxed at 15%",
                sub: "Not your full marginal rate",
                color: "#F171AC",
                icon: <Percent className="h-8 w-8" />,
              },
              null,
              {
                label: "Withdraw up to $50K + earnings",
                sub: "With 30% tax offset on release",
                color: "#86489B",
                icon: <Home className="h-8 w-8" />,
              },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="flow-arrow hidden md:block text-xl">
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
                  {/* ICON */}
                  <div
                    className="flex justify-center mb-3"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <div
                    className={`${archivo.className} font-bold text-sm mb-1`}
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </div>

                  {/* SUBTEXT */}
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

          {/* withdrawal breakdown */}
          <h3 className={`${archivo.className} text-2xl! font-semibold! mb-6!`}>What Can You Withdraw?</h3>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { pct: "100%", label: "Non-concessional contributions", desc: "Personal voluntary contributions made from after-tax income that you did not claim as a tax deduction.", color: "#F171AC" },
              { pct: "85%", label: "Salary sacrifice contributions", desc: "Pre-tax contributions arranged with your employer (concessional). Taxed at 15% on entry — only 85% counts toward your release amount.", color: "#86489B" },
              { pct: "85%", label: "Personal deductible contributions", desc: "Personal contributions you claimed as a tax deduction (concessional). Same treatment as salary sacrifice — 85% counts.", color: "#86489B" },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-2xl p-6 card-hover" style={{ border: `1.5px solid ${c.color}33` }}>
                <div className={`${archivo.className} text-4xl font-black mb-2`} style={{ color: c.color }}>{c.pct}</div>
                <div className={`${archivo.className} font-bold text-base mb-2`} style={{ color: "#000000" }}>{c.label}</div>
                <p className={`${archivo.className} text-sm font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="info-box rounded-2xl px-5 py-4 m-0!">
            <p className={`${archivo.className} text-sm! font-normal! tracking-normal! m-0!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>Plus associated earnings:</strong> In addition to your contributions, you also receive a calculated amount of associated earnings determined by the ATO. These deemed earnings may differ from actual earnings in your super fund.
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
            Eligibility
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            {`Eligibility is assessed on an individual basis. There's no citizenship requirement — but you must be a genuine first-home buyer intending to live in the property.`}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
              <h3 className={`${archivo.className} text-xl font-medium! mb-6!`} style={{ color: "#86489B" }}>You Must</h3>
              <ul className="space-y-3">
                {[
                  "Be 18 years or older when requesting an FHSS determination",
                  "Have never owned property in Australia — including investment property, vacant land, commercial property, lease of land, or company title interest",
                  "Have your name on the title of the property you buy",
                  "Not have previously completed an FHSS release request",
                  "Intend to live in the property as your primary residence",
                  "Have made eligible voluntary contributions to your super fund",
                ].map((item) => (
                  <li key={item} className={`checklist-item ${archivo.className}`}>
                    <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-normal text-white" style={{ background: "#86489B" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(241,113,172,0.25)" }}>
                <h3 className={`${archivo.className} text-xl font-medium! mb-4!`} style={{ color: "#F171AC" }}>Eligible Property Types</h3>
                <ul className="space-y-2">
                  {["Existing residential home", "Newly built home", "House and land package", "Vacant land with a contract in place to build"].map((p) => (
                    <li key={p} className={`${archivo.className} flex items-center gap-2 text-sm! font-normal!`} style={{ color: "#000000" }}>
                      <span style={{ color: "#F171AC" }}>✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl px-6 py-3" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}>
                <h3 className={`${archivo.className} font-medium! text-base! mb-3!`} style={{ color: "#000000" }}>⚠ Ineligible Properties</h3>
                <div className="grid grid-cols-1 gap-2">
                  {INELIGIBLE_PROPERTIES.map((x) => (
                    <div key={x} className="flex items-center gap-2 font-body text-sm" style={{ color: "#6B6B6B" }}>
                      <span style={{ color: "#F171AC" }}>✕</span> {x}
                    </div>
                  ))}
                </div>
              </div>

              {/* residency requirement */}
              <div className="info-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-sm! mb-2!`} style={{ color: "#86489B" }}>Occupancy Requirement</h4>
                <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                  You must genuinely intend to live in the property as your primary residence as soon as practicable after purchase, and <strong style={{ color: "#000000" }}>live there for at least 6 months within the first 12 months</strong> after it becomes practical to move in.
                </p>
              </div>
            </div>
          </div>

          {/* hardship provision */}
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className={`${archivo.className} text-xl font-medium! text-white mb-3!`}>Previously Owned Property?</h3>
                <p className={`${roboto.className} text-white text-sm! font-normal! mb-4! tracking-normal!`} style={{ opacity: 0.95, lineHeight: 1.7 }}>
                  You may still qualify under the <strong>FHSS Financial Hardship provision</strong>. The ATO may grant eligibility if you experienced hardship that caused you to lose ownership of all your property.
                </p>
              </div>
              <div>
                <p className={`${roboto.className} text-white text-sm! font-normal! mb-4! tracking-normal!`} style={{ opacity: 0.85 }}>Qualifying hardship situations include:</p>
                <div className="grid grid-cols-1 gap-2">
                  {HARDSHIP_SITUATIONS.map((h) => (
                    <div key={h} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                      <span className="text-white">✓</span>
                      <span className={`${roboto.className} text-white text-sm! font-normal!`}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTRIBUTIONS
      ══════════════════════════════════════ */}
      <section id="contributions" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Making Contributions
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            {`You can contribute via two main methods. Both count toward your FHSS limits, and you don't need to notify anyone before starting.`}
          </p>

          {/* two contribution types */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                type: "Salary Sacrifice",
                label: "Concessional — Pre-tax",
                color: "#86489B",
                icon: <Briefcase className="h-7 w-7" />,
                desc: "Arrange with your employer to redirect part of your pre-tax salary into super. Taxed at 15% on entry into the fund.",
                detail: [
                  "Talk to your employer about whether this is available",
                  "Ask how often contributions are deposited into your fund",
                  "Contributions count on the date deposited — not the payslip date",
                  "85% of these contributions count toward your FHSS release amount",
                ],
              },
              {
                type: "Personal Voluntary Contributions",
                label: "Non-concessional or Concessional",
                color: "#F171AC",
                icon: <Landmark className="h-7 w-7" />,
                desc: "Make after-tax contributions directly into your super fund. If you claim a tax deduction, they become concessional. If not, they're non-concessional.",
                detail: [
                  "Contact your super fund to find out how to contribute",
                  "Or ask your employer to deduct from your after-tax pay",
                  "Non-concessional: 100% counts toward your FHSS release",
                  "Concessional (with tax deduction): 85% counts toward release",
                ],
              },
            ].map((c) => (
              <div
                key={c.type}
                className="contribution-type-card bg-white rounded-2xl overflow-hidden"
                style={{ border: `1.5px solid ${c.color}33` }}
              >
                {/* HEADER */}
                <div className="px-6 py-5" style={{ background: `${c.color}12` }}>
                  <div className="flex items-center gap-3 mb-1">
                    {/* ICON */}
                    <div style={{ color: c.color }}>{c.icon}</div>

                    <div>
                      <div
                        className={`${archivo.className} font-semibold text-lg`}
                        style={{ color: "#000000" }}
                      >
                        {c.type}
                      </div>
                      <div
                        className={`${roboto.className} text-xs font-medium`}
                        style={{ color: c.color }}
                      >
                        {c.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* BODY */}
                <div className="px-6 py-5">
                  <p
                    className={`${roboto.className} text-sm mb-4 font-normal`}
                    style={{ color: "#6B6B6B", lineHeight: 1.7 }}
                  >
                    {c.desc}
                  </p>

                  <ul className="space-y-2">
                    {c.detail.map((d) => (
                      <li
                        key={d}
                        className={`${roboto.className} flex items-start gap-2 text-sm font-normal`}
                        style={{ color: "#000000" }}
                      >
                        {/* ARROW ICON */}
                        <span className="mt-0.5" style={{ color: c.color }}>
                          →
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* annual + lifetime limits */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <div className="guarantee-card rounded-2xl p-6 text-center card-hover">
              <div className={`${archivo.className} text-4xl! font-semibold! highlight-number mb-2`}>$15,000</div>
              <div className={`${archivo.className} font-bold! text-base! mb-1!`} style={{ color: "#000000" }}>Per Financial Year</div>
              <p className={`${roboto.className} text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B" }}>Maximum eligible contributions that count per year. Excess contributions above this limit cannot be withdrawn under FHSS.</p>
            </div>
            <div className="guarantee-card rounded-2xl p-6 text-center card-hover">
              <div className={`${archivo.className} text-4xl! font-semibold! highlight-number mb-2`}>$50,000</div>
              <div className={`${archivo.className} font-bold! text-base! mb-1!`} style={{ color: "#000000" }}>Total Across All Years</div>
              <p className={`${roboto.className} text-xs! font-normal! tracking-normal!`}>Lifetime maximum for eligible contributions that can be counted toward your maximum release amount.</p>
            </div>
            <div className="guarantee-card rounded-2xl p-6 text-center card-hover">
              <div className={`${archivo.className} text-4xl! font-semibold! highlight-number mb-2`}>FIFO</div>
              <div className={`${archivo.className} font-bold! text-base! mb-1!`} style={{ color: "#000000" }}>First In, First Out</div>
              <p className={`${roboto.className} text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B" }}>Earlier contributions are counted first. Within the same year, non-concessional contributions are treated as made first to maximise your release amount.</p>
            </div>
          </div>

          {/* ineligible contributions */}
          <h3 className={`${archivo.className} text-xl! sm:text-3xl! font-semibold! mb-4!`}>Ineligible Contributions</h3>
          <div className="space-y-3">
            {INELIGIBLE_CONTRIBUTIONS.map((c) => (
              <div key={c.label} className="flex items-start gap-4 bg-white rounded-xl px-5 py-4" style={{ border: "1px solid rgba(134,72,155,0.1)" }}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white mt-0.5" style={{ background: "#F171AC" }}>✕</span>
                <div>
                  <div className={`${archivo.className} font-medium! text-sm! mb-0.5!`} style={{ color: "#000000" }}>{c.label}</div>
                  <div className={`${roboto.className} text-xs! font-normal!`} style={{ color: "#6B6B6B" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TAX IMPLICATIONS
      ══════════════════════════════════════ */}
      <section id="tax" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Tax Implications
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            {`The FHSS scheme's biggest advantage is tax. Contributions go in at 15%, come out with a 30% offset — here's how it all works.`}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* contributions tax */}
            <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
              <h3 className={`${archivo.className} text-xl! font-bold! mb-6!`} style={{ color: "#86489B" }}>Tax on Contributions</h3>
              <div className="space-y-4">
                {[
                  { type: "Concessional (salary sacrifice / deductible)", rate: "15%", note: "Taxed on entry into super. Usually lower than your marginal tax rate." },
                  { type: "Non-concessional (after-tax)", rate: "0%", note: "No further tax — income tax was already paid before contribution." },
                ].map((r) => (
                  <div key={r.type} className="rounded-xl p-4" style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(134,72,155,0.1)" }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className={`${archivo.className} text-sm! font-medium!`} style={{ color: "#000000" }}>{r.type}</div>
                      <div className={`${roboto.className} font-normal! text-xl!`} style={{ color: "#86489B" }}>{r.rate}</div>
                    </div>
                    <div className={`${roboto.className} text-xs! font-normal!`} style={{ color: "#6B6B6B" }}>{r.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* withdrawal tax */}
            <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1px solid rgba(241,113,172,0.2)" }}>
              <h3 className={`${archivo.className} text-xl! font-bold! mb-6!`} style={{ color: "#F171AC" }}>Tax on Withdrawal</h3>
              <div className="space-y-4">
                <div className="rounded-xl p-4" style={{ backgroundColor: "#FEF3F8", border: "1px solid rgba(241,113,172,0.15)" }}>
                  <div className={`${archivo.className} text-sm! font-medium! mb-2!`} style={{ color: "#000000" }}>Tax withheld at release</div>
                  <p className={`${roboto.className} text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>Your marginal rate (including Medicare levy) minus the <strong style={{ color: "#F171AC" }}>30% tax offset</strong> — or 17% if your marginal rate can not be estimated.</p>
                </div>
                <div className="rounded-xl p-4" style={{ backgroundColor: "#FEF3F8", border: "1px solid rgba(241,113,172,0.15)" }}>
                  <div className={`${archivo.className} text-sm! font-medium! mb-1!`} style={{ color: "#000000" }}>Example: 39% marginal rate</div>
                  <div className={`${archivo.className} text-2xl! font-semibold! mb-1!`} style={{ color: "#F171AC" }}>Effective ~9%</div>
                  <p className={`${roboto.className} text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B" }}>39% marginal rate − 30% offset = ~9% effective tax on withdrawal</p>
                </div>
                <div className="warning-box rounded-xl p-4">
                  <p className={`${roboto.className} text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                    <strong style={{ color: "#86489B" }}>Tax reporting:</strong> Include the assessable FHSS released amount and tax withheld in your tax return for the year the release was requested — not when funds are received.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* example */}
          <div
            className="rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(134,72,155,0.08), rgba(241,113,172,0.08))",
              border: "1px solid rgba(134,72,155,0.15)",
            }}
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-6 w-6" style={{ color: "#86489B" }} />

              <h4
                className={`${archivo.className} font-semibold`}
                style={{ color: "#86489B" }}
              >
                Example: Annual Limit in Action
              </h4>
            </div>

            {/* DESCRIPTION */}
            <p
              className={`${roboto.className} text-sm font-normal mb-4`}
              style={{ color: "#6B6B6B", lineHeight: 1.7 }}
            >
              In the 2023–24 financial year, Mary made{" "}
              <strong style={{ color: "#000000" }}>
                $25,000 in salary sacrifice contributions
              </strong>
              . Because of the annual $15,000 limit, only $15,000 counts as eligible FHSS
              contributions. At 85%, that means only{" "}
              <strong style={{ color: "#86489B" }}>$12,750</strong> counts toward her
              maximum releasable amount. The remaining $10,000 cannot be counted toward her
              FHSS release.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Contributed", value: "$25,000" },
                { label: "Eligible cap", value: "$15,000" },
                { label: "@ 85%", value: "$12,750" },
                { label: "Excluded", value: "$10,000" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl px-5 py-3 text-center"
                  style={{ border: "1px solid rgba(134,72,155,0.15)" }}
                >
                  <div
                    className={`${archivo.className} font-semibold text-lg`}
                    style={{ color: "#86489B" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className={`${archivo.className} font-normal tracking-normal text-xs mt-0.5`}
                    style={{ color: "#6B6B6B" }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW TO ACCESS
      ══════════════════════════════════════ */}
      <section id="how-to-access" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            How to Access Your FHSS Savings
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Access is managed through your myGov account linked to the ATO. The process has four steps — and the order matters.
          </p>

          <div className="rounded-2xl overflow-hidden bg-white mb-10" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            {STEPS.map((s, i) => (
              <div key={s.num} className="step-item">
                <button
                  onClick={() => setOpenStep(openStep === i ? null : i)}
                  className="w-full text-left flex items-start gap-5 px-6 py-6"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-base text-white purple-gradient">
                    {s.num}
                  </div>
                  <div className="flex-1 text-left">
                    <div className={`${archivo.className} font-bold text-lg! `}>{s.title}</div>
                    <p className={`${archivo.className} text-sm! font-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {/* <span className="text-2xl opacity-30">{s.icon}</span> */}
                    <span className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: openStep === i ? "#86489B" : "#F171AC", transition: "background 0.2s" }}>
                      {openStep === i ? "−" : "+"}
                    </span>
                  </div>
                </button>
                {openStep === i && (
                  <div className="px-6 pb-6 pl-24">
                    <div className="info-box rounded-xl p-4">
                      <p className={`${roboto.className} font-body! text-sm! p-0! m-0! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{s.detail}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* mistakes / timing summary */}
          {/* <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "If you don't buy within 12 months", body: "You can recontribute to super as non-concessional (no tax deduction), or keep the funds and pay 20% FHSS tax on the assessable amount. Extensions of up to 24 months may apply.", icon: "⏱", color: "#F171AC" },
              { title: "Before submitting a release", body: "You can request a new determination or amend your existing one online, provided you meet eligibility requirements and haven't signed a contract yet.", icon: "✏️", color: "#86489B" },
              { title: "After processing begins", body: "Changes cannot be made without potentially delaying payment. If errors are found, contact the ATO as soon as possible to minimise delays.", icon: "⚠️", color: "#6B6B6B" },
            ].map((c) => (
              <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h4 className={`${archivo.className} font-bold! text-base! mb-2!`} style={{ color: c.color }}>{c.title}</h4>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div> */}
          {/* mistakes / timing summary */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "If you don't buy within 12 months",
                body: "You can recontribute to super as non-concessional (no tax deduction), or keep the funds and pay 20% FHSS tax on the assessable amount. Extensions of up to 24 months may apply.",
                icon: <Clock className="h-6 w-6" />,
                color: "#F171AC",
              },
              {
                title: "Before submitting a release",
                body: "You can request a new determination or amend your existing one online, provided you meet eligibility requirements and haven't signed a contract yet.",
                icon: <Pencil className="h-6 w-6" />,
                color: "#86489B",
              },
              {
                title: "After processing begins",
                body: "Changes cannot be made without potentially delaying payment. If errors are found, contact the ATO as soon as possible to minimise delays.",
                icon: <AlertTriangle className="h-6 w-6" />,
                color: "#6B6B6B",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="guarantee-card rounded-2xl p-6 card-hover"
              >
                {/* ICON */}
                <div
                  className="mb-3"
                  style={{ color: c.color }}
                >
                  {c.icon}
                </div>

                {/* TITLE */}
                <h4 className={`${archivo.className} font-bold! text-base! mb-2!`} style={{ color: c.color }}>{c.title}</h4>

                {/* BODY */}
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMBINATIONS & OTHER SCHEMES
      ══════════════════════════════════════ */}
      <section className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Combining FHSS with Other Schemes
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            FHSS operates separately from state and federal concessions. Using it does not disqualify you from other first-home buyer programs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
              <h3 className={`${archivo.className} text-xl! font-semibold! mb-5!`} style={{ color: "#86489B" }}>Can be combined with</h3>
              <ul className="space-y-3">
                {[
                  "First Home Guarantee (5% deposit, no LMI)",
                  "Family Home Guarantee (2% deposit for single parents)",
                  "First Home Owner Grant (state-based cash grant)",
                  "Stamp duty concessions or exemptions",
                  "Other state-based housing programs",
                ].map((item) => (
                  <li key={item} className={`${roboto.className} flex items-start gap-3 font-body text-sm`} style={{ color: "#000000", lineHeight: 1.6 }}>
                    <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: "#86489B" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="info-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-xl! mb-2!`} style={{ color: "#86489B" }}>
                  HELP / HECS Debt
                </h4>
                <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>
                  {`FHSS withdrawals do <strong style={{ color: "#000000" }}>not</strong> count as repayment income — they won't increase your HELP/HECS repayment. However, salary sacrifice contributions count as reportable employer super contributions, which may affect your PAYG withholding obligations.`}
                </p>
              </div>
              <div className="warning-box rounded-2xl p-5">
                <h4 className={`${archivo.className} font-medium! text-xl! mb-2!`} style={{ color: "#86489B" }}>
                  Outstanding Government Debts
                </h4>
                <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>
                  If you have an outstanding debt with the ATO or another Commonwealth agency, your FHSS release may be offset against the debt, reduced (potentially to zero), or take longer to be processed.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                <h4 className={`${archivo.className} font-medium! text-xl! mb-2!`} style={{ color: "#86489B" }}>
                  Joint Purchases
                </h4>
                <p className={`${roboto.className} font-normal! text-sm! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>
                  Couples, siblings, or friends can each withdraw their own FHSS contributions toward the same property. If one person is ineligible due to prior ownership, the other eligible applicants are unaffected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section id="faq" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Frequently Asked Questions
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Everything you need to know about the First Home Super Saver Scheme.
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
      <section className="px-6 md:px-12 py-24" style={{ background: "linear-gradient(135deg, #86489B 0%, #F171AC 100%)" }}>
        <div className="container mx-auto text-center">
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4! text-white`}>
            Start saving smarter
            <br />
            <em>inside super today.</em>
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-7! max-w-2xl! mx-auto! text-white`} style={{ lineHeight: 1.7, opacity: 0.95 }}>
            Eligible contributions made from 1 July 2017 count toward your FHSS total. The sooner you start, the more you can save — and the bigger your tax advantage at withdrawal.
          </p>
          <div className={`flex flex-wrap justify-center gap-4 mb-16 scroll-reveal ${roboto.className}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-3 lg:p-0">
              <div className="">
                <a href="https://www.housingaustralia.gov.au/support-buy/help-buy" className="extra-btn">
                  Access via myGov →
                </a>
              </div>

              <div className="">
                <a href="https://www.commbank.com.au/home-loans/help-to-buy.html" className="extra-btn">
                  ATO FHSS Guide
                </a>
              </div>
            </div>

          </div>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://my.gov.au"
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "white", color: "#86489B", textDecoration: "none" }}
            >
              Access via myGov →
            </a>
            <a
              href="https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-to-save-more-in-your-super/first-home-super-saver-scheme"
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}
            >
              ATO FHSS Guide
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}