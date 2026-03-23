"use client";
import React, { useState } from "react";
import CallAction from "@/components/CallAction";
import TestimonialsSlider from "@/components/Testimonials";
import "swiper/css";
import "swiper/css/pagination";
import { Archivo, Roboto } from "next/font/google";


const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


// ─── Icons ─────────────────────────────────────────────────────────────────────
function IconChevron({ open }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}
function IconShield() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function IconClock() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
function IconKey() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
    );
}
function IconArrowRight() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    );
}
function IconCheck() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
function IconWarning() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    );
}
function IconCalculator() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="8" y2="10" /><line x1="12" y1="10" x2="12" y2="10" /><line x1="16" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="8" y2="14" /><line x1="12" y1="14" x2="12" y2="14" /><line x1="16" y1="14" x2="16" y2="14" />
            <line x1="8" y1="18" x2="12" y2="18" /><line x1="16" y1="18" x2="16" y2="18" />
        </svg>
    );
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const faqs = [
    { q: "What is a bridging loan in Australia?", a: "A short-term loan that helps you buy a new property before you've sold your current one. It covers the financial gap until sale proceeds repay it." },
    { q: "How long can a bridging loan last?", a: "Typically 6–12 months, depending on the lender and whether it's a closed or open bridging loan. Exact terms vary by lender." },
    { q: "Do you pay repayments during a bridging loan?", a: "Yes, most bridging loans are interest-only during the bridging period. Some lenders capitalise interest — meaning it's added to your loan balance rather than paid monthly." },
    { q: "What is peak debt?", a: "The highest total amount you owe across all loans while both properties are owned simultaneously. Lenders use peak debt to test your serviceability." },
    { q: "Are bridging loans expensive?", a: "They can be more expensive than standard loans due to higher rates and fees. Costs depend on the interest rate, fees, and whether interest is capitalised." },
    { q: "What happens if my house doesn't sell?", a: "You may pay the bridging loan longer, incur more interest and fees, and possibly need extra funds to repay. A realistic exit strategy and financial buffer are critical." },
    { q: "Can investors use bridging loans?", a: "Yes. Investors commonly use bridging finance, but lenders apply different assessment criteria and tax implications may apply." },
    { q: "What's the difference between closed and open bridging loans?", a: "Closed bridging loans have a known sale date (less risky). Open bridging loans are used when the sale date isn't known — generally riskier and costlier." },
    { q: "How long does it take to get a bridging loan approved?", a: "Approval usually takes 7–14 days depending on the lender. Some can pre-approve in 5–10 days. Providing all documents upfront speeds the process significantly." },
    { q: "Can I make lump-sum payments to repay early?", a: "Yes. Most lenders allow early repayment without penalties. Making extra payments reduces interest costs and lowers your overall debt." },
];

const steps = [
    { num: "01", title: "Assess Your Position", desc: "Lender evaluates your existing property value, outstanding mortgage, new purchase price, and costs to calculate your peak debt." },
    { num: "02", title: "Apply for the Loan", desc: "Submit income proof, expenses, credit history, and your exit strategy — showing your property is listed or under agreement." },
    { num: "03", title: "Approval & Settlement", desc: "Loan is approved, funds are released to purchase your new property. Your bridging period officially begins." },
    { num: "04", title: "The Bridging Period", desc: "You hold both properties, typically making interest-only repayments for up to 6–12 months while your existing home is marketed." },
    { num: "05", title: "Sell Your Property", desc: "Sale proceeds repay your existing mortgage. Remaining funds reduce your total peak debt significantly." },
    { num: "06", title: "Transition to Home Loan", desc: "Bridging loan ends. Your end debt converts into a standard principal-and-interest home loan at normal terms." },
];

const benefits = [
    { Icon: IconKey, title: "Buy Before Selling", desc: "Secure your next home without waiting for your current property to settle." },
    { Icon: IconShield, title: "Avoid Rushed Sales", desc: "Choose a better time and price to sell — no pressure to accept low offers." },
    { Icon: IconClock, title: "Flexible Moving Timeline", desc: "Coordinate your move on your terms without double moves or temporary rentals." },
];

const risks = [
    "Rising interest costs: compounded monthly on peak debt",
    "Shortfall risk if property sells below estimate",
    "Forced sale if unsold beyond bridging period",
    "Upfront costs: dual valuations ($300–$600 each)",
    "No redraw access on extra repayments during bridge term",
    "Limited period: lender can appoint receiver if overdue",
];

const qualifyItems = [
    { n: "01", title: "Equity", desc: "~50% preferred. Higher equity reduces risk. Some lenders accept lower with at least 20% combined LVR." },
    { n: "02", title: "Serviceability", desc: "Proof of income, expenses, and credit history. Lenders test against peak or end debt depending on structure." },
    { n: "03", title: "Loan Timeframe", desc: "Up to 6 months for established properties. Up to 12 months if construction is involved." },
    { n: "04", title: "Exit Strategy", desc: "Signed agent agreement, property listed for sale, estimated comparable sale prices, or contract of sale." },
];

const takeaways = [
    "Buy before you sell by temporarily covering both loans or the deposit.",
    "Two main types: closed (sale date known) and open (sale date unknown).",
    "Usually short-term and interest-only; interest may be capitalised.",
    "Lenders look for sufficient equity, clear exit strategy and loan serviceability.",
    "Costlier than standard home loans — plan for higher interest and a buffer.",
    "Speak with a broker to compare bridging loan options and rates across lenders.",
];

// ─── Shared style tokens ────────────────────────────────────────────────────────
// Brand gradient: from #86489B (plum) → #F171AC (rose)
// Used as text gradient, border accents, button bg, etc.

// ─── Sub-components ────────────────────────────────────────────────────────────
function SectionTag({ children }) {
    return (
        <span className="inline-flex items-center gap-2 border border-[#F171AC]/30 rounded-full px-3.5 py-1 text-[10px] font-semibold tracking-widest uppercase text-[#F171AC] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F171AC] inline-block" />
            {children}
        </span>
    );
}

function GradientText({ children, className = "" }) {
    return (
        <span className={`bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent ${className}`}>
            {children}
        </span>
    );
}


// ====== Heading ======
function SectionHeading({ children }) {
    return (
        <h2 className="text-3xl! md:text-4xl! lg:text-[44px]! font-medium! leading-tight! mb-3!">
            {children}
        </h2>
    );
}

// ====== Sub-Heading ======
function SectionLead({ children, className = "" }) {
    return (
        <p className={`text-base! text-gray-500 font-normal! leading-relaxed! max-w-xl! mb-12! ${className}`}>
            {children}
        </p>
    );
}

function PinkDivider() {
    return (
        <div className="hidden! sm:block! w-full h-px bg-gradient-to-r from-transparent via-[#F171AC]/25 to-transparent" />
    );
}

// Card with left border accent + pink shadow on hover (matches site style)
function AccentCard({ children, className = "" }) {
    return (
        <div className={`bg-white! rounded-2xl! border-l-4! border-[#F172AC]! shadow-[0_4px_15px_rgba(241,114,172,0.12)]! hover:shadow-[0_6px_20px_rgba(241,114,172,0.35)]! transition-all! duration-300! hover:-translate-y-1 p-4! sm:p-5! md:p-6! ${className}`}>
            {children}
        </div>
    );
}

// ─── Calculator ────────────────────────────────────────────────────────────────
function BridgingCalculator() {
    const [existingValue, setExistingValue] = useState(700000);
    const [existingMortgage, setExistingMortgage] = useState(300000);
    const [newPurchase, setNewPurchase] = useState(800000);
    const [salePrice, setSalePrice] = useState(750000);

    const peakDebt = existingMortgage + newPurchase;
    const netProceeds = salePrice - existingMortgage;
    const endDebt = Math.max(0, peakDebt - netProceeds);
    const equity = existingValue - existingMortgage;
    const lvr = ((peakDebt / (existingValue + newPurchase)) * 100).toFixed(1);
    const fmt = (n) => "$" + Math.round(n).toLocaleString("en-AU");

    const fields = [
        { label: "Current Property Value", val: existingValue, set: setExistingValue, min: 100000, max: 5000000, step: 10000 },
        { label: "Existing Mortgage", val: existingMortgage, set: setExistingMortgage, min: 0, max: 4000000, step: 10000 },
        { label: "New Purchase Price", val: newPurchase, set: setNewPurchase, min: 100000, max: 5000000, step: 10000 },
        { label: "Expected Sale Price", val: salePrice, set: setSalePrice, min: 100000, max: 5000000, step: 10000 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.12)] p-8 md:p-10">
            {/* Inputs */}
            <div className="flex flex-col gap-7">
                {fields.map((f, i) => (
                    <div key={i}>
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="text-sm text-gray-500 font-medium">{f.label}</span>
                            <span className="text-lg font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                                {fmt(f.val)}
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                type="range"
                                min={f.min} max={f.max} step={f.step}
                                value={f.val}
                                onChange={e => f.set(Number(e.target.value))}
                                className="w-full h-[3px] rounded-full appearance-none cursor-pointer
                                    bg-gradient-to-r from-[#86489B] to-[#F171AC]
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:bg-white
                                    [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#F171AC]
                                    [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(241,113,172,0.4)]
                                    [&::-webkit-slider-thumb]:cursor-pointer
                                    [&::-webkit-slider-thumb]:transition-transform
                                    [&::-webkit-slider-thumb]:hover:scale-125"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center gap-0 bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 rounded-2xl p-6 border border-[#F171AC]/15">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#86489B] mb-4">Your Estimates</p>

                <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10 text-gray-800">
                    <span className="text-sm font-medium">Peak Debt</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                        {fmt(peakDebt)}
                    </span>
                </div>

                <div className="h-px bg-gradient-to-r from-[#86489B]/20 to-[#F171AC]/20 my-1" />

                {[
                    { label: "Your Equity", val: fmt(equity) },
                    { label: "Combined LVR", val: `${lvr}%` },
                    { label: "Net Sale Proceeds", val: fmt(netProceeds) },
                ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#F171AC]/[0.07] text-sm">
                        <span className="text-gray-500">{row.label}</span>
                        <span className="text-gray-700 font-semibold">{row.val}</span>
                    </div>
                ))}

                <div className="h-px bg-gradient-to-r from-[#86489B]/20 to-[#F171AC]/20 my-1" />

                <div className="flex justify-between items-center py-3 text-gray-800">
                    <span className="text-sm font-medium">End Debt</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                        {fmt(endDebt)}
                    </span>
                </div>

                <p className={`mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border ${endDebt > newPurchase * 0.9
                    ? "bg-rose-50 border-rose-200 text-rose-600"
                    : "bg-green-50 border-green-200 text-green-600"
                    }`}>
                    {endDebt > newPurchase * 0.9
                        ? "⚠ High end debt — consider building in a sale buffer."
                        : "✓ Estimated end debt looks manageable."}
                </p>
            </div>
        </div>
    );
}

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border-b border-[#F171AC]/15 cursor-pointer group first:border-t first:border-[#F171AC]/15"
            onClick={() => setOpen(!open)}
        >
            <div className={`flex! justify-between! items-center! py-8! px-1! text-[20px]! font-medium! gap-4! transition-colors duration-200
                ${open
                    ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent"
                    : "text-gray-700 group-hover:text-[#F171AC]"
                }`}>
                <span>{q}</span>
                <span className="text-[#F171AC] flex-shrink-0"><IconChevron open={open} /></span>
            </div>
            {open && (
                <div className="pb-5! px-1! text-[17px]! text-gray-500 leading-relaxed! font-medium!">
                    {a}
                </div>
            )}
        </div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const BridgingComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`
                .grad-text {
                    background: linear-gradient(90deg, #86489B, #F171AC);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>

            {/* ══════════════════════════════════════════════════════ HERO ══════════════════════════════════════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                {/* Soft radial bg matching brand */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Bridging Finance Guide</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Buy Your Next Home<br />
                    <span className="grad-text">Before You Sell</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto ${archivo.className}`}>
                    Timing the property market is hard. A bridging loan gives you the confidence to secure your next home now — without the pressure of a rushed sale.
                </p>

                {/* Stats bar */}
                <div className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "6–12", label: "Months bridging period" },
                        { val: "~50%", label: "Equity preferred" },
                        { val: "7–14", label: "Days to approval" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-5 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-3xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ KEY TAKEAWAYS ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Key Takeaways</SectionTag>
                <SectionHeading>
                    What You Need to <GradientText>Know</GradientText>
                </SectionHeading>
                <SectionLead>
                    Before diving in, here are the essential points every borrower should understand about bridging finance.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {takeaways.map((text, i) => (
                        <AccentCard key={i} className="flex gap-3 items-start p-5">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                <IconCheck />
                            </div>
                            <span className="text-[15px]! text-gray-500! leading-relaxed! font-normal!">{text}</span>
                        </AccentCard>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ HOW IT WORKS — STEPS ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Process</SectionTag>
                <SectionHeading>
                    How Bridging Loans <GradientText>Work</GradientText>
                </SectionHeading>
                <SectionLead>
                    Six clear steps from assessment to your ongoing home loan — here is exactly what to expect.
                </SectionLead>

                <div className="flex flex-col relative">
                    {/* Vertical spine */}
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />

                    {steps.map((s, i) => (
                        <div key={i} className="flex gap-7 items-start py-8 border-b border-[#F171AC]/[0.1] last:border-0">
                            {/* Number circle */}
                            <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-[#F171AC]/40 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_4px_15px_rgba(241,113,172,0.15)]">
                                <span className="text-xl font-bold grad-text">{s.num}</span>
                            </div>
                            <div className="pt-4 flex-1">
                                <p className="text-xl! font-bold! text-[#86489b]! mb-2!">{s.title}</p>
                                <p className="text-[15px]! text-gray-500 leading-relaxed! font-normal!">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ WORKED EXAMPLE ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Real-Life Scenario</SectionTag>

                <SectionHeading>
                    A Worked <GradientText>Example</GradientText>
                </SectionHeading>

                <SectionLead>
                    See exactly how peak debt and end debt are calculated in a real bridging scenario.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                            <IconCalculator />
                        </div>
                        <h3 className="text-xl! font-semibold! text-gray-800">Buying Before Selling</h3>
                    </div>

                    <div className="p-8">
                        {/* 4 data cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { step: "Current Property", label: "Market Value", val: "$700,000" },
                                { step: "Existing Debt", label: "Remaining Mortgage", val: "$300,000" },
                                { step: "New Purchase", label: "Purchase Price", val: "$800,000" },
                                { step: "Sale Result", label: "Sale Price", val: "$750,000" },
                            ].map((c, i) => (
                                <div key={i} className="p-5 bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 border border-[#F171AC]/15 rounded-2xl">
                                    <div className="text-[10px] font-semibold tracking-widest uppercase text-[#86489B] mb-1.5">{c.step}</div>
                                    <div className="text-[13px] text-gray-400 mb-1.5">{c.label}</div>
                                    <div className="text-[22px] font-bold text-gray-800">{c.val}</div>
                                </div>
                            ))}
                        </div>

                        {/* Formula */}
                        <div className="bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 border border-[#F171AC]/20 rounded-2xl px-6 py-5">
                            {[
                                { label: "Existing mortgage", val: "$300,000", total: false },
                                { label: "+ New purchase", val: "$800,000", total: false },
                                { label: "Peak Debt", val: "$1,100,000", total: true },
                                { label: "Peak debt", val: "$1,100,000", total: false, mt: true },
                                { label: "− Net sale proceeds ($750k − $300k)", val: "$450,000", total: false },
                                { label: "End Debt (your new home loan)", val: "$650,000", total: true, gold: true },
                            ].map((row, i) => (
                                <div key={i} className={`flex justify-between items-center py-2 border-b border-[#F171AC]/[0.08] last:border-0 text-sm
                                    ${row.total ? "font-semibold pt-3.5" : "text-gray-500"}
                                    ${row.mt ? "mt-4" : ""}`}>
                                    <span className={row.total ? "grad-text" : ""}>{row.label}</span>
                                    <span className={`font-semibold ${row.total ? "text-xl grad-text" : "text-gray-700"}`}>
                                        {row.val}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ CALCULATOR ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Interactive Tool</SectionTag>
                <SectionHeading>
                    Calculate Your <GradientText>Bridging Figures</GradientText>
                </SectionHeading>
                <SectionLead>
                    Adjust the sliders to estimate your peak debt and end debt based on your situation.
                </SectionLead>
                <BridgingCalculator />
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ BENEFITS ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Benefits</SectionTag>
                <SectionHeading>
                    Why Borrowers Choose <GradientText>Bridging Finance</GradientText>
                </SectionHeading>
                <SectionLead>
                    When used correctly, a bridging loan removes timing pressure and puts you in control.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {benefits.map((b, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <b.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{b.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{b.desc}</p>
                        </AccentCard>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ RISKS ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Risks &amp; Considerations</SectionTag>
                <SectionHeading>
                    What Can <GradientText>Go Wrong</GradientText>
                </SectionHeading>
                <SectionLead>
                    Bridging loans are powerful but not without risk. Know these before you commit.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {risks.map((r, i) => (
                        <div key={i} className="flex gap-3 items-start p-4 bg-rose-50 border border-rose-200/60 rounded-xl">
                            <span className="text-rose-400 flex-shrink-0 mt-0.5"><IconWarning /></span>
                            <span className="text-sm! text-gray-500 leading-relaxed! font-normal!">{r}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ WHO QUALIFIES ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Eligibility</SectionTag>
                <SectionHeading>
                    Who Can <GradientText>Qualify?</GradientText>
                </SectionHeading>
                <SectionLead>
                    Lenders assess four key areas to determine if bridging finance suits your situation.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {qualifyItems.map((q, i) => (
                        <AccentCard key={i} className="p-6">
                            <div className="text-4xl font-bold grad-text opacity-30 leading-none mb-3">{q.n}</div>
                            <p className="text-[18px]! font-semibold! text-[#86489b]! mb-2">{q.title}</p>
                            <p className="text-[13px]! text-gray-500! leading-relaxed! font-medium!">{q.desc}</p>
                        </AccentCard>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ FAQ ══════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>Questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything homeowners ask before taking out bridging finance.
                </SectionLead>

                <div>
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════════════════════ CTA ══════════════════════════════════════════════════════ */}
            <CallAction />

        </div>
    );
};

export default BridgingComponent;