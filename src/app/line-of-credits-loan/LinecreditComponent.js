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
function IconHome() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
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
function IconInfo() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
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
function IconFile() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    );
}
function IconCreditCard() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
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
function IconSmallInfo() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const keyCharacteristics = [
    "Revolving credit facility secured by property",
    "Credit limit based on equity, income, serviceability, and LVR",
    "Interest-only or principal-and-interest repayments depending on lender and borrower choices",
    "Access via internet banking, cheque, card or manually requested transfers",
];

const howItWorksSteps = [
    { num: "01", title: "Application assessment", desc: "Lender assesses your application — including income, credit history, property value, and outstanding mortgages." },
    { num: "02", title: "Credit limit set", desc: "Lender sets a credit limit, commonly up to a percentage of your property equity, based on LVR." },
    { num: "03", title: "Draw funds as needed", desc: "You draw funds up to the limit. Interest accrues only on the amount you have actually drawn, not the full limit." },
    { num: "04", title: "Repay and re-borrow", desc: "You can repay any time and re-borrow up to the limit during the facility term — this is the revolving feature." },
    { num: "05", title: "Periodic reviews", desc: "The lender may perform periodic reviews. Limits can be reduced if property values fall or your circumstances change." },
];

const commonUses = [
    "Home renovations and maintenance",
    "Investment property purchases or upgrades",
    "Business cashflow smoothing (with tax advice)",
    "Education fees",
    "Emergency or ongoing personal expenses",
    "Debt consolidation (but compare rates and fees carefully)",
];

const locVsLoan = [
    { feature: "Access to funds", loc: "Draw anytime up to limit", loan: "Lump sum at settlement" },
    { feature: "Repayments", loc: "Flexible — interest only or P&I", loan: "Fixed schedule (P&I or IO)" },
    { feature: "Interest charged on", loc: "Amount drawn only", loan: "Full loan balance" },
    { feature: "Re-borrow", loc: "Yes — revolving", loan: "No (unless redraw available)" },
    { feature: "Interest rate", loc: "Usually variable", loan: "Fixed or variable" },
    { feature: "Term", loc: "Ongoing (facility term)", loan: "Fixed loan term" },
];

const eligibilityDocs = [
    "Proof of identity",
    "Recent payslips or financial statements",
    "For self-employed: tax returns, BAS and accountant's letters",
    "Bank statements (3–6 months)",
    "Evidence of property ownership and valuation",
    "Existing mortgage details and loan statements",
    "Good credit history (some lenders accept lower scores with conditions)",
];

const whoSuitsCards = [
    { Icon: IconHome, title: "Property investors", desc: "Use a LOC to fund deposits, renovations or expenses across multiple investment properties." },
    { Icon: IconUsers, title: "Self-employed individuals", desc: "Manage irregular cashflow by drawing from a LOC during quieter periods and repaying when income is strong." },
    { Icon: IconCreditCard, title: "Homeowners renovating", desc: "Keep access to funds during a staged renovation project without multiple loan applications." },
    { Icon: IconKey, title: "Financially disciplined borrowers", desc: "A LOC rewards disciplined borrowers who can resist drawing more than needed and repay promptly." },
];

const applySteps = [
    { num: "01", title: "Assess your borrowing capacity", desc: "Review your equity, income, debts and serviceability to understand what limit you may qualify for." },
    { num: "02", title: "Provide financial documents", desc: "Gather payslips, bank statements, tax returns (self-employed), property details and existing loan statements." },
    { num: "03", title: "Property valuation", desc: "If the LOC is secured against property, the lender will order or accept a valuation to confirm available equity." },
    { num: "04", title: "Credit assessment", desc: "The lender reviews your full financial profile, LVR, credit history and serviceability before approving the facility." },
];

const faqs = [
    {
        q: "What are the interest rates on a line of credit in Australia?",
        a: "Interest rates are usually variable and can be slightly higher than standard home loans but lower than credit cards. The exact rate depends on the lender, loan type, and your financial profile.",
    },
    {
        q: "Do I need property to get a line of credit?",
        a: "Not always. You can get a secured line of credit (backed by property) or an unsecured line of credit (no collateral, but higher interest rates and lower limits).",
    },
    {
        q: "Are repayments required on a line of credit?",
        a: "Yes, but they are usually flexible. Many lenders allow interest-only repayments, though paying down the principal is recommended to reduce debt over time.",
    },
    {
        q: "Can I use a line of credit for an investment property?",
        a: "Yes, many investors use a line of credit to fund deposits, renovations, or other investment-related expenses. Interest may be tax-deductible if used for investment purposes — seek financial advice.",
    },
    {
        q: "Can I pay off a line of credit early?",
        a: "Yes, you can repay part or all of your balance at any time without penalty in most cases. This flexibility is one of its main advantages over fixed-term loans.",
    },
    {
        q: "Does a line of credit affect my borrowing capacity?",
        a: "Yes. Lenders assess your full approved limit — not just the amount you have drawn — when calculating borrowing capacity. This can reduce your ability to get other loans.",
    },
    {
        q: "Is a line of credit good for emergencies?",
        a: "Yes, it can act as a financial safety net, giving you quick access to funds during unexpected situations without needing to apply for a new loan.",
    },
    {
        q: "Can I convert my home loan into a line of credit?",
        a: "Some lenders allow you to restructure or split your home loan to include a line of credit. A mortgage broker can help you set this up correctly.",
    },
    {
        q: "What is the difference between a line of credit and an offset account?",
        a: "An offset account reduces the interest on your home loan, while a line of credit is a separate borrowing facility that lets you withdraw funds. They serve different purposes.",
    },
    {
        q: "Can I redraw funds after repayment?",
        a: "Yes, this is one of the main features. As you repay the balance, your available credit increases, allowing you to reuse the funds up to the approved limit.",
    },
    {
        q: "What is the monthly payment on a $50,000 line of credit?",
        a: "The monthly payment depends on how much of the limit you actually use and the interest rate. Most lenders allow interest-only payments, so if you used the full $50,000 at 7% interest, your monthly repayment would be around $290. If you only use $20,000, you'll only pay interest on that amount — this flexibility is what makes a line of credit different from a regular loan.",
    },
    {
        q: "How does a $10,000 line of credit work?",
        a: "A $10,000 line of credit means you can borrow up to $10,000 whenever you need it. You don't have to take the full amount at once — you can withdraw smaller amounts over time. Interest is only charged on what you use, and as you repay it, the available balance goes back up, allowing you to reuse the funds again.",
    },
    {
        q: "Can I get $50,000 with a 700 credit score?",
        a: "Yes, having a credit score around 700 generally puts you in a good position to borrow $50,000, as it shows lenders you are a reliable borrower. However, approval also depends on your income, existing debts, and overall financial situation. A strong income and low debts will increase your chances significantly.",
    },
    {
        q: "How much income do I need for an $800,000 mortgage in Australia?",
        a: "To afford an $800,000 mortgage in Australia, you typically need a household income of around $130,000 to $160,000 per year. This can vary depending on your deposit, interest rate, and other financial commitments. Lenders assess your ability to repay the loan comfortably, not just your income alone.",
    },
    {
        q: "What can I borrow on a $30k salary?",
        a: "With a $30,000 salary, borrowing capacity is quite limited, and you may only qualify for a small loan or may need a co-borrower. Lenders will look at your living expenses and debts, and in many cases this income alone may not be enough for a standard home loan.",
    },
];

// ─── Calculator ───────────────────────────────────────────────────────────────
function InterestCalculator() {
    const [limit, setLimit] = useState(100000);
    const [drawn, setDrawn] = useState(50000);
    const [rate, setRate] = useState(7.0);

    const safeDrawn = Math.min(drawn, limit);
    const monthlyInterest = (safeDrawn * (rate / 100)) / 12;
    const unusedCredit = limit - safeDrawn;
    const annualInterest = monthlyInterest * 12;

    const fmt = (n) => "$" + Math.round(n).toLocaleString("en-AU");

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">Interest-only payment estimator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Credit limit", val: fmt(limit), min: 10000, max: 1000000, step: 10000, value: limit, setter: setLimit },
                        { label: "Amount drawn", val: fmt(safeDrawn), min: 0, max: limit, step: 5000, value: safeDrawn, setter: (v) => setDrawn(Math.min(v, limit)) },
                        { label: "Interest rate (% p.a.)", val: rate.toFixed(1) + "%", min: 3, max: 15, step: 0.1, value: rate, setter: setRate },
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
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Your estimates</p>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Monthly IO repayment</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{fmt(monthlyInterest)}</span>
                    </div>

                    {[
                        { label: "Annual interest cost", val: fmt(annualInterest) },
                        { label: "Amount drawn", val: fmt(safeDrawn) },
                        { label: "Unused credit", val: fmt(unusedCredit) },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-sm">
                            <span className="text-gray-500">{row.label}</span>
                            <span className="text-gray-700 font-semibold">{row.val}</span>
                        </div>
                    ))}

                    <p className="mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border bg-blue-50 border-blue-200/60 text-blue-700">
                        Interest is only charged on the <strong>{fmt(safeDrawn)}</strong> drawn — not the full {fmt(limit)} limit.
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
const LinecreditComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Line of Credit Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    What Exactly is a<br />
                    <span className="grad-text">Line of Credit Loan?</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    A Line of Credit is a revolving credit facility secured against the equity in your property. Instead of receiving a lump sum, the lender approves you for a specific limit — and you can dip in and out as needed.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "Revolving", label: "Credit facility — draw, repay, re-borrow" },
                        { val: "Equity", label: "Based on your property equity and LVR" },
                        { val: "Interest", label: "Only charged on the amount actually drawn" },
                        { val: "Flexible", label: "Access via banking, card or transfer" },
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
                    Is a line of credit considered <GradientText>a loan?</GradientText>
                </SectionHeading>
                <SectionLead>
                    Yes — a line of credit is absolutely considered a type of loan. It falls under revolving credit loans (similar to credit cards) and can be structured as a home loan product when secured against property.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Key characteristics</p>
                        {keyCharacteristics.map((t, i) => <BulletRow key={i}>{t}</BulletRow>)}
                    </div>
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Common uses</p>
                        {commonUses.map((t, i) => <BulletRow key={i}>{t}</BulletRow>)}
                    </div>
                </div>

                <InfoBox title="Regulated as a loan product">
                    In Australia, lenders and regulators classify lines of credit as loan products, even though they function differently from standard term loans. They are regulated under the same consumer and responsible lending frameworks as other secured loan products.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ HOW IT WORKS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>How it works</SectionTag>
                <SectionHeading>
                    How a line of credit <GradientText>works step-by-step</GradientText>
                </SectionHeading>
                <SectionLead>
                    From application to ongoing use — here is exactly what happens at each stage of a line of credit facility.
                </SectionLead>

                <div className="flex flex-col relative">
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
            </section>

            <PinkDivider />

            {/* ════════════════════ LOC vs TRADITIONAL LOAN ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Compare</SectionTag>
                <SectionHeading>
                    Line of credit vs <GradientText>traditional loan</GradientText>
                </SectionHeading>
                <SectionLead>
                    Understanding the key differences helps you decide which product suits your situation. A LOC is not a replacement for a standard home loan — it serves a different purpose.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
                    {/* Header row */}
                    <div className="grid grid-cols-3 gap-0 border-b border-[#F171AC]/15">
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Feature</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Line of credit</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Traditional loan</p>
                        </div>
                    </div>
                    {locVsLoan.map((row, i) => (
                        <div key={i} className="grid grid-cols-3 gap-0 border-b border-[#F171AC]/[0.07] last:border-0">
                            <div className="px-6 py-4 text-[13px] font-semibold text-gray-700">{row.feature}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.loc}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.loan}</div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ INTEREST CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Interactive tool</SectionTag>
                <SectionHeading>
                    Calculate your <GradientText>interest-only payments</GradientText>
                </SectionHeading>
                <SectionLead>
                    Interest on a line of credit is only charged on the amount you draw — not the full credit limit. Use the sliders to estimate your monthly repayments.
                </SectionLead>
                <InterestCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ ELIGIBILITY & DOCS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Eligibility & documentation</SectionTag>
                <SectionHeading>
                    What you need <GradientText>to apply</GradientText>
                </SectionHeading>
                <SectionLead>
                    Applying for a line of credit is similar to applying for a home loan. Here is what lenders typically require.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconFile />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Required documents</p>
                        </div>
                        {eligibilityDocs.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>

                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widests uppercase text-[#86489B] mb-4">Who should consider a line of credit?</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed mb-4">A line of credit may be suitable if you:</p>
                        {[
                            "Own property and want to leverage equity",
                            "Need flexible access to funds",
                            "Are financially disciplined",
                            "Have irregular income or expenses",
                        ].map((t, i) => (
                            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-[14px] text-gray-500 leading-relaxed">
                                <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                    <IconCheck />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHO SUITS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Who it suits</SectionTag>
                <SectionHeading>
                    Particularly popular <GradientText>among these borrowers</GradientText>
                </SectionHeading>
                <SectionLead>
                    While anyone with sufficient equity may qualify, lines of credit are especially well-suited to these borrower profiles.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {whoSuitsCards.map((b, i) => (
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

            {/* ════════════════════ HOW TO APPLY ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>How to apply</SectionTag>
                <SectionHeading>
                    How to apply for a line of credit <GradientText>in Australia</GradientText>
                </SectionHeading>
                <SectionLead>
                    The process is similar to applying for a home loan. A mortgage broker can help compare lenders and structure the facility correctly for your situation.
                </SectionLead>

                <div className="flex flex-col relative mb-6">
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

                <InfoBox title="Work with a mortgage broker">
                    A mortgage broker can help you compare lenders, understand which will assess your equity and serviceability most favourably, and structure the line of credit correctly — especially if you are self-employed or have a complex income situation.
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
                    Everything borrowers ask about lines of credit in Australia.
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

export default LinecreditComponent;