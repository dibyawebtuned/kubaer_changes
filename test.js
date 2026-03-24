"use client";
import { useState } from "react";

const NAV_LINKS = ["About", "Who Qualifies", "By State", "How to Apply", "Checklist", "FAQ"];

const FAQS = [
    {
        q: "Is stamp duty the same as transfer duty?",
        a: "Yes. 'Stamp duty' is the common term. Many states officially call it transfer duty (or conveyance duty). The concept is the same — a state/territory tax charged when property ownership is transferred.",
    },
    {
        q: "Do first home buyers always get stamp duty waived?",
        a: "No. Some buyers get a full exemption (duty reduced to $0), others get a partial concession (reduced but not zero), and some get no benefit — for example, if they exceed value caps or don't meet occupancy rules.",
    },
    {
        q: "What's the difference between a stamp duty exemption and a concession?",
        a: "An exemption reduces duty to $0. A concession reduces duty, but you still pay some amount. Which applies depends on the state, property type, and purchase price.",
    },
    {
        q: "What does 'dutiable value' mean?",
        a: "It usually means the higher of the purchase price or market value, used to calculate transfer duty. If the revenue office decides a negotiated price is under market value, they may assess duty on market value instead.",
    },
    {
        q: "When do I pay stamp duty in Australia?",
        a: "Usually at settlement (or shortly after), as part of the title transfer process handled by your conveyancer or solicitor. If settling electronically, it may be due on the day of settlement.",
    },
    {
        q: "Can stamp duty be added to my home loan?",
        a: "Generally, most lenders expect you to pay stamp duty from savings (genuine funds). Some loan structures may indirectly cover costs, but you shouldn't assume you can borrow the duty without confirming lender policy.",
    },
    {
        q: "How long do I have to live in the home to keep the concession?",
        a: "Often 6 or 12 continuous months depending on the state/territory. Always check the specific rule that applies to your scheme, and keep evidence of occupancy such as utility bills and electoral roll updates.",
    },
    {
        q: "If my partner owned a home before, can I still get the concession?",
        a: "Often your eligibility is reduced or removed entirely, but the exact outcome depends on the state/territory and how the scheme treats mixed-eligibility buyers. Check your jurisdiction carefully before signing a contract.",
    },
    {
        q: "What if I inherited a property — does that affect first home buyer status?",
        a: "It can. Even a partial interest on title may count as having owned property. This is a common 'surprise ineligibility' area. Seek advice from your conveyancer before assuming you qualify.",
    },
    {
        q: "Can I get the concession if I buy through a trust or company?",
        a: "Usually no. Most first home buyer concessions are designed for individuals buying in their own names. There are some niche exceptions, but don't assume eligibility without checking.",
    },
    {
        q: "Does the First Home Owner Grant (FHOG) remove stamp duty?",
        a: "Not automatically. FHOG is a cash grant (if eligible). Stamp duty relief is a separate tax exemption or concession. You may qualify for both, one, or neither — they have different rules.",
    },
    {
        q: "Can I receive both stamp duty relief and the Home Guarantee Scheme?",
        a: "Possibly yes. They are different programs — stamp duty relief is state-based, while the Home Guarantee Scheme is federal (via Housing Australia). Eligibility must be checked separately for each.",
    },
    {
        q: "What if I previously owned property with an ex-partner?",
        a: "Often no, because you've previously held an interest in residential property. Some schemes have exceptions, but they're not common. Always confirm with your conveyancer.",
    },
    {
        q: "Can I rent out a room and still qualify for owner-occupier benefits?",
        a: "Sometimes yes if you still genuinely live there as your main residence, but it's state-specific. Renting out the entire property is more likely to breach the occupancy rules.",
    },
];

const STATES = [
    { state: "NSW", get: "Full exemption or concessional rate", applies: "Established & new homes (value caps)", note: "Well-known assistance scheme with thresholds and a phase-out range." },
    { state: "VIC", get: "Full exemption or concession + off-the-plan rules", applies: "Established & new homes (value caps)", note: "Strongest concession below a lower threshold, tapering to a cap." },
    { state: "QLD", get: "First home concession (reduced duty)", applies: "Homes & sometimes vacant land (caps)", note: "QLD offers a concession rather than a broad $0 outcome at higher prices." },
    { state: "WA", get: "Full exemption to threshold; concession above", applies: "Established homes & vacant land", note: "Clear thresholds and different treatment for land vs homes." },
    { state: "SA", get: "Often strongest for new homes", applies: "New builds / off-the-plan primarily", note: "Focused relief for new homes. Established homes may not receive the same relief." },
    { state: "TAS", get: "Concessions / discounts (time-limited at times)", applies: "Established homes and/or new builds", note: "Support has included discounts that can change — check current settings." },
    { state: "ACT", get: "Concession scheme (sometimes to nil)", applies: "Owner-occupiers within income/property caps", note: "Eligibility model based on income and property value limits." },
    { state: "NT", get: "Concessions / discounts may apply", applies: "Often linked to new builds", note: "Structured as a discount up to a cap rather than a blanket exemption." },
];

const STEPS = [
    {
        num: "01",
        title: "Before You Sign",
        desc: "Confirm likely eligibility based on buyer names on title, property type, price, and intended occupancy. Check the correct thresholds for your state.",
        icon: "🔍",
        detail: "This is the most important step. Missing out on a concession is often preventable — but only if you check eligibility before exchanging contracts, not after.",
    },
    {
        num: "02",
        title: "Exchange / Contract Signing",
        desc: "Make sure the contract details match the scenario you're claiming — especially for off-the-plan or new builds. Property classification matters.",
        icon: "✍️",
        detail: "Confirm whether the property is classified as new, established, off-the-plan, or vacant land. This classification directly affects which concession (if any) applies.",
    },
    {
        num: "03",
        title: "Provide Declarations & ID",
        desc: "You'll sign first home buyer and occupancy declarations. Prepare your photo ID, evidence of citizenship/PR status if required, and signed contract of sale.",
        icon: "📋",
        detail: "Exact document requirements vary by state, but commonly include passport or driver's licence, signed first home buyer declaration, and signed owner-occupier declaration.",
    },
    {
        num: "04",
        title: "Conveyancer Lodges Duty Documents",
        desc: "Your conveyancer or solicitor applies the concession or exemption in the duty assessment process on your behalf — you don't submit this yourself.",
        icon: "⚖️",
        detail: "Your conveyancer will handle the duty calculation and lodgement as part of settlement. Ask them to confirm eligibility in writing based on your specific contract details.",
    },
    {
        num: "05",
        title: "Settlement & Ongoing Occupancy",
        desc: "Duty is paid, reduced, or waived as assessed. After settlement, you must meet the occupancy rule — move in within the required timeframe and live there as required.",
        icon: "🏠",
        detail: "Keep evidence of occupancy: utility connection, electoral roll update, mail redirection, or insurance showing the property as your home address. Don't rent it out or move out early without checking consequences first.",
    },
];

const MISTAKES = [
    { title: "Assuming eligibility without checking", desc: "Especially when buying with a partner who has previously owned property. Always verify before signing.", icon: "⚠️" },
    { title: "Not meeting the residency rule", desc: "Moving in too late, or renting the property out before occupying it yourself, can disqualify your claim.", icon: "🏚️" },
    { title: "Buying under a trust or company", desc: "Most first home buyer benefits are for individuals buying in their own names. Trusts and companies are typically ineligible.", icon: "🏢" },
    { title: "Mixing up grants vs stamp duty relief", desc: "The First Home Owner Grant (FHOG) and stamp duty concessions are separate programs with different rules.", icon: "🔀" },
    { title: "Incorrect property classification", desc: "'New home', 'off-the-plan', 'substantial renovation', and 'vacant land' are defined differently by each state.", icon: "📐" },
    { title: "Missing deadlines or paperwork", desc: "Declarations, evidence, and settlement timing all matter. Late or incomplete documents can cost you the concession.", icon: "⏰" },
];

const CHECKLIST = [
    "Confirm whether your state calls it stamp duty, transfer duty, or conveyance duty",
    "Check if you qualify for a full exemption or a partial concession",
    "Confirm the property value thresholds and caps for your state and property type",
    "Confirm whether the property is treated as new, off-the-plan, established, or vacant land",
    "Check the owner-occupier residency rule (move-in timeframe + minimum months living there)",
    "If buying with someone else, confirm both buyers' eligibility implications",
    "Ensure the ownership structure is in individual names (not a trust or company)",
    "Budget for other upfront costs: conveyancing, building/pest, lender fees, registration fees",
    "Ask your conveyancer to confirm eligibility in writing based on your contract details",
    "Use the relevant state revenue office calculator for a final stamp duty estimate",
    "Move in within the required timeframe after settlement",
    "Keep evidence you lived there — utilities, electoral roll, address changes",
    "Don't rent it out or move out early without checking consequences first",
];

export default function StampdutyComponent() {
    const [openFaq, setOpenFaq] = useState(null);
    const [openStep, setOpenStep] = useState(null);

    return (
        <div
            style={{ fontFamily: "'Georgia', serif", backgroundColor: "#FDF2F9", color: "#000000" }}
            className="min-h-screen"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

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

        .step-item {
          border-bottom: 1px solid rgba(134,72,155,0.1);
          transition: background 0.2s;
        }
        .step-item:last-child { border-bottom: none; }

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
        .scroll-reveal { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .warning-box {
          background: rgba(241,113,172,0.07);
          border-left: 4px solid #F171AC;
        }
        .info-box {
          background: rgba(134,72,155,0.07);
          border-left: 4px solid #86489B;
        }
        .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(134,72,155,0.08);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          color: #000;
          line-height: 1.6;
        }
        .checklist-item:last-child { border-bottom: none; }
        .state-row:nth-child(even) { background: rgba(134,72,155,0.03); }
        .flow-arrow {
          color: #F171AC;
          font-size: 1.5rem;
          text-align: center;
        }
      `}</style>

            {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
            <nav
                className="font-body sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
                style={{ backgroundColor: "rgba(253,242,249,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(134,72,155,0.1)" }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full purple-gradient flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="font-display font-bold text-base md:text-lg" style={{ color: "#86489B" }}>
                        Stamp Duty Concessions
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((l) => (
                        <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link font-body text-sm" style={{ color: "#6B6B6B" }}>
                            {l}
                        </a>
                    ))}
                </div>
                <a href="#checklist" className="font-body text-sm font-medium px-5 py-2 rounded-full text-white purple-gradient" style={{ textDecoration: "none" }}>
                    Checklist
                </a>
            </nav>

            {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
            <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

                <div className="container mx-auto relative">
                    <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-sm scroll-reveal" style={{ color: "#86489B" }}>
                        <span className="w-2 h-2 rounded-full purple-gradient" style={{ display: "inline-block" }} />
                        One of the biggest upfront costs — and one of the most overlooked savings
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-black leading-none mb-6 scroll-reveal" style={{ animationDelay: "0.1s", color: "#000000" }}>
                        Stamp Duty
                        <br />
                        <span className="highlight-number italic">Concessions.</span>
                    </h1>

                    <p className="font-body text-lg md:text-xl max-w-2xl mb-10 scroll-reveal" style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
                        <strong style={{ color: "#86489B" }}>Stamp duty (transfer duty)</strong> is a state and territory tax charged when you buy property — often one of the largest upfront costs after your deposit. Eligible first home buyers may receive a <strong style={{ color: "#86489B" }}>full exemption</strong> or <strong style={{ color: "#86489B" }}>partial concession</strong>, potentially saving thousands of dollars.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-16 scroll-reveal" style={{ animationDelay: "0.3s" }}>
                        <a href="#who-qualifies" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
                            Check Eligibility →
                        </a>
                        <a href="#by-state" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
                            By State
                        </a>
                    </div>

                    {/* stat strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal" style={{ animationDelay: "0.4s" }}>
                        {[
                            { number: "$0", label: "Duty with a full exemption" },
                            { number: "8", label: "States & territories — each with own rules" },
                            { number: "2", label: "Types: full exemption or partial concession" },
                            { number: "30", label: "Days — typical window to pay at settlement" },
                        ].map((s) => (
                            <div key={s.label} className="guarantee-card rounded-2xl p-5 card-hover">
                                <div className="font-display text-2xl md:text-3xl font-black highlight-number mb-1 leading-none">{s.number}</div>
                                <div className="font-body text-xs mt-1" style={{ color: "#6B6B6B", lineHeight: 1.4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
            <section id="about" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
                        What Is Stamp Duty?
                    </h2>
                    <p className="font-body text-lg mb-14 max-w-2xl" style={{ color: "#6B6B6B" }}>
                        Stamp duty is a state/territory tax on transferring property ownership. Because every state sets its own rules, the same home bought in different states can attract very different duty — or none at all.
                    </p>

                    {/* two types of concession */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {[
                            {
                                type: "Full Exemption",
                                value: "$0",
                                label: "Pay nothing",
                                desc: "The best-case outcome. You pay no stamp duty at all — usually applies when the property is under a certain value threshold and/or is a new home, and you meet owner-occupier requirements.",
                                color: "#86489B",
                                icon: "✅",
                            },
                            {
                                type: "Partial Concession",
                                value: "Reduced",
                                label: "Pay less",
                                desc: "You pay a discounted amount. Often applies when the property is above the full exemption threshold but below an upper cap — think of it as a sliding scale that phases out as value increases.",
                                color: "#F171AC",
                                icon: "📉",
                            },
                        ].map((c) => (
                            <div key={c.type} className="bg-white rounded-2xl p-8 card-hover" style={{ border: `1.5px solid ${c.color}33` }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{c.icon}</span>
                                    <div>
                                        <div className="font-display font-black text-3xl" style={{ color: c.color }}>{c.value}</div>
                                        <div className="font-display font-bold text-base" style={{ color: "#000000" }}>{c.type} — {c.label}</div>
                                    </div>
                                </div>
                                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* what it covers / doesn't */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                            <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#86489B" }}>What Stamp Duty Covers</h3>
                            <ul className="space-y-2">
                                {[
                                    "State/territory tax on transferring property ownership",
                                    "Calculated on the dutiable value — higher of purchase price or market value",
                                    "Affected by property type, buyer status, and concession eligibility",
                                    "May include foreign buyer surcharges in some states",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 font-body text-sm" style={{ color: "#000000" }}>
                                        <span style={{ color: "#86489B", marginTop: 2 }}>→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(241,113,172,0.2)" }}>
                            <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#F171AC" }}>Not Included in Stamp Duty</h3>
                            <ul className="space-y-2">
                                {[
                                    "Conveyancing / legal fees",
                                    "Loan establishment fees",
                                    "Building and pest inspection reports",
                                    "Mortgage registration / title registration fees",
                                    "Lenders Mortgage Insurance (LMI) if applicable",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 font-body text-sm" style={{ color: "#6B6B6B" }}>
                                        <span style={{ color: "#F171AC" }}>✕</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="info-box rounded-2xl p-5">
                        <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                            <strong style={{ color: "#86489B" }}>Concessions are state-specific:</strong> A property eligible for a full exemption in NSW might only get a partial concession in Victoria. Two first home buyers purchasing the same-priced home in different states can see very different results. Always check your jurisdiction.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          WHO QUALIFIES
      ══════════════════════════════════════ */}
            <section id="who-qualifies" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
                        Who Qualifies?
                    </h2>
                    <p className="font-body text-lg mb-12 max-w-2xl" style={{ color: "#6B6B6B" }}>
                        While the exact details vary by state, most first home buyer stamp duty concessions share common eligibility requirements.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
                            <h3 className="font-display text-xl font-bold mb-6" style={{ color: "#86489B" }}>Common Requirements</h3>
                            <ul className="space-y-0">
                                {[
                                    { label: "First home buyer status", desc: "You (and any co-buyer) haven't previously owned residential property in Australia — including inherited property depending on the scheme." },
                                    { label: "Natural person", desc: "You must be an individual buying in your own name — not a company or trust — to claim first home buyer benefits." },
                                    { label: "Residential property", desc: "You must be buying a residential property or eligible vacant land in that state/territory." },
                                    { label: "Owner-occupier intent", desc: "You intend to live in the home as your principal place of residence (PPOR), not as an investment." },
                                    { label: "Property value cap", desc: "You must be within the relevant cap for your state and property type. Caps vary significantly." },
                                    { label: "Citizenship / residency", desc: "Often requires Australian citizenship or permanent residency. Check your state's specific rules carefully." },
                                ].map((item) => (
                                    <li key={item.label} className="checklist-item">
                                        <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: "#86489B" }}>✓</span>
                                        <div>
                                            <div className="font-body font-medium text-sm mb-0.5" style={{ color: "#000000" }}>{item.label}</div>
                                            <div className="font-body text-xs" style={{ color: "#6B6B6B" }}>{item.desc}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-5">
                            {/* buying with others */}
                            <div className="rounded-3xl p-7" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
                                <h3 className="font-display text-xl font-bold text-white mb-3">⚠ Buying With Someone Else</h3>
                                <p className="font-body text-white text-sm mb-4" style={{ opacity: 0.95, lineHeight: 1.7 }}>
                                    This is the biggest "gotcha" area for stamp duty concessions.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "If one buyer is not a first home buyer, you may lose the concession entirely or only get a partial/proportional benefit — depends on state",
                                        "If parents go on title to help with borrowing, that can affect eligibility and sometimes triggers other complications",
                                        "Guarantors do not need to be on title — but if parents go on title, eligibility is at risk",
                                    ].map((h) => (
                                        <div key={h} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                                            <span className="text-white mt-0.5 flex-shrink-0">→</span>
                                            <span className="font-body text-white text-sm">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* occupancy requirement */}
                            <div className="info-box rounded-2xl p-5">
                                <h4 className="font-display font-bold text-base mb-2" style={{ color: "#86489B" }}>Owner-Occupier Residency Rule</h4>
                                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    Most concessions require you to <strong style={{ color: "#000000" }}>move in within 12 months of settlement</strong> and <strong style={{ color: "#000000" }}>live there continuously for at least 6–12 months</strong>. If you rent it out first or renovate without moving in, you may lose the concession and need to repay it — possibly with interest or penalties.
                                </p>
                            </div>

                            <div className="warning-box rounded-2xl p-5">
                                <h4 className="font-display font-bold text-base mb-2" style={{ color: "#F171AC" }}>New Builds vs Established Homes</h4>
                                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    New builds and off-the-plan purchases are often treated more generously than established homes — but not in every state. The property classification matters enormously. Check your state's current rules for the property type you're purchasing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          BY STATE
      ══════════════════════════════════════ */}
            <section id="by-state" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
                        State-by-State Summary
                    </h2>
                    <p className="font-body text-lg mb-12 max-w-2xl" style={{ color: "#6B6B6B" }}>
                        Rules change with state budgets — treat this as a high-level guide only and always confirm current thresholds with the relevant state revenue office.
                    </p>

                    <div className="bg-white rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
                        <div className="grid grid-cols-3 md:grid-cols-4 px-6 py-4 font-display font-bold text-sm" style={{ backgroundColor: "#FDF2F9", borderBottom: "1px solid rgba(134,72,155,0.1)", color: "#86489B" }}>
                            <span>State</span>
                            <span className="hidden md:block">What you may get</span>
                            <span>Often applies to</span>
                            <span className="hidden md:block">Notes</span>
                        </div>
                        {STATES.map((s, i) => (
                            <div key={s.state} className="state-row grid grid-cols-3 md:grid-cols-4 px-6 py-5 gap-2" style={{ borderBottom: i < STATES.length - 1 ? "1px solid rgba(134,72,155,0.07)" : "none" }}>
                                <div className="font-display font-black text-xl highlight-number">{s.state}</div>
                                <div className="hidden md:block font-body text-sm font-medium" style={{ color: "#86489B" }}>{s.get}</div>
                                <div className="font-body text-sm" style={{ color: "#000000" }}>{s.applies}</div>
                                <div className="hidden md:block font-body text-xs" style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{s.note}</div>
                            </div>
                        ))}
                    </div>

                    <div className="warning-box rounded-2xl p-5">
                        <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                            <strong style={{ color: "#F171AC" }}>Always verify:</strong> Use the official revenue office guidance and calculators for your state, and have your conveyancer confirm eligibility based on your contract and buyer details. Thresholds are updated regularly with state budgets.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          HOW TO APPLY
      ══════════════════════════════════════ */}
            <section id="how-to-apply" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
                        How to Apply
                    </h2>
                    <p className="font-body text-lg mb-12 max-w-2xl" style={{ color: "#6B6B6B" }}>
                        In most cases, you don't apply in the way you apply for a loan. The process is built into the purchase and settlement workflow — handled by your conveyancer.
                    </p>

                    <div className="rounded-2xl overflow-hidden bg-white mb-10" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
                        {STEPS.map((s, i) => (
                            <div key={s.num} className="step-item">
                                <button
                                    onClick={() => setOpenStep(openStep === i ? null : i)}
                                    className="w-full text-left flex items-start gap-5 px-6 py-6"
                                    style={{ background: "none", border: "none", cursor: "pointer" }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-base text-white purple-gradient">
                                        {s.num}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="font-display font-bold text-lg mb-1" style={{ color: "#000000" }}>{s.title}</div>
                                        <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{s.desc}</p>
                                    </div>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        <span className="text-2xl opacity-30">{s.icon}</span>
                                        <span className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: openStep === i ? "#86489B" : "#F171AC", transition: "background 0.2s" }}>
                                            {openStep === i ? "−" : "+"}
                                        </span>
                                    </div>
                                </button>
                                {openStep === i && (
                                    <div className="px-6 pb-6 pl-24">
                                        <div className="info-box rounded-xl p-4">
                                            <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{s.detail}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* common mistakes */}
                    <h3 className="font-display text-2xl font-bold mb-6" style={{ color: "#000000" }}>Common Mistakes to Avoid</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {MISTAKES.map((m) => (
                            <div key={m.title} className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                                <div className="text-2xl mb-3">{m.icon}</div>
                                <h4 className="font-display font-bold text-base mb-2" style={{ color: "#86489B" }}>{m.title}</h4>
                                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          CHECKLIST
      ══════════════════════════════════════ */}
            <section id="checklist" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
                        First Home Buyer Checklist
                    </h2>
                    <p className="font-body text-lg mb-12 max-w-2xl" style={{ color: "#6B6B6B" }}>
                        Use this before signing a contract. Covering these steps is how you avoid losing a concession you were entitled to.
                    </p>

                    <div className="rounded-2xl overflow-hidden bg-white mb-10" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
                        {CHECKLIST.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 px-6 py-4" style={{ borderBottom: i < CHECKLIST.length - 1 ? "1px solid rgba(134,72,155,0.07)" : "none", backgroundColor: i % 2 === 0 ? "white" : "rgba(134,72,155,0.02)" }}>
                                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white font-bold mt-0.5" style={{ background: i < 9 ? "#86489B" : "#F171AC" }}>
                                    {i + 1}
                                </span>
                                <span className="font-body text-sm" style={{ color: "#000000", lineHeight: 1.6 }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { title: "Before you sign", body: "Items 1–9 above should be completed before you exchange contracts. Getting these right early prevents costly surprises at settlement.", icon: "📋", color: "#86489B" },
                            { title: "At and after settlement", body: "Items 10–13 are about what you do after settlement. The occupancy requirement is ongoing — keep evidence that you moved in and stayed.", icon: "🏠", color: "#F171AC" },
                            { title: "Speak to your conveyancer", body: "Your conveyancer handles the duty assessment on your behalf. Ask them to confirm eligibility in writing based on your specific contract before signing.", icon: "⚖️", color: "#6B6B6B" },
                        ].map((c) => (
                            <div key={c.title} className="guarantee-card rounded-2xl p-6 card-hover">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h4 className="font-display font-bold text-base mb-2" style={{ color: c.color }}>{c.title}</h4>
                                <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{c.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
            <section id="faq" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "#000000" }}>
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-lg mb-12" style={{ color: "#6B6B6B" }}>
                        Everything first home buyers need to know about stamp duty concessions in Australia.
                    </p>

                    <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
                        {FAQS.map((f, i) => (
                            <div key={i} className="faq-item">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left flex items-center justify-between px-6 py-5 gap-4"
                                    style={{ background: "none", border: "none", cursor: "pointer" }}
                                >
                                    <span className="font-display font-bold text-base" style={{ color: "#000000" }}>{f.q}</span>
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: openFaq === i ? "#86489B" : "#F171AC", transition: "background 0.2s" }}>
                                        {openFaq === i ? "−" : "+"}
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5">
                                        <p className="font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.8 }}>{f.a}</p>
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
            <section className="px-6 md:px-12 py-24" style={{ background: "linear-gradient(135deg, #86489B 0%, #F171AC 100%)" }}>
                <div className="container mx-auto text-center">
                    <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Don't leave thousands
                        <br />
                        <em>on the table.</em>
                    </h2>
                    <p className="font-body text-lg text-white mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.7, opacity: 0.95 }}>
                        Stamp duty concessions can save first home buyers thousands of dollars — but only if you know the rules before you sign. Check your state's revenue office, use their calculator, and confirm eligibility with your conveyancer early.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: "NSW Revenue", href: "https://www.revenue.nsw.gov.au" },
                            { label: "VIC SRO", href: "https://www.sro.vic.gov.au" },
                            { label: "QLD OSR", href: "https://www.qro.qld.gov.au" },
                            { label: "All States", href: "https://www.firsthome.gov.au" },
                        ].map((link, i) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="font-body font-semibold px-6 py-3 rounded-full text-base"
                                style={{
                                    backgroundColor: i === 0 ? "white" : "rgba(255,255,255,0.15)",
                                    color: i === 0 ? "#86489B" : "white",
                                    textDecoration: "none",
                                    border: i === 0 ? "none" : "2px solid rgba(255,255,255,0.4)",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
            <footer className="px-6 md:px-12 py-10" style={{ backgroundColor: "#000000" }}>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full purple-gradient flex items-center justify-center">
                            <span className="text-white text-xs font-bold">S</span>
                        </div>
                        <span className="font-display font-bold text-white text-sm">Stamp Duty Concessions — First Home Buyers</span>
                    </div>
                    <p className="font-body text-xs text-center" style={{ color: "#6B6B6B" }}>
                        Informational purposes only. Always verify with your state revenue office or consult an independent conveyancer. Not financial or legal advice.
                    </p>
                    <p className="font-body text-xs" style={{ color: "#6B6B6B" }}>© 2025 Stamp Duty Guide</p>
                </div>
            </footer>
        </div>
    );
}