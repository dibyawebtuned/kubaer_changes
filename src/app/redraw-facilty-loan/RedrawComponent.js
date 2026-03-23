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
function IconDollar() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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
function IconRefresh() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
    );
}
function IconUsers() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
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
function IconHome() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const applySteps = [
    {
        num: "01",
        title: "Loan feature confirmation",
        desc: "Not all loans include redraw — especially some fixed-rate products. During our initial consultation, we ensure the loan product selected for you includes an 'unlimited' or 'low-fee' redraw feature so you aren't penalised for being proactive with your payments.",
    },
    {
        num: "02",
        title: "Setting up extra repayments",
        desc: "Once your loan settles, increase your repayments by setting up a recurring direct debit above the minimum, or by dropping lump sums (like a tax return or work bonus) whenever you like.",
    },
    {
        num: "03",
        title: "Activating online access",
        desc: "In 2026, most lenders allow you to manage your redraw through their mobile app. You usually need to 'activate' the redraw feature in your portal settings — this lets you see exactly how much available redraw you have at any time.",
    },
    {
        num: "04",
        title: "Making a redraw request",
        desc: "Log in and transfer funds from your loan account back to your everyday transaction account. Most major Australian banks now process these transfers instantly, though some smaller lenders may take 1–2 business days.",
    },
];

const howItWorksSteps = [
    {
        num: "01",
        title: "Activate the feature",
        desc: "Most loans include redraw by default, but confirm it's enabled — some require a short form or portal activation.",
    },
    {
        num: "02",
        title: "Make extra payments",
        desc: "Deposit lump sums (e.g., tax refund, bonus) or increase fortnightly repayments. Minimums often apply — commonly $100 or more.",
    },
    {
        num: "03",
        title: "Principal reduces immediately",
        desc: "Your loan balance drops immediately. Example: on a $500,000 loan at 6% interest, a $10,000 extra payment saves approximately $600 per year in interest.",
    },
    {
        num: "04",
        title: "Request a redraw",
        desc: "Request a withdrawal. Lenders typically limit redraw to verified extra repayments above the minimum, tracked separately from your required balance.",
    },
    {
        num: "05",
        title: "Interest recalculates",
        desc: "Withdrawn funds increase your principal again — but you've already enjoyed the interest savings during the period those funds were parked in the loan.",
    },
];

const benefits = [
    {
        Icon: IconTrendDown,
        title: "Massive interest savings",
        desc: "Every extra dollar works 24/7 to cut interest. On a 30-year $600k loan at 6%, $50k extra could shave years off your term.",
    },
    {
        Icon: IconShield,
        title: "Forced discipline",
        desc: "Encourages extra repayments without the temptation to spend — your money is reducing your loan instead of sitting idle.",
    },
    {
        Icon: IconHome,
        title: "Emergency buffer",
        desc: "Access cash without taking out new loans or credit cards — your redraw balance acts as a financial safety net.",
    },
    {
        Icon: IconRefresh,
        title: "No separate account needed",
        desc: "Simplifies your banking — one login for your loan and savings, rather than managing multiple accounts.",
    },
    {
        Icon: IconDollar,
        title: "Refinancing perk",
        desc: "Transfer your redraw balance when switching lenders (with approval) — your savings aren't lost when you move.",
    },
    {
        Icon: IconCalculator,
        title: "Investment strategy",
        desc: "For negatively geared properties, extra payments reduce non-deductible interest and improve your overall tax position.",
    },
];

const eligibilityItems = [
    "Australian residents with variable home loans",
    "Minimum loan balances — often $10,000 or more remaining",
    "No arrears or current hardship arrangement in place",
    "Lender assesses serviceability (your income and existing debts)",
];

const setupSteps = [
    { num: "01", title: "Contact your lender or broker", desc: "Let them know you want to enable the redraw feature on your existing home loan." },
    { num: "02", title: "Fill out the application form", desc: "Most lenders have moved this online — it takes around 5 minutes through your banking portal." },
    { num: "03", title: "Link via app or banking portal", desc: "Connect redraw to your transaction account so transfers can be made instantly when needed." },
    { num: "04", title: "Go live — instantly to 48 hours", desc: "Most activations are instant for major banks. Some smaller lenders may take up to 48 hours to process." },
];

const idealFor = [
    "Salary sacrificers or bonus earners with irregular lump sums",
    "Renovators needing lump-sum access for staged projects",
    "Debt-snowballers paying aggressively to reduce principal",
    "Families building an emergency fund inside their mortgage",
];

const avoidIf = [
    "You need daily access to your savings (use an offset account instead)",
    "You plan frequent withdrawals — fees can add up quickly",
    "You are on a fixed-rate loan — redraw is typically not available",
];

const faqs = [
    {
        q: "What is a redraw facility in a home loan?",
        a: "A redraw facility allows you to access extra repayments you've made on your home loan. If you've paid more than your required minimum, you can withdraw those extra funds when needed — while still benefiting from the interest savings in the meantime.",
    },
    {
        q: "Is a redraw facility the same as an offset account?",
        a: "No. A redraw facility lets you withdraw extra repayments you've already made on your loan. An offset account is a separate transaction account whose balance reduces your loan interest. Offset accounts generally offer more flexibility and avoid potential tax issues if you ever convert your home to an investment property.",
    },
    {
        q: "Are there fees to use a redraw facility?",
        a: "It depends on the lender and loan product. Some loans offer unlimited free redraws, while others charge a fee per withdrawal (commonly $25–$50). Always check the product disclosure statement before choosing a loan if redraw is important to you.",
    },
    {
        q: "How much can I redraw from my home loan?",
        a: "You can only redraw the amount you've paid above your required minimum repayments — known as your available redraw balance. You cannot redraw your full loan balance. Your lender will show you the available amount in your banking app or portal.",
    },
    {
        q: "Does a redraw facility affect my interest rate?",
        a: "No, having a redraw facility doesn't directly change your interest rate. However, making extra repayments that reduce your balance will lower the interest you're charged daily — which is the key financial benefit.",
    },
    {
        q: "Can I redraw on a fixed-rate loan?",
        a: "Most fixed-rate loans do not offer redraw, and extra repayments may be capped or attract break fees. Redraw is primarily a feature of variable-rate home loans. Always confirm redraw availability before fixing your rate.",
    },
    {
        q: "How long does a redraw transfer take?",
        a: "Most major Australian banks process redraw transfers instantly through their mobile apps. Some smaller lenders or non-bank lenders may take 1–2 business days to complete the transfer.",
    },
    {
        q: "Will redrawing money increase my repayments?",
        a: "Not necessarily in the short term, but the redrawn funds increase your outstanding principal, which means more interest accrues going forward. Your lender may also recalculate your minimum repayments — check the terms of your specific loan.",
    },
    {
        q: "Can I use redraw funds for any purpose?",
        a: "Generally, yes — you can use redrawn funds for renovations, a car, a holiday, or emergencies. However, be aware that if your property ever becomes an investment, the ATO may question the deductibility of any loan portion associated with redrawn non-investment funds. An offset account is safer for tax purposes if this is a risk.",
    },
    {
        q: "Does the lender have the right to restrict or remove my redraw?",
        a: "Yes. Lenders can impose conditions — for example, requiring a minimum redraw amount or restricting access if you're behind on repayments. Some lenders also reserve the right to modify redraw terms. Always read the product disclosure statement carefully.",
    },
    {
        q: "What is the tax difference between redraw and offset for investors?",
        a: "This is critical. If you use redraw to withdraw funds for personal use (e.g., a holiday) and later rent out the property, the ATO may consider that portion of the loan as being used for private purposes — making the interest non-deductible. An offset account avoids this issue because your funds sit separately from the loan balance. Speak to your accountant if this applies to you.",
    },
    {
        q: "What's the minimum redraw amount?",
        a: "Most lenders set a minimum redraw amount — commonly between $100 and $500. Some lenders allow you to redraw any amount above the minimum. Check your loan terms or ask your broker for the specific conditions on your product.",
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtCurrency(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
}

// ─── Interest Savings Calculator ──────────────────────────────────────────────
function RedrawCalculator() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [extraPayment, setExtraPayment] = useState(10000);
    const [annualRate, setAnnualRate] = useState(6.0);
    const [termYears, setTermYears] = useState(30);

    const mr = annualRate / 100 / 12;
    const nMonths = termYears * 12;

    // Base monthly repayment on full loan
    const basePayment = loanAmount * (mr * Math.pow(1 + mr, nMonths)) / (Math.pow(1 + mr, nMonths) - 1);

    // Calculate total interest WITHOUT extra payment
    const totalInterestBase = basePayment * nMonths - loanAmount;

    // Calculate months/interest WITH extra payment applied as lump sum
    let balance = loanAmount - extraPayment;
    let totalInterestWith = 0;
    let monthsWith = 0;
    while (balance > 0.01 && monthsWith < nMonths * 2) {
        const interest = balance * mr;
        const principal = Math.min(basePayment - interest, balance);
        if (principal <= 0) break;
        totalInterestWith += interest;
        balance -= principal;
        monthsWith++;
    }

    const interestSaved = Math.max(0, totalInterestBase - totalInterestWith);
    const yearsSaved = Math.max(0, (nMonths - monthsWith) / 12);
    const annualSaving = extraPayment * (annualRate / 100);

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">Redraw interest savings calculator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Loan amount", val: fmtCurrency(loanAmount), min: 100000, max: 2000000, step: 25000, value: loanAmount, setter: setLoanAmount },
                        { label: "Extra lump-sum payment", val: fmtCurrency(extraPayment), min: 1000, max: 200000, step: 1000, value: extraPayment, setter: setExtraPayment },
                        { label: "Interest rate (% p.a.)", val: annualRate.toFixed(1) + "%", min: 3, max: 10, step: 0.1, value: annualRate, setter: setAnnualRate },
                        { label: "Loan term", val: termYears + " years", min: 10, max: 30, step: 5, value: termYears, setter: setTermYears },
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
                    <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B] mb-4">Your redraw impact</p>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Total interest saved</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{fmtCurrency(interestSaved)}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Years saved off term</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{yearsSaved.toFixed(1)} yrs</span>
                    </div>

                    {[
                        { label: "Annual interest saving on lump sum", val: fmtCurrency(annualSaving) + "/yr" },
                        { label: "Base monthly repayment", val: fmtCurrency(basePayment) + "/mo" },
                        { label: "Effective loan after extra payment", val: fmtCurrency(loanAmount - extraPayment) },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-sm">
                            <span className="text-gray-500">{row.label}</span>
                            <span className="text-gray-700 font-semibold">{row.val}</span>
                        </div>
                    ))}

                    <p className="mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border bg-green-50 border-green-200/60 text-green-700">
                        ✓ Your {fmtCurrency(extraPayment)} extra payment saves <strong>{fmtCurrency(annualSaving)}</strong> per year in interest — and you can still access it via redraw.
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
function BulletRow({ children }) {
    return (
        <div className="flex items-start gap-3 py-2 text-[14px] text-gray-500 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex-shrink-0 mt-2" />
            <span>{children}</span>
        </div>
    );
}
function ChecklistItem({ children }) {
    return (
        <div className="flex items-start gap-3 py-2.5 border-b border-[#F171AC]/[0.08] last:border-0 text-[14px] text-gray-500 leading-relaxed">
            <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <IconCheck />
            </div>
            <span>{children}</span>
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
const RedrawComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Redraw Facility Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Your &ldquo;Savings Bucket&rdquo;<br />
                    <span className="grad-text">Inside Your Mortgage</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    A redraw facility allows you to access any extra repayments you have made above the minimum monthly requirement — so your money reduces your loan balance and interest charge, while remaining accessible whenever you need it.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "Instant", label: "Most major bank redraw transfers" },
                        { val: "$600/yr", label: "Saved on $10k extra at 6% rate" },
                        { val: "24/7", label: "Extra repayments work around the clock" },
                        { val: "Variable", label: "Loans — primary product with redraw" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHAT IS IT ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>What is it</SectionTag>
                <SectionHeading>
                    How a redraw facility <GradientText>works</GradientText>
                </SectionHeading>
                <SectionLead>
                    Think of a redraw facility as a {`"savings bucket"`} inside your mortgage. When you put extra money in, three things happen simultaneously.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {[
                        { num: "1", title: "Loan balance drops immediately", desc: "The extra payment reduces your outstanding principal the moment it arrives, lowering what you owe." },
                        { num: "2", title: "Interest charged drops", desc: "Interest is calculated on the lower balance — so every extra dollar is saving you money from day one." },
                        { num: "3", title: "Redraw balance ready to use", desc: "The extra money sits as a 'Redraw Balance' — available to withdraw for a renovation, car, or emergency whenever you need it." },
                    ].map((b, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white font-bold text-[16px] mb-4">{b.num}</div>
                            <p className="text-[15px] font-semibold text-[#86489B] mb-2">{b.title}</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ 4 STEPS TO APPLY ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>The Kubaer process</SectionTag>
                <SectionHeading>
                    4 steps to applying for and <GradientText>using redraw</GradientText>
                </SectionHeading>
                <SectionLead>
                    From loan selection to making your first redraw — here is exactly how we guide you through the process.
                </SectionLead>

                <div className="flex flex-col relative">
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />
                    {applySteps.map((s, i) => (
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
            </section>

            <PinkDivider />

            {/* ════════════════════ HOW IT WORKS STEP BY STEP ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Step by step</SectionTag>
                <SectionHeading>
                    How does a redraw facility <GradientText>work in practice?</GradientText>
                </SectionHeading>
                <SectionLead>
                    From your first extra repayment to withdrawing funds — here is the full lifecycle of a redraw facility.
                </SectionLead>

                <div className="flex flex-col relative mb-6">
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />
                    {howItWorksSteps.map((s, i) => (
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

                <InfoBox title="Quick example — $10,000 extra on a $500,000 loan at 6%">
                    A $10,000 extra payment saves approximately <strong className="text-gray-700">$600 per year</strong> in interest — and that money is still accessible via redraw whenever you need it. The interest saving begins the day the payment is made.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Interactive tool</SectionTag>
                <SectionHeading>
                    Calculate your <GradientText>redraw interest savings</GradientText>
                </SectionHeading>
                <SectionLead>
                    See exactly how much a lump-sum extra repayment saves you in total interest and years — while remaining fully accessible via redraw.
                </SectionLead>
                <RedrawCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ BENEFITS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Benefits</SectionTag>
                <SectionHeading>
                    Why a redraw facility is a <GradientText>game-changer</GradientText>
                </SectionHeading>
                <SectionLead>
                    Redraw facility loans offer interest savings and flexibility without complexity — here are the six key reasons borrowers love them.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

            {/* ════════════════════ ELIGIBILITY ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Eligibility</SectionTag>
                <SectionHeading>
                    Who qualifies for a <GradientText>redraw facility?</GradientText>
                </SectionHeading>
                <SectionLead>
                    Redraw facilities are available on most variable home loans. {`Here's`} what lenders typically look for.
                </SectionLead>

                <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6 mb-5">
                    {eligibilityItems.map((t, i) => <ChecklistItem key={i}>{t}</ChecklistItem>)}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ HOW TO SET UP ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Setup guide</SectionTag>
                <SectionHeading>
                    How to set up a <GradientText>redraw facility</GradientText>
                </SectionHeading>
                <SectionLead>
                    Setting up redraw is straightforward for most borrowers — {`here's`} what to expect.
                </SectionLead>

                <div className="flex flex-col relative mb-6">
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />
                    {setupSteps.map((s, i) => (
                        <div key={i} className="flex gap-7 items-start py-7 border-b border-[#F171AC]/[0.1] last:border-0">
                            <div className="w-[60px] h-[60px] rounded-full bg-white border-2 border-[#F171AC]/40 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_4px_15px_rgba(241,113,172,0.12)]">
                                <span className="text-lg font-bold grad-text">{s.num}</span>
                            </div>
                            <div className="pt-3 flex-1">
                                <p className="text-[17px]! font-bold! text-[#86489b]! mb-1.5!">{s.title}</p>
                                <p className="text-[14px]! text-gray-500 leading-relaxed! font-normal!">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHO SHOULD GET ONE ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Is it right for you</SectionTag>
                <SectionHeading>
                    Who should get a <GradientText>redraw facility loan?</GradientText>
                </SectionHeading>
                <SectionLead>
                    The best setup depends on your finances, loan type, and goals. Here is who benefits most — and who should consider alternatives.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Ideal for</p>
                        {idealFor.map((t, i) => (
                            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-[14px] text-gray-500 leading-relaxed">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                    <IconCheck />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl border border-rose-200/60 shadow-[0_4px_15px_rgba(244,63,94,0.06)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-rose-500 mb-4">Avoid if...</p>
                        <div className="flex flex-col gap-3">
                            {avoidIf.map((t, i) => (
                                <div key={i} className="flex gap-3 items-start bg-rose-50 border border-rose-200/60 rounded-xl p-3.5 text-[13px] text-gray-500 leading-relaxed">
                                    <span className="text-rose-400 flex-shrink-0 mt-0.5"><IconWarning /></span>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <InfoBox title="Redraw your loan strategy">
                    Redraw facility loans are a game-changer for Australian borrowers — offering interest savings and flexibility without complexity. But the best setup depends on your finances, lender, loan type, and goals. Speak with a Kubaer Finance broker to find the right structure for your situation.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ FAQ ════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything homeowners ask about redraw facilities in Australia.
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

export default RedrawComponent;