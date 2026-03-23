"use client";
import React, { useState } from "react";
import CallAction from "@/components/CallAction";
import TestimonialsSlider from "@/components/Testimonials";
import "swiper/css";
import "swiper/css/pagination";
import { Archivo, Roboto } from "next/font/google";

import { Calendar, Unlock, AlertTriangle, TrendingUp, Shield } from "lucide-react";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

// ─── Icons ─────────────────────────────────────────────────────────────────────
function IconChevron({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
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
function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
function IconSplit() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M21 3l-7 7-4-4-7 7" />
      <path d="M3 21l7-7 4 4 7-7" />
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

// ─── Data ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "How long can I fix my interest rate for?", a: "In the Australian market, most lenders offer fixed terms ranging from 1 to 5 years. You can choose to re-fix or roll over to variable at the end of the term." },
  { q: "Can my repayments change during the fixed period?", a: "No. Your interest rate and minimum monthly repayments are locked. Even if market rates soar, your payments stay identical until the term ends." },
  { q: "What happens at the end of the fixed term?", a: "Your loan usually rolls over to the lender's \"Standard Variable Rate.\" We recommend reviewing your options 3 months before expiry to avoid any \"rate shock.\"" },
  { q: "Can I make extra repayments on a fixed loan?", a: "Most lenders cap extra repayments (often between $10,000 and $30,000 per year). Exceeding this limit can trigger costly break fees." },
  { q: "Do fixed loans have offset accounts?", a: "Traditionally, no. However, some specialized lenders now offer partial offset accounts on fixed products. We can help you identify these specific lenders." },
  { q: "What are \"break costs\"?", a: "These are fees charged if you pay off the loan early, refinance, or sell the property before the fixed term ends. They can be substantial, so fixing is a serious commitment." },
  { q: "Can I split my loan between fixed and variable?", a: "Yes. A \"Split Loan\" allows you to fix a portion for certainty while keeping the rest variable to enjoy features like an offset account and unlimited extra repayments." },
  { q: "What is a \"Rate Lock\" fee?", a: "Interest rates can move between your application and settlement. A Rate Lock fee allows you to \"freeze\" the current fixed rate so you don't miss out if rates rise during processing." },
  { q: "Is a fixed rate cheaper than a variable rate?", a: "Not necessarily. Fixed rates are priced based on economists' predictions. Sometimes they are lower than variable rates, and sometimes they carry a premium for the certainty they provide." },
  { q: "Who should consider a fixed rate loan?", a: "Fixed rates are perfect for those on a strict budget who want to know exactly what their outgoings will be, or for those who believe interest rates are likely to increase significantly." },
];

const benefits = [
  { Icon: IconLock, title: "Predictable Repayments", desc: "No surprises. No sudden repayment increases. Just consistency you can plan your household budget around every single month." },
  { Icon: IconShield, title: "Protection From Rising Rates", desc: "When rates rise, your repayments stay the same — giving you financial security during uncertain economic periods." },
  { Icon: IconCalendar, title: "Confident Financial Planning", desc: "Perfect for families, first home buyers, and anyone wanting long-term stability in an unpredictable market." },
];

const takeaways = [
  "Your interest rate is locked for a set period — typically 1 to 5 years.",
  "Repayments are identical each month, making household budgeting simple.",
  "When your fixed term ends, the loan rolls over to the Standard Variable Rate.",
  "A Rate Lock fee (~0.10–0.15%) protects your rate between application and settlement.",
  "Break costs can be significant — fixing is a serious, long-term commitment.",
  "Some specialist lenders offer partial offset accounts on fixed rate products.",
];

const risks = [
  "SVR rollover: rates often spike significantly after the fixed term",
  "Break costs: fees for early repayment, refinancing, or sale",
  "Extra repayment caps: usually $10,000–$30,000 per year",
  "Missing rate drops: you won't benefit if market rates fall",
  "Limited offset: most fixed loans don't include offset accounts",
  "Rate lock fee: small cost required to freeze the rate at application",
];

const whoSuitsItems = [
  { n: "01", title: "Strict Budgeters", desc: "If you need to know your exact monthly outgoing and cannot absorb payment fluctuations." },
  { n: "02", title: "First Home Buyers", desc: "Ideal when entering the market for the first time and managing tight household finances." },
  { n: "03", title: "Rate Rise Believers", desc: "Borrowers who believe interest rates are likely to increase significantly during their term." },
  { n: "04", title: "Long-Term Planners", desc: "Families and investors wanting financial certainty across a defined multi-year horizon." },
];

const lenderGroups = [
  {
    label: "Major Banks (Big 4)",
    lenders: ["Commonwealth Bank (CBA)", "Westpac", "NAB (National Australia Bank)", "ANZ"],
  },
  {
    label: "Second-Tier & Regional",
    lenders: ["Macquarie Bank", "ING", "Suncorp Bank", "Bank of Queensland (BOQ)", "Bendigo Bank", "St.George Bank", "BankSA", "Bank of Melbourne", "Bankwest", "AMP Bank"],
  },
  {
    label: "Customer-Owned & Mutual",
    lenders: ["Great Southern Bank", "People First Bank", "Beyond Bank", "Teachers Mutual Bank", "Bank Australia", "IMB Bank", "Australian Mutual Bank"],
  },
  {
    label: "Specialist & Non-Bank",
    lenders: ["Liberty Financial", "Pepper Money", "La Trobe Financial", "Firstmac", "Resimac", "RedZed"],
  },
];

const rateLockSteps = [
  { num: "01", title: "Apply for Your Loan", desc: "Submit your application and select a fixed rate product with a participating lender." },
  { num: "02", title: "Pay the Rate Lock Fee", desc: "A small fee — typically 0.10% to 0.15% of the loan amount — secures your rate for 90 days." },
  { num: "03", title: "Processing Period", desc: "Your application is assessed. Rates may move up or down in the market during this time." },
  { num: "04", title: "Settlement Protection", desc: "If rates rise, you're protected. If rates fall, most lenders give you the lower of the two rates." },
];

// ─── Shared style components (matching BridgingComponent) ─────────────────────
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
    <h2 className="text-3xl! md:text-4xl! lg:text-[44px]! font-semibold! leading-tight! mb-3!">
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
const FixedrateComponent = () => {
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

      {/* ════════════════════════════════════ HERO ════════════════════════════════════ */}
      <section className="relative text-center px-6 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#86489B]/[0.04] via-transparent to-[#F171AC]/[0.06] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(241,113,172,0.12)_0%,transparent_70%)] pointer-events-none" />

        <SectionTag>Fixed Rate Home Loans</SectionTag>

        <h1 className={`text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-medium! mb-6! max-w-3xl mx-auto text-gray-800 ${archivo.className}`}>
          Stability &amp; Peace of Mind<br />
          <span className="grad-text">in an Uncertain Market</span>
        </h1>

        <p className={`text-sm! sm:text-base! md:text-lg! text-gray-500! font-normal! max-w-xl mx-auto mb-12 ${archivo.className}`}>
          Lock in your interest rate and know exactly what your repayments will be — protecting you from unexpected increases and making budgeting simple.
        </p>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(241,113,172,0.15)] border border-[#F171AC]/20">
          {[
            { val: "1–5 yrs", label: "Fixed term options" },
            { val: "~0.13%", label: "Typical rate lock fee" },
            { val: "90 days", label: "Rate lock protection" },
          ].map((s, i) => (
            <div key={i} className="flex-1 py-6 px-5 text-center bg-white border-b sm:border-b-0 sm:border-r border-[#F171AC]/15 last:border-0">
              <span className="text-3xl font-bold block mb-1 grad-text">{s.val}</span>
              <span className="text-xs text-gray-400 tracking-wide font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <PinkDivider />

      {/* ════════════════════════════════════ KEY TAKEAWAYS ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Key Takeaways</SectionTag>
        <SectionHeading>
          What You Need to <GradientText>Know</GradientText>
        </SectionHeading>
        <SectionLead>
          Before locking in a rate, here are the essential points every borrower should understand about fixed rate home loans.
        </SectionLead>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {takeaways.map((text, i) => (
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

      {/* ════════════════════════════════════ BENEFITS ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Benefits</SectionTag>
        <SectionHeading>
          Why Borrowers <GradientText>Love Fixed Loans</GradientText>
        </SectionHeading>
        <SectionLead>
          When certainty matters most, a fixed rate home loan puts you in control of your financial future.
        </SectionLead>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

      {/* ════════════════════════════════════ WHAT HAPPENS AFTER FIXED TERM ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Important Warning</SectionTag>
        <SectionHeading>
          What Happens After the <GradientText>Fixed Term?</GradientText>
        </SectionHeading>
        <SectionLead>
          Many homeowners forget that a fixed rate is temporary. Here is what to expect — and how to stay ahead of it.
        </SectionLead>

        <div className="bg-white rounded-3xl border border-[#F171AC]/20 shadow-[0_8px_40px_rgba(241,113,172,0.1)] overflow-hidden">

          {/* header */}
          <div className="flex items-center gap-3 px-8 py-6 bg-gradient-to-r from-[#86489B]/8 to-[#F171AC]/8 border-b border-[#F171AC]/15">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-xl! font-semibold! text-gray-800">
              The SVR Rollover — What You Must Know
            </h3>
          </div>

          <div className="p-8">

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { step: "Fixed Period Ends", label: "Your term expires (1–5 yrs)", icon: Unlock },
                { step: "Auto-Rollover", label: "Loan moves to Standard Variable Rate", icon: AlertTriangle },
                { step: "The Risk", label: "SVR is often much higher than intro rates", icon: TrendingUp },
              ].map((c, i) => {
                const Icon = c.icon;

                return (
                  <div
                    key={i}
                    className="group p-5 bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 border border-[#F171AC]/15 rounded-2xl text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <Icon className="w-8 h-8 text-[#F171AC] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="text-[12px] font-semibold tracking-widest uppercase text-[#86489B] mb-1.5">
                      {c.step}
                    </div>

                    <div className="text-[13px] text-gray-500 leading-snug font-medium">
                      {c.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Strategy box */}
            <div className="bg-gradient-to-br from-[#86489B]/5 to-[#F171AC]/5 border border-[#F171AC]/20 rounded-2xl px-6 py-5 flex gap-4 items-start">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#86489B] to-[#F171AC] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <Shield className="w-5 h-5" />
              </div>

              <div>
                <p className="text-[15px]! font-semibold! text-[#86489B]! mb-1">
                  The Kubaer Strategy
                </p>
                <p className="text-[14px]! text-gray-500 leading-relaxed! font-normal!">
                  Set a calendar reminder{" "}
                  <strong className="text-gray-700">
                    6 months before your fixed term ends.
                  </strong>{" "}
                  This gives us time to negotiate a new fixed rate or switch you to a competitive variable product before you are hit with a loyalty tax.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <PinkDivider />

      {/* ════════════════════════════════════ RATE LOCK — STEPS ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Rate Lock</SectionTag>
        <SectionHeading>
          Protecting Your Rate <GradientText>Before Settlement</GradientText>
        </SectionHeading>
        <SectionLead>
          In a rising rate environment like early 2026, the rate you see today might not be the rate you get at settlement. Rate Lock protects you.
        </SectionLead>

        <div className="flex flex-col relative">
          {/* Vertical spine */}
          <div className="hidden md:block absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-[#86489B]/40 via-[#F171AC]/30 to-transparent" />

          {rateLockSteps.map((s, i) => (
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

        {/* Partial offset callout */}
        <div className="mt-10 bg-white rounded-2xl border border-[#F171AC]/20 shadow-[0_4px_20px_rgba(241,113,172,0.1)] p-6 flex gap-4 items-start">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC] flex-shrink-0">
            <IconSplit />
          </div>
          <div>
            <p className="text-[16px]! font-semibold! text-[#86489B]! mb-0!">
              Partial Offsets on Fixed Loans
            </p>
            <p className="text-[14px]! text-gray-500! leading-relaxed! font-normal!">
              It is a common myth that you can never have an offset account with a fixed rate. While rare, some specialized lenders now offer <strong className="text-gray-700">Partial Offsets</strong> (e.g., offsetting up to 40% of the balance) or a 100% offset on a small portion of the fixed loan. We can help you identify these hybrid lenders.
            </p>
          </div>
        </div>
      </section>

      <PinkDivider />

      {/* ════════════════════════════════════ WHO QUALIFIES ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Eligibility</SectionTag>
        <SectionHeading>
          Who Should Consider <GradientText>Fixed Loans?</GradientText>
        </SectionHeading>
        <SectionLead>
          A fixed rate home loan is not for everyone. Here are the borrower profiles that benefit most.
        </SectionLead>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whoSuitsItems.map((q, i) => (
            <AccentCard key={i} className="p-6">
              <div className="text-4xl font-bold grad-text opacity-30 leading-none mb-3">{q.n}</div>
              <p className="text-[18px]! font-semibold! text-[#86489b]! mb-2">{q.title}</p>
              <p className="text-[13px]! text-gray-500! leading-relaxed! font-medium!">{q.desc}</p>
            </AccentCard>
          ))}
        </div>
      </section>

      <PinkDivider />

      {/* ════════════════════════════════════ RISKS ════════════════════════════════════ */}
      {/* <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Risks &amp; Considerations</SectionTag>
        <SectionHeading>
          What Can <GradientText>Go Wrong</GradientText>
        </SectionHeading>
        <SectionLead>
          Fixed loans are powerful but come with trade-offs. Know these before you commit.
        </SectionLead>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {risks.map((r, i) => (
            <div key={i} className="flex gap-3 items-start p-4 bg-rose-50 border border-rose-200/60 rounded-xl">
              <span className="text-rose-400 flex-shrink-0 mt-0.5"><IconWarning /></span>
              <span className="text-sm! text-gray-500 leading-relaxed! font-normal!">{r}</span>
            </div>
          ))}
        </div>
      </section> */}

      <PinkDivider />

      {/* ════════════════════════════════════ LENDERS ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-20 mt-15 sm:mt-0">
        <SectionTag>Lender Panel</SectionTag>
        <SectionHeading>
          Lenders We <GradientText>Work With</GradientText>
        </SectionHeading>
        <SectionLead>
          We compare fixed rate products across the full spectrum of Australian lenders — from the Big 4 to specialist non-banks.
        </SectionLead>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {lenderGroups.map((group, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#F171AC]/15 shadow-[0_4px_15px_rgba(241,114,172,0.08)] p-6">
              {/* group header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#86489B]/15 to-[#F171AC]/15 border border-[#F171AC]/25 flex items-center justify-center text-[#F171AC]">
                  <IconBank />
                </div>
                <p className="text-[13px] font-semibold tracking-widest uppercase text-[#86489B]">{group.label}</p>
              </div>
              {/* lender pills */}
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

      {/* ════════════════════════════════════ FAQ ════════════════════════════════════ */}
      <section className="container mx-auto px-6 py-16 mt-15 sm:mt-0">
        <SectionTag>FAQs</SectionTag>
        <SectionHeading>
          Common <GradientText>Questions</GradientText>
        </SectionHeading>
        <SectionLead className="mb-10">
          Everything homeowners and first home buyers ask before choosing a fixed rate loan.
        </SectionLead>

        <div>
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <PinkDivider />

      {/* ════════════════════════════════════ CTA ════════════════════════════════════ */}
      <CallAction />
    </div>
  );
};

export default FixedrateComponent;