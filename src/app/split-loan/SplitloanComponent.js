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
function IconWarning() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
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
function IconShield() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function IconBalance() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 8H7" />
            <path d="M7 8L5 13h4z" />
            <path d="M17 8l2 5h-4z" />
        </svg>
    );
}
function IconSettings() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyChoose = [
    {
        Icon: IconShield,
        title: "Balanced risk protection",
        desc: "Reduce exposure to interest rate increases while still enjoying the flexibility of a variable portion.",
    },
    {
        Icon: IconSettings,
        title: "Greater financial control",
        desc: "Adapt your loan strategy as market conditions change — without being locked into one structure entirely.",
    },
    {
        Icon: IconBalance,
        title: "Smarter loan management",
        desc: "Enjoy stability for part of your loan while staying flexible with the rest — the best of both worlds.",
    },
];

const perfectFor = [
    "Want protection but not restrictions",
    "Prefer balanced financial strategies",
    "Are unsure about future interest rate movements",
];

const splitRatios = [
    {
        label: "Safety first",
        ratio: "80% Fixed / 20% Variable",
        fixed: 80,
        variable: 20,
        desc: "Ideal for families on a strict budget who want maximum protection but still want to keep a small 'buffer' for savings in an offset account.",
        tag: "Maximum protection",
        tagColor: "blue",
    },
    {
        label: "Balanced",
        ratio: "50% Fixed / 50% Variable",
        fixed: 50,
        variable: 50,
        desc: "A popular middle-ground that provides a 50% shield against rate hikes while allowing significant flexibility to pay down the loan faster.",
        tag: "Most popular",
        tagColor: "green",
        recommended: true,
    },
    {
        label: "Flex-heavy",
        ratio: "20% Fixed / 80% Variable",
        fixed: 20,
        variable: 80,
        desc: "Perfect for high-income earners or those expecting a windfall (bonus or inheritance) who want to aggressively pay down debt with a small portion locked in just in case.",
        tag: "Maximum flexibility",
        tagColor: "purple",
    },
];

const advancedConsiderations = [
    {
        num: "01",
        title: "The double-fee check",
        desc: "A split loan technically creates two separate accounts — some lenders may charge two sets of monthly service or application fees. We specialise in finding 'Package' or 'Bundle' loans where you pay one flat annual fee regardless of how many times you split your loan.",
    },
    {
        num: "02",
        title: "Refinancing complexity",
        desc: "If you want to move to a different bank later, having a fixed portion can make things tricky. You may have to wait for the fixed term to expire or pay 'break costs.' We help you align your fixed terms with your long-term property goals — e.g., if you plan to sell in 2 years, we won't suggest a 5-year fixed split.",
    },
    {
        num: "03",
        title: "The revert alignment",
        desc: "When your fixed portion expires, it will 'revert' to a variable rate. We ensure that both your variable portions are on the most competitive discounted rates possible — so you aren't automatically moved to a high Standard Variable Rate at the end of your term.",
    },
];

const lenderGroups = [
    {
        label: "Major banks (Big 4)",
        lenders: ["Commonwealth Bank (CBA)", "Westpac", "NAB (National Australia Bank)", "ANZ"],
    },
    {
        label: "Second-tier & regional",
        lenders: ["Macquarie Bank", "ING", "St.George Bank", "BankSA", "Bank of Melbourne", "Suncorp Bank", "Bankwest", "Bendigo Bank", "Bank of Queensland (BOQ)", "Great Southern Bank", "MyState Bank", "AMP Bank"],
    },
    {
        label: "Customer-owned & mutual",
        lenders: ["ubank", "IMB Bank", "Heritage Bank", "Beyond Bank", "Greater Bank", "People's Choice", "Teachers Mutual Bank", "UniBank"],
    },
    {
        label: "Specialist & non-bank",
        lenders: ["Liberty Financial", "Pepper Money", "Resimac", "La Trobe Financial", "Firstmac", "RedZed", "Athena Home Loans"],
    },
];

const faqs = [
    { q: "Can I change my split ratio after the loan has started?", a: "Most lenders allow you to fix a portion of a variable loan at any time. However, changing an existing fixed portion back to variable usually triggers 'break costs.' It is best to set your ratio based on your 1- to 5-year outlook." },
    { q: "Is there a minimum amount required for each split?", a: "Yes, most Australian banks require a minimum balance for each account — often around $10,000 to $20,000. You can't split a tiny amount just to get a feature; both portions must meet the lender's threshold." },
    { q: "Does an offset account work against the whole loan?", a: "No. This is a common misconception. An offset account only reduces the interest on the variable portion of your split loan. This is why many borrowers keep enough in the variable side to match their expected savings." },
    { q: "Will I have to pay two sets of monthly fees?", a: "It depends on your loan package. Some 'no-fee' basic loans might charge a small fee for each sub-account, while 'Premium Packages' usually cover multiple split accounts under one annual fee." },
    { q: "What happens if I want to sell my house while on a split loan?", a: "You can sell at any time, but you will likely incur break costs on the fixed portion of the loan. The variable portion can usually be paid out without those specific penalties." },
    { q: "Can I have more than two splits? (e.g., a 3-way split)", a: "Yes! Some lenders allow you to divide your loan into up to 6 different portions. This is popular for investors who want to fix different amounts for different lengths of time — e.g., 20% for 2 years, 20% for 5 years, and 60% variable." },
    { q: "How do I decide on the right ratio (e.g., 60/40 vs 80/20)?", a: "This depends on your 'sleep at night' factor. If you are worried about rate hikes, a higher fixed percentage (like 70% or 80%) offers more protection. If you have large savings or a fluctuating income, a higher variable percentage allows you to use your offset account more effectively." },
    { q: "Are repayments calculated differently?", a: "You will receive one statement, but it will show two distinct loan accounts. You'll have a fixed repayment amount for one part and a variable repayment for the other. These are usually debited as two separate transactions." },
    { q: "Do I need to refinance to split my current loan?", a: "Usually, no. If your current loan has a 'split facility,' your lender can often restructure it internally without a full refinance application, though a small administrative fee may apply." },
    { q: "Is a split loan better than 100% fixed or 100% variable?", a: "There is no 'better' — only 'better for you.' A split loan is a hedging strategy. It ensures you aren't 100% exposed to rate rises, but you also aren't 100% locked out of features like unlimited extra repayments." },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtCurrency(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
}

// ─── Split Ratio Calculator ────────────────────────────────────────────────────
function SplitCalculator() {
    const [loanAmount, setLoanAmount] = useState(600000);
    const [fixedPct, setFixedPct] = useState(50);
    const [fixedRate, setFixedRate] = useState(5.8);
    const [variableRate, setVariableRate] = useState(6.2);
    const [loanTerm, setLoanTerm] = useState(30);

    const variablePct = 100 - fixedPct;
    const fixedAmt = loanAmount * fixedPct / 100;
    const variableAmt = loanAmount * variablePct / 100;

    const mr = (rate) => rate / 100 / 12;
    const nMths = loanTerm * 12;

    const calcPayment = (principal, rate) =>
        principal > 0
            ? principal * (mr(rate) * Math.pow(1 + mr(rate), nMths)) / (Math.pow(1 + mr(rate), nMths) - 1)
            : 0;

    const fixedMonthly = calcPayment(fixedAmt, fixedRate);
    const variableMonthly = calcPayment(variableAmt, variableRate);
    const totalMonthly = fixedMonthly + variableMonthly;

    const totalInterestFixed = fixedMonthly * nMths - fixedAmt;
    const totalInterestVariable = variableMonthly * nMths - variableAmt;
    const totalInterest = totalInterestFixed + totalInterestVariable;

    // Full fixed comparison
    const fullFixedMonthly = calcPayment(loanAmount, fixedRate);
    const fullVariableMonthly = calcPayment(loanAmount, variableRate);

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">Split ratio calculator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Total loan amount", val: fmtCurrency(loanAmount), min: 100000, max: 2000000, step: 25000, value: loanAmount, setter: setLoanAmount },
                        { label: "Fixed portion (%)", val: fixedPct + "% fixed / " + variablePct + "% variable", min: 10, max: 90, step: 10, value: fixedPct, setter: setFixedPct },
                        { label: "Fixed interest rate (% p.a.)", val: fixedRate.toFixed(1) + "%", min: 3, max: 10, step: 0.1, value: fixedRate, setter: setFixedRate },
                        { label: "Variable interest rate (% p.a.)", val: variableRate.toFixed(1) + "%", min: 3, max: 10, step: 0.1, value: variableRate, setter: setVariableRate },
                    ].map((f, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-[14px] text-gray-500">{f.label}</span>
                                <span className="text-[16px] font-semibold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{f.val}</span>
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

                    {/* Visual split bar */}
                    <div>
                        <p className="text-[12px] text-gray-400 mb-2">Your split at a glance</p>
                        <div className="h-8 rounded-xl overflow-hidden flex w-full">
                            <div className="flex items-center justify-center text-white text-[12px] font-semibold transition-all duration-300" style={{ width: fixedPct + "%", background: "linear-gradient(90deg,#86489B,#9b50b0)" }}>
                                {fixedPct}% Fixed
                            </div>
                            <div className="flex items-center justify-center text-white text-[12px] font-semibold transition-all duration-300" style={{ width: variablePct + "%", background: "linear-gradient(90deg,#c855a8,#F171AC)" }}>
                                {variablePct}% Var
                            </div>
                        </div>
                        <div className="flex justify-between text-[12px] text-gray-400 mt-1.5">
                            <span>{fmtCurrency(fixedAmt)} fixed</span>
                            <span>{fmtCurrency(variableAmt)} variable</span>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="flex flex-col justify-center bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 rounded-2xl p-6 border border-[#F171AC]/15">
                    <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B] mb-4">Your split loan summary</p>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Total monthly repayment</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{fmtCurrency(totalMonthly)}</span>
                    </div>

                    {[
                        { label: "Fixed portion monthly", val: fmtCurrency(fixedMonthly) + "/mo", sub: fmtCurrency(fixedAmt) + " at " + fixedRate.toFixed(1) + "%" },
                        { label: "Variable portion monthly", val: fmtCurrency(variableMonthly) + "/mo", sub: fmtCurrency(variableAmt) + " at " + variableRate.toFixed(1) + "%" },
                        { label: "Total interest over " + loanTerm + " yrs", val: fmtCurrency(totalInterest) },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-start py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-sm">
                            <div>
                                <span className="text-gray-500 block">{row.label}</span>
                                {row.sub && <span className="text-gray-400 text-[12px]">{row.sub}</span>}
                            </div>
                            <span className="text-gray-700 font-semibold flex-shrink-0 ml-4">{row.val}</span>
                        </div>
                    ))}

                    {/* Comparison */}
                    <div className="mt-4 pt-4 border-t border-[#F171AC]/15">
                        <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B] mb-2">Compared to 100% options</p>
                        <div className="flex justify-between text-[13px] py-1.5">
                            <span className="text-gray-400">100% fixed at {fixedRate.toFixed(1)}%</span>
                            <span className="text-gray-600 font-medium">{fmtCurrency(fullFixedMonthly)}/mo</span>
                        </div>
                        <div className="flex justify-between text-[13px] py-1.5">
                            <span className="text-gray-400">100% variable at {variableRate.toFixed(1)}%</span>
                            <span className="text-gray-600 font-medium">{fmtCurrency(fullVariableMonthly)}/mo</span>
                        </div>
                    </div>
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
                {title && <p className="text-[15px]! font-semibold! text-[#86489B]! mb-1!">{title}</p>}
                <p className="text-[14px]! text-gray-500 leading-relaxed tracking-normal! font-normal!">{children}</p>
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
const SplitloanComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Split Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    The Best of Both Worlds —<br />
                    <span className="grad-text">Flexibility Meets Security</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    Why choose between stability and flexibility when you can have both? A Split Home Loan divides your loan into fixed and variable portions — balancing protection from rate increases with repayment flexibility.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "2 parts", label: "Fixed + variable in one loan" },
                        { val: "Up to 6", label: "Splits allowed by some lenders" },
                        { val: "1 fee", label: "Package loans — one flat annual cost" },
                        { val: "Tailored", label: "Ratio based on your cash flow" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ HOW IT WORKS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>How it works</SectionTag>
                <SectionHeading>
                    Why borrowers choose <GradientText>split loans</GradientText>
                </SectionHeading>
                <SectionLead>
                    Part of your loan is locked into a fixed rate for repayment certainty, while the remaining portion stays variable — giving you access to features like offset accounts and extra repayments.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {whyChoose.map((b, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <b.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{b.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{b.desc}</p>
                        </AccentCard>
                    ))}
                </div>

                {/* Perfect for */}
                <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">Perfect for borrowers who</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {perfectFor.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 text-[14px] text-gray-500">
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

            {/* ════════════════════ SPLIT RATIOS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Customising your split</SectionTag>
                <SectionHeading>
                    Three proven <GradientText>split strategies</GradientText>
                </SectionHeading>
                <SectionLead>
                    There is no one-size-fits-all rule. We calculate a ratio based on your specific cash flow, risk comfort level, and financial goals.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {splitRatios.map((r, i) => {
                        const tagMap = {
                            blue: "bg-blue-50 border border-blue-200/60 text-blue-700",
                            green: "bg-green-50 border border-green-200/60 text-green-700",
                            purple: "bg-purple-50 border border-purple-200/60 text-purple-700",
                        };
                        return (
                            <div
                                key={i}
                                className={`rounded-2xl p-7 ${r.recommended
                                    ? "bg-white border-2 border-[#86489B]/30 shadow-[0_4px_20px_rgba(134,72,155,0.12)]"
                                    : "bg-white border border-[#F171AC]/20 shadow-[0_4px_15px_rgba(241,114,172,0.08)]"}`}
                            >
                                {r.recommended && (
                                    <span className="inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full bg-green-50 border border-green-200/60 text-green-700 mb-3">
                                        Most popular
                                    </span>
                                )}
                                <span className={`inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full mb-3 ml-2 ${tagMap[r.tagColor]}`}>
                                    {r.tag}
                                </span>
                                <p className="text-[18px] font-bold text-[#86489B] mb-1">{r.label} split</p>
                                <p className="text-[14px] text-gray-400 mb-3 font-medium">{r.ratio}</p>

                                {/* Visual bar */}
                                <div className="h-6 rounded-lg overflow-hidden flex w-full mb-4">
                                    <div className="transition-all" style={{ width: r.fixed + "%", background: "linear-gradient(90deg,#86489B,#9b50b0)" }} />
                                    <div className="transition-all" style={{ width: r.variable + "%", background: "linear-gradient(90deg,#c855a8,#F171AC)" }} />
                                </div>
                                <div className="flex justify-between text-[11px] text-gray-400 mb-4">
                                    <span>{r.fixed}% Fixed</span>
                                    <span>{r.variable}% Variable</span>
                                </div>

                                <p className="text-[13px] text-gray-500 leading-relaxed">{r.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Interactive tool</SectionTag>
                <SectionHeading>
                    Calculate your <GradientText>split loan repayments</GradientText>
                </SectionHeading>
                <SectionLead>
                    Adjust the split ratio, rates and loan amount to see exactly what your fixed and variable repayments will be — and how they compare to 100% fixed or 100% variable.
                </SectionLead>
                <SplitCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ ADVANCED CONSIDERATIONS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Advanced considerations</SectionTag>
                <SectionHeading>
                    What to watch out for with <GradientText>split loans</GradientText>
                </SectionHeading>
                <SectionLead>
                    Split loans add some complexity. These are the three key areas where expert guidance makes a real difference — and where Kubaer Finance protects your interests.
                </SectionLead>

                <div className="flex flex-col relative mb-6">
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />
                    {advancedConsiderations.map((s, i) => (
                        <div key={i} className="flex gap-7 items-start py-8 border-b border-[#F171AC]/[0.1] last:border-0">
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

                <InfoBox title="The Kubaer Finance strategy approach">
                    At Kubaer Finance, we carefully analyse your income, lifestyle, and risk comfort level to recommend the most effective split structure — aligning your fixed terms with your long-term property goals and ensuring both portions stay on the most competitive rates available.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ LENDER PANEL ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Lender panel</SectionTag>
                <SectionHeading>
                    Lenders we <GradientText>work with</GradientText>
                </SectionHeading>
                <SectionLead>
                    We compare split loan products across the full spectrum of Australian lenders — from the Big 4 to specialist non-banks — to find the right package for your split structure.
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

            {/* ════════════════════ FAQ ════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything borrowers ask about split home loans in Australia.
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

export default SplitloanComponent;