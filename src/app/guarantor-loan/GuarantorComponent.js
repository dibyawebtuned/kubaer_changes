"use client";
import React, { useState } from "react";
import CallAction from "@/components/CallAction";
import TestimonialsSlider from "@/components/Testimonials";
import "swiper/css";
import "swiper/css/pagination";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

// ─── Icons ──────────────────────────────────────────────────────────────────
function IconChevron({ open }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
            <polyline points="6 9 12 15 18 9" />
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
function IconClock() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
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
function IconInfo() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
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
function IconFile() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
    );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const faqs = [
    { q: "Can my parents be guarantors if they are retired or on a pension?", a: "Yes, but it depends on the lender. Some banks have a strict age cutoff (often 65 or 70), others are flexible if the parents have significant equity and a clear exit strategy. The key requirement is usually that the guarantor seeks independent legal advice to understand the risks to their retirement security." },
    { q: 'What is a "Limited Guarantee" vs. a "Whole Loan Guarantee"?', a: "Most modern guarantor loans are Limited Guarantees. This means the guarantor is only responsible for a specific portion of the loan (usually 20% of the property value plus buying costs). They are not liable for the entire 30-year mortgage, which significantly limits their financial exposure." },
    { q: "Does a guarantor need to prove their income?", a: "Surprisingly, not always. While some lenders require the guarantor to show they can service the debt, many \"security-only\" lenders only look at the equity in the guarantor's property and the borrower's ability to pay. This makes it much easier for self-funded retirees to help out." },
    { q: "Can I buy an investment property with a guarantor?", a: "Absolutely. While many people associate guarantors with first-home buyers, you can use a family guarantee to purchase an investment property. This allows you to jump into the market with a smaller deposit and preserve your own cash for future renovations or other investments." },
    { q: "What happens if the property value drops?", a: "If the market dips and your property value falls, it may take longer to reach the 20% equity mark required to release your guarantor. The guarantor stays on the loan until the market recovers or you pay down enough of the principal to hit that 80% LVR." },
    { q: "Can I have more than one guarantor?", a: "Yes. If one set of parents doesn't have enough equity, some lenders allow you to \"stack\" guarantees from both sides of the family. However, this increases the complexity of the legal paperwork and the number of parties involved in settlement." },
    { q: "Does the guarantor's property have to be mortgage-free?", a: "No. Your guarantor can still have a mortgage on their own home. The lender will simply calculate the \"usable equity\" (the value of the home minus the remaining debt) to see if there is enough left over to secure your portion of the loan." },
    { q: "Will being a guarantor stop my parents from selling their house?", a: "It can complicate things. Since the bank has a \"charge\" over the guarantor's property, they would generally need to pay out the guaranteed portion or move the guarantee to a new property if they decide to downsize or sell." },
    { q: 'What is "Genuine Savings" and do I still need them?', a: "Even with a guarantor, some lenders still want to see that you have saved at least 3–5% of the purchase price yourself. This proves you have the financial discipline to manage a mortgage. However, some specialized lenders will waive this if you have a strong rental history." },
    { q: "How much does it cost to set up a guarantor loan?", a: "Beyond the standard loan fees, the main additional cost is for the guarantor's mandatory independent legal advice. This usually costs between $500 and $1,500, depending on the solicitor, but it is a vital step to protect the family's interests." },
];

const howItWorksCards = [
    { Icon: IconHome, title: "Family equity as security", desc: "Your family member's property equity acts as extra collateral, reducing your required deposit significantly." },
    { Icon: IconClock, title: "Enter the market faster", desc: "Stop waiting years to save a full deposit while property prices continue to climb." },
    { Icon: IconShield, title: "Avoid LMI completely", desc: "The bank treats your loan as 80% LVR, waiving Lenders Mortgage Insurance worth $10k–$35k." },
];

const hiddenCosts = [
    { emoji: "🏛️", title: "Stamp duty", sub: "$30k+ in Adelaide & other capitals" },
    { emoji: "⚖️", title: "Legal & conveyancing", sub: "Solicitor and settlement fees" },
    { emoji: "📋", title: "Registration fees", sub: "Government transfer & mortgage costs" },
    { emoji: "🔍", title: "Inspection costs", sub: "Building & pest inspections" },
];

const risks = [
    "SVR rollover risk if guarantor release is delayed",
    "Reduces guarantor's own borrowing power as a contingent liability",
    "Complicates guarantor's ability to sell or downsize their property",
    "Property value drop delays reaching 20% equity to release guarantee",
    "Full guarantee: family home at risk for the entire loan amount",
    "Legal costs: mandatory independent advice ($500–$1,500)",
];

const exitStrategies = [
    { Icon: IconTrendUp, title: "Capital growth", desc: "Your home increases in value (e.g., $600k → $750k), pushing your LVR below 80% without extra repayments." },
    { Icon: IconDollar, title: "Debt reduction", desc: "Make extra repayments to bring the loan balance down to 80% of the property's value." },
];

const borrowerDocs = [
    "Recent payslips (last 2–3)",
    "Last 2 years tax returns & ATO NOAs",
    "3 months bank statements (genuine savings)",
    "Photo ID (passport or driver's licence)",
    "Statement of liabilities & assets",
    "Contract of sale (when available)",
];

const guarantorDocs = [
    "Most recent council rates notice",
    "Most recent mortgage statement",
    "Photo ID (passport or driver's licence)",
    "Proof of income (or pension statement)",
    "Independent legal advice certificate",
    "Statement of assets & liabilities",
];

const lenderGroups = [
    {
        label: "Major banks (Big 4)",
        lenders: ["CBA — Property Share", "Westpac — Family Pledge", "NAB — Family Guarantee", "ANZ — Family Guarantee"],
    },
    {
        label: "Second-tier & regional",
        lenders: ["St.George Bank", "BankSA", "Bank of Melbourne", "ING", "Macquarie Bank", "Suncorp Bank", "Bankwest", "Bendigo Bank", "BOQ", "Great Southern Bank"],
    },
    {
        label: "Customer-owned & mutual",
        lenders: ["IMB Bank", "Heritage Bank", "Beyond Bank", "Greater Bank", "Australian Mutual Bank", "Horizon Bank"],
    },
    {
        label: "Specialist & non-bank",
        lenders: ["Pepper Money", "Liberty Financial"],
    },
];

// ─── Shared design-system components (identical to BridgingComponent) ────────
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

// ─── Checklist Item ───────────────────────────────────────────────────────────
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

// ─── Main Component ───────────────────────────────────────────────────────────
const GuarantorComponent = () => {
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

            {/* ══════════════════════════════════════ HERO ══════════════════════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Guarantor Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Step Into Your First Home<br />
                    <span className="grad-text">Sooner With Family Support</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    Saving a large deposit can take years while property prices keep rising. A guarantor loan lets a trusted family member use their equity to help you enter the market faster — and potentially avoid LMI entirely.
                </p>

                {/* Stats bar */}
                <div className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "105–110%", label: "Max borrowing of purchase price" },
                        { val: "$0 LMI", label: "When LVR treated as 80%" },
                        { val: "3–5%", label: "Genuine savings still required" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-5 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-3xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════ HOW IT WORKS ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>How it works</SectionTag>
                <SectionHeading>
                    The guarantor loan <GradientText>explained</GradientText>
                </SectionHeading>
                <SectionLead>
                    A family member (usually parents) uses equity in their own property as additional security for your loan — reducing your deposit requirements and unlocking better conditions.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {howItWorksCards.map((b, i) => (
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

            {/* ══════════════════════════════════════ BORROW UP TO 110% ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Key advantage</SectionTag>
                <SectionHeading>
                    Borrow up to <GradientText>105%–110%</GradientText> of the purchase price
                </SectionHeading>
                <SectionLead>
                    One of the biggest secrets of guarantor loans — the extra 5–10% covers the hidden costs of buying that many first home buyers forget about.
                </SectionLead>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {hiddenCosts.map((c, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6 text-center hover:shadow-[0_6px_20px_rgba(241,114,172,0.2)] transition-all duration-300 hover:-translate-y-1">
                            <div className="text-3xl mb-3">{c.emoji}</div>
                            <p className="text-[14px] font-semibold text-[#86489B] mb-1">{c.title}</p>
                            <p className="text-[12px] text-gray-400 leading-snug">{c.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Important note */}
                <div className="mt-8 flex gap-4 items-start bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] flex-shrink-0">
                        <IconInfo />
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold text-[#86489B] mb-1">The {`'Genuine Savings'`} rule</p>
                        <p className="text-[14px] text-gray-500 leading-relaxed">
                            Even with a guarantor, most Australian lenders still require <strong className="text-gray-700">3%–5% in genuine savings</strong> (money saved in a bank account over 3+ months) to prove you have the financial discipline to manage a mortgage.
                        </p>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════ LIMITED vs FULL ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Guarantee types</SectionTag>
                <SectionHeading>
                    Limited vs. full <GradientText>guarantee</GradientText>
                </SectionHeading>
                <SectionLead>
                    Understanding the difference is critical. At Kubaer Finance, we strictly recommend limited guarantees to protect your family.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Limited — recommended */}
                    <div className="bg-white rounded-2xl border-2 border-[#86489B]/30 shadow-[0_4px_20px_rgba(134,72,155,0.12)] p-7 relative">
                        <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 text-[#86489B] mb-4">
                            ✓ Recommended
                        </span>
                        <p className="text-xl! font-semibold! text-[#86489b]! mb-3">Limited guarantee</p>
                        <p className="text-[14px] text-gray-500 leading-relaxed mb-5">
                            The guarantor is only responsible for a specific dollar amount (e.g., $100,000). Once the borrower pays down the loan by that amount, the {`guarantor's`} responsibility ends automatically.
                        </p>
                        <div className="flex flex-col gap-2.5">
                            {["Capped financial exposure", "Auto-release once threshold met", "Protects guarantor's retirement security"].map((t, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-[13px] text-gray-500">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                                        <IconCheck />
                                    </div>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Full — avoid */}
                    <div className="bg-white rounded-2xl border border-rose-200/70 shadow-[0_4px_15px_rgba(244,63,94,0.08)] p-7">
                        <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-500 mb-4">
                            Avoid if possible
                        </span>
                        <p className="text-xl! font-semibold! text-rose-500! mb-3">Full guarantee</p>
                        <p className="text-[14px] text-gray-500 leading-relaxed mb-5">
                            The guarantor is responsible for the entire loan if the borrower defaults. This means the family {`member's`} property could be at risk for the full amount of the mortgage.
                        </p>
                        <div className="flex flex-col gap-2.5">
                            {["Full loan liability on default", "No automatic release trigger", "Retirement savings at risk"].map((t, i) => (
                                <div key={i} className="flex items-start gap-2.5 p-2.5 bg-rose-50 border border-rose-200/60 rounded-xl text-[13px] text-rose-500">
                                    <IconWarning />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════ THREE Ds + RISKS ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Risks &amp; considerations</SectionTag>
                <SectionHeading>
                    The {`"Three Ds"`} and <GradientText>other key risks</GradientText>
                </SectionHeading>
                <SectionLead>
                    A guarantee is usually only called in under serious circumstances. Guarantors must consider their own financial buffer before signing.
                </SectionLead>

                {/* Three Ds */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {[
                        { d: "D1", label: "Death", desc: "Unexpected passing of the borrower triggers the guarantee call." },
                        { d: "D2", label: "Divorce", desc: "Relationship breakdown can lead to forced sale and potential shortfall." },
                        { d: "D3", label: "Debt (job loss)", desc: "Sustained inability to make repayments due to unemployment." },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6 text-center">
                            <p className="text-4xl font-bold grad-text opacity-[0.25] leading-none mb-2">{item.d}</p>
                            <p className="text-[15px] font-semibold text-[#86489B] mb-1.5">{item.label}</p>
                            <p className="text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Risk cards */}
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

            {/* ══════════════════════════════════════ EXIT STRATEGY ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Exit strategy</SectionTag>
                <SectionHeading>
                    Releasing the guarantor <GradientText>as soon as possible</GradientText>
                </SectionHeading>
                <SectionLead>
                    A guarantor loan should never be a 30-year commitment. The goal is to remove the guarantee at the earliest opportunity through one of two paths.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {exitStrategies.map((b, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <b.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{b.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{b.desc}</p>
                        </AccentCard>
                    ))}
                </div>

                {/* Pro tip callout */}
                <div className="flex gap-4 items-start bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                        <IconInfo />
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold text-[#86489B] mb-1">Pro tip — valuation review every 2 years</p>
                        <p className="text-[14px] text-gray-500 leading-relaxed">
                            If your equity has reached 20%, we can apply for a <strong className="text-gray-700">{`"Partial Release"`}</strong> to remove your parents from the loan entirely — no refinancing required.
                        </p>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════ CHECKLIST ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Application checklist</SectionTag>
                <SectionHeading>
                    What you need <GradientText>to apply</GradientText>
                </SectionHeading>
                <SectionLead>
                    Both the borrower and guarantor need to prepare documentation. Here is what each party must provide.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {/* Borrower */}
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconFile />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Borrower documents</p>
                        </div>
                        {borrowerDocs.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>

                    {/* Guarantor */}
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconFile />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Guarantor documents</p>
                        </div>
                        {guarantorDocs.map((d, i) => <ChecklistItem key={i}>{d}</ChecklistItem>)}
                    </div>
                </div>

                {/* Legal advice callout */}
                <div className="flex gap-4 items-start bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                        <IconShield />
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold text-[#86489B] mb-1">Independent legal advice is mandatory</p>
                        <p className="text-[14px] text-gray-500 leading-relaxed">
                            All lenders require the guarantor to obtain independent legal advice before signing. This typically costs <strong className="text-gray-700">$500–$1,500</strong> and ensures the {`family's`} interests are fully protected.
                        </p>
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════ LENDERS ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Lender panel</SectionTag>
                <SectionHeading>
                    Lenders we <GradientText>work with</GradientText>
                </SectionHeading>
                <SectionLead>
                    Each major bank has its own branded guarantor product. We compare all options to find the right fit for your {`family's`} situation.
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

            {/* ══════════════════════════════════════ FAQ ══════════════════════════════════════ */}
            <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Common <GradientText>questions</GradientText>
                </SectionHeading>
                <SectionLead className="mb-10">
                    Everything families ask before setting up a guarantor loan.
                </SectionLead>

                <div>
                    {faqs.map((f, i) => (
                        <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ══════════════════════════════════════ CTA ══════════════════════════════════════ */}
            <CallAction />
        </div>
    );
};

export default GuarantorComponent;