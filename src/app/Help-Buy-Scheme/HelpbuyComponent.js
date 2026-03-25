"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import { CreditCard, Bank, Home } from "lucide-react";
import { Clock, FileText, Shield } from 'lucide-react';
import { TrendingUp, CheckCircle, Tag } from 'lucide-react';

const NAV_LINKS = ["About", "Eligibility", "How It Works", "Repayment", "Construction", "FAQ"];

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


const FAQS = [
    {
        q: "Is the Help to Buy Scheme only for first home buyers?",
        a: "No. Any eligible low-to-middle-income earner can apply, provided you do not own any property at the time of application.",
    },
    {
        q: "Can I include the First Home Owners Grant in my deposit?",
        a: "Yes. You can combine the 2% deposit with the First Home Owners Grant, stamp duty concessions, or similar incentives. However, other government shared equity programs or loans cannot be used alongside Help to Buy.",
    },
    {
        q: "Can I buy back the government's share of the property?",
        a: "Yes. You can gradually increase your ownership by buying back part or all of the government's equity share over time. Each partial buy-back must be at least 5% of your home's current market value.",
    },
    {
        q: "What if my income exceeds the scheme's limit later?",
        a: "If your income exceeds the limit ($100,000 individual / $160,000 combined) for two consecutive years, you may need to repay part or all of the government's contribution. Your lender will review your financial situation to determine the repayment requirement.",
    },
    {
        q: "Do I pay interest or rent to the Government on their share?",
        a: "No. You do not pay any interest or rent on the Government's share while living in your home. Repayments are based on the current market value of the Government's equity share when you choose to buy it back.",
    },
    {
        q: "Do I only need to repay the Government's initial contribution amount?",
        a: "No. Repayments are based on a percentage of your home's current value, not the original contribution. This ensures both you and the Government share in any increase or decrease in property value over time.",
    },
    {
        q: "Am I allowed to sell my home?",
        a: "Yes. You can sell your home at any time. When you do, the Government receives its proportional share of the sale price — meaning if your home has increased in value, the Government's share reflects that growth, just like yours.",
    },
    {
        q: "Can I renovate my home?",
        a: "Yes. You can renovate without Government permission if the total cost is under $20,000 and doesn't require council approval. For renovations over $20,000, Housing Australia will arrange a valuation before and after the work.",
    },
    {
        q: "Am I guaranteed a home loan if I meet Help to Buy eligibility?",
        a: "No. Meeting Help to Buy eligibility does not guarantee a home loan. You must still have your income and financial capacity assessed by a Participating Lender to confirm you can service the loan.",
    },
    {
        q: "Am I locked into the Help to Buy Scheme indefinitely?",
        a: "No. The scheme is designed as a stepping stone to full homeownership. You can exit by making voluntary repayments to buy back the Government's share incrementally, or by selling your home and repaying the Government's proportion of the sale price.",
    },
];

const STEPS = [
    {
        num: "01",
        title: "Verify Your Eligibility",
        desc: "Check deposit requirements (2%), confirm income and property price caps are within limits. Consider consulting a mortgage broker to confirm eligibility before proceeding.",
        icon: "🔍",
        detail: "You must be an Australian citizen aged 18+, not currently own any property in Australia or overseas, and intend to live in the purchased home as your principal place of residence.",
    },
    {
        num: "02",
        title: "Contact a Participating Lender",
        desc: "Your lender will assess your financial position and guide you through the process. Currently, Commonwealth Bank and Bank Australia participate in the scheme.",
        icon: "🏦",
        detail: "Prepare personal ID (passport/driver's licence/Medicare card), your most recent ATO Notice of Assessment, payslips, bank statements showing at least a 2% deposit, and details of assets and liabilities.",
    },
    {
        num: "03",
        title: "Get Pre-Approval",
        desc: "Once your lender completes initial checks, they will submit your pre-approval to Housing Australia. Your Help to Buy place is reserved for 90 days, with an extension available if needed.",
        icon: "✅",
        detail: "Pre-approval gives you confidence while you search for a home. Your confirmation letter will outline the maximum purchase price, reservation expiry, and location eligibility.",
    },
    {
        num: "04",
        title: "Find & Purchase Your Home",
        desc: "With pre-approval in hand, search for eligible properties. Sign the contract of sale, pay your deposit, and notify your Participating Lender so they can update your application.",
        icon: "🏠",
        detail: "Contracts must allow at least 30 days between signing and settlement. Ensure your lender has all documents at least 29 days prior to settlement. Arrange home insurance and provide proof to your lender and Housing Australia.",
    },
];

const PROPERTY_TYPES = [
    "Houses",
    "Townhouses",
    "Apartments or units",
    "Duplexes",
    "Vacant land for constructing a new home",
    "Properties being demolished and rebuilt (with eligible build contract)",
];

const INCOME_ITEMS = [
    { label: "Wages & salaries", desc: "Including salary-sacrificed income, bonuses, and termination payments" },
    { label: "Investment income", desc: "Interest, rent, dividends, and royalties" },
    { label: "Personal service income", desc: "If you are a sole trader or contractor" },
    { label: "Government payments", desc: "Certain Australian Government pensions and allowances" },
    { label: "Private transfers", desc: "Superannuation pensions and annuity income" },
];

const INCOME_EXCLUSIONS = [
    "Child support payments",
    "Lump sum workers compensation payments",
];

const steps = [
    { label: "Save just a 2% deposit", sub: "From your own savings", color: "#86489B", icon: CreditCard },
    null,
    { label: "Government contributes up to 40%", sub: "As shared equity — interest-free", color: "#F171AC", icon: Bank },
    null,
    { label: "You own & live in your home", sub: "No rent on government's share", color: "#86489B", icon: Home },
];

export default function HelpbuyComponent() {
    const [openFaq, setOpenFaq] = useState(null);
    const [openStep, setOpenStep] = useState(null);

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
        .income-row:nth-child(even) { background: rgba(134,72,155,0.04); }
      `}</style>

            {/* ══════════════════════════════════════ HERO ══════════════════════════════════════ */}
            <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

                <div className="container mx-auto relative">
                    <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-sm scroll-reveal" style={{ color: "#86489B" }}>
                        <span className="w-2 h-2 rounded-full purple-gradient" style={{ display: "inline-block" }} />
                        Buy sooner with as little as a 2% deposit
                    </div>

                    <h1 className={` text-5xl! md:text-7xl! font-medium! leading-none mb-6! scroll-reveal! ${archivo.className}!`} style={{ animationDelay: "0.1s", color: "#000000" }}>
                        Help to Buy
                        <br />
                        <span className="highlight-number italic">Scheme.</span>
                    </h1>

                    <p className={`${roboto.className} text-lg! max-w-xl! font-normal! tracking-normal! mb-10 scroll-reveal`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
                        The <strong style={{ color: "#86489B" }}>Help to Buy Scheme</strong> lets eligible Australians purchase a home with just a <strong style={{ color: "#86489B" }}>2% deposit</strong> — the government co-invests up to <strong style={{ color: "#86489B" }}>40% for new homes</strong> and 30% for existing homes, reducing your loan and monthly repayments.
                    </p>

                    {/* <div className="flex flex-wrap gap-4 mb-16 scroll-reveal" style={{ animationDelay: "0.3s" }}>
                        <a href="#eligibility" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
                            Check Eligibility →
                        </a>
                        <a href="#how-it-works" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
                            How to Apply
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
                                <a href="#how-it-works" className="btn-default">
                                    By State
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* stat strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal" style={{ animationDelay: "0.4s" }}>
                        {[
                            { number: "2%", label: "Minimum deposit required" },
                            { number: "40%", label: "Government contribution for new homes" },
                            { number: "30%", label: "Government contribution for existing homes" },
                            { number: "10,000", label: "Places available per year" },
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
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`} >
                        How the Scheme Works
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-14! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        Instead of saving a large deposit and taking on a massive mortgage, the Australian Government co-purchases with you — reducing your loan size and eliminating LMI costs entirely.
                    </p>

                    {/* visual flow */}
                    {/* <div className="grid md:grid-cols-5 gap-3 items-center mb-14">
                        {[
                            { label: "Save just a 2% deposit", sub: "From your own savings", color: "#86489B", icon: "💰" },
                            null,
                            { label: "Government contributes up to 40%", sub: "As shared equity — interest-free", color: "#F171AC", icon: "🏛️" },
                            null,
                            { label: "You own & live in your home", sub: "No rent on government's share", color: "#86489B", icon: "🏠" },
                        ].map((item, i) =>
                            item === null ? (
                                <div key={i} className="flow-arrow hidden md:block">→</div>
                            ) : (
                                <div key={i} className="rounded-2xl p-6 text-center card-hover" style={{ backgroundColor: "#FDF2F9", border: `2px solid ${item.color}22` }}>
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <div className={`${archivo.className} font-semibold! text-base!`} style={{ color: item.color }}>{item.label}</div>
                                    <div className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B" }}>{item.sub}</div>
                                </div>
                            )
                        )}
                    </div> */}
                    <div className="grid md:grid-cols-5 gap-3 items-center mb-14">
                        {steps.map((item, i) =>
                            item === null ? (
                                <div
                                    key={i}
                                    className="flow-arrow hidden md:block text-2xl font-bold text-[#86489B] text-center"
                                >
                                    →
                                </div>
                            ) : (
                                <div
                                    key={i}
                                    className="rounded-2xl p-6 text-center card-hover"
                                    style={{ backgroundColor: "#FDF2F9", border: `2px solid ${item.color}22` }}
                                >
                                    {/* Lucide icon */}
                                    {item.icon && <item.icon className="w-7 h-7 mb-3 text-[#86489B] mx-auto" />}

                                    <div className={`${archivo.className} !font-semibold text-base`} style={{ color: item.color }}>
                                        {item.label}
                                    </div>
                                    <div className={`${roboto.className} text-sm font-normal tracking-normal`} style={{ color: "#6B6B6B" }}>
                                        {item.sub}
                                    </div>
                                </div>
                            )
                        )}
                    </div>





                    {/* worked example */}
                    <h3 className={`${archivo.className} text-lg! sm:text-2xl! font-semibold! mb-4!`} style={{ color: "#86489B" }}>Example: $600,000 New Home</h3>
                    <div className="grid md:grid-cols-3 gap-5 mb-10">
                        {[
                            { value: "$12,000", label: "Your 2% deposit", desc: "The minimum you need from your own savings to enter the scheme.", color: "#F171AC" },
                            { value: "$240,000", label: "Government contribution (40%)", desc: "The government's equity share — no interest or rent is charged on this portion.", color: "#86489B" },
                            { value: "$348,000", label: "Your loan from lender", desc: "Significantly reduced mortgage — lower monthly repayments and no LMI required.", color: "#86489B" },
                        ].map((c) => (
                            <div key={c.label} className="bg-white rounded-2xl p-6 card-hover" style={{ border: `1.5px solid ${c.color}33` }}>
                                <div className={`${archivo.className} text-3xl! font-semibold! mb-2!`} style={{ color: c.color }}>{c.value}</div>
                                <div className={`${roboto.className} font-bold! text-base! mb-2!`} style={{ color: "#000000" }}>{c.label}</div>
                                <p className={`${archivo.className} text-sm! font-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="info-box rounded-2xl p-5">
                        <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                            <strong style={{ color: "#86489B" }}>No LMI:</strong> Normally a low deposit triggers Lenders Mortgage Insurance (LMI), which can add $10,000–$15,000 to your costs. Under Help to Buy, you are fully exempt from LMI — saving you money upfront and on interest.
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
                        Eligibility is assessed on an individual basis. You must be an Australian citizen who genuinely intends to live in the property as your primary residence.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
                            <h3 className={`${archivo.className} text-xl font-medium! mb-6!`} style={{ color: "#86489B" }}>You Must</h3>
                            <ul className="space-y-3">
                                {[
                                    "Be an Australian citizen aged 18 or older",
                                    "Not currently own any property in Australia or overseas",
                                    "Have the home as your principal place of residence",
                                    "Contribute the maximum reasonable deposit you can afford (minimum 2%)",
                                    "Meet all income thresholds based on your most recent ATO Notice of Assessment",
                                    "Not be receiving another Australian Government shared equity scheme, loan, or guarantee for the same purchase",
                                ].map((item) => (
                                    <li key={item} className="checklist-item">
                                        <span className={`${archivo.className} mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center! text-xs! font-medium! text-white`} style={{ background: "#86489B" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-5">
                            {/* income thresholds */}
                            <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(241,113,172,0.25)" }}>
                                <h3 className={`${archivo.className} text-xl font-medium! mb-6!`} style={{ color: "#F171AC" }}>Income Thresholds</h3>
                                <div className="space-y-3">
                                    {[
                                        { type: "Individual applicant", limit: "$100,000", icon: "👤" },
                                        { type: "Joint applicants (combined)", limit: "$160,000", icon: "👥" },
                                    ].map((r) => (
                                        <div key={r.type} className="flex items-center justify-between rounded-xl p-4" style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(241,113,172,0.15)" }}>
                                            <div className="flex items-center gap-2 font-body text-sm font-medium" style={{ color: "#000000" }}>
                                                <span>{r.icon}</span> {r.type}
                                            </div>
                                            <div className="font-display font-black text-xl" style={{ color: "#F171AC" }}>{r.limit}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className={`${roboto.className} text-xs! font-normal! tracking-normal! mt-3`} style={{ color: "#6B6B6B" }}>Thresholds are updated each year on 1 July based on your most recent Notice of Assessment.</p>
                            </div>

                            {/* property types */}
                            <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
                                <h3 className={`${archivo.className} text-xl font-medium! mb-6!`} style={{ color: "#86489B" }}>Eligible Property Types</h3>
                                <ul className="space-y-2">
                                    {PROPERTY_TYPES.map((p) => (
                                        <li key={p} className={`${archivo.className} flex! items-center! gap-2! font-normal! text-sm!`} style={{ color: "#000000" }}>
                                            <span style={{ color: "#86489B" }}>✓</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* property price caps */}
                    <h3 className={`${archivo.className} text-xl font-medium! mb-5!`}>Property Price Caps by State</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {[
                            { state: "NSW", city: "$950,000", regional: "$625,000" },
                            { state: "VIC", city: "$850,000", regional: "$550,000" },
                            { state: "QLD", city: "$700,000", regional: "$550,000" },
                            { state: "WA", city: "$600,000", regional: "$450,000" },
                            { state: "SA", city: "$600,000", regional: "$450,000" },
                            { state: "TAS", city: "$600,000", regional: "$450,000" },
                            { state: "ACT", city: "$750,000", regional: "—" },
                            { state: "NT", city: "$600,000", regional: "$450,000" },
                        ].map((c) => (
                            <div key={c.state} className="guarantee-card rounded-2xl p-5 card-hover text-center">
                                <div className={`${archivo.className} text-2xl! font-semibold! highlight-number mb-2!`}>{c.state}</div>
                                <div className={`${archivo.className} text-xs! mb-1! font-normal!`} style={{ color: "#6B6B6B" }}>Capital city</div>
                                <div className="font-display font-bold text-base mb-2" style={{ color: "#86489B" }}>{c.city}</div>
                                {c.regional !== "—" && (
                                    <>
                                        <div className={`${archivo.className} text-xs! font-normal! mb-1!`} style={{ color: "#6B6B6B" }}>Regional</div>
                                        <div className={`${archivo.className} font-bold! text-sm!`} style={{ color: "#F171AC" }}>{c.regional}</div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* single parent provision */}
                    <div className="rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h3 className={`${archivo.className} text-xl font-medium! text-white mb-3!`}>Single Parent Provisions</h3>
                                <p className={`${roboto.className} text-white text-sm! font-normal! mb-4! tracking-normal!`} style={{ opacity: 0.95, lineHeight: 1.7 }}>
                                    The scheme includes tailored support for single parents. A single parent is someone without a spouse or de facto partner who has at least one dependent child.
                                </p>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Buy out a co-owner's share in a jointly held property to become the sole registered owner",
                                    "Own an existing property provided it is sold within 4 weeks of settling on the Help to Buy home",
                                    "Apply for a hardship extension if selling within 4 weeks is not possible",
                                ].map((h) => (
                                    <div key={h} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                                        <span className="text-white mt-0.5">✓</span>
                                        <span className={`${archivo.className} text-white text-sm! font-normal!`}>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          HOW IT WORKS / APPLICATION STEPS
      ══════════════════════════════════════ */}
<section id="how-it-works" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
  <div className="container mx-auto">
    {/* Divider */}
    <div className="mb-4 section-divider" />

    {/* Section Heading */}
    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
      How to Apply
    </h2>
    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
      The application process is managed through a Participating Lender and Housing Australia. The order matters — follow these steps carefully.
    </p>

    {/* Accordion Steps */}
    <div className="rounded-2xl overflow-hidden bg-white mb-10 border border-[rgba(134,72,155,0.15)]">
      {STEPS.map((s, i) => (
        <div key={s.num} className="step-item border-b last:border-b-0">
          <button
            onClick={() => setOpenStep(openStep === i ? null : i)}
            className="w-full text-left flex flex-col sm:flex-row items-start sm:items-center gap-2 px-6 py-6"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {/* Step Number */}
            <div className={`${archivo.className} flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-semibold text-base text-white purple-gradient`}>
              {s.num}
            </div>

            {/* Title + Description */}
            <div className="flex-1 text-left">
              <div className={`${archivo.className} font-bold text-lg mb-1`} style={{ color: "#000000" }}>
                {s.title}
              </div>
              <p className={`${archivo.className} text-sm! font-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>

            {/* Expand/Collapse Icon */}
            <div className="flex items-center gap-3 flex-shrink-0 mt-2 sm:mt-0">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white transition-colors duration-200"
                style={{ background: openStep === i ? "#86489B" : "#F171AC" }}
              >
                {openStep === i ? "−" : "+"}
              </span>
            </div>
          </button>

          {/* Step Details */}
          {openStep === i && (
            <div className="px-6 pb-6 sm:pl-24">
              <div className="info-box rounded-xl p-4">
                <p
                  className={`${roboto.className} font-body! text-sm! p-0! m-0! font-normal! tracking-normal!`}
                  style={{ color: "#6B6B6B", lineHeight: 1.7 }}
                >
                  {s.detail}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Key Timing Notes / Icon Cards */}
    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Pre-approval window",
          body: "Your Help to Buy place is reserved for 90 days, aligned with your loan pre-approval. A 90-day extension is available if needed (not guaranteed).",
          icon: <Clock className="w-8 h-8 text-[#F171AC]" />,
        },
        {
          title: "Contract settlement gap",
          body: "Contracts must allow at least 30 days between signing and settlement. Ensure your lender has all documents at least 29 days prior to settlement.",
          icon: <FileText className="w-8 h-8 text-[#86489B]" />,
        },
        {
          title: "Home insurance",
          body: "Home insurance is mandatory under Help to Buy and must be arranged before settlement. Factor premiums into your overall affordability calculations.",
          icon: <Shield className="w-8 h-8 text-[#6B6B6B]" />,
        },
      ].map((c) => (
        <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
          <div className="mb-3">{c.icon}</div>
          <h4
            className={`${archivo.className} font-medium! text-xl! mb-2!`}
            style={{ color: "#86489B" }}
          >
            {c.title}
          </h4>
          <p
            className={`${roboto.className} font-normal! text-sm! tracking-normal!`}
            style={{ color: "#6B6B6B", lineHeight: 1.6 }}
          >
            {c.body}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

            {/* ══════════════════════════════════════
          REPAYMENT
      ══════════════════════════════════════ */}
            <section id="repayment" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        {`Repaying the Government's Share`}
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        {`You will eventually need to repay or buy back the government's equity — but you have flexible options and are never charged interest or rent on their share.`}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {/* buy back options */}
                        <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                            <h3 className={`${archivo.className} text-xl! font-semibold! mb-6!`} style={{ color: "#86489B" }}>Your Buy-Back Options</h3>
                            {/* <div className="space-y-4">
                                {[
                                    { type: "Incremental buy-back", desc: "Purchase portions of the Government's share over time as your finances allow. Each repayment must be at least 5% of your home's current market value.", icon: "📈" },
                                    { type: "Full buy-back", desc: "You can repay the Government's share in one go if you wish, or as required by your circumstances (e.g. income exceeds thresholds for 2 consecutive years).", icon: "✅" },
                                    { type: "When you sell", desc: "The Government receives its proportional share of the sale price — not the original contribution. Both gains and losses are shared proportionally.", icon: "🏷️" },
                                ].map((r) => (
                                    <div key={r.type} className="rounded-xl p-4" style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(134,72,155,0.1)" }}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span>{r.icon}</span>
                                            <div className={`${archivo.className} text-sm! font-medium!`} style={{ color: "#000000" }}>{r.type}</div>
                                        </div>
                                        <div className={`${roboto.className} text-xs! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{r.desc}</div>
                                    </div>
                                ))}
                            </div> */}

                            <div className="space-y-4">
  {[
    {
      type: "Incremental buy-back",
      desc: "Purchase portions of the Government's share over time as your finances allow. Each repayment must be at least 5% of your home's current market value.",
      icon: <TrendingUp className="w-5 h-5 text-[#F171AC]" />,
    },
    {
      type: "Full buy-back",
      desc: "You can repay the Government's share in one go if you wish, or as required by your circumstances (e.g. income exceeds thresholds for 2 consecutive years).",
      icon: <CheckCircle className="w-5 h-5 text-[#86489B]" />,
    },
    {
      type: "When you sell",
      desc: "The Government receives its proportional share of the sale price — not the original contribution. Both gains and losses are shared proportionally.",
      icon: <Tag className="w-5 h-5 text-[#6B6B6B]" />,
    },
  ].map((r) => (
    <div
      key={r.type}
      className="rounded-xl p-4"
      style={{ backgroundColor: "#FDF2F9", border: "1px solid rgba(134,72,155,0.1)" }}
    >
      <div className="flex items-center gap-2 mb-1">
        {r.icon}
        <div
          className={`${archivo.className} text-sm font-medium`}
          style={{ color: "#000000" }}
        >
          {r.type}
        </div>
      </div>
      <div
        className={`${roboto.className} text-xs font-normal tracking-normal`}
        style={{ color: "#6B6B6B", lineHeight: 1.7 }}
      >
        {r.desc}
      </div>
    </div>
  ))}
</div>
                        </div>

                        {/* worked repayment example */}
                        <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1px solid rgba(241,113,172,0.2)" }}>
                            <h3 className={`${archivo.className} text-xl! font-semibold! mb-6!`} style={{ color: "#F171AC" }}>Example: Incremental Buy-Back</h3>
                            <div className="space-y-4">
                                <div className="rounded-xl p-4" style={{ backgroundColor: "#FEF3F8", border: "1px solid rgba(241,113,172,0.15)" }}>
                                    <div className="font-body text-xs font-medium mb-2" style={{ color: "#6B6B6B" }}>Original purchase</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[{ l: "Home value", v: "$800,000" }, { l: "Gov equity (30%)", v: "$240,000" }].map(x => (
                                            <div key={x.l}>
                                                <div className={`${archivo.className} text-xs! font-normal!`} style={{ color: "#6B6B6B" }}>{x.l}</div>
                                                <div className={`${archivo.className} font-bold! text-base!`} style={{ color: "#F171AC" }}>{x.v}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-4" style={{ backgroundColor: "#FEF3F8", border: "1px solid rgba(241,113,172,0.15)" }}>
                                    <div className="font-body text-xs font-medium mb-2" style={{ color: "#6B6B6B" }}>2 years later — buy back 5%</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[{ l: "New home value", v: "$880,000" }, { l: "5% buy-back", v: "$44,000" }].map(x => (
                                            <div key={x.l}>
                                                <div className={`${archivo.className} text-xs! font-normal!`} style={{ color: "#6B6B6B" }}>{x.l}</div>
                                                <div className={`${archivo.className} font-bold! text-base!`} style={{ color: "#86489B" }}>{x.v}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="warning-box rounded-xl p-4">
                                    <p className="${archivo.className} text-xs! font-normal! tracking-normal!" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                        <strong style={{ color: "#86489B" }}>After buy-back:</strong> You own 75%, Government owns 25%. Continue buying back in 5% increments at your own pace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* income assessment */}
                    <h3 className={`${archivo.className} text-xl! sm:text-3xl! font-semibold! mb-4!`}>What Counts as Income</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                            <h4
                                className={`${archivo.className} font-medium! text-xl! mb-2!`}
                                style={{ color: "#86489B" }}
                            >
                                Included in assessment
                            </h4>
                            <div className="space-y-2">
                                {INCOME_ITEMS.map((item) => (
                                    <div key={item.label} className="income-row rounded-lg px-3 py-2">
                                        <div className={`${archivo.className} text-sm! font-medium!`} style={{ color: "#000000" }}>{item.label}</div>
                                        <div className={`${archivo.className} text-xs! font-normal`} style={{ color: "#6B6B6B" }}>{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(241,113,172,0.2)" }}>
                            <h4 className={`${archivo.className} font-medium! text-xl! mb-2!`}
                                style={{ color: "#86489B" }}
                            >
                                NOT included in assessment
                            </h4>
                            <div className="space-y-3">
                                {INCOME_EXCLUSIONS.map((item) => (
                                    <div key={item} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(241,113,172,0.06)", border: "1px solid rgba(241,113,172,0.15)" }}>
                                        <span style={{ color: "#F171AC" }}>✕</span>
                                        <span className={`${archivo.className} text-sm! font-normal`} style={{ color: "#000000" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="info-box rounded-xl p-4 mt-4">
                                <p className={`${archivo.className} text-xs! font-normal`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    <strong style={{ color: "#86489B" }}>Forced repayment:</strong> If your income exceeds thresholds for two consecutive years, Housing Australia will work with you to determine an affordable repayment plan — possibly through refinancing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          CONSTRUCTION & NEW BUILDS
      ══════════════════════════════════════ */}
            <section id="construction" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        Construction & New Builds
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        Help to Buy can support building a new home or purchasing off-the-plan. Your building contract must meet specific eligibility requirements.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
                            <h3 className={`${archivo.className} text-xl! font-semibold! mb-3!`} style={{ color: "#86489B" }}>Contract Requirements</h3>
                            <ul className="space-y-3">
                                {[
                                    "Include a fixed price for both land and construction, within the price cap",
                                    "Signed with a licensed and registered builder who is not related to you",
                                    "Include all mandatory residential construction insurance requirements",
                                    "Entered into on an arm's length basis (not with a related party)",
                                    "Ensure the builder delivers a fully completed, move-in-ready home",
                                    "Comply with approved plans, council requirements, and national construction standards",
                                ].map((item) => (
                                    <li key={item} className="checklist-item">
                                        <span className={`${archivo.className} mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white font-medium!`} style={{ background: "#86489B" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-5">
                            {/* timeframes */}
                            <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(241,113,172,0.25)" }}>
                                <h3 className={`${archivo.className} text-xl! font-bold! mb-4!`} style={{ color: "#F171AC" }}>Construction Timeframes</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Construction must begin", value: "Within 12 months of land registration" },
                                        { label: "Build must be completed", value: "Within 36 months of land ownership" },
                                        { label: "Land & construction settlement", value: "Within 90 days of application approval" },
                                    ].map((r) => (
                                        <div key={r.label} className="flex items-start justify-between gap-3 rounded-xl p-3" style={{ backgroundColor: "#FDF2F9" }}>
                                            <div className={`${roboto.className} text-xs`} style={{ color: "#6B6B6B" }}>{r.label}</div>
                                            <div className={`font-body text-xs font-medium text-right`} style={{ color: "#F171AC" }}>{r.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* cost overruns */}
                            <div className="warning-box rounded-2xl p-5">
                                <h4 className={`${archivo.className} font-bold! text-base! mb-2!`} style={{ color: "#F171AC" }}>Managing Cost Overruns</h4>
                                <p className={`${roboto.className} text-sm font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    {`The Government can contribute additional funds, but only up to the maximum 40%. Consider setting aside an optional <strong style={{ color: "#000000" }}>5% buffer from your savings</strong> to cover potential overruns without increasing your loan or the Government's contribution.`}
                                </p>
                            </div>

                            {/* contract changes */}
                            <div className="info-box rounded-2xl p-5">
                                <h4 className={`${archivo.className} font-bold! text-base! mb-2!`} style={{ color: "#86489B" }}>Making Contract Changes</h4>
                                <p className={`${roboto.className} text-sm font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    {`Changes are allowed if the revised contract results in a substantially similar home and the new price stays within the area's price cap. Provide at least <strong style={{ color: "#000000" }}>21 days' notice</strong> to Housing Australia before approving any changes.`}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* comparison table: Help to Buy vs First Home Guarantee */}
                    <h3 className={`${archivo.className} text-2xl! font-bold! mb-6!`}>Help to Buy vs First Home Guarantee</h3>
                    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
                        <div className="grid grid-cols-3 px-6 py-4 font-display font-bold text-sm" style={{ backgroundColor: "#FDF2F9", borderBottom: "1px solid rgba(134,72,155,0.1)", color: "#86489B" }}>
                            <span className={`${roboto.className}`}>Feature</span>
                            <span className={`${roboto.className}`}>Help to Buy</span>
                            <span className={`${roboto.className}`}>First Home Guarantee</span>
                        </div>
                        {[
                            ["Minimum deposit", "2%", "5%"],
                            ["Government contribution", "Up to 40% equity", "Guarantees mortgage (no equity)"],
                            ["LMI required", "No", "No"],
                            ["Monthly repayments", "Lower (smaller loan)", "Higher (100% loan)"],
                            ["Equity ownership", "Shared (e.g. 60–70%)", "Full 100% from day one"],
                            ["Repayment obligation", "Yes — buy back over time", "No — standard mortgage only"],
                            ["Annual places", "10,000", "35,000"],
                        ].map(([feature, htb, fhbg], i) => (
                            <div key={feature} className={`${roboto.className} grid grid-cols-3 px-6 py-4 font-normal! text-sm`} style={{ borderBottom: i < 6 ? "1px solid rgba(134,72,155,0.07)" : "none", backgroundColor: i % 2 === 0 ? "white" : "rgba(134,72,155,0.02)" }}>
                                <span style={{ color: "#6B6B6B" }}>{feature}</span>
                                <span style={{ color: "#86489B", fontWeight: 500 }}>{htb}</span>
                                <span style={{ color: "#000000" }}>{fhbg}</span>
                            </div>
                        ))}
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
                        Everything you need to know about the Help to Buy Scheme.
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
            {/* <section className="px-2 md:px-12 py-24" style={{ background: "linear-gradient(135deg, #86489B 0%, #F171AC 100%)" }}>
                <div className="container mx-auto text-center">
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4! text-white`}>
                        Get into your home
                        <br />
                        <em>sooner, for less.</em>
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-7! max-w-2xl! mx-auto! text-white`} style={{ lineHeight: 1.7, opacity: 0.95 }}>
                        Over 2,300 places have already been approved since the scheme launched in December 2025. With only 10,000 available each year, now is the time to check your eligibility and speak to a participating lender.
                    </p>
                    <div className={`flex flex-wrap justify-center gap-4 mb-16 scroll-reveal ${roboto.className}`} style={{ animationDelay: "0.3s" }}>
                        <div className="flex gap-3 lg:p-0">
                            <div className="">
                                <a href="https://www.housingaustralia.gov.au/support-buy/help-buy" className="extra-btn">
                                    Housing Australia →
                                </a>
                            </div>

                            <div className="">
                                <a href="https://www.commbank.com.au/home-loans/help-to-buy.html" className="extra-btn">
                                    Commonwealth Bank
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}

        </div>
    );
}