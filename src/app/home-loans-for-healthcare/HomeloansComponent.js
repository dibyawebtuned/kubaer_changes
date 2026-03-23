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
function IconTrendUp() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
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
function IconLock() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
function IconInfo() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
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
function IconSmallInfo() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}

// ─── Data — every item from the source document ───────────────────────────────

const whyItMatters = [
    "Healthcare roles frequently include overtime, shift loadings and multiple employers — lenders assess these differently.",
    "Stable demand for healthcare jobs boosts employment stability, a positive for lenders.",
    "Several government schemes and lender concessions can reduce deposit or mortgage insurance costs.",
    "Knowing how lenders verify shift work and allowances can materially affect the borrowing limit.",
];

const borrowerBenefits = [
    "Access discounted interest rates",
    "Qualify for higher borrowing limits",
    "Have 100% of overtime and shift allowances counted towards your borrowing power",
    "Borrow up to 90–95% of the property value without paying Lenders Mortgage Insurance (LMI)",
];

const whyLowRisk = [
    "Have stable and secure employment",
    "Earn above-average incomes",
    "Are in high-demand professions",
    "Have lower default rates compared to many other industries",
];

const lenderOffers = [
    "Waived Lenders Mortgage Insurance (LMI)",
    "Lower interest rates",
    "Higher loan-to-value ratios (LVR)",
    "Improved borrowing power by recognising overtime and shift allowances",
];

const professions = [
    "Registered nurses",
    "Enrolled nurses",
    "Midwives",
    "Medical practitioners (GPs, specialists)",
    "Physiotherapists",
    "Occupational therapists",
    "Radiographers",
    "Paramedics & emergency services clinicians",
    "Pharmacists & pharmacy technicians",
    "Dental professionals (dentists, hygienists)",
    "Aged-care workers & support staff",
    "Allied health professionals",
];

const incomeRows = [
    { type: "Base salary", treatment: "Counted fully if permanent and ongoing", badge: "full" },
    { type: "Shift penalties", treatment: "3–12 months consistent history required (12 months preferred by some lenders)", badge: "full" },
    { type: "Regular overtime", treatment: "Counted if regular and documented", badge: "full" },
    { type: "Casual overtime", treatment: "Assessed more conservatively", badge: "partial" },
    { type: "On-call allowances", treatment: "Lenders look for stability and documented history", badge: "partial" },
    { type: "Bonuses / commission", treatment: "Only if regular and historically consistent", badge: "partial" },
    { type: "Agency / locum work", treatment: "Contracts, bank statements and invoices required", badge: "partial" },
    { type: "Ad-hoc overtime", treatment: "Typically not counted — strong documentation needed", badge: "limited" },
];

const loanTypes = [
    { title: "Principal & interest", desc: "Standard repayment loan — the most common choice for owner-occupiers." },
    { title: "Interest-only", desc: "Usually for investment properties — lower repayments in the short term." },
    { title: "Split loan", desc: "Part fixed-rate, part variable-rate — balance certainty with flexibility." },
    { title: "Low-doc / bank statement", desc: "Lenders accept bank statements and contracts instead of full tax returns for contractors or locum clinicians." },
    { title: "Specialist medical", desc: "Some lenders offer tailored features — higher LVRs, rate discounts and faster approval for clinicians." },
    { title: "Construction loan", desc: "For building a new home — funds released in stages as construction progresses." },
    { title: "Offset accounts & redraw", desc: "Essential for managing irregular income — park extra money to reduce interest daily." },
];

const govSchemes = [
    {
        Icon: IconHome,
        title: "First Home Owner Grant (FHOG)",
        desc: "State-based grants for eligible first home buyers — amounts and rules vary by state/territory.",
    },
    {
        Icon: IconShield,
        title: "First Home Guarantee",
        desc: "Helps first-home buyers purchase with a 5% deposit without needing LMI (subject to eligibility and property price caps).",
    },
    {
        Icon: IconUsers,
        title: "Family Home Guarantee",
        desc: "Assists eligible single parents — includes some healthcare workers — to buy with a reduced deposit.",
    },
    {
        Icon: IconCalendar,
        title: "Stamp duty concessions",
        desc: "Some states provide concessions for first-home buyers or regional buyers. Always check your state for current rules.",
    },
    {
        Icon: IconDollar,
        title: "Shared equity & regional schemes",
        desc: "Some states offer shared equity or regional incentive schemes that reduce the required deposit. Check current availability.",
    },
];

const borrowerDocs = [
    "Latest payslips (usually last 1–3 payslips)",
    "Employment contract or letter confirming hours and allowances",
    "Group certificates or PAYG summaries (if required)",
    "ATO income statements (myGov) or Tax Notices of Assessment",
    "Proof of deposit (savings history or gift letters)",
    "Photo ID and proof of address",
];

const contractorDocs = [
    "3–6 months of business or personal bank statements",
    "Tax returns (last two years) for self-employed or contractors",
    "Current agency contracts, letter of engagement or invoices",
    "ATO income statements or Tax Notices of Assessment",
    "Professional registration and licensing documents",
    "Evidence of consistent bookings or agency agreement (locums)",
];

const contractorConsiderations = [
    { title: "Low-doc / bank statement loans", desc: "Lenders accept bank statements and contracts instead of full tax returns for contractors, but interest rates can be higher." },
    { title: "Evidence of steady work", desc: "At least 6–12 months of contracts or consistent bank deposits improves your assessment significantly." },
    { title: "Self-employed clinicians", desc: "Lenders typically look for 2 years of tax returns and may use average net profit to calculate serviceability." },
    { title: "Gap cover for locums", desc: "Show consistent bookings or an agency agreement to convince lenders of ongoing income continuity." },
];

const depositPoints = [
    "Standard deposit: 20% to avoid LMI. With 5–20% deposit, LMI usually applies.",
    "Guarantor loans: parents or close family can guarantee part of the loan or use property as security to avoid LMI.",
    "Healthcare worker salary and employment stability can make lenders more comfortable with higher LVRs, but LMI rules still apply.",
    "Some lenders or state schemes may offer special concessional LMI policies for essential workers — check availability.",
];

const lenderChecklist = [
    "Flexibility in counting shift and penalty income",
    "Willingness to accept multiple income sources and agency/locum income",
    "Competitive interest rates and ongoing fees",
    "Offset accounts and redraw availability for irregular income management",
    "Fast pre-approval turnaround (useful for buying in competitive markets)",
    "Specialist broker or lender experience with healthcare professions",
];

const incomeAssessmentChecks = [
    { title: "History needed", desc: "Confirm whether lenders require 3, 6 or 12 months of documented shift penalties/overtime before counting them as recurring income." },
    { title: "What counts", desc: "Shift loadings, penalty rates, regular overtime, on-call allowances — ask exactly which they will include and whether they apply a discount or taper." },
    { title: "Multiple employers / agency", desc: "Confirm acceptance of agency contracts, invoices and bank statements for multi-employer or locum income." },
    { title: "Self-employed clinicians", desc: "Check if they require 2 years of tax returns or will accept averaged profitability from recent years." },
    { title: "Serviceability buffer", desc: "Confirm the lender's buffer — they may test your repayments at +2% or +3% above the current rate." },
];

const lenderTypes = [
    {
        num: "01",
        title: "Major banks",
        desc: "Broad product ranges, competitive fixed/variable rates, and national service. Some have explicit policies for counting shift penalties and regular overtime if documented. Good for borrowers wanting strong digital tools, offset accounts and redraw facilities.",
        bestFor: "Stable salaried healthcare workers with clean credit and standard documentation.",
        pills: ["Commonwealth Bank (CBA)", "Westpac", "ANZ", "NAB"],
        asks: [
            '"Will you include shift penalties/penalty loadings and overtime in serviceability? If so, what history period do you require — 3, 6 or 12 months?"',
            '"Do you accept employment letters confirming rostered loadings or agency contracts?"',
        ],
    },
    {
        num: "02",
        title: "Mutuals, credit unions & building societies",
        desc: "Often more flexible and willing to consider individual circumstances — especially regional lenders. Competitive fee structures and personable underwriting.",
        bestFor: "Applicants with non-standard income, or those in regional areas where local lenders value healthcare employment continuity.",
        pills: [],
        asks: [
            '"How do you assess casuals, shift workers and locum/contract income?"',
            '"Do you offer any special concessions or tailored assessment for healthcare sector employees?"',
        ],
    },
    {
        num: "03",
        title: "Specialist medical professional lenders",
        desc: "Products may feature higher allowable LVRs for doctors and specialists, discounts, or tailored features for clinicians. May accept alternative documentation for contractors or have faster turnaround for busy professionals.",
        bestFor: "Medical practitioners, specialists and some allied health professionals with complex income or who want professional-packaged features.",
        pills: [],
        asks: [
            '"Do you offer medical-professional packages? What are the eligibility criteria and benefits — LVR, rates and fees?"',
        ],
    },
    {
        num: "04",
        title: "Non-bank & alternative lenders",
        desc: "More flexible on low-doc, contractor, gap-period employment and creative income verification. Useful for locums, contractors, self-employed health professionals and applicants with recent job changes.",
        bestFor: "Contractors, locums, self-employed clinicians or applicants with complex income streams who struggle with mainstream bank policies.",
        pills: ["Pepper Money", "Liberty Financial", "Resimac", "Bluestone"],
        asks: [
            '"What documentation do you accept for contractors/locums — payslips, contracts, bank statements or tax returns?"',
            '"Do you provide low-doc or bank-statement loans for healthcare contractors?"',
        ],
    },
    {
        num: "05",
        title: "Low-doc / bank-statement lenders",
        desc: "Allow you to use 3–6 months of bank statements and contracts instead of 2 years of tax returns — helpful for newly established contractors and locums. Typical limitations: higher rates and fees, lower LVRs, stricter serviceability buffers.",
        bestFor: "Newly established contractors or locums who cannot yet provide 2 years of tax returns.",
        pills: [],
        asks: [
            '"Do you offer bank-statement or low-doc lending? What income periods and minimums are required?"',
        ],
    },
    {
        num: "06",
        title: "Government scheme lenders",
        desc: "Approved lenders under the First Home Guarantee, federal schemes and various state homebuyer schemes. If you're a first-home buyer or eligible single parent, these schemes can reduce the deposit required — e.g., buy with 5% deposit without LMI.",
        bestFor: "First-home buyers and eligible single parents wanting to enter the market with a smaller deposit.",
        pills: [],
        asks: [
            '"Are you an approved lender under the First Home Guarantee or relevant state schemes? What are the eligibility and property price caps?"',
        ],
    },
];

const faqs = [
    {
        q: "Can casual or part-time healthcare workers qualify for a waived LMI?",
        a: "Yes. Some lenders do offer LMI waivers to casual or part-time healthcare professionals. The main factors lenders assess are stable income and employment history — most lenders require 12–24 months of continuous work in your healthcare role. Even if you're casual or part-time, lenders that specialise in healthcare worker home loans often recognise overtime, shift allowances and penalty rates as part of your total income, increasing your borrowing capacity.",
    },
    {
        q: "What property restrictions apply to healthcare worker home loans?",
        a: "Healthcare worker home loan benefits usually apply to standard residential properties in Category 1 or 2 locations. Many lenders restrict loans to around $1 million for waived LMI benefits. Some lenders may exclude high-density apartments, rural or remote properties, or specialised dwellings (e.g., houseboats or commercial/residential conversions). A mortgage broker can help identify lenders that still offer perks for properties outside standard categories.",
    },
    {
        q: "What credit score is required for healthcare worker home loans?",
        a: "A clean credit history is essential. Most lenders require no defaults, missed repayments, or serious credit issues, a reasonable debt-to-income ratio, and proof of stable income. Strong credit scores may help you access better interest rate discounts and improve eligibility for LMI waivers and higher loan-to-value ratios.",
    },
    {
        q: "Can my shift penalties be included in loan serviceability?",
        a: "Yes, if they're regular and you can prove history — often 3–12 months. Different lenders have different thresholds. Providing payslips and an employment letter confirming rostered loadings significantly strengthens your application.",
    },
    {
        q: "Do I need two years of employment to qualify?",
        a: "Not necessarily. Permanent staff with stable payslips and consistent allowances can often qualify sooner. Contractors and self-employed applicants usually need more history — typically 2 years of tax returns.",
    },
    {
        q: "Will overtime count towards my borrowing power?",
        a: "Regular overtime can be counted; ad-hoc overtime is less likely to be accepted. Provide documentation showing consistent overtime payments over at least 3–12 months to demonstrate it is ongoing and reliable income.",
    },
    {
        q: "Can I get a loan if I've switched employers or contracts recently?",
        a: "Yes. Lenders will look at your overall employment history, contracts and continuity of income rather than just your current role. A broker can help present your case in the most favourable way.",
    },
    {
        q: "Are there loans specifically for doctors or nurses?",
        a: "Some lenders market 'medical professional' products with tailored features — higher LVRs and interest-rate discounts. Always compare the full features and fine print, as benefits vary significantly between lenders.",
    },
    {
        q: "What deposit is required for a healthcare worker home loan?",
        a: "A 10% deposit is often accepted without LMI for eligible healthcare professionals. Some specialised professional home loans allow smaller deposits for first-home buyers using government grants (FHOG or Home Guarantee Scheme). High-income borrowers may also qualify for 95–100% LVR options depending on lender criteria.",
    },
    {
        q: "Can nurses and allied health workers qualify for LMI waivers?",
        a: "Yes. Many lenders offer LMI waivers to registered nurses, midwives, physiotherapists, occupational therapists and certain allied health professionals. Eligibility depends on profession type, credit history and repayment record, and borrowing power based on income including overtime and shift allowances. LMI waivers can save tens of thousands of dollars on your mortgage, particularly for high-value loans.",
    },
    {
        q: "Can locum or contract doctors apply for a home loan?",
        a: "Yes. Locum doctors and contract medical professionals can qualify if they demonstrate stable income through contracts, 2+ years of consistent tax returns or payment history, and professional registration and licensing. Some lenders specialise in non-standard income home loans for medical professionals, making the process easier.",
    },
    {
        q: "Why work with a mortgage broker instead of going directly to a bank?",
        a: "Mortgage brokers provide access to 30+ lenders including banks and specialist lenders, expertise in professional home loan policies and LMI waivers, assistance with income assessment including overtime and allowances, and early review of credit history and documentation to boost approval chances. Brokers help navigate complex healthcare income structures and maximise your borrowing potential.",
    },
    {
        q: "Are there home loans available specifically for healthcare workers?",
        a: "Yes. Healthcare workers can access a variety of loan types including professional home loans, investment property loans, low or no deposit loans, and practice loans for medical business expansion. Many of these loans also include offset accounts, flexible repayment options and competitive interest rates tailored for healthcare professionals.",
    },
    {
        q: "Can I use a home loan to purchase an investment property?",
        a: "Yes. Healthcare professionals often use property investment to build long-term wealth. Lenders offer investment loans with offset accounts, flexible repayment options and competitive interest rates based on borrowing power. Note: LMI waivers and maximum LVRs may differ for investment properties compared to owner-occupied homes.",
    },
];

// ─── Badge helper ─────────────────────────────────────────────────────────────
function IncomeBadge({ type }) {
    const map = {
        full: { label: "Full", cls: "bg-green-50 border border-green-200/60 text-green-600" },
        partial: { label: "Partial", cls: "bg-amber-50 border border-amber-200/60 text-amber-600" },
        limited: { label: "Limited", cls: "bg-rose-50 border border-rose-200/60 text-rose-500" },
    };
    const { label, cls } = map[type];
    return (
        <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${cls}`}>
            {label}
        </span>
    );
}

// ─── Shared design-system components (identical to all other Kubaer pages) ────
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

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
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
const HealthcareLoansComponent = () => {
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

            {/* ════════════════════════════ HERO ════════════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Home Loans for Healthcare Workers</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Tailored Home Loans for<br />
                    <span className="grad-text">Healthcare Professionals</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    Working in healthcare often comes with irregular hours, shift penalties and unique employment arrangements. Lenders recognise this — and there are strategies, products and schemes that make buying or refinancing more achievable for you.
                </p>

                {/* Stats bar */}
                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "90–95%", label: "LVR without LMI for eligible workers" },
                        { val: "$40k+", label: "Potential LMI savings on large loans" },
                        { val: "100%", label: "Overtime & shift allowances counted" },
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

            {/* ════════════════════════════ WHY THIS MATTERS ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Why this matters</SectionTag>
                <SectionHeading>
                    Why healthcare workers <GradientText>get better deals</GradientText>
                </SectionHeading>
                <SectionLead>
                    Healthcare workers in Australia may be eligible for special home loan benefits not available to most borrowers. Here is why this guide matters for you.
                </SectionLead>

                {/* Why it matters bullets */}
                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] p-6 md:p-8 mb-8">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Why healthcare income is assessed differently</p>
                    {whyItMatters.map((t, i) => <BulletRow key={i}>{t}</BulletRow>)}
                </div>

                {/* Two columns: borrower benefits + why low risk */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Depending on your profession, you may be able to</p>
                        {borrowerBenefits.map((t, i) => (
                            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#F171AC]/[0.07] last:border-0 text-[14px] text-gray-500 leading-relaxed">
                                <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                    <IconCheck />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">Why lenders consider healthcare workers low-risk</p>
                        {whyLowRisk.map((t, i) => <BulletRow key={i}>{t}</BulletRow>)}
                        <div className="mt-4 pt-4 border-t border-[#F171AC]/10">
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">Because of this, lenders may offer</p>
                            {lenderOffers.map((t, i) => (
                                <div key={i} className="flex items-start gap-3 py-2 text-[14px] text-gray-500 leading-relaxed">
                                    <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                        <IconCheck />
                                    </div>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <InfoBox title="How much can healthcare workers save?">
                    In many cases, these benefits can save healthcare workers between{" "}
                    <strong className="text-gray-700">$15,000 and $40,000 or more</strong>, depending on the property value and loan size.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ ELIGIBLE PROFESSIONS ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Eligible professions</SectionTag>
                <SectionHeading>
                    Who counts as a <GradientText>{`"healthcare worker"?`}</GradientText>
                </SectionHeading>
                <SectionLead>
                    Eligibility for LMI waivers and other lending benefits varies between lenders, but the following professions commonly qualify.
                </SectionLead>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                    {professions.map((p, i) => (
                        <div key={i} className="flex items-center gap-2.5 px-4 py-3 bg-white border border-[#F171AC]/20 rounded-xl text-[13px] text-gray-500 hover:border-[#F171AC]/50 transition-colors duration-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex-shrink-0" />
                            {p}
                        </div>
                    ))}
                </div>

                <InfoBox title="Note: self-employed clinicians are assessed differently">
                    Private practice owners and locum clinicians are assessed differently to salaried staff. Lenders typically require{" "}
                    <strong className="text-gray-700">2 years of tax returns</strong> and assess average net profit for serviceability.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ INCOME ASSESSMENT TABLE ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Income assessment</SectionTag>
                <SectionHeading>
                    How lenders assess <GradientText>healthcare incomes</GradientText>
                </SectionHeading>
                <SectionLead>
                    Healthcare workers often receive base salary plus penalties and allowances. Lenders treat each component differently — knowing this can materially affect your borrowing limit.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-6">
                    {/* Table header */}
                    <div className="grid grid-cols-[1fr_2fr_90px] gap-0 px-6 py-3 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Income type</span>
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Lender treatment</span>
                        <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] text-right">Counted?</span>
                    </div>
                    {incomeRows.map((row, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-[1fr_2fr_90px] gap-0 px-6 py-4 border-b border-[#F171AC]/[0.07] last:border-0 items-center"
                        >
                            <span className="text-[14px] font-semibold text-gray-700">{row.type}</span>
                            <span className="text-[13px] text-gray-500 leading-snug pr-4">{row.treatment}</span>
                            <div className="flex justify-end">
                                <IncomeBadge type={row.badge} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* What to check with each lender */}
                <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-4">What to check with each lender</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {incomeAssessmentChecks.map((c, i) => (
                        <div key={i} className="bg-white rounded-xl border border-[#F171AC]/15 shadow-[0_2px_10px_rgba(241,114,172,0.07)] p-5">
                            <p className="text-[14px] font-semibold text-[#86489B] mb-1.5">{c.title}</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ LOAN TYPES ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Loan types</SectionTag>
                <SectionHeading>
                    Home loan types suitable for <GradientText>healthcare workers</GradientText>
                </SectionHeading>
                <SectionLead>
                    From standard owner-occupier loans to specialist low-doc products, there is a solution for every healthcare income structure.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {loanTypes.map((l, i) => (
                        <div key={i} className="bg-white rounded-2xl border-l-4 border-[#F172AC] shadow-[0_4px_15px_rgba(241,114,172,0.1)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.25)] hover:-translate-y-1 transition-all duration-300 p-6">
                            <p className="text-[16px] font-semibold text-[#86489B] mb-2">{l.title}</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{l.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ GOVERNMENT SCHEMES ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Government schemes</SectionTag>
                <SectionHeading>
                    Schemes &amp; concessions <GradientText>available to you</GradientText>
                </SectionHeading>
                <SectionLead>
                    Federal and state programs can significantly reduce your deposit requirements and upfront costs. Always check current eligibility — details and amounts change regularly.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {govSchemes.map((s, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <s.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{s.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{s.desc}</p>
                        </AccentCard>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ DOCUMENTATION ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Documentation</SectionTag>
                <SectionHeading>
                    Essential documents <GradientText>to supply</GradientText>
                </SectionHeading>
                <SectionLead>
                    Having the right paperwork ready speeds up approval and improves your borrowing assessment — especially for shift and allowance income.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Salaried */}
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconFile />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Salaried & permanent staff</p>
                        </div>
                        {borrowerDocs.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>

                    {/* Contractors / locums */}
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconFile />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Contractors, locums & self-employed</p>
                        </div>
                        {contractorDocs.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>
                </div>

                <InfoBox title="Salary sacrifice & novated leases">
                    If you receive non-salary benefits such as salary sacrifice for a car or novated leases, provide full paperwork. These directly affect{" "}
                    <strong className="text-gray-700">serviceability calculations and your borrowing power.</strong>
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ CONTRACTORS / LOCUMS ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Contractors, locums & casuals</SectionTag>
                <SectionHeading>
                    Special considerations for <GradientText>non-salaried clinicians</GradientText>
                </SectionHeading>
                <SectionLead>
                    If you are a contractor, locum or casual clinician, there are specific strategies and lender types that can significantly improve your chances of approval.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contractorConsiderations.map((c, i) => (
                        <AccentCard key={i} className="p-6">
                            <p className="text-[16px] font-semibold text-[#86489B] mb-2">{c.title}</p>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{c.desc}</p>
                        </AccentCard>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ DEPOSIT & LMI ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Deposit, LMI & guarantors</SectionTag>
                <SectionHeading>
                    Deposit size &amp; <GradientText>Lenders Mortgage Insurance</GradientText>
                </SectionHeading>
                <SectionLead>
                    Understanding how your deposit size affects LMI — and how a guarantor or healthcare concession can change the equation entirely.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] p-6 md:p-8">
                    {depositPoints.map((t, i) => <BulletRow key={i}>{t}</BulletRow>)}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ CHOOSING A LENDER ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Choosing a lender</SectionTag>
                <SectionHeading>
                    What healthcare workers <GradientText>should look for</GradientText>
                </SectionHeading>
                <SectionLead>
                    Not all lenders treat healthcare income the same way. Here is what to prioritise when comparing your options.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {lenderChecklist.map((t, i) => (
                        <div key={i} className="bg-white rounded-xl border-l-4 border-[#F172AC] shadow-[0_4px_12px_rgba(241,114,172,0.1)] p-5 flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                                <IconCheck />
                            </div>
                            <span className="text-[13px] text-gray-500 leading-relaxed">{t}</span>
                        </div>
                    ))}
                </div>

                <InfoBox title="The Kubaer advantage">
                    A mortgage broker experienced with healthcare worker cases can shop across{" "}
                    <strong className="text-gray-700">30+ lenders</strong> and match the one that best counts your income and minimises costs.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ LENDER TYPES ════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Lender panel</SectionTag>
                <SectionHeading>
                    Lender types &amp; <GradientText>who each suits</GradientText>
                </SectionHeading>
                <SectionLead>
                    A practical broker-style guide: the types of lenders that commonly work well for healthcare workers, who each is best for, and the exact questions to ask.
                </SectionLead>

                <div className="flex flex-col gap-4">
                    {lenderTypes.map((l, i) => (
                        <div key={i} className="bg-white rounded-2xl border-l-4 border-[#F172AC] shadow-[0_4px_15px_rgba(241,114,172,0.12)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.25)] transition-all duration-300 p-6 md:p-7">
                            <div className="text-4xl font-bold grad-text opacity-[0.22] leading-none mb-2">{l.num}</div>
                            <p className="text-[18px] font-semibold text-[#86489B] mb-2">{l.title}</p>
                            <p className="text-[14px] text-gray-500 leading-relaxed mb-3">{l.desc}</p>

                            {/* Best for */}
                            <div className="flex items-start gap-2 mb-4">
                                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B] flex-shrink-0 mt-0.5">Best for:</span>
                                <span className="text-[13px] text-gray-500">{l.bestFor}</span>
                            </div>

                            {l.pills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {l.pills.map((p, j) => (
                                        <span
                                            key={j}
                                            className="inline-block text-[12px] font-medium px-3 py-1.5 rounded-full border border-[#F171AC]/20 text-gray-600"
                                            style={{ background: "linear-gradient(135deg, rgba(134,72,155,0.05), rgba(241,113,172,0.08))" }}
                                        >
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Ask callouts */}
                            <div className="flex flex-col gap-2">
                                {l.asks.map((ask, j) => (
                                    <div key={j} className="flex gap-3 items-start bg-gradient-to-r from-[#86489B]/[0.05] to-[#F171AC]/[0.05] border border-[#F171AC]/20 rounded-xl p-3.5">
                                        <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <IconSmallInfo />
                                        </div>
                                        <p className="text-[13px] text-gray-500 leading-relaxed">
                                            <strong className="text-[#86489B]">Ask: </strong>{ask}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ FAQ ════════════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything healthcare workers frequently ask before applying for a home loan.
                </SectionLead>

                <div>
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════════════ CTA ════════════════════════════ */}
            <CallAction />
        </div>
    );
};

export default HealthcareLoansComponent;