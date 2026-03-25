"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import {
  Wallet,
  ShieldCheck,
  Infinity,
  Star,
  TrendingUp,
  Home,
} from "lucide-react";


const NAV_LINKS = ["About", "Why Use It", "Lenders", "FAQ"];

const LENDERS = [
  "Australian Military Bank", "Australian Mutual Bank", "Auswide Bank", "Bank Australia",
  "Bank First", "Bank of Melbourne", "Bank SA", "Bank of Us", "Bendigo Bank", "Beyond Bank",
  "Border Bank", "Commonwealth Bank", "Community First Bank", "Credit Union SA", "Defence Bank",
  "Firefighters Mutual Bank", "G&C Mutual Bank", "Gateway Bank", "Great Southern Bank",
  "Health Professionals Bank", "Hume Bank", "Indigenous Business Australia (IBA)",
  "Illawarra Credit Union", "IMB Bank", "MyState Bank", "National Australia Bank (NAB)",
  "Newcastle Permanent", "People's Choice", "Police Bank", "QBank", "Queensland Country Bank",
  "Regional Australia Bank", "Southern Cross Credit Union", "St George Bank",
  "Teachers Mutual Bank", "The Mutual Bank", "UniBank", "Unity Bank", "Westpac", "Bank WAW",
];

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


const MAJOR_LENDERS = ["Commonwealth Bank", "National Australia Bank (NAB)", "Westpac", "St George Bank", "Bank of Melbourne", "Bank SA"];

const FAQS = [
  {
    q: "Is the 5% Deposit Scheme different from the Home Guarantee Scheme?",
    a: "Yes. As of 1 October 2025, the Home Guarantee Scheme was rebranded to the Australian Government 5% Deposit Scheme. Key changes include no income caps, higher property price caps, no limit on places, and the closure of the Regional First Home Buyer Guarantee to new applicants.",
  },
  {
    q: "Do I have to be a first home buyer?",
    a: "For the First Home Guarantee: yes — you must not have owned a home or land in Australia in the past 10 years. For the Family Home Guarantee: no, you don't need to be a first-time buyer, but you cannot own another property once your new home settles.",
  },
  {
    q: "Do I still need to provide my Notice of Assessment after 1 October 2025?",
    a: "Applications on or after 1 October 2025: No income caps apply, so a Notice of Assessment is not required. Applications before 1 October 2025: pre-October rules still apply, including income caps and the requirement to provide a Notice of Assessment.",
  },
  {
    q: "Can I apply if I'm not an Australian citizen?",
    a: "The Scheme is only available to Australian Citizens and Permanent Residents. Your participating lender will confirm whether you meet the residency requirements as part of their assessment.",
  },
  {
    q: "I had a Home Guarantee Scheme application before 1 October 2025. Is it still valid?",
    a: "Yes. Pre-approved applications under the old Scheme (including Regional First Home Buyer Guarantee) remain valid. Pre-1 October rules (income and property price caps) still apply, and your lender will still require your Notice of Assessment.",
  },
  {
    q: "Can I withdraw my existing pre-October 2025 application and start a new one?",
    a: "Yes. If you withdraw and reapply after 1 October 2025, you'll need to complete a new Home Buyer Declaration. Be aware this may affect application timeframes and settlement dates — discuss implications with your lender first.",
  },
  {
    q: "Is my deposit based on the purchase price or the home's assessed value?",
    a: "It's based on the home's value as assessed by your lender, which may differ from the purchase price. Speak with your participating lender if there's a discrepancy.",
  },
  {
    q: "Do I have to live in the property straight away?",
    a: "You must move in within six months of settlement and continue living there while the Government Guarantee is active. Properties with existing tenants are allowed, as long as you move in within six months. Failing to meet this may result in LMI being charged.",
  },
  {
    q: "What happens if I default on my loan?",
    a: "The Government backing protects the lender, not you. It covers a shortfall if the property sale doesn't fully repay the loan. Contact your lender early if you face any financial difficulties.",
  },
  {
    q: "What happens if my situation changes while I'm in the Scheme?",
    a: "Contact your participating lender immediately. Certain changes may affect the ongoing government backing of your loan, and your lender will guide you on the appropriate next steps.",
  },
];

const BENEFITS = [
  {
    title: "Smaller Deposit",
    desc: "Buy with just a 5% deposit as a first home buyer, or as little as 2% as a single parent or legal guardian — years ahead of saving a traditional 20%.",
    icon: Wallet,
  },
  {
    title: "Zero LMI",
    desc: "A government guarantee replaces the need for Lenders Mortgage Insurance, saving eligible buyers thousands — sometimes tens of thousands — in upfront costs.",
    icon: ShieldCheck,
  },
  {
    title: "No Income Caps",
    desc: "Since 1 October 2025, income limits have been removed entirely, making the Scheme accessible to a much wider range of Australian buyers.",
    icon: Infinity,
  },
  {
    title: "No Waitlists",
    desc: "Previously capped at limited annual places, the updated Scheme now has no waitlists. Eligible buyers can apply at any time through a participating lender.",
    icon: Star,
  },
  {
    title: "Higher Price Caps",
    desc: "Property price thresholds have been raised across all states and territories to better reflect current housing market values and give buyers more choice.",
    icon: TrendingUp,
  },
  {
    title: "Flexible Properties",
    desc: "New or existing homes, townhouses, apartments, house and land packages, or land with a construction contract — you choose what suits your lifestyle.",
    icon: Home,
  },
];

const SCHEMES = [
  {
    name: "First Home Guarantee",
    abbr: "FHBG",
    deposit: "5% minimum",
    for: "First home buyers",
    detail: "For people buying their first home who haven't owned property in Australia in the past 10 years.",
    color: "#86489B",
  },
  {
    name: "Family Home Guarantee",
    abbr: "FHG",
    deposit: "2% minimum",
    for: "Single parents & legal guardians",
    detail: "For single parents or legal guardians with at least one dependent child. Previous homeowners may also qualify.",
    color: "#F171AC",
  },
];

const STATS = [
  { number: "248,000+", label: "Australians helped since 2020" },
  { number: "5%", label: "Minimum deposit for first home buyers" },
  { number: "2%", label: "Minimum deposit for single parents" },
  { number: "30+", label: "Participating lenders nationwide" },
];

export default function AustraliaComponent() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllLenders, setShowAllLenders] = useState(false);

  const visibleLenders = showAllLenders ? LENDERS : LENDERS.slice(0, 12);

  return (
    <div
      style={{ backgroundColor: "#FDF2F9", color: "#000000" }}
      className="min-h-screen"
    >
      <style>{`

        * { box-sizing: border-box; }
        body { margin: 0; }

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', sans-serif; }

        .purple-gradient { background: linear-gradient(135deg, #86489B, #F171AC); }

        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(134,72,155,0.18);
        }
        .faq-item {
          border-bottom: 1px solid rgba(134,72,155,0.15);
          transition: background 0.2s;
        }
        .faq-item:last-child { border-bottom: none; }
        .faq-item:hover { background: rgba(241,113,172,0.05); }

        .nav-link {
          position: relative;
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #F171AC;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #86489B; }
        .nav-link:hover::after { width: 100%; }

        .badge-pill {
          background: linear-gradient(90deg, rgba(134,72,155,0.12), rgba(241,113,172,0.12));
          border: 1px solid rgba(134,72,155,0.2);
        }
        .section-divider {
          width: 60px; height: 3px;
          background: linear-gradient(90deg, #86489B, #F171AC);
          border-radius: 2px;
        }
        .guarantee-card {
          background: linear-gradient(135deg, rgba(134,72,155,0.08), rgba(241,113,172,0.08));
          border: 1px solid rgba(134,72,155,0.15);
        }
        .highlight-number {
          background: linear-gradient(135deg, #86489B, #F171AC);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .scroll-reveal {
          animation: fadeUp 0.6s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lender-chip {
          background: white;
          border: 1px solid rgba(134,72,155,0.2);
          transition: border-color 0.2s, background 0.2s;
        }
        .lender-chip:hover {
          border-color: #86489B;
          background: rgba(134,72,155,0.05);
        }
        .scheme-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .scheme-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(134,72,155,0.2);
        }
        .step-dot {
          background: linear-gradient(135deg, #86489B, #F171AC);
        }
        .rebrand-banner {
          background: linear-gradient(90deg, rgba(134,72,155,0.1), rgba(241,113,172,0.1));
          border: 1px solid rgba(134,72,155,0.2);
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="container mx-auto relative">
          {/* rebrand notice */}
          <div className="rebrand-banner inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-body text-xs scroll-reveal" style={{ color: "#86489B" }}>
            {/* <span>🔄</span> */}
            Formerly the Home Guarantee Scheme — rebranded 1 October 2025
          </div>

          <h1 className={`${archivo.className} text-5xl! md:text-7xl! font-medium! leading-none mb-6! scroll-reveal! `} style={{ animationDelay: "0.1s", color: "#000000" }}>
            Your Home.
            <br />
            <span className="highlight-number italic">Your Deposit.</span>
            <br />
            Your Future.
          </h1>

          <p className={`${roboto.className} text-lg! max-w-xl! font-normal! tracking-normal! mb-10 scroll-reveal`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
            The <strong style={{ color: "#86489B" }}>Australian Government 5% Deposit Scheme</strong> helps eligible buyers purchase a home with as little as a <strong style={{ color: "#86489B" }}>5% deposit</strong> — or <strong style={{ color: "#F171AC" }}>2% for single parents</strong> — with zero LMI, no income caps, and no waitlists.
          </p>

          {/* <div className="flex flex-wrap gap-4 mb-16 scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <a href="#about" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
              Learn More →
            </a>
            <a href="#lenders" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
              Find a Lender
            </a>
          </div> */}

                    <div className={`flex flex-wrap gap-4 mb-16 scroll-reveal ${roboto.className}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex gap-3 lg:p-0">
              <div className="">
                <a href="#about" className="extra-btn btn-default">
                  Learn More →
                </a>
              </div>

              <div className="">
                <a href="#lenders" className="btn-default">
                  Find a Lender
                </a>
              </div>
            </div>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal" style={{ animationDelay: "0.4s" }}>
            {STATS.map((s) => (
              <div key={s.label} className="guarantee-card rounded-2xl p-5 card-hover">
                <div className={`${archivo.className} text-2xl! md:text-5xl! font-semibold! highlight-number mb-1! leading-none!`}>{s.number}</div>
                <div className={`${roboto.className} text-sm! font-normal! mt-1!`} style={{ color: "#6B6B6B", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT — TWO SCHEMES
      ══════════════════════════════════════ */}
      <section id="about" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Two Schemes, One Umbrella
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-14! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The Australian Government 5% Deposit Scheme consolidates two distinct programs under a single initiative — each with its own eligibility rules and deposit requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {SCHEMES.map((s) => (
              <div
                key={s.name}
                className="scheme-card rounded-3xl p-8 relative overflow-hidden"
                style={{ border: `2px solid ${s.color}33`, backgroundColor: "#FDF2F9" }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${s.color}, transparent)`, transform: "translate(20%, -20%)" }} />
                <div className="inline-block px-3 py-1 rounded-full font-body text-xs font-bold text-white mb-5" style={{ backgroundColor: s.color }}>
                  {s.abbr}
                </div>
                <h3 className={`${archivo.className} text-2xl! font-semibold! mb-2!`} style={{ color: "#000000" }}>{s.name}</h3>
                <p className={`${archivo.className} text-sm! mb-6! font-normal! tracking-normal!`} style={{ color: "#6B6B6B" }}>{s.detail}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="rounded-xl px-5 py-3" style={{ backgroundColor: `${s.color}15` }}>
                    <div className={`${archivo.className} text-3xl! font-semibold!`} style={{ color: s.color }}>{s.deposit}</div>
                    <div className={`${roboto.className} text-xs! mt-1!`} style={{ color: "#6B6B6B" }}>deposit required</div>
                  </div>
                  <div>
                    <div className={`${archivo.className} text-xs! font-medium! mb-1!`} style={{ color: "#6B6B6B" }}>Designed for</div>
                    <div className={`${roboto.className} font-semibold! text-sm!`} style={{ color: "#000000" }}>{s.for}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* rebrand explainer */}
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                {/* <div className="font-body text-xs text-white opacity-70 mb-2 uppercase tracking-widest">October 2025 Update</div> */}
                <h3 className={`${archivo.className} text-2xl! font-semibold! mb-6! text-white`}>What changed with the rebrand?</h3>
                <p className={`${archivo.className} text-sm! mb-6! font-normal! tracking-normal! text-white`} style={{ opacity: 0.9, lineHeight: 1.7 }}>
                  The Home Guarantee Scheme is now the <strong>Australian Government 5% Deposit Scheme</strong>. Along with the name change came the most significant expansion in the {`program's`} history.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: "Income caps removed", detail: "No more $125K / $200K thresholds" },
                  { label: "Unlimited places", detail: "No more annual caps or waitlists" },
                  { label: "Higher property price caps", detail: "Raised to reflect current market" },
                  { label: "Regional guarantee closed", detail: "Consolidated into the main scheme" },
                  { label: "Notice of Assessment not required", detail: "For applications from 1 Oct 2025" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-xl px-5 py-3" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    <span className="text-white mt-0.5">✓</span>
                    <div>
                      <div className={`${archivo.className} text-white font-medium! text-sm!`}>{item.label}</div>
                      <div className={`${archivo.className} text-white text-xs! font-normal!`} style={{ opacity: 0.7 }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY USE IT
      ══════════════════════════════════════ */}
      <section id="why-use-it" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Why Use the Scheme?
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            The Scheme removes the biggest barriers standing between eligible Australians and homeownership.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
  {BENEFITS.map((b) => {
    const Icon = b.icon;

    return (
      <div
        key={b.title}
        className="bg-white rounded-2xl p-6 card-hover"
        style={{ border: "1px solid rgba(134,72,155,0.1)" }}
      >
        <Icon className="w-7 h-7 mb-4 text-[#86489B]" />

          <h4 className={`${archivo.className} font-semibold! text-lg! mb-3!`} style={{ color: "#86489B" }}>{b.title}</h4>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{b.desc}</p>
              
      </div>
    );
  })}
</div>

          {/* <div className="grid md:grid-cols-3 gap-6 mb-14">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(134,72,155,0.1)" }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h4 className={`${archivo.className} font-semibold! text-lg! mb-3!`} style={{ color: "#86489B" }}>{b.title}</h4>
                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div> */}

          {/* How it works — simple 4 steps */}
          <div className="bg-white rounded-3xl p-8 md:p-10" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
            <h3 className={`${archivo.className} text-2xl! font-semibold! mb-8!`} style={{ color: "#000000" }}>How it works — in 4 steps</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { n: "1", title: "Meet eligibility criteria", desc: "Confirm you qualify based on residency, buyer status, and deposit." },
                { n: "2", title: "Save your deposit", desc: "5% for first home buyers, or 2% for single parents and legal guardians." },
                { n: "3", title: "Apply with a lender", desc: "Choose a participating lender — they submit the application on your behalf." },
                { n: "4", title: "Buy and move in", desc: "Purchase your eligible property and move in within 6 months of settlement." },
              ].map((step) => (
                <div key={step.n} className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-full step-dot flex items-center justify-center font-display font-black text-white text-lg mb-4">{step.n}</div>
                  <h5 className={`${archivo.className} font-semibold! text-base! mb-2!`} style={{ color: "#000000" }}>{step.title}</h5>
                  <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PARTICIPATING LENDERS
      ══════════════════════════════════════ */}
      <section id="lenders" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Participating Lenders
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Over 30 authorised lenders across Australia are approved to offer the Scheme. They will assess your eligibility, guide you through suitable loan options, and submit your application on your behalf.
          </p>
          <p className={`${roboto.className} font-medium! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#86489B" }}>
            Important: You must apply through a participating lender — applications cannot be made directly with the government.
          </p>

          {/* major lenders */}
          <h4 className={`${archivo.className} font-semibold! mb-3!`} style={{ color: "#86489B" }}>Major Banks</h4>
          <div className="flex flex-wrap gap-3 mb-10">
            {MAJOR_LENDERS.map((b) => (
              <div key={b} className={`${archivo.className} lender-chip rounded-full px-5 py-2 font-body text-sm font-medium`} style={{ color: "#6B6B6B" }}>{b}</div>
            ))}
          </div>

          {/* all lenders */}
          <h4 className="font-display font-bold text-lg mb-4" style={{ color: "#F171AC" }}>All Participating Lenders</h4>
          <div className="flex flex-wrap gap-3 mb-6">
            {visibleLenders.map((b) => (
              <div key={b} className={`${archivo.className} lender-chip rounded-full px-4 py-2 font-body text-sm`} style={{ color: "#6B6B6B" }}>{b}</div>
            ))}
          </div>

          {!showAllLenders && (
            <button
              onClick={() => setShowAllLenders(true)}
              className={`${archivo.className} text-sm! font-medium! px-6! py-3! rounded-full!`}
              style={{ border: "1.5px solid #86489B", color: "#86489B", background: "none", cursor: "pointer" }}
            >
              Show all {LENDERS.length} lenders ↓
            </button>
          )}

          <div className="mt-10 guarantee-card rounded-2xl p-6">
            <p className={`${archivo.className} m-0! text-sm! font-normal! tracking-normal! italic!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
              <strong style={{ color: "#86489B" }}>Lender tip:</strong> Each participating lender has its own credit policies and assessment criteria. A mortgage broker can compare multiple lenders simultaneously, helping you find the best interest rate and most suitable loan structure — often at no cost to you. For the most current full lender list, visit <strong>housingaustralia.gov.au</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section id="faq" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
        <div className="container mx-auto">
          <div className="mb-4 section-divider" />
          <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
            Frequently Asked Questions
          </h2>
          <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
            Everything you need to know about the Australian Government 5% Deposit Scheme.
          </p>

          <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
            {FAQS.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between px-6 py-4 gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className={`${archivo.className} font-bold text-base`} style={{ color: "#000000" }}>{f.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: openFaq === i ? "#86489B" : "#F171AC", transition: "background 0.2s" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-2">
                    <p className={`${roboto.className} text-[16px]! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.8 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      {/* <section className="px-6 md:px-12 py-24" style={{ background: "linear-gradient(135deg, #86489B 0%, #F171AC 100%)" }}>
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Own your home
            <br />
            <em>sooner than you think.</em>
          </h2>
          <p className="font-body text-lg text-white mb-4 max-w-xl mx-auto" style={{ lineHeight: 1.7, opacity: 0.95 }}>
            With just a 5% deposit — or 2% for single parents — the Australian Government 5% Deposit Scheme makes it easier than ever to step through the door of your own home.
          </p>
          <p className="font-body text-sm text-white mb-10 max-w-xl mx-auto" style={{ opacity: 0.75 }}>
            No LMI. No waitlists. No income caps. 248,000+ Australians have already benefited. Could you be next?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.housingaustralia.gov.au"
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "white", color: "#86489B", textDecoration: "none" }}
            >
              Official Housing Australia →
            </a>
            <a
              href="#lenders"
              className="font-body font-semibold px-8 py-4 rounded-full text-lg"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", textDecoration: "none", border: "2px solid rgba(255,255,255,0.4)" }}
            >
              Find a Lender
            </a>
          </div>
        </div>
      </section> */}

    </div>
  );
}