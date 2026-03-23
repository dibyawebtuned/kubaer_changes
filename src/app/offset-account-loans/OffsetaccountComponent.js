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
function IconTrendDown() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
            <polyline points="16 17 22 17 22 11" />
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
function IconUnlock() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
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

const offsetAdvantages = [
    {
        Icon: IconTrendDown,
        title: "Slash interest costs",
        desc: "Every dollar in your offset reduces the interest you owe daily — calculated on the net balance, not the full loan amount.",
    },
    {
        Icon: IconShield,
        title: "Tax-effective growth",
        desc: "Unlike savings interest (which is taxable), interest saved is money kept. There's no tax on the savings — just more money in your pocket.",
    },
    {
        Icon: IconUnlock,
        title: "Full liquidity",
        desc: "Need your cash? Use it. Your money isn't locked away — it's available via ATM, transfer, or debit card just like a regular transaction account.",
    },
    {
        Icon: IconHome,
        title: "Shorten your loan",
        desc: "By paying less interest, more of your monthly payment goes toward the principal, helping you hit 'Debt-Free Day' years earlier.",
    },
];

const howItWorksSteps = [
    {
        num: "01",
        title: "Link the offset",
        desc: "Open an offset transaction account with your lender (e.g., CommBank, NAB, Westpac, ING) and link it to your home loan.",
    },
    {
        num: "02",
        title: "Deposit funds",
        desc: "Park money from savings, salary, or bonuses in the offset account. The more you keep in there, the more you save.",
    },
    {
        num: "03",
        title: "Interest magic",
        desc: "Interest is calculated on your loan balance minus the offset balance. E.g., $500k loan − $100k offset = interest on $400k only.",
    },
    {
        num: "04",
        title: "Daily calculation",
        desc: "Most lenders use a 365-day year. Daily interest = (Net balance × Rate) ÷ 365. Your salary deposit works for you every single day.",
    },
    {
        num: "05",
        title: "Full access maintained",
        desc: "Use the offset like a regular account — pay bills, withdraw, transfer. You earn no interest on the offset itself, but save significantly on loan interest.",
    },
    {
        num: "06",
        title: "Repayments continue",
        desc: "Continue minimum P&I repayments on the full loan principal. Extra offset funds accelerate payoff indirectly — no extra effort required.",
    },
];

const whoQualifies = [
    { label: "Citizens / PR", value: "Yes" },
    { label: "Income", value: "Stable PAYG or self-employed (with docs)" },
    { label: "Ideal LVR", value: "Below 90% (some lenders cap at 80%)" },
    { label: "Minimum loan size", value: "$150,000 typically" },
    { label: "Owner-occupier", value: "Priority — investor rates 0.2–0.5% higher" },
    { label: "Refinance", value: "Easy switch if equity exceeds 20%" },
];

const offsetVsRedraw = [
    { feature: "Where money sits", offset: "Separate transaction account", redraw: "Inside the loan itself" },
    { feature: "Daily interest calc", offset: "Yes — reduces interest daily", redraw: "Yes — if extra repayment made" },
    { feature: "Accessibility", offset: "Full access — ATM, card, BPAY", redraw: "Access subject to lender rules" },
    { feature: "Tax implications", offset: "Clean — no contamination risk", redraw: "Risk of losing tax deductions" },
    { feature: "Investment future", offset: "Safe — no deduction risk", redraw: "Danger if property becomes investment" },
    { feature: "Flexibility", offset: "Very high", redraw: "Moderate to low" },
];

const faqs = [
    {
        q: "What is an offset account on a home loan?",
        a: "An offset account is a bank account linked to your home loan where the balance reduces the amount of interest you pay. For example, if you have $20,000 in your offset account and a $400,000 loan, you'll only be charged interest on $380,000, helping you save money over time.",
    },
    {
        q: "Is an offset account worth it in Australia?",
        a: "Yes, an offset account is worth it if you regularly keep money in the account. The more money you have sitting in your offset, the more interest you save on your home loan, which can significantly reduce your total repayment over the life of the loan.",
    },
    {
        q: "How much money should I keep in my offset account?",
        a: "There's no fixed amount, but the more you keep in your offset account, the better. Even small amounts can reduce your interest, but keeping larger balances — like your savings or salary — can make a big difference in how quickly you pay off your loan.",
    },
    {
        q: "Does an offset account reduce monthly repayments?",
        a: "Usually, your monthly repayments stay the same, but you pay less interest. This means more of your repayment goes toward reducing the loan balance, helping you pay off your mortgage faster.",
    },
    {
        q: "What is the difference between an offset account and a redraw facility?",
        a: "An offset account is a separate account where your savings reduce your loan interest, while a redraw facility lets you access extra repayments you've made on your loan. Offset accounts are generally more flexible because your money is not locked into the loan.",
    },
    {
        q: "Can I withdraw money from my offset account anytime?",
        a: "Yes, you can access your money anytime just like a normal bank account. This flexibility is one of the main reasons why many borrowers prefer offset accounts over making extra repayments.",
    },
    {
        q: "Do all home loans have an offset account?",
        a: "No, not all home loans come with an offset account. They are more commonly offered with variable rate loans and may come with additional fees or package costs.",
    },
    {
        q: "What is a 100% offset account?",
        a: "A 100% offset account means that the full balance in your account is used to reduce the interest on your home loan. This is the most beneficial type of offset account and can lead to greater interest savings.",
    },
    {
        q: "Is offset better than paying extra repayments?",
        a: "If you want flexibility, an offset account is usually better because you can access your money anytime. Extra repayments reduce your loan directly but may be harder to access later, depending on your loan features.",
    },
    {
        q: "Can I have multiple offset accounts?",
        a: "Yes, some lenders allow multiple offset accounts linked to one home loan. This can help you manage your money better by separating savings, expenses, and bills while still reducing your loan interest.",
    },
    {
        q: "Are offset accounts tax-free?",
        a: "Yes, offset accounts are tax-effective because you're saving interest rather than earning it. Since you're not earning interest income, there's usually no tax to pay on the savings.",
    },
    {
        q: "Do offset accounts have fees?",
        a: "Some offset accounts come with fees, such as annual package fees or monthly account charges. However, the interest savings often outweigh these costs, especially if you maintain a good balance.",
    },
    {
        q: "Can I use an offset account for an investment property?",
        a: "Yes, offset accounts are commonly used for investment loans. They help reduce interest while keeping your money accessible, which can be useful for managing cash flow or future investments.",
    },
    {
        q: "Does salary in offset account reduce interest daily?",
        a: "Yes, interest on most home loans in Australia is calculated daily. So when your salary is deposited into your offset account, even for a few days, it helps reduce the interest charged during that time.",
    },
    {
        q: "How much interest can I save with an offset account?",
        a: "The amount you save depends on your loan size, interest rate, and how much money you keep in your offset account. Over time, even a moderate balance can save you thousands of dollars in interest.",
    },
    {
        q: "Who should get an offset account?",
        a: "An offset account is ideal for people who have regular savings, want flexible access to their money, and are looking to reduce their home loan interest while paying off their mortgage faster.",
    },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtCurrency(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
}

// ─── Offset Calculator ────────────────────────────────────────────────────────
function OffsetCalculator() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [offsetBalance, setOffsetBalance] = useState(50000);
    const [annualRate, setAnnualRate] = useState(6.0);
    const [loanTermYears, setLoanTermYears] = useState(30);

    const safeOffset = Math.min(offsetBalance, loanAmount);
    const effectiveLoan = loanAmount - safeOffset;
    const monthlyRate = annualRate / 100 / 12;
    const nMonths = loanTermYears * 12;

    // Monthly P&I on full loan
    const piFullLoan = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, nMonths)) / (Math.pow(1 + monthlyRate, nMonths) - 1);
    const totalWithout = piFullLoan * nMonths;
    const interestWithout = totalWithout - loanAmount;

    // With offset (same repayment, shorter term)
    // Calculate effective months to pay off with offset balance reducing interest
    // Simplified: treat offset as reducing the effective principal for interest calculation
    // We calculate the total interest paid with offset by iterating
    let balance = loanAmount;
    let totalInterestWith = 0;
    let monthsWith = 0;
    const maxMonths = nMonths * 2;
    while (balance > 0.01 && monthsWith < maxMonths) {
        const effectiveBalance = Math.max(0, balance - safeOffset);
        const interestThisMonth = effectiveBalance * monthlyRate;
        totalInterestWith += interestThisMonth;
        const principalPaid = piFullLoan - interestThisMonth;
        balance -= principalPaid;
        monthsWith++;
        if (principalPaid <= 0) break;
    }
    const interestSaved = Math.max(0, interestWithout - totalInterestWith);
    const yearsSaved = Math.max(0, (nMonths - monthsWith) / 12);
    const dailyInterestSaving = (safeOffset * (annualRate / 100)) / 365;

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">Offset savings calculator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Loan amount", val: fmtCurrency(loanAmount), min: 100000, max: 2000000, step: 25000, value: loanAmount, setter: setLoanAmount },
                        { label: "Offset balance", val: fmtCurrency(safeOffset), min: 0, max: loanAmount, step: 5000, value: safeOffset, setter: (v) => setOffsetBalance(Math.min(v, loanAmount)) },
                        { label: "Interest rate (% p.a.)", val: annualRate.toFixed(1) + "%", min: 3, max: 10, step: 0.1, value: annualRate, setter: setAnnualRate },
                        { label: "Loan term", val: loanTermYears + " years", min: 10, max: 30, step: 5, value: loanTermYears, setter: setLoanTermYears },
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
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Your offset impact</p>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Total interest saved</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{fmtCurrency(interestSaved)}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Years saved off your loan</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{yearsSaved.toFixed(1)} yrs</span>
                    </div>

                    {[
                        { label: "Effective loan balance", val: fmtCurrency(effectiveLoan) },
                        { label: "Daily interest saving", val: fmtCurrency(dailyInterestSaving) + "/day" },
                        { label: "Interest without offset", val: fmtCurrency(interestWithout) },
                        { label: "Interest with offset", val: fmtCurrency(Math.max(0, totalInterestWith)) },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-sm">
                            <span className="text-gray-500">{row.label}</span>
                            <span className="text-gray-700 font-semibold">{row.val}</span>
                        </div>
                    ))}

                    <p className="mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border bg-green-50 border-green-200/60 text-green-700">
                        ✓ Your {fmtCurrency(safeOffset)} offset saves you <strong>{fmtCurrency(dailyInterestSaving)}</strong> every single day.
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
const OffsetaccountComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Offset Account Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Don&apos;t Just Save —<br />
                    <span className="grad-text">Excel Your Interest</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    An Offset Account is a transaction account linked directly to your home loan. Every dollar sitting in this account {`"offsets"`} the balance of your loan — meaning you only pay interest on the difference.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "Daily", label: "Interest calculated on reduced balance" },
                        { val: "100%", label: "Of offset balance reduces interest" },
                        { val: "Tax-free", label: "Savings — not taxed as interest income" },
                        { val: "Flexible", label: "Access via ATM, card or transfer anytime" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ THE OFFSET ADVANTAGE ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>The offset advantage</SectionTag>
                <SectionHeading>
                    Why let your money sit idle when it could be <GradientText>fighting your mortgage?</GradientText>
                </SectionHeading>
                <SectionLead>
                    Every dollar in your offset account is working for you 24 hours a day, 365 days a year — reducing the interest charged on your home loan.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {offsetAdvantages.map((b, i) => (
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

            {/* ════════════════════ HOW IT WORKS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>How it works</SectionTag>
                <SectionHeading>
                    Step-by-step: how an offset account <GradientText>loan works</GradientText>
                </SectionHeading>
                <SectionLead>
                    Using a $500,000 home loan at 6% p.a. as an example — here is exactly what happens at each stage.
                </SectionLead>

                <div className="flex flex-col relative mb-8">
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

                {/* $50k offset example */}
                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
                    <div className="flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                        <h3 className="text-[16px]! font-semibold! text-gray-800">See the difference — $50,000 offset on a $500,000 loan</h3>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 bg-rose-50 border border-rose-200/60 rounded-2xl">
                            <p className="text-[11px] font-semibold tracking-widets uppercase text-rose-500 mb-2">Without offset</p>
                            <p className="text-[22px] font-bold text-rose-600 mb-1">$500,000</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">You pay interest on the full $500,000 loan balance.</p>
                        </div>
                        <div className="p-5 bg-green-50 border border-green-200/60 rounded-2xl">
                            <p className="text-[11px] font-semibold tracking-widets uppercase text-green-600 mb-2">With $50,000 offset</p>
                            <p className="text-[22px] font-bold text-green-700 mb-1">$450,000</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">You only pay interest on $450,000. Same monthly payment — but much more goes toward owning your home.</p>
                        </div>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHO QUALIFIES ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Who qualifies</SectionTag>
                <SectionHeading>
                    Who qualifies for an <GradientText>offset account loan?</GradientText>
                </SectionHeading>
                <SectionLead>
                    An offset account is perfect for the disciplined saver. If you keep a healthy buffer in your account for emergencies or future goals, an offset ensures that money works for you every day.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-6">
                    {whoQualifies.map((row, i) => (
                        <div key={i} className="grid grid-cols-2 gap-0 px-6 py-4 border-b border-[#F171AC]/[0.07] last:border-0 items-center">
                            <span className="text-[14px] font-semibold text-gray-700">{row.label}</span>
                            <span className="text-[13px] text-gray-500 leading-snug">{row.value}</span>
                        </div>
                    ))}
                </div>

                <InfoBox title="Is an offset account right for you?">
                    An offset account is perfect if you tend to keep a healthy buffer in your bank account for emergencies or future goals. Every dollar sitting there is saving you mortgage interest — without sacrificing access to your cash.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Savings calculator</SectionTag>
                <SectionHeading>
                    Calculate your <GradientText>offset savings potential</GradientText>
                </SectionHeading>
                <SectionLead>
                    Stop wondering and start saving. Use the interactive calculator to see exactly how many years you could shave off your mortgage and how much interest you save.
                </SectionLead>
                <OffsetCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ TAX TRAP & REDRAW ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>The tax trap</SectionTag>
                <SectionHeading>
                    The tax trap &amp; <GradientText>redraw difference</GradientText>
                </SectionHeading>
                <SectionLead>
                    The most important part of choosing an offset account is understanding the tax implications — especially if you think you might ever turn your home into an investment property.
                </SectionLead>

                {/* Offset vs Redraw table */}
                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-8">
                    <div className="grid grid-cols-3 border-b border-[#F171AC]/15">
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Feature</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Offset account</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Redraw facility</p>
                        </div>
                    </div>
                    {offsetVsRedraw.map((row, i) => (
                        <div key={i} className="grid grid-cols-3 border-b border-[#F171AC]/[0.07] last:border-0">
                            <div className="px-6 py-4 text-[13px] font-semibold text-gray-700">{row.feature}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.offset}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.redraw}</div>
                        </div>
                    ))}
                </div>

                {/* The mistake you can't make */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="flex gap-4 items-start bg-rose-50 border border-rose-200/70 rounded-2xl p-6">
                        <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200/60 flex items-center justify-center text-rose-500 flex-shrink-0">
                            <IconWarning />
                        </div>
                        <div>
                            <p className="text-[15px] font-semibold text-rose-600 mb-2">The redraw risk</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                If you pay extra money into your loan via redraw and then withdraw it later to buy a car or go on a holiday, the ATO may no longer consider that portion of the loan tax-deductible if the house becomes an investment property.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start bg-green-50 border border-green-200/70 rounded-2xl p-6">
                        <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200/60 flex items-center justify-center text-green-600 flex-shrink-0">
                            <IconShield />
                        </div>
                        <div>
                            <p className="text-[15px] font-semibold text-green-700 mb-2">The offset solution</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                Offset keeps your money separate from the loan. You can withdraw $20,000 for a holiday, and it does not {`"contaminate"`} the original loan balance — preserving all future tax deductions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Golden rule */}
                <div className="flex gap-4 items-start bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                        <IconInfo />
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold text-[#86489B] mb-1">The golden rule</p>
                        <p className="text-[14px] text-gray-500 leading-relaxed">
                            If there is even a <strong className="text-gray-700">10% chance you will rent out your home</strong> in the future, use an offset account — not redraw. It protects your future tax deductions and gives you total flexibility.
                        </p>
                    </div>
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
                    Everything homeowners and investors ask about offset accounts in Australia.
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

export default OffsetaccountComponent;