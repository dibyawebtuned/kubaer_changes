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
function IconShield() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function IconFile() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    );
}
function IconFileSmall() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
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
function IconTrendUp() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
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
function IconUsers() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
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
function IconRefresh() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
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

const keyTakeaways = [
    "Many lenders accept self-employed borrowers; the loan product is usually the same but income assessment differs.",
    "You don't always need two years of financials — some lenders accept one year or lower-doc options.",
    "Low-doc loans exist but usually require a larger deposit and may carry higher rates.",
    "Deposit size strongly affects approval chances, Lenders Mortgage Insurance (LMI) and interest rates.",
    "Good bookkeeping, up-to-date BAS and lodged tax returns make approval much easier.",
    "Working with a mortgage broker experienced with self-employed borrowers increases your options significantly.",
];

const selfEmployedExamples = [
    "Sole traders",
    "Company directors (including small private companies)",
    "Partnership owners",
    "Contractors and subcontractors",
    "Freelancers and consultants",
    "Business owners with rental or multiple income streams",
    "Tradespeople working independently (electricians, plumbers, builders)",
    "Self-funded retirees earning income through investments",
];

const lenderRequirements = [
    {
        title: "ABN & GST registration",
        desc: "Your ABN should generally be active for at least 6–24 months. GST registration may be required if your business earns more than $75,000 annually.",
    },
    {
        title: "Proof of income stability",
        desc: "Many lenders prefer two years of tax returns, although some lenders may accept alternative income verification.",
    },
    {
        title: "Good credit history",
        desc: "A credit score of 650 or higher can improve your chances of loan approval and access to better interest rates.",
    },
    {
        title: "Consistent business performance",
        desc: "Lenders review business financials, bank statements and profitability to determine whether your income is sustainable.",
    },
];

const whyAssessedDifferently = [
    { title: "Business income volatility", desc: "Is income steady, growing, or declining? Lenders look for consistency over time." },
    { title: "Tax deductions", desc: "Legitimate expenses reduce taxable profit but don't always reflect actual cash available." },
    { title: "Revenue vs profit", desc: "High turnover with low profit may reduce borrowing power — lenders focus on net profit." },
    { title: "One-off items", desc: "Large one-off gains or expenses (asset sales, repairs) may be excluded or averaged out." },
];

const tradingTimelineOptions = [
    {
        period: "More than 2 years",
        badge: "Most options",
        badgeColor: "green",
        desc: "Access to the widest range of lenders and products. Most mainstream lenders prefer two years of stable income history.",
        requirements: [
            "Two years of tax returns and Notices of Assessment",
            "Business financial statements (P&L & balance sheet)",
            "Business bank statements",
            "Evidence of consistent income and business growth",
        ],
        note: "These are full-documentation (full-doc) home loans — generally the most competitive rates and terms.",
    },
    {
        period: "1–2 years",
        badge: "Some options",
        badgeColor: "amber",
        desc: "You may still qualify. Some lenders consider prior industry experience and stable cash flow.",
        requirements: [
            "At least one year of tax returns",
            "Prior industry experience in the same trade or profession",
            "BAS, business bank statements or accountant's declaration",
        ],
        note: "Example: A plumber who ran their own business for 1 year but previously worked as a plumber for 5 years may be considered favourably.",
    },
    {
        period: "Less than 1 year",
        badge: "Specialist lenders",
        badgeColor: "rose",
        desc: "Most mainstream banks expect at least one year. Specialist lenders sometimes accept as little as six months with additional conditions.",
        requirements: [
            "Higher deposit requirements (often 20%+)",
            "Six months of BAS or business bank statements",
            "Accountant declaration or contract evidence",
            "LMI may apply even with higher deposits",
        ],
        note: "Specialist lenders and some smaller banks can be a good route if you're newly self-employed.",
    },
];

const loanOptions = [
    {
        Icon: IconFile,
        title: "Full-doc home loans",
        bestFor: "Self-employed borrowers with complete financial records and at least two years' trading.",
        evidence: "Two years personal & business tax returns, ATO Notices of Assessment, P&L statements, balance sheets, BAS and business bank statements.",
        pros: "Generally lower interest rates, higher borrowing capacity and the widest choice of lenders.",
        cons: "Requires full, well-prepared documentation and usually two years of trading history.",
    },
    {
        Icon: IconFileSmall,
        title: "Low-doc home loans",
        bestFor: "Contractors, freelancers, consultants or new business owners who can't provide full tax returns or two years of accounts.",
        evidence: "BAS statements, business bank statements, an accountant's declaration or letter, invoices or ongoing contracts.",
        pros: "Provides a route to borrowing where standard documentation is incomplete.",
        cons: "Usually requires a larger deposit, can attract higher interest rates and may have lower borrowing limits.",
    },
    {
        Icon: IconUsers,
        title: "Guarantor home loans",
        bestFor: "Borrowers with limited deposit savings who have a willing guarantor (often a close family member).",
        evidence: "Standard self-employed docs plus guarantor's property and financial details.",
        pros: "May avoid or reduce LMI, increase borrowing power and fast-track purchase with less saved deposit.",
        cons: "The guarantor takes on real risk — their property can be at stake if repayments are missed.",
    },
    {
        Icon: IconShield,
        title: "Specialist & smaller lenders",
        bestFor: "New businesses, unusual income structures or industries where mainstream banks are conservative.",
        evidence: "Flexible — lenders may accept BAS, bank statements, contracts and accountant letters.",
        pros: "More flexible on documents and income assessment — a broker who knows specialist lenders can be invaluable.",
        cons: "May charge slightly higher rates or fees compared to mainstream lenders.",
    },
];

const incomeMethods = [
    { title: "Lowest income year", desc: "Some lenders take the lowest income figure from the last two years to reduce lending risk." },
    { title: "Two-year average", desc: "Many lenders calculate the average income across two financial years to determine borrowing capacity." },
    { title: "Most recent year", desc: "If income has steadily increased, certain lenders may consider the most recent financial year as the basis." },
    { title: "120% income buffer", desc: "Some lenders may calculate borrowing capacity using 120% of the lowest income year if the business shows consistent growth." },
];

const addBacks = [
    "Depreciation (non-cash expense — doesn't reduce actual cash available)",
    "One-off or non-recurring expenses (e.g., large repairs, asset write-offs)",
    "Interest payments on business loans in some cases",
    "Personal superannuation contributions in certain structures",
];

const depositRanges = [
    { dep: "5% deposit", outcome: "Rare for self-employed; LMI almost certain", badge: "limited" },
    { dep: "10% deposit", outcome: "Possible with good evidence and strong credit, but LMI likely", badge: "partial" },
    { dep: "20% deposit", outcome: "Most favourable — better rates, lower LMI chance and broader lender choice", badge: "full" },
];

const boostTips = [
    "Keep separate business and personal bank accounts — clarity helps lenders trust your records.",
    "Lodge tax returns and BAS on time — consistent compliance is critical.",
    "Maintain clear, accurate bookkeeping and prepare tidy P&L statements and balance sheets.",
    "Build and document a savings buffer — stable savings show discipline and capacity for repayment stress.",
    "Reduce personal high-interest debt and avoid taking on new credit before applying.",
    "Strengthen your credit score — check your credit file and fix errors early.",
    "Secure long-term contracts or retainers where possible — recurring income looks better than one-off jobs.",
    "Get an accountant's letter summarising business performance and likely future income.",
    "Consider boosting your deposit — larger deposits reduce LMI and widen lender choice.",
    "Work with an experienced mortgage broker who specialises in self-employed home loans.",
];

const commonMistakes = [
    "Claiming excessive tax deductions close to the loan application — it reduces assessed income.",
    "Not lodging tax returns on time or leaving returns unfiled.",
    "Mixing business and personal accounts, which obscures true cash flow.",
    "Applying to only one lender, which limits your options significantly.",
    "Waiting until the last minute to prepare documents or save a deposit.",
];

const checklist = [
    "Two years tax returns ready (or at least one if acceptable)",
    "Notices of Assessment from the ATO",
    "Business financial statements (P&L and balance sheet) prepared",
    "BAS statements (6–12 months) available",
    "Business bank statements showing income flows",
    "Accountant details and a supporting letter if possible",
    "Contracts or invoices for ongoing work (if contractor/freelancer)",
    "Deposit savings confirmed and documented",
    "Credit score checked and personal debts under control",
    "Consultation with a mortgage broker experienced in self-employed borrowers",
];

const requiredDocs = [
    { doc: "Two years personal tax returns", timeline: "2 years" },
    { doc: "Two years business tax returns", timeline: "2 years" },
    { doc: "ATO Notices of Assessment", timeline: "2 years" },
    { doc: "Business financial statements (P&L + balance sheet)", timeline: "2 years" },
    { doc: "Business Activity Statements (BAS)", timeline: "6–12 months" },
    { doc: "Business bank statements", timeline: "6–12 months" },
    { doc: "ABN registration evidence", timeline: "Active 6–24 months" },
    { doc: "Trust deed & distribution statements", timeline: "If trust structure" },
    { doc: "Accountant's declaration or letter", timeline: "Current" },
    { doc: "Contracts / invoices for ongoing work", timeline: "Current" },
];

const refinanceTips = [
    "Demonstrate stable or rising business income.",
    "Pay down consumer debts to improve serviceability.",
    "Build equity in the property through extra repayments or value-adding renovations.",
    "Prepare the same set of documents as for an initial application — lenders re-assess serviceability.",
];

const faqs = [
    { q: "Can self-employed people get a home loan in Australia?", a: "Yes. Self-employed people can get home loans, though lenders often require more documentation to verify income. Many lenders specialise in self-employed borrowers and offer products designed for their income profiles." },
    { q: "How many years of income do self-employed borrowers need?", a: "Most mortgage lenders prefer borrowers who have been self-employed for at least two years, as this provides a clear record of income stability. However, some lenders may consider applicants with 12 months or even six months of self-employment, particularly if they have prior experience in the same industry and can provide strong financial documentation." },
    { q: "What is a low-doc home loan?", a: "A low-doc loan allows borrowers to use alternative evidence (BAS, accountant letter, business bank statements) instead of full tax returns. They typically require larger deposits and may have higher rates, but they provide a route to borrowing when standard documentation is incomplete." },
    { q: "Can I get a mortgage with one year of self-employment?", a: "Possibly. Some lenders will consider one year's strong financials, especially if contracts or accountant support show ongoing income. Prior industry experience in the same trade or profession also helps your case." },
    { q: "Do self-employed borrowers pay higher interest rates?", a: "Not necessarily. Interest rates depend on the lender, loan product and risk profile. Low-doc loans or smaller deposits may attract higher rates, but full-doc applicants with strong financials can often access competitive standard rates." },
    { q: "Do mortgage lenders use gross or net income for self-employed home loans?", a: "Most lenders assess net income — after deducting business expenses and taxes — rather than gross business revenue. However, some lenders may add back certain expenses such as depreciation or one-off costs to determine your true borrowing capacity." },
    { q: "Can contractors qualify for home loans?", a: "Yes. Contractors can qualify if they provide evidence like tax returns, BAS, business bank statements and ongoing contracts. The key is demonstrating consistent, sustainable income over time." },
    { q: "What documents do I need as a self-employed borrower?", a: "Common documents: two years of tax returns, ATO Notices of Assessment, business financial statements (P&L and balance sheet), BAS (6–12 months), business bank statements, an accountant's letter, ID and proof of address, and contracts or invoices for ongoing work." },
    { q: "How much deposit do I need if I'm self-employed?", a: "Deposits vary. 20% is most favourable and avoids LMI. Some lenders accept 10% or less, but that usually involves LMI and stricter conditions. Low-doc loans often require higher deposits — sometimes 20–30%." },
    { q: "Is it harder to buy a house if you are self-employed?", a: "Buying a home while self-employed can be slightly more complex because lenders require additional documentation to verify income stability. However, many lenders offer specialised home loan options for self-employed borrowers. With organised financial records, consistent income and a good credit score, it is entirely possible to secure a competitive mortgage." },
    { q: "How do lenders calculate self-employed income?", a: "Lenders often average the last two years' taxable income, may use the latest year if income is rising, and add back certain non-cash deductions to reflect real cash flow. The exact method varies by lender and loan type." },
    { q: 'What is an "add-back" in income assessment?', a: "An add-back is a deduction (like depreciation or a one-off expense) that lenders may reinstate when calculating usable income because it didn't reduce actual cash available. Common add-backs include depreciation, one-off repairs and non-recurring expenses." },
    { q: "Will my business structure affect my loan application?", a: "Yes. Sole traders, company directors and partners need slightly different documentation (company extracts, director's loans, etc.), but all can qualify with proper records. A broker can help structure your application for your specific entity type." },
    { q: "Is it better to go directly to a bank or use a mortgage broker?", a: "A broker who specialises in self-employed home loans can quickly identify lenders that suit your income profile and may secure better options than applying to a single bank. They understand which lenders are most flexible with business income." },
    { q: "Can I use forecasts or contracts to prove income?", a: "Yes, contracts and signed ongoing work can support income prospects. Lenders generally prefer historical financials but will consider contracts and forecasts as supporting evidence, particularly for newer businesses." },
    { q: "What happens if my tax returns show low profit due to deductions?", a: "Lenders may ask for an accountant's explanation and add back legitimate non-cash or one-off expenses. Clear bookkeeping and an accountant's letter help demonstrate that actual cash flow is higher than taxable profit suggests." },
    { q: "Can newly self-employed people get loans with six months' trading?", a: "Some specialist lenders may accept six months' trading with strong supporting evidence, but conditions usually apply — higher deposit requirements, higher interest rates and stricter serviceability assessments." },
    { q: "How long does it take to get approved as a self-employed borrower?", a: "With complete documentation, 2–6 weeks is common for conditional approval. Full settlement timing depends on valuation, lender checks and any complexities. Preparing neat, complete paperwork significantly speeds up the process." },
    { q: "Can you get a joint mortgage if one person is self-employed?", a: "Yes. You can apply for a joint mortgage if one borrower is self-employed and the other is a salaried employee. Lenders will assess both applicants' incomes, credit history and financial commitments. Having one borrower with stable PAYG income may strengthen the application." },
    { q: "Can I use business revenue (turnover) instead of taxable profit to qualify?", a: "Lenders usually rely on taxable profit shown in tax returns and accountant-prepared financials, not gross turnover. However, some specialist lenders may consider turnover alongside evidence of expenses and cash flow if profit is low due to legitimate deductions." },
    { q: "Will my industry affect my chances of approval?", a: "Yes. Lenders assess industry risk and stability. Trades and established professional services with steady demand are often viewed more favourably than very new or volatile industries. A broker can point you to lenders that understand your sector." },
    { q: "Can I borrow for an investment property if I'm self-employed?", a: "Yes. Self-employed borrowers can get investment home loans, but lenders typically apply stricter serviceability tests and may require more documentation than for owner-occupier loans." },
    { q: "How do lenders treat drawings from my business?", a: "Lenders look for consistent, sustainable income. Regular drawings that match declared taxable income are fine; irregular or large one-off drawings may raise questions about sustainability and cashflow." },
    { q: "Do I need an ABN to apply for a home loan?", a: "Most lenders expect an active ABN for self-employed applicants. They typically like to see an ABN active for 12–24 months, but specialist lenders may accept shorter periods with other evidence." },
    { q: "Can I use rental income from a business property as part of my borrowing capacity?", a: "Yes. Rental income can be included but lenders usually discount it (e.g., 70–80%) to allow for vacancies and expenses. You'll need rental statements, lease agreements and tax records to support it." },
    { q: "What if my accountant lodges my tax return with a loss?", a: "Lenders will scrutinise losses. Provide explanations and financials showing why the loss occurred and whether cashflow remains positive. An accountant's letter explaining add-backs or non-cash items can help." },
    { q: "Are there specific lenders who specialise in self-employed mortgages?", a: "Yes. Several banks, non-bank lenders and specialist lenders focus on self-employed borrowers and offer flexible income assessment including low-doc options. A mortgage broker can identify these lenders for your situation." },
    { q: "Will a GST-registered business help my application?", a: "Being GST-registered and lodging BAS regularly shows active trading and transparent cashflow, which helps lenders assess reliability — especially if BAS shows consistent turnover deposits." },
    { q: "Can I apply for pre-approval if I'm self-employed?", a: "Yes. Pre-approval is possible for self-employed borrowers and useful for house-hunting. Lenders will still require documentation (tax returns, BAS, bank statements) to provide an indicative limit." },
    { q: "Will a sole trader have more difficulty than a company director?", a: "Not necessarily; both can qualify. Company directors must supply company financials and ASIC documentation, while sole traders show personal tax returns and business statements. The quality of records matters more than the structure." },
    { q: "How long does income verification usually take for self-employed applicants?", a: "With complete docs, conditional approval may take 1–3 weeks; complex cases or low-doc applications can take longer. Preparing neat, complete paperwork speeds things up significantly." },
    { q: "Can I get a mortgage if my business has seasonal income?", a: "Yes. Lenders may average income over multiple years and look for cashflow buffers to cover low seasons. Demonstrating steady multi-year revenue patterns, savings to cover seasonal dips and contracts for future work all help." },
];

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
function DepositBadge({ type }) {
    const map = {
        full: { label: "Most favourable", cls: "bg-green-50 border border-green-200/60 text-green-600" },
        partial: { label: "Possible", cls: "bg-amber-50 border border-amber-200/60 text-amber-600" },
        limited: { label: "Rare", cls: "bg-rose-50 border border-rose-200/60 text-rose-500" },
    };
    const { label, cls } = map[type];
    return <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${cls}`}>{label}</span>;
}
function TradingBadge({ color }) {
    const map = {
        green: "bg-green-50 border border-green-200/60 text-green-700",
        amber: "bg-amber-50 border border-amber-200/60 text-amber-700",
        rose: "bg-rose-50 border border-rose-200/60 text-rose-600",
    };
    return map[color];
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
const SelfemployedComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ══════════════════════ HERO ══════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Self-Employed Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Home Loans for<br />
                    <span className="grad-text">Self-Employed Borrowers</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    Getting a home loan when you are self-employed is an achievable goal with the right preparation. The loan product is often the same as for salaried borrowers — lenders just verify income differently.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "2 yrs", label: "Preferred trading history for most lenders" },
                        { val: "6 mo", label: "Minimum some specialist lenders accept" },
                        { val: "20%", label: "Deposit for most favourable outcome" },
                        { val: "30+", label: "Lenders assessed by your broker" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ KEY TAKEAWAYS ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Key takeaways</SectionTag>
                <SectionHeading>
                    What you need to <GradientText>know</GradientText>
                </SectionHeading>
                <SectionLead>
                    Before diving in, here are the most important points every self-employed borrower should understand.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {keyTakeaways.map((text, i) => (
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

            {/* ══════════════════════ WHO IS SELF-EMPLOYED ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Who qualifies</SectionTag>
                <SectionHeading>
                    Who is considered <GradientText>self-employed?</GradientText>
                </SectionHeading>
                <SectionLead>
                    A borrower is generally considered self-employed if they earn income from their own business or independent work rather than receiving a fixed salary from an employer.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Examples of self-employed borrowers</p>
                        {selfEmployedExamples.map((t, i) => <BulletRow key={i}>{t}</BulletRow>)}
                    </div>

                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">What most lenders look for</p>
                        {lenderRequirements.map((r, i) => (
                            <div key={i} className="py-3 border-b border-[#F171AC]/[0.07] last:border-0">
                                <p className="text-[14px] font-semibold text-[#86489B] mb-1">{r.title}</p>
                                <p className="text-[13px] text-gray-500 leading-relaxed">{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <InfoBox title="The key difference: how lenders calculate usable income">
                    For PAYG workers, income verification is straightforward. For self-employed borrowers, lenders consider business income volatility, tax deductions, the difference between revenue and profit, and one-off items that may be excluded or averaged out.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ══════════════════════ WHY ASSESSED DIFFERENTLY ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Income assessment</SectionTag>
                <SectionHeading>
                    Why self-employed borrowers are <GradientText>assessed differently</GradientText>
                </SectionHeading>
                <SectionLead>
                    Lenders aim to estimate how much of your income is sustainable and available to service repayments. For self-employed borrowers, several factors complicate this.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {whyAssessedDifferently.map((c, i) => (
                        <div key={i} className="bg-white rounded-xl border-l-4 border-[#F172AC] shadow-[0_4px_12px_rgba(241,114,172,0.1)] p-6">
                            <p className="text-[15px] font-semibold text-[#86489B] mb-2">{c.title}</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>

                <InfoBox title="Add-backs: what lenders may reinstate">
                    Lenders use tax returns, financial statements and other records to build a picture of sustainable income. They may {`"add back"`} certain deductions to reflect real cash flow — such as depreciation, one-off expenses or non-recurring items.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ══════════════════════ TRADING TIMELINE ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Trading history</SectionTag>
                <SectionHeading>
                    How long you have been trading <GradientText>matters</GradientText>
                </SectionHeading>
                <SectionLead>
                    Your trading history directly affects which lenders and products you can access. Here is what to expect at each stage.
                </SectionLead>

                <div className="flex flex-col gap-5">
                    {tradingTimelineOptions.map((opt, i) => {
                        const badgeClass = TradingBadge({ color: opt.badgeColor });
                        return (
                            <div key={i} className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] overflow-hidden">
                                <div className="flex items-center gap-3 px-7 py-5 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                                    <p className="text-[18px] font-semibold text-gray-800">{opt.period}</p>
                                    <span className={`inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full ${badgeClass}`}>{opt.badge}</span>
                                </div>
                                <div className="p-7">
                                    <p className="text-[14px] text-gray-500 leading-relaxed mb-5">{opt.desc}</p>
                                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">Typical requirements</p>
                                    <div className="flex flex-col gap-0 mb-4">
                                        {opt.requirements.map((r, j) => (
                                            <div key={j} className="flex items-start gap-3 py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-[13px] text-gray-500">
                                                <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                                    <IconCheck />
                                                </div>
                                                {r}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 items-start bg-gradient-to-r from-[#86489B]/[0.05] to-[#F171AC]/[0.05] border border-[#F171AC]/20 rounded-xl p-3.5">
                                        <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <IconSmallInfo />
                                        </div>
                                        <p className="text-[13px] text-gray-500 leading-relaxed">{opt.note}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ LOAN OPTIONS ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Loan options</SectionTag>
                <SectionHeading>
                    Home loan pathways for <GradientText>self-employed borrowers</GradientText>
                </SectionHeading>
                <SectionLead>
                    There are several home loan pathways available depending on your documentation, deposit size and overall financial position.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {loanOptions.map((l, i) => (
                        <div key={i} className="bg-white rounded-2xl border-l-4 border-[#F172AC] shadow-[0_4px_15px_rgba(241,114,172,0.12)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.3)] hover:-translate-y-1 transition-all duration-300 p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <l.Icon />
                            </div>
                            <p className="text-[18px] font-semibold text-[#86489B] mb-3">{l.title}</p>
                            <div className="space-y-2.5">
                                <div><p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]/70 mb-0.5">Best for</p><p className="text-[13px] text-gray-500 leading-relaxed">{l.bestFor}</p></div>
                                <div><p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]/70 mb-0.5">Typical evidence</p><p className="text-[13px] text-gray-500 leading-relaxed">{l.evidence}</p></div>
                                <div className="grid grid-cols-2 gap-3 pt-1">
                                    <div className="bg-green-50 border border-green-200/60 rounded-xl p-3">
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-green-600 mb-1">Pros</p>
                                        <p className="text-[12px] text-green-700 leading-relaxed">{l.pros}</p>
                                    </div>
                                    <div className="bg-rose-50 border border-rose-200/60 rounded-xl p-3">
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-rose-500 mb-1">Cons</p>
                                        <p className="text-[12px] text-rose-600 leading-relaxed">{l.cons}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ HOW INCOME IS CALCULATED ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Income calculation</SectionTag>
                <SectionHeading>
                    How lenders calculate <GradientText>self-employed income</GradientText>
                </SectionHeading>
                <SectionLead>
                    Because self-employed income can fluctuate from year to year, lenders review financial records over a longer period and apply different calculation methods.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {incomeMethods.map((m, i) => (
                        <AccentCard key={i} className="p-6">
                            <p className="text-[16px] font-semibold text-[#86489B] mb-2">{m.title}</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{m.desc}</p>
                        </AccentCard>
                    ))}
                </div>

                {/* Worked example */}
                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-8">
                    <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                            <IconCalculator />
                        </div>
                        <h3 className="text-xl! font-semibold! text-gray-800">Worked example — two-year average</h3>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {[
                                { label: "Year 1 income", val: "$85,000" },
                                { label: "Year 2 income", val: "$95,000" },
                                { label: "Two-year average", val: "$90,000" },
                            ].map((c, i) => (
                                <div key={i} className="p-5 bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 border border-[#F171AC]/15 rounded-2xl text-center">
                                    <div className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-1.5">{c.label}</div>
                                    <div className="text-[26px] font-bold text-gray-800">{c.val}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 items-start bg-gradient-to-r from-[#86489B]/[0.05] to-[#F171AC]/[0.05] border border-[#F171AC]/20 rounded-xl p-4">
                            <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <IconSmallInfo />
                            </div>
                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                If Year 2 is clearly higher and sustainable, some lenders may use <strong className="text-gray-700">$95,000</strong> instead of the average, which increases borrowing power.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add-backs */}
                <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Common add-backs lenders may apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addBacks.map((t, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-white border border-[#F171AC]/15 rounded-xl text-[13px] text-gray-500 leading-relaxed">
                            <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                <IconCheck />
                            </div>
                            {t}
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ DEPOSIT REQUIREMENTS ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Deposit requirements</SectionTag>
                <SectionHeading>
                    How much deposit do <GradientText>self-employed borrowers need?</GradientText>
                </SectionHeading>
                <SectionLead>
                    Deposit size strongly affects your approval chances, LMI costs and the interest rates available to you.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">
                    <div className="grid grid-cols-[120px_1fr_130px] gap-0 px-6 py-3 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Deposit</span>
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Likely outcome</span>
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] text-right">Rating</span>
                    </div>
                    {depositRanges.map((row, i) => (
                        <div key={i} className="grid grid-cols-[120px_1fr_130px] gap-0 px-6 py-4 border-b border-[#F171AC]/[0.07] last:border-0 items-center">
                            <span className="text-[14px] font-semibold text-gray-700">{row.dep}</span>
                            <span className="text-[13px] text-gray-500 leading-snug pr-4">{row.outcome}</span>
                            <div className="flex justify-end"><DepositBadge type={row.badge} /></div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ REQUIRED DOCUMENTS ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Documentation</SectionTag>
                <SectionHeading>
                    Documents required for <GradientText>self-employed home loans</GradientText>
                </SectionHeading>
                <SectionLead>
                    Below is a typical list lenders request. Requirements vary between lenders and loan types — always confirm with your broker.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-6">
                    <div className="grid grid-cols-[1fr_120px] gap-0 px-6 py-3 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Document</span>
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] text-right">Timeframe</span>
                    </div>
                    {requiredDocs.map((row, i) => (
                        <div key={i} className="grid grid-cols-[1fr_120px] gap-0 px-6 py-3.5 border-b border-[#F171AC]/[0.07] last:border-0 items-center">
                            <span className="text-[13px] text-gray-600">{row.doc}</span>
                            <span className="text-[12px] font-medium text-right" style={{ color: "#86489B" }}>{row.timeline}</span>
                        </div>
                    ))}
                </div>

                <InfoBox title="Trust structures">
                    If your business operates under a trust structure, lenders will also require a trust deed and distribution statements in addition to the standard documentation.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ══════════════════════ REFINANCING ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Refinancing</SectionTag>
                <SectionHeading>
                    How does refinancing work for <GradientText>self-employed borrowers?</GradientText>
                </SectionHeading>
                <SectionLead>
                    Refinancing lets you replace your current home loan with a new one — it can be especially useful for self-employed borrowers looking to improve rates, access equity or consolidate debt.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconRefresh />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">What lenders will review</p>
                        </div>
                        <BulletRow>Business stability and income history (often two years of tax returns preferred)</BulletRow>
                        <BulletRow>Business financial statements and BAS</BulletRow>
                        <BulletRow>Recent business bank statements showing cashflow</BulletRow>
                        <BulletRow>Evidence of ongoing contracts, repeat clients or long-term service agreements</BulletRow>
                    </div>
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconTrendUp />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Tips to improve refinance prospects</p>
                        </div>
                        {refinanceTips.map((t, i) => <ChecklistItem key={i}>{t}</ChecklistItem>)}
                    </div>
                </div>

                <InfoBox>
                    Refinancing can yield meaningful savings, but factor in fees, discharge costs and whether a better rate outweighs switching costs.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ══════════════════════ BOOST CHANCES ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Improve your chances</SectionTag>
                <SectionHeading>
                    How to boost your <GradientText>home loan approval</GradientText>
                </SectionHeading>
                <SectionLead>
                    Lenders are looking for signs that you can reliably service repayments despite variable income. These practical steps often make a real difference.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {boostTips.map((t, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white border-l-4 border-[#F172AC] shadow-[0_4px_12px_rgba(241,114,172,0.08)] rounded-xl p-5">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                <IconCheck />
                            </div>
                            <span className="text-[13px] text-gray-500 leading-relaxed">{t}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ COMMON MISTAKES ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Common mistakes</SectionTag>
                <SectionHeading>
                    Mistakes self-employed borrowers <GradientText>should avoid</GradientText>
                </SectionHeading>
                <SectionLead>
                    These are the most common pitfalls that reduce borrowing power or lead to declined applications.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {commonMistakes.map((r, i) => (
                        <div key={i} className="flex gap-3 items-start p-4 bg-rose-50 border border-rose-200/60 rounded-xl">
                            <span className="text-rose-400 flex-shrink-0 mt-0.5"><IconWarning /></span>
                            <span className="text-sm! text-gray-500 leading-relaxed! font-normal!">{r}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ CHECKLIST ══════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Application checklist</SectionTag>
                <SectionHeading>
                    Self-employed home loan <GradientText>checklist</GradientText>
                </SectionHeading>
                <SectionLead>
                    Use this checklist before you apply to make sure you have everything in order.
                </SectionLead>

                <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                        {checklist.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ FAQ ══════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything self-employed borrowers frequently ask before applying for a home loan.
                </SectionLead>

                <div>
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════ CTA ══════════════════════ */}
            <CallAction />
        </div>
    );
};

export default SelfemployedComponent;