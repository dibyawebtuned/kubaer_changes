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
function IconCreditCard() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const incomeVerificationMethods = [
    {
        Icon: IconFile,
        title: "Business Activity Statements (BAS)",
        desc: "Usually the last 6 to 12 months of BAS to show consistent business turnover and trading activity.",
    },
    {
        Icon: IconDollar,
        title: "Business bank statements",
        desc: "3 to 6 months of statements showing regular trading and a healthy, consistent cash flow.",
    },
    {
        Icon: IconShield,
        title: "Accountant's declaration",
        desc: "A signed letter from your qualified accountant certifying that your declared income is true and the business can comfortably service the debt.",
    },
    {
        Icon: IconFileSmall,
        title: "Self-declaration (income declaration form)",
        desc: "A formal Income Declaration form where you state your annual earnings, cross-referenced against BAS and bank statements.",
    },
];

const essentialRequirements = [
    {
        num: "01",
        title: "ABN & GST registration",
        desc: "Most lenders require your ABN to be active for at least 2 years. Some specialist lenders may consider 6–12 months. If your business turns over more than $75,000, GST registration is required — lenders will verify your registration history on the ABR.",
    },
    {
        num: "02",
        title: "Substantial deposit (equity)",
        desc: "Most Low Doc loans are capped at 80% LVR — meaning you need a 20% deposit. The 60% 'sweet spot': if you have a 40% deposit (60% LVR), many lenders will waive LMI and offer much more competitive interest rates.",
    },
    {
        num: "03",
        title: "Clean credit history",
        desc: "Low Doc lenders are very strict about credit health. Because they have less paperwork to rely on, they rely heavily on Comprehensive Credit Reporting (CCR). Even small defaults on utility bills or late credit card payments can lead to an automatic decline.",
    },
    {
        num: "04",
        title: "Asset-to-debt ratio",
        desc: "Lenders like to see 'asset wealth.' If you are claiming a high income, they expect to see that reflected in your assets — equity in property, healthy superannuation, or business equipment. A common benchmark is a 2:1 ratio of assets to the loan amount.",
    },
];

const whatMakesDifferent = [
    "Business Activity Statements (BAS)",
    "Accountant declarations",
    "Business bank statements",
    "Alternative financial records",
];

const depositTiers = [
    {
        lvr: "80% LVR",
        deposit: "20% deposit",
        label: "Standard",
        badgeColor: "amber",
        desc: "The typical threshold for most Low Doc products. LMI may apply.",
    },
    {
        lvr: "60% LVR",
        deposit: "40% deposit",
        label: "Sweet spot",
        badgeColor: "green",
        desc: "LMI often waived. Faster approvals, lower rates, and a much smoother application process.",
    },
];

const specialistLenders = [
    "Liberty Financial", "Pepper Money", "La Trobe Financial", "RedZed",
    "Resimac", "Bluestone Mortgages", "Rate Money", "MA Money",
    "Firstmac", "Granite Home Loans",
];

const majorBanks = [
    "Commonwealth Bank (CBA)", "Westpac", "St.George Bank",
    "BankSA", "Bank of Melbourne", "Macquarie Bank", "AMP Bank",
];

const faqs = [
    {
        q: 'What is a "Low Doc" loan vs. a "Full Doc" loan?',
        a: "The main difference is how you prove your income. A Full Doc loan requires 2 years of personal and business tax returns. A Low Doc loan uses alternative evidence — such as Business Activity Statements (BAS) or an accountant's letter — to verify your cash flow.",
    },
    {
        q: "Do I need an ABN to get a low doc loan?",
        a: "Yes. Most lenders require you to have an active Australian Business Number (ABN) registered for at least 6 to 24 months. Being registered for GST is also a common requirement for many competitive low doc products.",
    },
    {
        q: "What is an \"Accountant's Letter\" and what does it say?",
        a: "This is a formal declaration from your qualified accountant. They verify that they have managed your accounts and confirm that your business is profitable enough to comfortably meet the proposed loan repayments.",
    },
    {
        q: "Are low doc interest rates higher?",
        a: "Generally, yes. Because the lender is taking on more 'perceived risk' by not seeing your full tax returns, they often charge a premium. However, if you have a large deposit (e.g., 40%), we can often negotiate rates that are very close to standard market rates.",
    },
    {
        q: "How much deposit do I really need?",
        a: "While some specialized lenders may go higher, the 'sweet spot' for low doc loans is an 80% Loan-to-Value Ratio (LVR), meaning you'll need a 20% deposit. If your deposit is 40% (60% LVR), the application process is often much faster and cheaper.",
    },
    {
        q: "Can I use a low doc loan for an investment property?",
        a: "Absolutely. Low doc loans are highly popular for investors who are self-employed and want to expand their portfolio without waiting for their end-of-year tax assessments to be finalized.",
    },
    {
        q: "What exactly is a \"Borrower's Income Declaration\"?",
        a: "This is a simple form where you 'self-certify' your annual income. You state what you earn, and the lender then looks at your BAS or bank statements to see if those figures align with the 'real world' cash flow of your business.",
    },
    {
        q: "Can I switch to a \"Full Doc\" loan later to get a lower rate?",
        a: "Yes! Once you have 1–2 years of consistent tax returns showing your income, we can help you 'convert' or refinance your low doc loan into a standard, lower-rate product. This is a common strategy for new business owners.",
    },
    {
        q: "Is Lenders Mortgage Insurance (LMI) different for low doc?",
        a: "It can be. Some low doc lenders charge a 'Risk Fee' instead of LMI, while others include LMI if you borrow more than 60–70% of the property value. We always calculate these fees upfront so there are no surprises at settlement.",
    },
    {
        q: "What happens if I have \"bad credit\" and need a low doc loan?",
        a: "It is still possible. There are 'Non-Conforming' lenders who specialise in 'Alt-Doc' loans for self-employed people with credit defaults or late payments. The rates will be higher, but it can be a vital stepping stone to getting back into the property market.",
    },
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
const LowdocComponent = () => {
    return (
        <div className="bg-[#FDF8FF] text-gray-800 min-h-screen">
            <style>{`.grad-text{background:linear-gradient(90deg,#86489B,#F171AC);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}`}</style>

            {/* ════════════════════ HERO ════════════════════ */}
            <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

                <SectionTag>Low-Doc / Alt-Doc Home Loans</SectionTag>

                <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
                    Home Loan Solutions for<br />
                    <span className="grad-text">Self-Employed Australians</span>
                </h1>

                <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
                    Traditional loans rely heavily on payslips and standard income verification. But if you are self-employed, a contractor, or run your own business — Low-Doc and Alt-Doc loans provide flexible alternatives that reflect how you actually earn.
                </p>

                <div className="flex flex-col sm:flex-row justify-center max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
                    {[
                        { val: "80% LVR", label: "Maximum LVR for most Low Doc loans" },
                        { val: "60% LVR", label: "Sweet spot — LMI often waived" },
                        { val: "2 yrs", label: "Preferred ABN active history" },
                        { val: "2:1", label: "Asset-to-debt ratio lenders look for" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 py-6 px-4 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
                            <span className="text-2xl font-bold block mb-1 grad-text">{s.val}</span>
                            <span className="text-xs text-gray-400 tracking-wide font-medium leading-tight block">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ HOW INCOME IS VERIFIED ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Income verification</SectionTag>
                <SectionHeading>
                    How income is verified in a <GradientText>Low Doc loan</GradientText>
                </SectionHeading>
                <SectionLead>
                    Since you are not providing full tax returns, lenders use a combination of the following to verify your ability to repay the loan.
                </SectionLead>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                    {incomeVerificationMethods.map((b, i) => (
                        <AccentCard key={i} className="p-7">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                                <b.Icon />
                            </div>
                            <p className="text-lg! font-semibold! text-[#86489b]! mb-2">{b.title}</p>
                            <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">{b.desc}</p>
                        </AccentCard>
                    ))}
                </div>

                {/* What makes these loans different */}
                <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">Instead of standard income documents, lenders may accept</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {whatMakesDifferent.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 py-2 text-[14px] text-gray-500">
                                <div className="w-5 h-5 rounded bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0">
                                    <IconCheck />
                                </div>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ ESSENTIAL REQUIREMENTS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Essential requirements</SectionTag>
                <SectionHeading>
                    What lenders require for a <GradientText>Low Doc loan</GradientText>
                </SectionHeading>
                <SectionLead>
                    Because lenders are taking on higher perceived risk without full tax documentation, they tighten requirements in other areas. Here is what they look for.
                </SectionLead>

                <div className="flex flex-col relative">
                    <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />
                    {essentialRequirements.map((s, i) => (
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

            {/* ════════════════════ DEPOSIT TIERS ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Deposit guide</SectionTag>
                <SectionHeading>
                    How deposit size affects <GradientText>your Low Doc loan</GradientText>
                </SectionHeading>
                <SectionLead>
                    Your deposit is one of the most powerful levers in a Low Doc application. A larger deposit reduces risk for the lender — and unlocks significantly better terms for you.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    {depositTiers.map((tier, i) => {
                        const isGreen = tier.badgeColor === "green";
                        return (
                            <div
                                key={i}
                                className={`rounded-2xl p-7 ${isGreen
                                    ? "bg-white border-2 border-[#86489B]/30 shadow-[0_4px_20px_rgba(134,72,155,0.12)]"
                                    : "bg-white border border-[#F171AC]/20 shadow-[0_4px_15px_rgba(241,114,172,0.08)]"}`}
                            >
                                {isGreen && (
                                    <span className="inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full bg-green-50 border border-green-200/60 text-green-700 mb-3">
                                        ✓ Recommended sweet spot
                                    </span>
                                )}
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-3xl font-bold grad-text">{tier.deposit}</span>
                                    <span className="text-[14px] text-gray-400">({tier.lvr})</span>
                                </div>
                                <p className="text-[14px] text-gray-500 leading-relaxed">{tier.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <InfoBox title="The 60% LVR advantage">
                    At 60% LVR (40% deposit), many lenders will waive Lenders Mortgage Insurance entirely and offer interest rates that are very close to standard market rates. This is the single biggest lever for improving your Low Doc loan outcome.
                </InfoBox>
            </section>

            <PinkDivider />

            {/* ════════════════════ WHY THESE LOANS MATTER ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Why it matters</SectionTag>
                <SectionHeading>
                    Why Low-Doc loans <GradientText>matter for self-employed borrowers</GradientText>
                </SectionHeading>
                <SectionLead>
                    You should not miss out on property ownership simply because your income structure is different from a salaried employee.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    <AccentCard className="p-7">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                            <IconShield />
                        </div>
                        <p className="text-lg! font-semibold! text-[#86489b]! mb-2">Opportunity for self-employed borrowers</p>
                        <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">
                            You should not miss out on property ownership simply because your income structure is different from a traditional salaried employee.
                        </p>
                    </AccentCard>
                    <AccentCard className="p-7">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                            <IconRefresh />
                        </div>
                        <p className="text-lg! font-semibold! text-[#86489b]! mb-2">Flexible lending assessment</p>
                        <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">
                            These loans are designed to reflect real business income rather than traditional employment structures — meeting you where you are.
                        </p>
                    </AccentCard>
                    <AccentCard className="p-7">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] mb-4">
                            <IconInfo />
                        </div>
                        <p className="text-lg! font-semibold! text-[#86489b]! mb-2">Things to consider</p>
                        <p className="text-sm! text-gray-500! leading-relaxed! font-normal!">
                            Low-doc loans may have slightly higher interest rates and stricter lending conditions — which is why expert guidance is essential.
                        </p>
                    </AccentCard>
                </div>

                <div className="bg-gradient-to-r from-[#86489B]/[0.06] to-[#F171AC]/[0.06] border border-[#F171AC]/20 rounded-2xl p-6 md:p-8">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-3">Why self-employed clients choose Kubaer Finance</p>
                    <p className="text-[15px] text-gray-500 leading-relaxed">
                        We specialise in presenting complex financial profiles clearly and professionally to lenders — improving your approval chances and ensuring there are no surprises at settlement.
                    </p>
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ LENDER PANEL ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Lender panel</SectionTag>
                <SectionHeading>
                    Lenders we <GradientText>work with</GradientText>
                </SectionHeading>
                <SectionLead>
                    We compare Low Doc products across specialist non-bank lenders and major banks to find the right fit for your business profile and deposit size.
                </SectionLead>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Specialist lenders */}
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconBank />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Specialist non-bank lenders</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {specialistLenders.map((l, j) => (
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

                    {/* Major & second-tier banks */}
                    <div className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                                <IconBank />
                            </div>
                            <p className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B]">Major & second-tier banks</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {majorBanks.map((l, j) => (
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
                </div>
            </section>

            <PinkDivider />

            {/* ════════════════════ LOW DOC vs FULL DOC ════════════════════ */}
            <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
                <SectionTag>Compare</SectionTag>
                <SectionHeading>
                    Low Doc vs <GradientText>Full Doc — key differences</GradientText>
                </SectionHeading>
                <SectionLead>
                    Understanding the key differences helps you know which product applies to your situation — and what to work towards.
                </SectionLead>

                <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden mb-6">
                    {/* Header */}
                    <div className="grid grid-cols-3 border-b border-[#F171AC]/15">
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Feature</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widests uppercase text-[#86489B]">Low Doc</p>
                        </div>
                        <div className="px-6 py-4 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-l border-[#F171AC]/15">
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#86489B]">Full Doc</p>
                        </div>
                    </div>
                    {[
                        { feature: "Income proof", low: "BAS, accountant letter, bank statements", full: "2 years personal & business tax returns" },
                        { feature: "ABN requirement", low: "Active 6–24 months (2 yrs preferred)", full: "Usually 2+ years" },
                        { feature: "Max LVR", low: "Typically 80% (60% sweet spot)", full: "Up to 95% with LMI" },
                        { feature: "Interest rates", low: "Slightly higher (risk premium)", full: "Most competitive rates" },
                        { feature: "LMI", low: "May be waived at 60% LVR", full: "Standard LMI rules apply" },
                        { feature: "Best for", low: "Self-employed, contractors, new businesses", full: "Salaried employees & established businesses" },
                        { feature: "Can convert later", low: "Yes — refinance to Full Doc after 1–2 yrs", full: "N/A" },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 border-b border-[#F171AC]/[0.07] last:border-0">
                            <div className="px-6 py-4 text-[13px] font-semibold text-gray-700">{row.feature}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.low}</div>
                            <div className="px-6 py-4 text-[13px] text-gray-500 border-l border-[#F171AC]/[0.07]">{row.full}</div>
                        </div>
                    ))}
                </div>

                <InfoBox title="Strategy: convert to Full Doc later">
                    Once you have 1–2 years of consistent tax returns showing your income, we can help you refinance your Low Doc loan into a standard Full Doc product at a lower rate. This is a common and effective strategy for new business owners who could not wait for tax assessments to be finalised.
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
                    Everything self-employed borrowers ask about Low-Doc and Alt-Doc home loans.
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

export default LowdocComponent;