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
function IconHome() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
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
function IconDollar() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const whyPIBenefits = [
    {
        Icon: IconHome,
        title: "You actually own your home",
        desc: "With P&I, you are building equity immediately. Equity is the difference between what your house is worth and what you owe — and it grows with every single repayment.",
    },
    {
        Icon: IconTrendDown,
        title: "Lower interest rates",
        desc: "Lenders view P&I borrowers as lower risk. In the current 2026 market, the gap between P&I and interest-only rates can be as much as 0.50% to 1.00% — adding up to thousands of dollars over time.",
    },
    {
        Icon: IconDollar,
        title: "Massive long-term savings",
        desc: "By chipping away at the principal from day one, you pay significantly less total interest over the life of the loan. On a $600,000 loan at 5.5%, choosing IO instead of P&I could cost over $35,000 extra.",
    },
    {
        Icon: IconShield,
        title: "Forced savings plan",
        desc: "P&I is like a forced savings plan — every repayment ensures you're moving forward and building wealth, not just treading water by paying interest indefinitely.",
    },
];

const piVsIO = [
    { feature: "Monthly repayment", pi: "Higher (interest + principal)", io: "Lower (interest only)" },
    { feature: "Loan balance", pi: "Reduces every month", io: "Stays the same during IO period" },
    { feature: "Equity building", pi: "From day one", io: "Only through market growth" },
    { feature: "Interest rate", pi: "Lower (lenders prefer P&I)", io: "Higher by 0.5–1.0% typically" },
    { feature: "Total interest paid", pi: "Less over loan life", io: "More — principal not reducing" },
    { feature: "Risk at term end", pi: "None — loan paid progressively", io: "Repayment shock when IO ends" },
    { feature: "Best for", pi: "Owner-occupiers, long-term owners", io: "Investors, short-term cash flow" },
];

const cleanFinancePoints = [
    "No gambling transactions or patterns visible in bank statements",
    "Minimal or no 'buy-now-pay-later' (BNPL) usage (Afterpay, Zip, etc.)",
    "No missed phone, utility or credit card bill payments",
    "Consistent savings history demonstrating financial discipline",
    "Low living expenses relative to income (lenders benchmark against HEM)",
    "No recent high-value discretionary spending spikes before application",
];

const applicationDocs = [
    "Photo ID (passport or driver's licence)",
    "Recent payslips (last 2–3 pay cycles)",
    "3–6 months of bank statements",
    "Proof of savings or deposit",
    "Tax returns for self-employed (last 2 years)",
    "Details of all existing debts and liabilities",
    "Contract of sale (when available)",
];

const faqs = [
    { q: "Which is better: P&I or interest-only?", a: "For long-term homeownership and building equity, P&I is usually better. Interest-only can help short-term cash flow but often costs more interest long-term." },
    { q: "Can I switch from interest-only to P&I?", a: "Yes. Contact your lender or broker — switching is common but usually increases monthly repayments and may require a new assessment." },
    { q: "Can I make extra repayments on a P&I loan?", a: "Most P&I loans allow extra repayments. Extra payments go toward principal, reduce interest paid over time, and can shorten the loan term." },
    { q: "What are redraw facilities and offset accounts?", a: "Redraw lets you withdraw extra repayments you've made. An offset account is a transaction account linked to your loan that reduces interest by offsetting your loan balance with your account balance." },
    { q: "Are there fees for extra repayments or redraw?", a: "Some loans charge fees or have limits on redraws. Check the product disclosure statement (PDS) or ask your broker for full details before committing." },
    { q: "What is loan amortisation?", a: "Amortisation is the schedule of payments showing how much of each repayment goes to interest vs principal over the life of the loan. In the early years, most of each payment is interest; over time, the principal portion grows." },
    { q: "How long should my loan term be?", a: "Common terms are 25–30 years. Shorter terms mean higher repayments but less interest overall; longer terms lower repayments but increase total interest paid." },
    { q: "What happens if interest rates rise?", a: "For variable-rate P&I loans, repayments can increase when rates rise. You may be able to switch to a fixed-rate product to lock payments for a period." },
    { q: "Can I fix my P&I repayments?", a: "Yes — with a fixed-rate loan or a fixed-rate portion. Fixed rates lock your interest and repayments for a set term, usually 1–5 years." },
    { q: "Can I split my loan between fixed and variable?", a: "Many lenders allow split loans: part fixed, part variable. This can balance stability and flexibility — fixing a portion for certainty while keeping the rest variable for offset and redraw access." },
    { q: "What is Lenders Mortgage Insurance (LMI)?", a: "LMI protects the lender if you default and your deposit is below a certain threshold (commonly under 20%). It's a one-off cost, sometimes added to the loan amount." },
    { q: "Does paying P&I affect tax for investors?", a: "For property investors, the interest portion of repayments may be tax-deductible; principal repayments are not. Speak to an accountant for personalised tax advice." },
    { q: "How does making weekly or fortnightly repayments help?", a: "More frequent payments slightly increase the total number of payments per year and reduce interest faster than monthly payments — helping pay off the loan sooner with no extra effort." },
    { q: "What documents are needed to apply for a P&I home loan?", a: "Typical documents: ID, payslips, bank statements, proof of savings/deposit, tax returns (if self-employed), and details of other debts. In 2026, lenders also review bank statements carefully for living expense patterns." },
    { q: "How does refinancing work for P&I loans?", a: "Refinancing replaces your current loan with a new one — possibly at a lower rate or with better features. Compare break costs versus long-term savings carefully before switching." },
    { q: "Can I pay off my loan early without penalty?", a: "Some loans have early repayment or break fees — especially fixed-rate loans. Check the PDS and ask about exit costs before making large additional repayments." },
    { q: "What is loan portability?", a: "Portability lets you transfer your existing loan to a new property without fully exiting the loan. Not all lenders offer this — ask your broker if it's available on the product you're considering." },
    { q: "Can I add a guarantor to a P&I loan?", a: "Yes — a guarantor can help you access higher borrowing by offering security (usually a family member's property). There are legal and financial risks for the guarantor, and independent legal advice is usually required." },
    { q: "What is loan-to-value ratio (LVR) and why does it matter?", a: "LVR = loan amount ÷ property value. Higher LVRs may mean higher interest rates or LMI. Lenders use LVR to assess risk — below 80% is generally the most favourable tier." },
    { q: "What if I miss a repayment?", a: "Contact your lender immediately. Missed repayments can incur fees, affect your credit file, and lead to recovery steps if unresolved. Lenders also have hardship provisions — don't wait to reach out." },
    { q: "How quickly does principal reduce in the early years?", a: "Early repayments are mostly interest, so principal reduces slowly at first. Over time, the principal portion of each payment increases significantly — this is the amortisation effect." },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtCurrency(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
}

// ─── Amortisation Calculator ──────────────────────────────────────────────────
function AmortisationCalculator() {
    const [loanAmount, setLoanAmount] = useState(600000);
    const [annualRate, setAnnualRate] = useState(5.5);
    const [termYears, setTermYears] = useState(30);
    const [extraMonthly, setExtraMonthly] = useState(0);

    const mr = annualRate / 100 / 12;
    const nMonths = termYears * 12;
    const basePayment = loanAmount * (mr * Math.pow(1 + mr, nMonths)) / (Math.pow(1 + mr, nMonths) - 1);
    const totalPayment = basePayment + extraMonthly;

    // Calculate with and without extra repayments
    let balance = loanAmount;
    let totalInterestPaid = 0;
    let monthsPaid = 0;
    while (balance > 0.01 && monthsPaid < nMonths * 2) {
        const interest = balance * mr;
        const principal = Math.min(totalPayment - interest, balance);
        if (principal <= 0) break;
        totalInterestPaid += interest;
        balance -= principal;
        monthsPaid++;
    }

    const totalInterestBase = basePayment * nMonths - loanAmount;
    const interestSavedExtra = Math.max(0, totalInterestBase - totalInterestPaid);
    const yearsSavedExtra = Math.max(0, (nMonths - monthsPaid) / 12);

    // Build amortisation snapshot (year 1, 5, 10, 20, last)
    const snapshots = [];
    let snapBalance = loanAmount;
    let cumInterest = 0;
    let cumPrincipal = 0;
    for (let m = 1; m <= nMonths; m++) {
        const interest = snapBalance * mr;
        const principal = Math.min(basePayment - interest, snapBalance);
        if (principal <= 0) break;
        cumInterest += interest;
        cumPrincipal += principal;
        snapBalance -= principal;
        if ([12, 60, 120, 240, nMonths].includes(m)) {
            snapshots.push({
                year: Math.round(m / 12),
                balance: Math.max(0, snapBalance),
                cumInt: cumInterest,
                cumPrin: cumPrincipal,
                pctPaid: ((loanAmount - Math.max(0, snapBalance)) / loanAmount) * 100,
            });
        }
    }

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">P&amp;I loan &amp; amortisation calculator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Loan amount", val: fmtCurrency(loanAmount), min: 100000, max: 2000000, step: 25000, value: loanAmount, setter: setLoanAmount },
                        { label: "Interest rate (% p.a.)", val: annualRate.toFixed(1) + "%", min: 3, max: 10, step: 0.1, value: annualRate, setter: setAnnualRate },
                        { label: "Loan term", val: termYears + " years", min: 10, max: 30, step: 5, value: termYears, setter: setTermYears },
                        { label: "Extra monthly repayment", val: fmtCurrency(extraMonthly) + "/mo", min: 0, max: 5000, step: 100, value: extraMonthly, setter: setExtraMonthly },
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
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Your loan summary</p>

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Monthly repayment</span>
                        <span className="text-[26px] font-bold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{fmtCurrency(basePayment)}</span>
                    </div>

                    {[
                        { label: "Total interest paid", val: fmtCurrency(totalInterestBase) },
                        { label: "Total amount paid", val: fmtCurrency(basePayment * nMonths) },
                        ...(extraMonthly > 0 ? [
                            { label: "Interest saved (extra repayments)", val: fmtCurrency(interestSavedExtra), highlight: true },
                            { label: "Years saved off term", val: yearsSavedExtra.toFixed(1) + " yrs", highlight: true },
                        ] : []),
                    ].map((row, i) => (
                        <div key={i} className={`flex justify-between items-center py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-sm`}>
                            <span className="text-gray-500">{row.label}</span>
                            <span className={`font-semibold ${row.highlight ? "text-green-600" : "text-gray-700"}`}>{row.val}</span>
                        </div>
                    ))}

                    {extraMonthly > 0 && (
                        <p className="mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border bg-green-50 border-green-200/60 text-green-700">
                            ✓ An extra {fmtCurrency(extraMonthly)}/mo saves you <strong>{fmtCurrency(interestSavedExtra)}</strong> and {yearsSavedExtra.toFixed(1)} years.
                        </p>
                    )}
                </div>
            </div>

            {/* Amortisation snapshots */}
            <div className="px-8 pb-8">
                <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Amortisation at a glance — how your loan balance reduces over time</p>
                <div className="bg-white rounded-2xl border border-[#F171AC]/15 overflow-hidden">
  {/* Table header */}
  <div className="grid grid-cols-5 sm:grid-cols-5 px-3 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15 text-[10px] sm:text-[11px]">
    {["Year", "Remaining balance", "Cumul. interest", "Cumul. principal", "% paid off"].map((h, i) => (
      <span key={i} className="font-semibold tracking-widest uppercase text-[#86489B] text-center sm:text-left">
        {h}
      </span>
    ))}
  </div>

  {/* Table rows */}
  {snapshots.map((s, i) => (
    <div
      key={i}
      className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-0 px-3 sm:px-5 py-2 sm:py-3.5 border-b border-[#F171AC]/[0.07] last:border-0 text-[12px] sm:text-[13px] items-center"
    >
      <span className="font-semibold text-gray-700">Yr {s.year}</span>
      <span className="text-gray-500">{fmtCurrency(s.balance)}</span>
      <span className="text-rose-500 sm:text-center">{fmtCurrency(s.cumInt)}</span>
      <span className="text-green-600 sm:text-center">{fmtCurrency(s.cumPrin)}</span>
      <span className="font-semibold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent sm:text-center">{s.pctPaid.toFixed(1)}%</span>
    </div>
  ))}
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
const PrincipalComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Principal &amp; Interest Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Australia&apos;s Most Common<br />
                    <span className="grad-text">Home Loan — Explained</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    A principal and interest loan is the most common type of mortgage in Australia. Your repayments cover both the amount borrowed (principal) and the cost of borrowing (interest) — so your loan balance gradually decreases over time.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "From day 1", label: "You start building equity immediately" },
                        { val: "0.5–1.0%", label: "Lower rate vs interest-only in 2026" },
                        { val: "$35k+", label: "Potential extra cost of IO over P&I" },
                        { val: "25–30 yrs", label: "Typical loan term options" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHY CHOOSE P&I ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Why choose P&amp;I</SectionTag>
                <SectionHeading>
                    Why the benefits far outweigh the <GradientText>higher monthly cost</GradientText>
                </SectionHeading>
                <SectionLead>
                    While the monthly repayments are higher than an interest-only loan, the benefits far outweigh the initial cost for most owner-occupiers.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                    {whyPIBenefits.map((b, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <b.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{b.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{b.desc}</p>
                        </AccentCard>
                    ))}
                </div>

                <InfoBox title="Is P&I right for you?">
                    If your goal is to be debt-free and eventually own your home outright, Principal and Interest is almost always the right move. It is a {`"forced savings"`} plan that ensures you are moving forward — not just treading water. However, some investors prefer interest-only for tax purposes, and some buyers need lower payments short-term during renovations.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ P&I vs IO COMPARISON ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>P&amp;I vs interest-only</SectionTag>
                <SectionHeading>
                    P&amp;I vs interest-only — <GradientText>at a glance</GradientText>
                </SectionHeading>
                <SectionLead>
                    Understanding the key differences helps you make the right choice for your financial goals and situation.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-6">
                    {/* Header */}
                    <div className="grid grid-cols-3 border-b border-[#F171AC]/15">
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Feature</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <div className="flex items-center gap-2">
                                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Principal &amp; interest</p>
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700">Recommended</span>
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Interest-only</p>
                        </div>
                    </div>
                    {piVsIO.map((row, i) => (
                        <div key={i} className="grid grid-cols-3 border-b border-[#F171AC]/[0.07] last:border-0">
                            <div className="px-6 py-4 text-[13px] font-semibold text-gray-700">{row.feature}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.pi}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.io}</div>
                        </div>
                    ))}
                </div>

                {/* $600k example */}
                <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">Real-world example — $600,000 loan at 5.5%</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 bg-rose-50 border border-rose-200/60 rounded-2xl">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-500 mb-1.5">With 5-year interest-only period</p>
                            <p className="text-[22px] font-bold text-rose-600 mb-1">$35,000+</p>
                            <p className="text-[13px] text-gray-500">Extra interest paid over the life of the loan compared to starting with P&I from day one.</p>
                        </div>
                        <div className="p-5 bg-green-50 border border-green-200/60 rounded-2xl">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-green-600 mb-1.5">Starting with P&amp;I from day one</p>
                            <p className="text-[22px] font-bold text-green-700 mb-1">$35,000 saved</p>
                            <p className="text-[13px] text-gray-500">By chipping away at the principal from the start, you keep that money in your pocket — not the {`bank's`}.</p>
                        </div>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Repayment &amp; amortisation calculator</SectionTag>
                <SectionHeading>
                    Calculate your <GradientText>P&amp;I repayments</GradientText>
                </SectionHeading>
                <SectionLead>
                    Use the interactive calculator to see your monthly repayments, total interest, and how your loan balance reduces over time — and what extra repayments can do.
                </SectionLead>
                <AmortisationCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ CLEAN FINANCIAL DATA ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Application tips</SectionTag>
                <SectionHeading>
                    Clean financial data — <GradientText>what lenders look for in 2026</GradientText>
                </SectionHeading>
                <SectionLead>
                    The most critical part of a P&I application is your living expenses and credit conduct. In 2026, lenders use sophisticated AI to scan your bank statements — they are looking for much more than just your salary.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">What lenders are checking in your bank statements</p>
                        {cleanFinancePoints.map((t, i) => (
                            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-rose-100/60 last:border-0 text-[13px] text-gray-500 leading-relaxed">
                                <span className="text-rose-400 flex-shrink-0 mt-0.5"><IconWarning /></span>
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconFile />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Required documents</p>
                        </div>
                        {applicationDocs.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>
                </div>

                <InfoBox title="The lender's AI scan — what it means for you">
                    In 2026, lenders use automated tools that categorise every bank transaction. They benchmark your living expenses against the Household Expenditure Measure (HEM) for your household size. Reducing discretionary spending in the 3 months before applying can materially improve your assessed borrowing capacity.
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
                    Everything homeowners and investors ask about principal and interest home loans.
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

export default PrincipalComponent;