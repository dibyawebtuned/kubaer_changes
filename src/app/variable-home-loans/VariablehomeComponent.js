"use client";
import React, { useState } from "react";
import CallAction from "@/components/CallAction";
import { Archivo, Roboto } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

// ─── Icons ────────────────────────────────────────────────────────────────────
function IconChevron({ open }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
            <polyline points="6 9 12 15 18 9" />
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
function IconInfo() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}
function IconTrendDown() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
            <polyline points="16 17 22 17 22 11" />
        </svg>
    );
}
function IconRefresh() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
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
function IconDollar() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}
function IconBank() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="22" x2="21" y2="22" />
            <line x1="6" y1="18" x2="6" y2="11" />
            <line x1="10" y1="18" x2="10" y2="11" />
            <line x1="14" y1="18" x2="14" y2="11" />
            <line x1="18" y1="18" x2="18" y2="11" />
            <polygon points="12 2 20 7 4 7" />
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
function IconStar() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const variableLoanTypes = [
    {
        label: "Basic variable",
        tag: "Lowest rate",
        tagColor: "blue",
        bestFor: "First-time buyers or those focused solely on the lowest possible repayment.",
        keyBenefit: "Lower ongoing fees and competitive 'headline' rates.",
        features: ["Competitive variable interest rate", "Lower ongoing fees", "Basic extra repayments"],
        notIncluded: ["No offset account", "Limited or no redraw", "Fewer lender tools"],
    },
    {
        label: "Standard variable",
        tag: "Most popular",
        tagColor: "green",
        recommended: true,
        bestFor: "Established homeowners and investors who want full control over their debt.",
        keyBenefit: "High flexibility to manage your money and reduce interest over time.",
        features: ["Offset accounts available", "Redraw facility included", "Unlimited extra repayments", "Package discounts available"],
        notIncluded: [],
    },
];

const whyChoose = [
    {
        Icon: TrendDownIcon,
        title: "Freedom to pay off faster",
        desc: "Variable rate loans usually allow unlimited extra repayments without penalty — helping you reduce interest and own your home sooner.",
    },
    {
        Icon: RefreshIcon,
        title: "Smart money management features",
        desc: "Many variable loans include offset accounts and redraw facilities — tools that significantly reduce interest while keeping your savings accessible.",
    },
    {
        Icon: DollarIcon,
        title: "Opportunity to benefit when rates drop",
        desc: "If interest rates decrease, your repayments could decrease too — potentially saving you thousands over the life of your loan.",
    },
];

const isRightFor = [
    "Want flexibility in repayments",
    "Plan to make additional repayments",
    "Like having access to advanced loan features",
    "Are comfortable with small changes in repayment amounts",
];

const lenderGroups = [
    {
        label: "Major banks (Big 4)",
        lenders: ["Commonwealth Bank (CBA)", "Westpac", "NAB (National Australia Bank)", "ANZ"],
    },
    {
        label: "Second-tier & regional",
        lenders: ["Macquarie Bank", "ING", "Suncorp Bank", "St.George Bank", "BankSA", "Bank of Melbourne", "Bankwest", "Bendigo Bank", "Bank of Queensland (BOQ)", "Great Southern Bank", "AMP Bank", "MyState Bank"],
    },
    {
        label: "Customer-owned & mutual",
        lenders: ["ubank", "People First Bank", "Beyond Bank", "IMB Bank", "Teachers Mutual Bank", "Bank Australia", "Horizon Bank"],
    },
    {
        label: "Specialist & non-bank",
        lenders: ["Liberty Financial", "Pepper Money", "La Trobe Financial", "Firstmac", "Resimac", "RedZed", "Pacific Mortgage Group"],
    },
];

const faqs = [
    { q: "What exactly is a variable interest rate?", a: "A variable rate means your interest can fluctuate over the life of the loan. It is influenced by the Reserve Bank of Australia's (RBA) cash rate and your lender's funding costs." },
    { q: "How often do variable rates change?", a: "Lenders can change rates at any time, though they typically review them following the RBA's monthly meetings. You will always be notified in writing before your repayment amount changes." },
    { q: "Can I make extra repayments on a variable loan?", a: "Yes! One of the biggest advantages of a variable loan is the ability to make unlimited extra repayments without penalty, helping you pay off your home years earlier." },
    { q: "What is an offset account?", a: "It's a transaction account linked to your mortgage. Every dollar in your offset is 'subtracted' from your loan balance before interest is calculated, potentially saving you thousands." },
    { q: "What is a redraw facility?", a: "A redraw facility allows you to withdraw any extra repayments you've made into your loan if you need the cash back for emergencies or renovations." },
    { q: "Will my repayments go down if interest rates drop?", a: "Yes. If your lender passes on a rate cut, your minimum monthly repayment decreases, though many borrowers choose to keep their payments high to clear the debt faster." },
    { q: "Are there different 'levels' of variable loans?", a: "Yes. They range from 'Basic' (no-frills, lower rates) to 'Standard' (fully featured with offsets and redraws) and 'Introductory' (discounted rates for the first year)." },
    { q: "Can I switch from a variable to a fixed rate later?", a: "Generally, yes. Most lenders allow you to fix your rate at any time during the loan term, which can be a great strategy if you think market rates are about to rise." },
    { q: "Is there a limit to how high variable rates can go?", a: "No. There is no 'ceiling' on a variable rate. It's essential to ensure you have a financial buffer to manage potential increases in the market." },
    { q: "Who is a variable rate loan best suited for?", a: "It's ideal for borrowers who value flexibility, want to use savings to offset interest, or plan on making substantial extra repayments." },
];

// ─── Icon wrappers (can't use component references in data before definition) ──
function TrendDownIcon() { return <IconTrendDown />; }
function RefreshIcon() { return <IconRefresh />; }
function DollarIcon() { return <IconDollar />; }

// ─── Rate Impact Calculator ───────────────────────────────────────────────────
function RateImpactCalculator() {
    const [loanAmount, setLoanAmount] = useState(600000);
    const [currentRate, setCurrentRate] = useState(6.2);
    const [rateChange, setRateChange] = useState(-0.5);
    const [loanTerm, setLoanTerm] = useState(30);

    const mr = (rate) => rate / 100 / 12;
    const nMths = loanTerm * 12;

    const calcPayment = (principal, rate) =>
        principal > 0
            ? principal * (mr(rate) * Math.pow(1 + mr(rate), nMths)) / (Math.pow(1 + mr(rate), nMths) - 1)
            : 0;

    const newRate = Math.max(0.5, currentRate + rateChange);
    const currentPayment = calcPayment(loanAmount, currentRate);
    const newPayment = calcPayment(loanAmount, newRate);
    const monthlyDiff = newPayment - currentPayment;
    const annualDiff = monthlyDiff * 12;

    const totalInterestCurrent = currentPayment * nMths - loanAmount;
    const totalInterestNew = newPayment * nMths - loanAmount;
    const totalDiff = totalInterestNew - totalInterestCurrent;

    const fmt = (n) => "$" + Math.round(Math.abs(n)).toLocaleString("en-AU");
    const sign = (n) => n > 0 ? "+" : n < 0 ? "−" : "";
    const isDecrease = rateChange < 0;

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">Rate change impact calculator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Loan amount", val: "$" + Math.round(loanAmount).toLocaleString("en-AU"), min: 100000, max: 2000000, step: 25000, value: loanAmount, setter: setLoanAmount },
                        { label: "Current interest rate", val: currentRate.toFixed(1) + "% p.a.", min: 3, max: 10, step: 0.1, value: currentRate, setter: setCurrentRate },
                        { label: "Rate change scenario", val: (rateChange >= 0 ? "+" : "") + rateChange.toFixed(2) + "%", min: -3, max: 3, step: 0.25, value: rateChange, setter: setRateChange },
                        { label: "Loan term", val: loanTerm + " years", min: 10, max: 30, step: 5, value: loanTerm, setter: setLoanTerm },
                    ].map((f, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-[14px] text-gray-500">{f.label}</span>
                                <span className="text-[18px] font-semibold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{f.val}</span>
                            </div>
                            <input
                                type="range"
                                min={f.min} max={f.max} step={f.step}
                                value={f.value}
                                onChange={(e) => f.setter(Number(e.target.value))}
                                className="w-full h-[3px] rounded-full appearance-none cursor-pointer
                                    bg-gradient-to-r from-[#86489B] to-[#F171AC]
                                    [&::-webkit-slider-thumb]:appearance-none
                                    [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                                    [&::-webkit-slider-thumb]:rounded-full
                                    [&::-webkit-slider-thumb]:bg-white
                                    [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#F171AC]
                                    [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(241,113,172,0.4)]
                                    [&::-webkit-slider-thumb]:cursor-pointer
                                    [&::-webkit-slider-thumb]:hover:scale-125
                                    [&::-webkit-slider-thumb]:transition-transform"
                            />
                        </div>
                    ))}
                </div>

                {/* Results */}
                <div className="flex flex-col justify-center bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 rounded-2xl p-6 border border-[#F171AC]/15">
                    <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B] mb-4">Rate impact summary</p>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white rounded-xl border border-[#F171AC]/15 p-4 text-center">
                            <p className="text-[11px] text-gray-400 mb-1">Current rate</p>
                            <p className="text-[20px] font-bold text-gray-700">{currentRate.toFixed(1)}%</p>
                            <p className="text-[13px] text-gray-500 mt-1">{fmt(currentPayment)}/mo</p>
                        </div>
                        <div className={`rounded-xl border p-4 text-center ${isDecrease ? "bg-green-50 border-green-200/60" : "bg-rose-50 border-rose-200/60"}`}>
                            <p className="text-[11px] text-gray-400 mb-1">New rate</p>
                            <p className={`text-[20px] font-bold ${isDecrease ? "text-green-700" : "text-rose-600"}`}>{newRate.toFixed(1)}%</p>
                            <p className={`text-[13px] mt-1 ${isDecrease ? "text-green-600" : "text-rose-500"}`}>{fmt(newPayment)}/mo</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Monthly repayment change</span>
                        <span className={`text-[22px] font-bold ${isDecrease ? "text-green-600" : "text-rose-500"}`}>
                            {sign(monthlyDiff)}{fmt(monthlyDiff)}/mo
                        </span>
                    </div>

                    {[
                        { label: "Annual repayment change", val: sign(annualDiff) + fmt(annualDiff) + "/yr", danger: !isDecrease },
                        { label: "Total interest change (life of loan)", val: sign(totalDiff) + fmt(totalDiff), danger: !isDecrease },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-sm">
                            <span className="text-gray-500">{row.label}</span>
                            <span className={`font-semibold ${row.danger ? "text-rose-500" : "text-green-600"}`}>{row.val}</span>
                        </div>
                    ))}

                    <p className={`mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border ${isDecrease
                        ? "bg-green-50 border-green-200/60 text-green-700"
                        : "bg-rose-50 border-rose-200/60 text-rose-600"}`}>
                        {isDecrease
                            ? `✓ A ${Math.abs(rateChange).toFixed(2)}% rate cut saves you ${fmt(Math.abs(monthlyDiff))} every month.`
                            : `⚠ A ${Math.abs(rateChange).toFixed(2)}% rate rise costs you ${fmt(Math.abs(monthlyDiff))} more every month.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── Shared design-system components ──────────────────────────────────────────
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
function SectionHeading({ children }) {
    return (
        <h2 className="text-3xl! md:text-4xl! lg:text-[44px]! font-medium! leading-tight! mb-3!">
            {children}
        </h2>
    );
}
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
function AccentCard({ children, className = "" }) {
    return (
        <div className={`bg-white! rounded-2xl! border-l-4! border-[#F172AC]! shadow-[0_4px_15px_rgba(241,114,172,0.12)]! hover:shadow-[0_6px_20px_rgba(241,114,172,0.35)]! transition-all! duration-300! hover:-translate-y-1 p-4! sm:p-5! md:p-6! ${className}`}>
            {children}
        </div>
    );
}
function InfoBox({ title, children }) {
    return (
        <div className="flex gap-4 items-start bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                <IconInfo />
            </div>
            <div>
                {title && <p className="text-[15px] font-semibold text-[#86489B] mb-1">{title}</p>}
                <p className="text-[14px] text-gray-500 leading-relaxed">{children}</p>
            </div>
        </div>
    );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border-b border-[#F171AC]/15 cursor-pointer group first:border-t first:border-[#F171AC]/15"
            onClick={() => setOpen(!open)}
        >
            <div className={`flex! justify-between! items-center! py-8! px-1! text-[20px]! font-medium! gap-4! transition-colors duration-200
                ${open ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent" : "text-gray-700 group-hover:text-[#F171AC]"}`}>
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
const VariablehomeComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Standard Variable Rate Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Freedom, Flexibility &amp; Control<br />
                    <span className="grad-text">Over Your Mortgage</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    Buying a home is one of {`life's`} biggest milestones — and your home loan should support your lifestyle, not restrict it. A Standard Variable Rate Home Loan gives you the flexibility to adjust, adapt, and stay in control as your financial journey evolves.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "Unlimited", label: "Extra repayments — no penalty" },
                        { val: "RBA", label: "Rate linked to cash rate movements" },
                        { val: "Offset", label: "Account available on standard variable" },
                        { val: "Flexible", label: "Switch to fixed any time" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ TWO TYPES ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Loan types</SectionTag>
                <SectionHeading>
                    Primary types of <GradientText>variable loans</GradientText>
                </SectionHeading>
                <SectionLead>
                    Variable loans come in two main flavours. Understanding the difference helps you choose the right product for your situation.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {variableLoanTypes.map((loan, i) => {
                        const tagMap = {
                            blue: "bg-blue-50 border border-blue-200/60 text-blue-700",
                            green: "bg-green-50 border border-green-200/60 text-green-700",
                        };
                        return (
                            <div
                                key={i}
                                className={`rounded-2xl p-7 ${loan.recommended
                                    ? "bg-white border-2 border-[#86489B]/30 shadow-[0_4px_20px_rgba(134,72,155,0.12)]"
                                    : "bg-white border border-[#F171AC]/20 shadow-[0_4px_15px_rgba(241,114,172,0.08)]"}`}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full ${tagMap[loan.tagColor]}`}>{loan.tag}</span>
                                    {loan.recommended && (
                                        <span className="inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 text-[#86489B]">Most popular</span>
                                    )}
                                </div>
                                <p className="text-[20px] font-bold text-[#86489B] mb-3">{loan.label} loan</p>

                                <div className="mb-4">
                                    <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B]/70 mb-1">Best for</p>
                                    <p className="text-[13px] text-gray-500 leading-relaxed">{loan.bestFor}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B]/70 mb-1">Key benefit</p>
                                    <p className="text-[13px] text-gray-500 leading-relaxed">{loan.keyBenefit}</p>
                                </div>

                                <div className="flex flex-col gap-1.5 mb-3">
                                    {loan.features.map((f, j) => (
                                        <div key={j} className="flex items-center gap-2.5 text-[13px] text-gray-500">
                                            <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                                                <IconCheck />
                                            </div>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                {loan.notIncluded.length > 0 && (
                                    <div className="flex flex-col gap-1.5 pt-3 border-t border-[#F171AC]/10">
                                        {loan.notIncluded.map((f, j) => (
                                            <div key={j} className="flex items-center gap-2.5 text-[13px] text-gray-400">
                                                <span className="w-5 h-5 rounded bg-gray-100 border border-gray-200/60 flex items-center justify-center text-gray-300 flex-shrink-0 text-[10px] font-bold">✕</span>
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHY CHOOSE VARIABLE ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Why choose variable</SectionTag>
                <SectionHeading>
                    Why many Australians choose <GradientText>variable loans</GradientText>
                </SectionHeading>
                <SectionLead>
                    Unlike fixed loans, variable rates can move up or down with the market. While that may sound unpredictable, it often comes with powerful features that help you pay off your home faster.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {[
                        { Icon: IconTrendDown, title: "Freedom to pay off faster", desc: "Variable rate loans usually allow unlimited extra repayments without penalty — helping you reduce interest and own your home sooner." },
                        { Icon: IconRefresh, title: "Smart money management features", desc: "Many variable loans include offset accounts and redraw facilities — tools that significantly reduce interest while keeping your savings accessible." },
                        { Icon: IconDollar, title: "Benefit when rates drop", desc: "If interest rates decrease, your repayments could decrease too — potentially saving you thousands over the life of your loan." },
                    ].map((b, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <b.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{b.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{b.desc}</p>
                        </AccentCard>
                    ))}
                </div>

                {/* Is it right for you */}
                <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">This loan is perfect if you</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {isRightFor.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 text-[14px] text-gray-500 py-1">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                                    <IconCheck />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ COMPARISON RATE & NEGOTIATION ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Smart borrowing</SectionTag>
                <SectionHeading>
                    The comparison rate &amp; <GradientText>power of negotiation</GradientText>
                </SectionHeading>
                <SectionLead>
                    There are two critical things most borrowers miss when choosing a variable loan — the comparison rate and discretionary pricing.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-7">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                            <IconInfo />
                        </div>
                        <p className="text-[16px] font-semibold text-[#86489B] mb-3">The comparison rate — look beyond the headline</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                            The variable {`"headline rate"`} is the interest you pay, but the Comparison Rate includes the {`"hidden"`} costs like annual fees, valuation fees, and monthly service charges.
                        </p>
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                            <strong className="text-gray-700">Reality:</strong> Some lenders offer a {`"Basic Variable"`} with a very low headline rate but no offset. Others offer a {`"Pro Pack"`} with a higher rate but features that save you more in the long run. We help you run the math on which is cheaper for your specific loan size.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-7">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                            <IconStar />
                        </div>
                        <p className="text-[16px] font-semibold text-[#86489B] mb-3">Pricing discretion — the power of negotiation</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                            Unlike fixed rates, variable rates are often negotiable. If you have a high amount of equity in your home (an LVR of 60% or less), lenders are often willing to offer {`"below-market"`} rates to keep your business.
                        </p>
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                            As your broker, we use our software to see exactly what <strong className="text-gray-700">{`"discretionary discounts"`}</strong> each bank is currently authorised to give — and we negotiate on your behalf.
                        </p>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ RATE IMPACT CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Interactive tool</SectionTag>
                <SectionHeading>
                    See how rate changes <GradientText>affect your repayments</GradientText>
                </SectionHeading>
                <SectionLead>
                    Variable rates move with the market. Use this calculator to see exactly what a rate rise or cut means for your monthly repayments and total interest paid.
                </SectionLead>
                <RateImpactCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ LENDER PANEL ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Lender panel</SectionTag>
                <SectionHeading>
                    Lenders we <GradientText>work with</GradientText>
                </SectionHeading>
                <SectionLead>
                    We compare variable rate products across the full spectrum of Australian lenders — from the Big 4 to specialist non-banks — to find the best rate and features for your situation.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {lenderGroups.map((group, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                    <IconBank />
                                </div>
                                <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">{group.label}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.lenders.map((l, j) => (
                                    <span
                                        key={j}
                                        className="inline-block text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#F171AC]/20 text-gray-600"
                                        style={{ background: "linear-gradient(135deg, rgba(134,72,155,0.05), rgba(241,113,172,0.08))" }}
                                    >
                                        {l}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ KUBAER APPROACH ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <div className="bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-8">
                    <p className="text-[12px] font-semibold tracking-widests uppercase text-[#86489B] mb-3">How Kubaer Finance supports you</p>
                    <p className="text-[16px] text-gray-500 leading-relaxed max-w-2xl">
                        We donot just compare interest rates. We design loan strategies that fit your goals, lifestyle, and long-term financial plans — ensuring your mortgage works <strong className="text-gray-700">with your future, not against it.</strong>
                    </p>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ FAQ ════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything borrowers ask about standard variable rate home loans in Australia.
                </SectionLead>

                <div>
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ CTA ════════════════════ */}
            <CallAction />
        </div>
    );
};

export default VariablehomeComponent;