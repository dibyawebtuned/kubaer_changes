"use client";
import React, { useState, useCallback } from "react";
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
function IconDollar() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}
function IconBalance() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="6" x2="19" y2="6" />
            <line x1="5" y1="18" x2="19" y2="18" />
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
function IconTrendUp() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    );
}
function IconCalendar() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}
function IconRenovate() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20M4 20V10l8-8 8 8v10" />
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
function IconCheck() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
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
function IconSmallWarning() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const howItWorks = [
    { Icon: IconDollar, title: "Lower monthly repayments", desc: "Your monthly payment is significantly lower because you are only covering interest — not paying back any of the original debt." },
    { Icon: IconBalance, title: "Loan balance stays the same", desc: "The amount you owe to the bank does not decrease during the IO period. You are not reducing the principal debt at all." },
    { Icon: IconHome, title: "No equity from repayments", desc: "You only build equity through market price growth, not through your repayments — unlike a P&I loan where each payment reduces your debt." },
];

const whyChooseIO = [
    {
        Icon: IconTrendUp,
        title: "Improved cash flow",
        desc: "By lowering your required monthly payment, you free up cash for other priorities — especially helpful during parental leave, starting a business, or a temporary reduction in household income.",
    },
    {
        Icon: IconCalendar,
        title: "Tax benefits for investors",
        desc: "Interest on an investment property is typically tax-deductible. IO keeps your deductible debt high while you use the saved cash to pay down non-deductible debt like your home mortgage.",
    },
    {
        Icon: IconRenovate,
        title: "Buy and renovate strategy",
        desc: "If you are flipping a property or doing a major renovation, an IO period keeps holding costs low while you add value. Once the work is done, you can sell or refinance.",
    },
];

const catchItems = [
    {
        title: "Higher interest rates",
        desc: "In the current 2026 market, banks generally charge a premium for IO terms. For an owner-occupier, the rate might be 0.60% to 0.80% higher than a P&I rate.",
    },
    {
        title: "The repayment shock",
        desc: "Most IO periods last 1–5 years (up to 10 or 15 for some investors). When that period ends, your loan reverts to P&I. Because you now have less time to pay off the same debt, your payments will jump — often by 30% to 40%.",
    },
    {
        title: "Stricter approval",
        desc: "Because lenders must calculate your ability to pay back the loan over a shorter timeframe (e.g., 25 years instead of 30), it can be harder to qualify for an IO loan.",
    },
];

const approvalSteps = [
    {
        num: "01",
        title: "Purpose declaration",
        desc: "Unlike P&I, you must provide a clear reason for wanting IO — for example: investment strategy, temporary cash flow management, or a renovation plan.",
    },
    {
        num: "02",
        title: "Hardship & strategy assessment",
        desc: "The lender will check that you aren't using IO simply because you can't afford a normal loan. They want to see a clear repayment strategy for when the IO period ends.",
    },
    {
        num: "03",
        title: "Higher \"buffer\" test",
        desc: "The bank will assess your ability to pay at a much higher interest rate than the one you're offered — to ensure you can handle future market shifts and the eventual repayment switch.",
    },
];

const ioSuitsYou = [
    "You are an investor seeking short-term cash flow or tax deductions",
    "You have irregular income and need lower required monthly payments",
    "You have a planned short-term strategy (e.g., renovate and sell)",
    "You are in a life transition such as parental leave or starting a business",
];

const ioMayNotSuit = [
    "You are a first home buyer — P&I is usually better to build equity",
    "This is your long-term \"forever home\" — you want to build equity",
    "You are choosing IO primarily because you cannot afford P&I",
];

const piPros = [
    "Reduces debt with every repayment",
    "Builds equity faster",
    "Lower total interest paid",
    "Lower interest rate (typically)",
    "Easier lender approval",
    "Better for long-term homeowners",
];

const ioPros = [
    "Lower repayments during IO period",
    "Interest is tax-deductible for investors",
    "Frees up cash for other investments",
    "Useful for short-term strategies",
];

const ioCons = [
    "No debt reduction during IO",
    "Higher total interest over loan life",
    "Payment shock when IO period ends",
];

const faqs = [
    { q: "How long can you be interest-only on a mortgage in Australia?", a: "Most lenders offer IO terms of 1–5 years. Some lenders may allow longer or repeat IO periods, but rules vary and lenders may apply stricter conditions." },
    { q: "What happens after the interest-only period ends?", a: "Your loan usually converts to principal and interest repayments for the remaining loan term. This increases your monthly repayments. You can also refinance, sell the property, or negotiate terms with your lender." },
    { q: "Are interest-only loans cheaper?", a: "Monthly IO repayments are lower during the IO period, but the total interest paid over the life of the loan is usually higher than a P&I loan because you're not reducing the principal." },
    { q: "Interest-only vs principal and interest — which is better?", a: "P&I is generally better for long-term homeowners because it reduces debt and interest faster. IO can be useful short-term for cash flow or investment strategies, but it's riskier long-term." },
    { q: "Can I make extra repayments on an interest-only loan?", a: "Some lenders allow extra repayments or redraws during IO, but others restrict this. Check your loan contract — many fixed IO products limit extras." },
    { q: "What are the risks of interest-only loans?", a: "Risks include no principal reduction, higher total interest, payment shock when IO ends, stricter lending criteria, and increased risk if property values fall." },
    { q: "Who should get an interest-only loan?", a: "Investors seeking short-term cash flow or tax deductions, borrowers with irregular income, or people with a planned short-term strategy (e.g., renovate and sell) may consider IO loans. First-home buyers usually benefit more from P&I." },
    { q: "Can you refinance an interest-only loan?", a: "Yes. Refinancing is common, but compare costs, possible exit fees, and whether refinancing improves your long-term position." },
    { q: "Do interest-only loans affect borrowing capacity?", a: "Lenders may assess IO loans differently. Because the principal isn't being repaid, some lenders reduce borrowing capacity or set higher serviceability buffers." },
    { q: "Are interest payments tax-deductible for investors?", a: "For investment properties, interest is usually tax-deductible if the loan funds are used to produce rental income. Principal repayments are not deductible. Confirm with an accountant." },
    { q: "Do lenders charge higher rates for interest-only loans?", a: "Some lenders charge a higher interest rate or fees for IO loans because they are considered higher risk. Rate differences vary by lender." },
    { q: "Can first-home buyers get interest-only loans?", a: "It's less common and often not recommended. Lenders may be cautious; first-home buyers typically benefit more from P&I to build equity." },
    { q: "What fees are associated with interest-only loans?", a: "Common fees: application fees, ongoing account fees, redraw fees, and exit/break costs for fixed IO loans. Fee structures differ between lenders." },
    { q: "Can I switch from interest-only to principal & interest?", a: "Usually yes. You can switch at the end of the IO term, or sometimes earlier by refinancing or negotiating with the lender. Expect higher repayments after switching." },
    { q: "How much will my repayments increase after IO ends?", a: "The increase depends on remaining term and interest rate. Switching from IO to P&I increases repayments because you must now repay the principal over the remaining loan term. Use a repayment calculator for exact figures." },
    { q: "What is loan-to-value ratio (LVR) for interest-only loans?", a: "LVR = loan amount ÷ property value. Some lenders set lower maximum LVRs for IO loans or apply stricter rules at higher LVRs due to increased risk." },
    { q: "Are interest-only loans available for investment properties only?", a: "They're commonly used for investment properties but can be available for owner-occupiers in certain situations. Lender policies vary." },
    { q: "What is the difference between interest-only and negative gearing?", a: "Interest-only is a repayment structure. Negative gearing is a tax situation where rental income is less than property expenses (including interest). IO can contribute to negative gearing for investors, but they're not the same thing." },
    { q: "How do lenders assess interest-only loan applications?", a: "Lenders check income, expenses, credit history, deposit amount, LVR, and the loan purpose. They may use higher serviceability buffers and require more documentation for IO loans." },
    { q: "Can I have a split loan with interest-only and P&I portions?", a: "Yes. Split loans let you have part of the loan on IO and part on P&I, balancing lower cash payments with principal reduction." },
    { q: "What documentation is needed for an interest-only loan?", a: "Typical documents: ID, payslips, bank statements, proof of savings, tax returns (if self-employed), and details of other debts and assets." },
    { q: "Are extra repayments refundable (redraw) during IO?", a: "If your loan and lender allow redraw during IO, extra repayments may be withdrawn. Many IO products restrict redraws — check the product terms." },
    { q: "How do I calculate interest-only repayments?", a: "IO repayment = loan amount × annual interest rate ÷ 12. For example, a $400,000 loan at 5% = $400,000 × 0.05 ÷ 12 ≈ $1,667 per month." },
    { q: "Is it a good idea to do interest-only to renovate?", a: "It can help with short-term cash flow during renovation, but ensure you have a clear plan to refinance, sell, or manage higher repayments when the IO period ends." },
    { q: "What happens if property values fall during IO period?", a: "If values fall, your LVR increases, which may affect refinancing, borrowing capacity or trigger higher rates. Negative equity is a risk if property value drops below the loan amount." },
    { q: "What is the typical interest rate difference between IO and P&I?", a: "Rate differences vary by lender and market conditions. Sometimes IO rates are slightly higher; other times they're similar. Check current lender offers." },
    { q: "How do I plan for the end of an interest-only term?", a: "Start planning early: check projected P&I repayments, consider making extra payments if allowed, review refinance options, and budget for higher monthly costs." },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmtCurrency(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
}

function calcRepayments(loan, annualRate, termYears, ioPeriodYears) {
    const mr = annualRate / 100 / 12;
    const ioPay = loan * mr;
    const remMonths = (termYears - ioPeriodYears) * 12;
    const piPay = loan * (mr * Math.pow(1 + mr, remMonths)) / (Math.pow(1 + mr, remMonths) - 1);
    const diff = piPay - ioPay;
    const pct = ((piPay / ioPay) - 1) * 100;
    return { ioPay, piPay, diff, pct };
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
function WarnCard({ children }) {
    return (
        <div className="flex gap-3 items-start bg-rose-50 border border-rose-200/60 rounded-xl p-4 text-[13px] text-gray-500 leading-relaxed">
            <span className="text-rose-400 flex-shrink-0 mt-0.5"><IconWarning /></span>
            {children}
        </div>
    );
}
function CheckRow({ children }) {
    return (
        <div className="flex items-start gap-3 py-2 text-[14px] text-gray-500 leading-relaxed">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <IconCheck />
            </div>
            <span>{children}</span>
        </div>
    );
}

// ─── Repayment Calculator ─────────────────────────────────────────────────────
function RepaymentCalculator() {
    const [loan, setLoan] = useState(500000);
    const [rate, setRate] = useState(6.0);
    const [term, setTerm] = useState(30);
    const [ioPeriod, setIoPeriod] = useState(5);

    const { ioPay, piPay, diff, pct } = calcRepayments(loan, rate, term, ioPeriod);

    return (
        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                    <IconCalculator />
                </div>
                <h3 className="text-xl! font-semibold! text-gray-800">Repayment shock calculator</h3>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Sliders */}
                <div className="flex flex-col gap-7">
                    {[
                        { label: "Loan amount", val: fmtCurrency(loan), min: 100000, max: 2000000, step: 25000, value: loan, setter: setLoan, display: fmtCurrency },
                        { label: "Interest rate (% p.a.)", val: rate.toFixed(1) + "%", min: 3, max: 10, step: 0.1, value: rate, setter: setRate, display: (v) => v.toFixed(1) + "%" },
                        { label: "Original loan term", val: term + " years", min: 15, max: 30, step: 5, value: term, setter: setTerm, display: (v) => v + " years" },
                        { label: "IO period", val: ioPeriod + " year" + (ioPeriod > 1 ? "s" : ""), min: 1, max: 10, step: 1, value: ioPeriod, setter: setIoPeriod, display: (v) => v + " year" + (v > 1 ? "s" : "") },
                    ].map((f, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-[14px] text-gray-500">{f.label}</span>
                                <span className="text-[18px] font-semibold grad-text">{f.val}</span>
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

                    {[
                        { label: "IO monthly repayment", val: fmtCurrency(ioPay) + "/mo", danger: false },
                        { label: "P&I monthly (after IO ends)", val: fmtCurrency(piPay) + "/mo", danger: false },
                    ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                            <span className="text-[14px] text-gray-500">{row.label}</span>
                            <span className="text-[22px] font-semibold bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">{row.val}</span>
                        </div>
                    ))}

                    <div className="flex justify-between items-center py-3 border-b border-[#F171AC]/10">
                        <span className="text-[14px] text-gray-500">Monthly increase</span>
                        <span className="text-[22px] font-semibold text-rose-500">+{fmtCurrency(diff)}/mo</span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                        <span className="text-[14px] font-semibold text-gray-700">Repayment jump</span>
                        <span className="text-[26px] font-semibold text-rose-500">+{Math.round(pct)}%</span>
                    </div>

                    <p className={`mt-3 text-[13px] leading-relaxed rounded-xl px-4 py-3 border ${pct > 35
                        ? "bg-rose-50 border-rose-200 text-rose-600"
                        : pct > 20
                            ? "bg-amber-50 border-amber-200 text-amber-700"
                            : "bg-green-50 border-green-200 text-green-600"
                        }`}>
                        {pct > 35
                            ? "⚠ Significant repayment shock — plan well in advance for the P&I switch."
                            : pct > 20
                                ? "Consider building up savings to buffer the repayment increase."
                                : "✓ Manageable repayment jump — ensure you budget for the difference."}
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── IO vs P&I Compare ────────────────────────────────────────────────────────
function IOvsPICompare() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* IO */}
            <div className="bg-white rounded-2xl border border-[#F171AC]/20 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-7">
                <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Interest-only</p>
                <div className="flex flex-col gap-1.5 mb-4">
                    {ioPros.map((t, i) => <CheckRow key={i}>{t}</CheckRow>)}
                </div>
                <div className="flex flex-col gap-2">
                    {ioCons.map((t, i) => <WarnCard key={i}>{t}</WarnCard>)}
                </div>
            </div>

            {/* P&I — recommended */}
            <div className="bg-white rounded-2xl border-2 border-blue-300/60 shadow-[0_4px_15px_rgba(24,95,165,0.1)] p-7">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-blue-700">Principal & interest</p>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200/60 text-[11px] font-semibold px-3 py-0.5 rounded-full">Recommended for most</span>
                </div>
                <div className="flex flex-col gap-1.5">
                    {piPros.map((t, i) => <CheckRow key={i}>{t}</CheckRow>)}
                </div>
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
const InteresthomeComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Interest-Only Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Interest-Only Home Loans —<br />
                    <span className="grad-text">How They Work</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    With a standard loan, your monthly payment covers both interest and a portion of the principal. With an interest-only loan, your repayments cover only the interest — your loan balance stays unchanged during the IO period.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "1–5 yrs", label: "Typical IO term (up to 10–15 for some investors)" },
                        { val: "+0.6–0.8%", label: "Typical rate premium over P&I for owner-occupiers" },
                        { val: "30–40%", label: "Repayment jump when IO period ends" },
                        { val: "$0", label: "Principal repaid during IO period" },
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
                    What actually happens <GradientText>during IO</GradientText>
                </SectionHeading>
                <SectionLead>
                    Understanding the three core mechanics of an interest-only loan before you decide if it is right for you.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {howItWorks.map((b, i) => (
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

            {/* ════════════════════ WHY CHOOSE IO ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Why choose IO</SectionTag>
                <SectionHeading>
                    Why would you choose <GradientText>interest-only?</GradientText>
                </SectionHeading>
                <SectionLead>
                    In Australia, IO loans are most common among investors, but they have specific uses for homeowners too. Here are the main strategic reasons.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {whyChooseIO.map((b, i) => (
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

            {/* ════════════════════ THE CATCH ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Watch out</SectionTag>
                <SectionHeading>
                    The catch — what to <GradientText>watch out for</GradientText>
                </SectionHeading>
                <SectionLead>
                    An interest-only loan is a tactical move, not a {`"set and forget"`} solution. There are three main things to consider carefully.
                </SectionLead>

                <div className="flex flex-col gap-4 mb-6">
                    {catchItems.map((c, i) => (
                        <div key={i} className="flex gap-4 items-start bg-rose-50 border border-rose-200/70 rounded-2xl p-5">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200/60 flex items-center justify-center text-rose-500 flex-shrink-0">
                                <IconWarning />
                            </div>
                            <div>
                                <p className="text-[15px] font-semibold text-rose-600 mb-1">{c.title}</p>
                                <p className="text-[14px] text-gray-500 leading-relaxed">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ APPROVAL STEPS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Approval process</SectionTag>
                <SectionHeading>
                    Steps to secure an <GradientText>interest-only loan</GradientText>
                </SectionHeading>
                <SectionLead>
                    Unlike P&I, IO loans require additional justification. Here is what lenders will look for before approving an IO application.
                </SectionLead>

                <div className="flex flex-col relative">
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />
                    {approvalSteps.map((s, i) => (
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

            {/* ════════════════════ REPAYMENT CALCULATOR ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Repayment shock calculator</SectionTag>
                <SectionHeading>
                    Calculate your <GradientText>repayment jump</GradientText>
                </SectionHeading>
                <SectionLead>
                    The most important part of an IO loan isnot the start — it is the expiry. Use the sliders to see exactly how your repayments will change when the IO period ends.
                </SectionLead>
                <RepaymentCalculator />
            </section>

            <PinkDivider />

            {/* ════════════════════ IO vs P&I ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>IO vs P&amp;I</SectionTag>
                <SectionHeading>
                    Interest-only vs <GradientText>principal &amp; interest</GradientText>
                </SectionHeading>
                <SectionLead>
                    Which is better depends entirely on your situation. P&I is generally better for long-term homeowners; IO can be a powerful short-term tool for the right borrower.
                </SectionLead>
                <IOvsPICompare />
            </section>

            <PinkDivider />

            {/* ════════════════════ IS IT RIGHT FOR YOU ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Is it right for you</SectionTag>
                <SectionHeading>
                    Who should consider <GradientText>interest-only?</GradientText>
                </SectionHeading>
                <SectionLead>
                    IO is a brilliant short-term strategy for building an investment portfolio or managing tight cash flow, but it usually isnot a long-term plan for your {`"forever home."`}
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">IO may suit you if...</p>
                        {ioSuitsYou.map((t, i) => (
                            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-[14px] text-gray-500 leading-relaxed">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                    <IconCheck />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl border border-rose-200/60 shadow-[0_4px_15px_rgba(244,63,94,0.06)] p-6">
                        <p className="text-[12px] font-semibold tracking-widests uppercase text-rose-500 mb-4">IO may not suit you if...</p>
                        <div className="flex flex-col gap-3">
                            {ioMayNotSuit.map((t, i) => <WarnCard key={i}>{t}</WarnCard>)}
                        </div>
                    </div>
                </div>

                <InfoBox title="The repayment shock — why it matters">
                    Lenders in Australia are legally required to ensure you can afford repayments once they switch to P&I. Because you have spent 5 years not paying down the debt, you now have only 25 years (instead of 30) to repay the full principal — which significantly increases monthly payments.
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
                    All 27 questions about interest-only home loans answered.
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

export default InteresthomeComponent;