"use client";
import { useState } from "react";
import { Archivo, Roboto } from "next/font/google";
import {
    Home,
    Ruler,
    Hammer,
    Construction,
    Wrench,
    HousePlus,
} from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Medal, DollarSign } from "lucide-react";
import {
    IdCard,
    Users,
    FileSignature,
    Landmark,
} from "lucide-react";
import { Tag, ShieldCheck, Handshake } from "lucide-react";

const NAV_LINKS = ["About", "Eligibility", "State Grants", "How to Apply", "FAQ"];

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });


const STATE_GRANTS = [
    { state: "New South Wales", abbr: "NSW", amount: "$10,000", note: "Eligible new homes", color: "#86489B" },
    { state: "Victoria", abbr: "VIC", amount: "$10,000", note: "Eligible new homes", color: "#86489B" },
    { state: "Queensland", abbr: "QLD", amount: "Up to $30,000", note: "Subject to current state incentives", color: "#F171AC" },
    { state: "Western Australia", abbr: "WA", amount: "$10,000", note: "Eligible new homes", color: "#86489B" },
    { state: "South Australia", abbr: "SA", amount: "$15,000", note: "Eligible new homes", color: "#F171AC" },
    { state: "Tasmania", abbr: "TAS", amount: "$10,000", note: "Eligible new homes", color: "#86489B" },
    { state: "Northern Territory", abbr: "NT", amount: "Up to $50,000", note: "Subject to current territory programs", color: "#F171AC" },
    { state: "Australian Capital Territory", abbr: "ACT", amount: "No FHOG", note: "Home Buyer Concession Scheme applies instead", color: "#6B6B6B" },
];

const ELIGIBLE_PROPERTY_TYPES = [
    {
        type: "New Home",
        desc: "A recently built property that has not previously been occupied or sold as a place of residence — houses, duplexes, townhouses, units, apartments.",
        icon: Home,
    },
    {
        type: "Off-the-Plan Apartment",
        desc: "A property not yet built, or currently under construction but not substantially completed. Purchased based on architectural plans before construction finishes.",
        icon: Ruler,
    },
    {
        type: "Substantially Renovated Home",
        desc: "Major structural changes (not cosmetic) purchased from a GST-registered developer who has claimed GST credits on the renovation work.",
        icon: Hammer,
    },
    {
        type: "House & Land Package",
        desc: "Building a home on vacant land you already own, or purchasing vacant land and a building contract together as a package.",
        icon: Construction,
    },
    {
        type: "Owner-Builder Project",
        desc: "Building your own home without a full building contract. Must be a permanent, fixed dwelling providing complete living facilities.",
        icon: Wrench,
    },
    {
        type: "Knock-Down Rebuild",
        desc: "Demolish an existing home and build new — or subdivide land and build. Only eligible for contracts entered before 13 February 2025.",
        icon: HousePlus,
    },
];

const INELIGIBLE = [
    "Established (previously occupied) homes",
    "Investment properties",
    "Holiday homes",
    "Vacant land only (no build contract)",
    "Movable dwellings (caravans, tents, portable homes)",
    "Non-habitable structures (sheds, barns, garages)",
];

const FAQS = [
    {
        q: "Can you get more than $10,000 from the FHOG?",
        a: "Yes. Queensland offers up to $30,000, Tasmania up to $30,000 under current programs, and the Northern Territory up to $50,000 under eligible programs. Grant amounts change, so always confirm current state rules before applying.",
    },
    {
        q: "Can couples apply for the FHOG?",
        a: "Yes. Couples can apply together, but both must meet eligibility requirements. At least one applicant must be an Australian citizen or permanent resident, and neither can have previously received the FHOG or owned and lived in residential property in Australia.",
    },
    {
        q: "Can I get the FHOG if I've owned property before?",
        a: "Generally no. The FHOG is strictly for first-time buyers who have never owned and lived in residential property in Australia. Limited exceptions may apply in rare cases — for example, inherited property that was never lived in. Eligibility depends on your state's specific rules.",
    },
    {
        q: "Is the FHOG available for established homes?",
        a: "No. The FHOG is only available for brand-new homes, off-the-plan purchases, and substantially renovated homes that haven't been lived in since renovation. Previously occupied established homes do not qualify.",
    },
    {
        q: "Can I combine the FHOG with other schemes?",
        a: "Yes. Many buyers combine the FHOG with the First Home Guarantee (5% deposit, no LMI), stamp duty concessions, and other regional or construction incentives. Combining schemes can significantly reduce your total upfront costs.",
    },
    {
        q: "Can I get the FHOG for land only?",
        a: "Not on vacant land alone. The FHOG only applies when buying a newly built home or purchasing land and entering a building contract. If you buy land and later build, the grant is assessed once construction begins and eligibility conditions are met.",
    },
    {
        q: "Do I have to repay the grant if I sell my home?",
        a: "No — selling does not automatically require repayment. However, you must live in the property for at least 6 continuous months within the first 12 months of settlement or construction. Failure to meet this residency requirement may require repayment.",
    },
    {
        q: "Is the FHOG considered taxable income?",
        a: "No. The First Home Owner Grant is not considered taxable income by the ATO. You do not need to include it in your tax return, and it does not affect your income tax obligations. It is treated as a government incentive, not income.",
    },
    {
        q: "Do first-home buyers pay stamp duty in South Australia?",
        a: "No. Eligible first-home buyers are exempt from stamp duty on new homes or vacant land in South Australia. Normal stamp duty applies if you buy an established home or don't meet the eligibility criteria.",
    },
    {
        q: "I already own vacant land. Can I apply for the FHOG?",
        a: "Yes. You can apply if you are building your first home on the land. Vacant land on its own does not qualify — apply once your building contract is signed.",
    },
];

const DOCUMENTS = [
    {
        title: "Proof of Identity",
        items: [
            "Australian birth certificate",
            "Australian passport",
            "Australian citizenship certificate",
            "Australian ImmiCard",
            "Australian driver's licence",
            "Medicare card",
            "Current passport + permanent residency visa (if not a citizen)",
        ],
        icon: IdCard,
    },
    {
        title: "Spouse / Partner Details",
        items: [
            "Full name and date of birth",
            "Proof of identity",
            "Citizenship or residency status",
        ],
        icon: Users,
    },
    {
        title: "Name Change Documents",
        items: ["Marriage certificate", "Change of name certificate"],
        icon: FileSignature,
    },
    {
        title: "Property Documents (Buying)",
        items: [
            "Signed Contract of Sale",
            "Proof of settlement or property registration",
            "Vendor statement confirming not previously occupied",
            "Certificate of occupancy (off-the-plan)",
        ],
        icon: Home,
    },
    {
        title: "Property Documents (Building)",
        items: [
            "Signed building contract",
            "First progress payment invoice (usually foundations)",
            "Statutory declaration (owner-builder) confirming complete and ready to occupy",
        ],
        icon: Construction,
    },
    {
        title: "Payment Details",
        items: [
            "Financial institution name",
            "Account name",
            "BSB number",
            "Account number",
        ],
        icon: Landmark,
    },
];

const STEPS = [
    { num: "01", title: "Check Eligibility", desc: "Confirm you are a first-home buyer aged 18+, an Australian citizen or permanent resident, buying or building a new home you intend to live in.", icon: "✓" },
    { num: "02", title: "Gather Documents", desc: "Prepare proof of identity, property contracts, settlement evidence, and bank account details. Having these ready prevents delays.", icon: "📄" },
    { num: "03", title: "Understand Your Obligations", desc: "You must move in within 12 months and live in the property for at least 6 continuous months. Failure to comply may require repayment.", icon: "📋" },
    { num: "04", title: "Read the Lodgement Guide", desc: "Review the official guidelines from RevenueSA (or your state's revenue office) for application requirements, deadlines, and assessment process.", icon: "📖" },
    { num: "05", title: "Submit Your Application", desc: "Apply through your lender or mortgage broker (grant paid at settlement) or directly through your state's revenue office (paid within 5 business days of approval).", icon: "🚀" },
];

const COMPARISON_ROWS = [
    { label: "Type of benefit", fhog: "One-off cash payment", scheme: "Government loan guarantee" },
    { label: "Applies to", fhog: "New homes only", scheme: "New and existing homes" },
    { label: "Reduces", fhog: "Upfront purchase cost", scheme: "Deposit required & LMI" },
    { label: "Administered by", fhog: "State/territory government", scheme: "Housing Australia (federal)" },
    { label: "Income caps", fhog: "Varies by state", scheme: "None (from Oct 2025)" },
];

export default function FhogComponent() {
    const [openFaq, setOpenFaq] = useState(null);
    const [activeDoc, setActiveDoc] = useState(0);

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
        .table-row-alt:nth-child(even) { background: rgba(134,72,155,0.04); }
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
        .doc-tab {
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          background: none;
        }
        .doc-tab-active {
          background: linear-gradient(135deg, #86489B, #F171AC) !important;
          color: white !important;
        }
        .state-card {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .state-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(134,72,155,0.15);
        }
        .warning-box {
          background: rgba(241,113,172,0.07);
          border-left: 4px solid #F171AC;
        }
        .info-box {
          background: rgba(134,72,155,0.07);
          border-left: 4px solid #86489B;
        }
        .compare-table tr:nth-child(even) { background: rgba(134,72,155,0.03); }
      `}</style>

            {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
            <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-32">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #F171AC, transparent)", transform: "translate(30%, -30%)" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #86489B, transparent)", transform: "translate(-30%, 30%)" }} />

                <div className="container mx-auto relative">
                    <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-sm scroll-reveal" style={{ color: "#86489B" }}>
                        <span className="w-2 h-2 rounded-full purple-gradient" style={{ display: "inline-block" }} />
                        One-off government payment — up to $50,000
                    </div>

                    <h1 className={`${archivo.className} text-5xl! md:text-7xl! font-medium! leading-none mb-6! scroll-reveal! `} style={{ animationDelay: "0.1s", color: "#000000" }}>
                        The First Home
                        <br />
                        <span className="highlight-number italic">Owner Grant.</span>
                    </h1>

                    <p className={`${roboto.className} text-lg! max-w-xl! font-normal! tracking-normal! mb-10 scroll-reveal`} style={{ color: "#6B6B6B", animationDelay: "0.2s", lineHeight: 1.7 }}>
                        A <strong style={{ color: "#86489B" }}>one-off government payment</strong> of <strong style={{ color: "#86489B" }}>$10,000–$50,000</strong> for eligible first-home buyers purchasing or building a new home. Funded by individual state and territory governments — amounts and rules vary by location.
                    </p>

                    {/* <div className="flex flex-wrap gap-4 mb-16 scroll-reveal" style={{ animationDelay: "0.3s" }}>
                        <a href="#eligibility" className="font-body font-medium px-8 py-4 rounded-full text-white purple-gradient" style={{ textDecoration: "none", fontSize: "1rem" }}>
                            Check Eligibility →
                        </a>
                        <a href="#state-grants" className="font-body font-medium px-8 py-4 rounded-full" style={{ textDecoration: "none", fontSize: "1rem", border: "2px solid #86489B", color: "#86489B", backgroundColor: "transparent" }}>
                            See Your State
                        </a>
                    </div> */}

                    <div className={`flex flex-wrap gap-4 mb-16 scroll-reveal ${roboto.className}`} style={{ animationDelay: "0.3s" }}>
                        <div className="flex gap-3 lg:p-0">
                            <div className="">
                                <a href="#eligibility" className="extra-btn btn-default">
                                    Check Eligibility →
                                </a>
                            </div>

                            <div className="">
                                <a href="#state-grants" className="btn-default">
                                    See Your State
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* stat strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scroll-reveal" style={{ animationDelay: "0.4s" }}>
                        {[
                            { number: "$10K–$50K", label: "Grant amount by state" },
                            { number: "New", label: "Homes only — not established" },
                            { number: "6 mo.", label: "Minimum residency required" },
                            { number: "Tax-free", label: "Not included in taxable income" },
                        ].map((s) => (
                            <div key={s.label} className="guarantee-card rounded-2xl p-5 card-hover">
                                <div className={`${archivo.className} text-2xl! md:text-4xl! font-semibold! highlight-number mb-1! leading-none!`}>{s.number}</div>
                                <div className={`${roboto.className} text-sm! font-normal! mt-1!`} style={{ color: "#6B6B6B", lineHeight: 1.4 }}>{s.label}</div>
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
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        What Is the FHOG?
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-14! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        The First Home Owner Grant is a one-off payment introduced by the Australian Government but funded and administered by individual state and territory governments. Rules, amounts, and property caps differ depending on where you buy.
                    </p>

                    {/* eligible property types */}
                    <h3 className={`${archivo.className} text-2xl! font-bold! mb-6!`}>Eligible Property Types</h3>
                    {/* <div className="grid md:grid-cols-3 gap-5 mb-10">
                        {ELIGIBLE_PROPERTY_TYPES.map((p) => (
                            <div key={p.type} className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1px solid rgba(134,72,155,0.12)", backgroundColor: "#FDF2F9" }}>
                                <div className="text-3xl mb-3">{p.icon}</div>
                                <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`}>{p.type}</h4>
                                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div> */}
                    <div className="grid md:grid-cols-3 gap-5 mb-10">
                        {ELIGIBLE_PROPERTY_TYPES.map((p) => {
                            const Icon = p.icon;

                            return (
                                <div
                                    key={p.type}
                                    className="bg-white rounded-2xl p-6 card-hover"
                                    style={{
                                        border: "1px solid rgba(134,72,155,0.12)",
                                        backgroundColor: "#FDF2F9",
                                    }}
                                >
                                    <Icon className="w-7 h-7 mb-3 text-[#86489B]" />

                                    <h4 className={`${archivo.className} font-semibold! text-lg! mb-2!`}>{p.type}</h4>
                                    <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.6 }}>{p.desc}</p>

                                </div>
                            );
                        })}
                    </div>

                    {/* contract date callout */}
                    {/* <div className="grid md:grid-cols-2 gap-5 mb-10">
                        <div className="info-box rounded-2xl p-6">
                            <h4 className={`${archivo.className} font-semibold! text-md! mb-3!`} style={{ color: "#86489B" }}>📅 Contracts from 13 Feb 2025 onwards</h4>
                            <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>You may still be eligible if you build a new home on vacant land. Knock-down rebuild projects are <strong>not eligible</strong> for contracts entered on or after this date.</p>
                        </div>
                        <div className="warning-box rounded-2xl p-6">
                            <h4 className={`${archivo.className} font-semibold! text-md! mb-3!`} style={{ color: "#F171AC" }}>📅 Contracts before 13 Feb 2025</h4>
                            <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>Knock-down rebuild projects may still qualify, provided all other FHOG eligibility conditions are met. Check with your state revenue office to confirm.</p>
                        </div>
                    </div> */}
                    {/* contract date callout */}
                    <div className="grid md:grid-cols-2 gap-5 mb-10">
                        <div className="info-box rounded-2xl p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <CalendarDays className="w-5 h-5 mt-1 text-[#86489B]" />
                                <h4
                                    className={`${archivo.className} font-semibold text-md`}
                                    style={{ color: "#86489B" }}
                                >
                                    Contracts from 13 Feb 2025 onwards
                                </h4>
                            </div>

                            <p
                                className={`${roboto.className} text-sm font-normal tracking-normal`}
                                style={{ color: "#6B6B6B", lineHeight: 1.7 }}
                            >
                                You may still be eligible if you build a new home on vacant land.
                                Knock-down rebuild projects are <strong>not eligible</strong> for
                                contracts entered on or after this date.
                            </p>
                        </div>

                        <div className="warning-box rounded-2xl p-6">
                            <div className="flex items-start gap-3 mb-3">
                                <CalendarDays className="w-5 h-5 mt-1 text-[#F171AC]" />
                                <h4
                                    className={`${archivo.className} font-semibold text-md`}
                                    style={{ color: "#F171AC" }}
                                >
                                    Contracts before 13 Feb 2025
                                </h4>
                            </div>

                            <p
                                className={`${roboto.className} text-sm font-normal tracking-normal`}
                                style={{ color: "#6B6B6B", lineHeight: 1.7 }}
                            >
                                Knock-down rebuild projects may still qualify, provided all other FHOG
                                eligibility conditions are met. Check with your state revenue office to
                                confirm.
                            </p>
                        </div>
                    </div>

                    {/* ineligible */}
                    <div className="rounded-2xl p-6" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}>
                        <h4 className={`${archivo.className} font-semibold! text-lg! mb-4!`}>⚠ Properties Not Eligible for the FHOG</h4>
                        <div className="grid md:grid-cols-3 gap-3 font-body text-sm! font-normal!" style={{ color: "#6B6B6B" }}>
                            {INELIGIBLE.map((x) => (
                                <div key={x} className="flex items-center gap-2">
                                    <span style={{ color: "#F171AC" }}>✕</span> {x}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          ELIGIBILITY
      ══════════════════════════════════════ */}
            <section id="eligibility" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        Eligibility Criteria
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        While rules vary slightly by state, these core requirements apply across Australia.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white rounded-2xl p-8 card-hover" style={{ border: "1.5px solid rgba(134,72,155,0.2)" }}>
                            <h3 className={`${archivo.className} text-xl font-medium! mb-4!`}>You Must</h3>
                            <ul className="space-y-3">
                                {[
                                    "Be at least 18 years old and apply as an individual (not a company or trust)",
                                    "Be an Australian citizen or permanent resident (at least one applicant)",
                                    "Not have previously received the FHOG",
                                    "Not have previously owned and lived in residential property in Australia",
                                    "Be buying or building a new home — not an established property",
                                    "Purchase below your state's property price cap",
                                    "Move in within 12 months and live there for at least 6 continuous months",
                                ].map((item) => (
                                    <li key={item} className={`${archivo.className} flex items-center gap-2 text-sm! font-normal!`} style={{ color: "#000000" }}>
                                        <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: "#86489B" }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-5">
                            {/* residency requirement detail */}
                            <div className="bg-white rounded-2xl p-6 card-hover" style={{ border: "1.5px solid rgba(241,113,172,0.25)" }}>
                                <h3 className={`${archivo.className} font-medium! text-md! mb-4!`} style={{ color: "#86489B" }}>Residency Requirement</h3>
                                <div className="space-y-3 font-body text-sm" style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>All applicants must move in within <strong style={{ color: "#000000" }}>12 months</strong> and live in the property for at least <strong style={{ color: "#000000" }}>6 continuous months</strong>.</p>
                                    <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>For building contracts or owner-builder projects, the 12-month period starts <strong style={{ color: "#000000" }}>when the home is ready for occupation</strong>.</p>
                                    <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>You can rent out a portion (e.g., a room) during the 6-month period. After meeting the requirement, there are no FHOG restrictions on selling or renting.</p>
                                </div>
                            </div>

                            {/* ADF exemption */}
                            <div className="guarantee-card rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Medal className="w-5 h-5 mt-1 text-[#86489B]" />

                                    <h4 className={`${archivo.className} font-medium! text-sm!`} style={{ color: "#86489B" }}>Australian Defence Force Personnel</h4>

                                </div>

                                <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    Permanent Forces members unable to meet the 6-month residency requirement due to service may apply for an exemption — if enrolled to vote in South Australian elections at the date of contract. Does not apply to reservists or APS staff.
                                </p>
                            </div>

                            {/* tax treatment */}
                            <div
                                className="bg-white rounded-2xl p-6"
                                style={{ border: "1px solid rgba(134,72,155,0.12)" }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-5 h-5 mt-1 text-[#86489B]" />

                                    <h4 className={`${archivo.className} font-semibold! text-sm!`} style={{ color: "#86489B" }}>Is the FHOG Taxable?</h4>

                                </div>

                                <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    No. The FHOG is <strong style={{ color: "#000000" }}>not taxable income</strong>. You do not need to include it in your tax return. It does not affect your income tax obligations. Normal investment property tax rules apply only if you later rent the property out.
                                </p>
                            </div>

                            {/* ADF exemption */}
                            {/* <div className="guarantee-card rounded-2xl p-6">
                                <h4 className={`${archivo.className} font-medium! text-sm! mb-2!`} style={{ color: "#86489B" }}>🎖 Australian Defence Force Personnel</h4>
                                <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    Permanent Forces members unable to meet the 6-month residency requirement due to service may apply for an exemption — if enrolled to vote in South Australian elections at the date of contract. Does not apply to reservists or APS staff.
                                </p>
                            </div> */}

                            {/* tax treatment */}
                            {/* <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid rgba(134,72,155,0.12)" }}>
                                <h4 className={`${archivo.className} font-semibold! text-sm! mb-2!`} style={{ color: "#86489B" }}>💰 Is the FHOG Taxable?</h4>
                                <p className={`${archivo.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                                    No. The FHOG is <strong style={{ color: "#000000" }}>not taxable income</strong>. You do not need to include it in your tax return. It does not affect your income tax obligations. Normal investment property tax rules apply only if you later rent the property out.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          STATE-BY-STATE GRANTS
      ══════════════════════════════════════ */}
            <section id="state-grants" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        Grant Amounts by State
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        Each state and territory sets its own grant amount, property value caps, and eligibility conditions. Always verify current rules with your state revenue office before applying.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {STATE_GRANTS.map((s) => (
                            <div
                                key={s.state}
                                className="state-card rounded-2xl p-6 bg-white"
                                style={{ border: `1.5px solid ${s.color}33` }}
                            >
                                <div
                                    className="inline-block px-3 py-1 rounded-full font-body text-xs font-bold text-white mb-3"
                                    style={{ backgroundColor: s.color === "#6B6B6B" ? "#6B6B6B" : s.color }}
                                >
                                    {s.abbr}
                                </div>
                                <div className={`${archivo.className} text-2xl! font-semibold! mb-1!`} style={{ color: s.color === "#6B6B6B" ? "#6B6B6B" : s.color }}>
                                    {s.amount}
                                </div>
                                <div className={`${roboto.className} font-semibold! text-sm! mb-2!`} style={{ color: "#000000" }}>{s.state}</div>
                                <p className={`${roboto.className} text-xs! font-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.5 }}>{s.note}</p>
                            </div>
                        ))}
                    </div>

                    <div className="warning-box rounded-2xl px-5 py-4">
                        <p className={`${roboto.className} m-0! italic! text-sm font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>
                            <strong style={{ color: "#86489B" }}>Note:</strong> Grant amounts and eligibility rules change regularly. The ACT does not offer a FHOG but provides the Home Buyer Concession Scheme as an alternative. Always confirm current amounts and conditions directly with your state or territory revenue office.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          FHOG vs FIRST HOME BUYER SCHEME COMPARISON
      ══════════════════════════════════════ */}
            <section className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FDF2F9" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        FHOG vs First Home Buyer Scheme
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        These two programs are often confused — but they work very differently. You may be eligible for <em>both</em>.
                    </p>

<div className="overflow-x-auto rounded-2xl mb-8 border border-[rgba(134,72,155,0.15)]">
  <table className="w-full min-w-[600px] font-body text-sm compare-table">
    <thead>
      <tr className="bg-gradient-to-r from-[#86489B] to-[#F171AC]">
        <th className={`${archivo.className} text-left px-6 py-4 text-white font-medium w-1/3`}></th>
        <th className={`${archivo.className} text-left px-6 py-4 text-white font-medium`}>
          First Home Owner Grant (FHOG)
        </th>
        <th className={`${archivo.className} text-left px-6 py-4 text-white font-medium`}>
          First Home Buyer Scheme
        </th>
      </tr>
    </thead>
    <tbody>
      {COMPARISON_ROWS.map((row) => (
        <tr
          key={row.label}
          className="border-t border-[rgba(134,72,155,0.06)]"
        >
          <td
            className={`${archivo.className} px-6 py-4 font-medium`}
            style={{ color: "#000000" }}
          >
            {row.label}
          </td>
          <td
            className={`${archivo.className} px-6 py-4 font-medium`}
            style={{ color: "#86489B" }}
          >
            {row.fhog}
          </td>
          <td
            className={`${archivo.className} px-6 py-4 font-medium`}
            style={{ color: "#F171AC" }}
          >
            {row.scheme}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

                    <div className="rounded-3xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className={`${archivo.className} text-2xl! font-semibold! text-white mb-3!`}>Can you use both?</h3>
                                <p className={`${roboto.className} text-white text-base! font-normal! tracking-normal!`} style={{ opacity: 0.95, lineHeight: 1.7 }}>
                                    Yes — and this is where first-home buyers benefit the most. If you qualify for both, you can use the First Home Buyer Scheme to purchase with a <strong>5% deposit</strong> and use the FHOG to <strong>boost your deposit or reduce construction costs</strong>.
                                </p>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { label: "Buying a new home?", detail: "You may qualify for FHOG + stamp duty concession + First Home Buyer Scheme" },
                                    { label: "Buying an established home?", detail: "You may qualify for stamp duty concession + First Home Buyer Scheme, but NOT the FHOG" },
                                    { label: "Building a new home?", detail: "You may qualify for all three — FHOG, 5% Deposit Scheme, and stamp duty concessions" },
                                ].map((item) => (
                                    <div key={item.label} className="rounded-xl px-5 py-4" style={{ backgroundColor: "rgba(255,255,255,0.18)" }}>
                                        <div className={`${archivo.className} text-white font-medium! text-sm! tracking-normal!`}>{item.label}</div>
                                        <div className={`${archivo.className} text-white text-xs! mt-1! tracking-normal!`} style={{ opacity: 0.8 }}>{item.detail}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          DOCUMENT CHECKLIST
      ══════════════════════════════════════ */}
            <section className="px-6 md:px-12 py-24" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        Document Checklist
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        Prepare these documents before applying. Having them ready prevents delays and ensures your application is assessed quickly.
                    </p>

                    {/* tab navigation */}
                    {/* <div className="flex flex-wrap gap-2 mb-6">
                        {DOCUMENTS.map((d, i) => (
                            <button
                                key={d.title}
                                onClick={() => setActiveDoc(i)}
                                className={`doc-tab ${archivo.className} text-sm! font-normal! tracking-normal! px-4 py-2 rounded-full ${activeDoc === i ? "doc-tab-active" : ""}`}
                                style={{ color: activeDoc === i ? "white" : "#6B6B6B", border: "1px solid rgba(134,72,155,0.2)" }}
                            >
                                {d.icon} {d.title}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(134,72,155,0.15)" }}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`${archivo.className} text-3xl`}>{DOCUMENTS[activeDoc].icon}</span>
                            <h3 className={`${archivo.className} font-semibold! text-xl! font-normal! tracking-normal!`} style={{ color: "#86489B" }}>{DOCUMENTS[activeDoc].title}</h3>
                        </div>
                        <ul className="space-y-3">
                            {DOCUMENTS[activeDoc].items.map((item) => (
                                <li key={item} className="flex items-start gap-3 font-body text-sm" style={{ color: "#000000", lineHeight: 1.6 }}>
                                    <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Tab navigation */}
<div className="flex flex-wrap gap-2 mb-6">
  {DOCUMENTS.map((d, i) => {
    const Icon = d.icon;
    return (
      <button
        key={d.title}
        onClick={() => setActiveDoc(i)}
        className={`doc-tab ${archivo.className} text-sm font-normal tracking-normal px-4 py-2 rounded-full flex items-center gap-2 ${
          activeDoc === i ? "doc-tab-active" : ""
        }`}
        style={{
          color: activeDoc === i ? "white" : "#6B6B6B",
          border: "1px solid rgba(134,72,155,0.2)",
        }}
      >
        <Icon className="w-4 h-4" />
        {d.title}
      </button>
    );
  })}
</div>

{/* Active document panel */}
<div
  className="bg-white rounded-2xl p-6 sm:p-8 overflow-x-auto"
  style={{ border: "1px solid rgba(134,72,155,0.15)" }}
>
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
    {/* Optional Icon */}
    {/* <DOCUMENTS[activeDoc].icon className="w-7 h-7 text-[#86489B]" /> */}
    <h3
      className={`${archivo.className} font-semibold text-xl tracking-normal`}
      style={{ color: "#86489B" }}
    >
      {DOCUMENTS[activeDoc].title}
    </h3>
  </div>

  <ul className="space-y-3">
    {DOCUMENTS[activeDoc].items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-3 text-sm"
        style={{ color: "#000000", lineHeight: 1.6 }}
      >
        <span
          className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white"
          style={{ background: "linear-gradient(135deg, #86489B, #F171AC)" }}
        >
          ✓
        </span>
        {item}
      </li>
    ))}
  </ul>
</div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          HOW TO APPLY
      ══════════════════════════════════════ */}
            <section id="how-to-apply" className="px-6 md:px-12 py-24" style={{ backgroundColor: "#FEF3F8" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4!`}>
                        How to Apply
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! max-w-2xl!`} style={{ color: "#6B6B6B" }}>
                        {`Apply through your lender or mortgage broker (simplest), or directly via your state's revenue office. Follow these five steps.`}
                    </p>

                    <div className="space-y-5 mb-12">
                        {STEPS.map((s) => (
                            <div key={s.num} className="flex gap-6 items-start card-hover rounded-2xl px-6 py-3 bg-white" style={{ border: "1px solid rgba(134,72,155,0.1)" }}>
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl text-white purple-gradient">
                                    {s.num}
                                </div>
                                <div>
                                    <h4 className={`${archivo.className} font-semibold! text-xl! mb-2!`} style={{ color: "#000000" }}>{s.title}</h4>
                                    <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{s.desc}</p>
                                </div>
                                {/* <div className="ml-auto flex-shrink-0 text-2xl opacity-40">{s.icon}</div> */}
                            </div>
                        ))}
                    </div>

                    {/* payment timing */}
                    <h3 className={`${archivo.className} text-xl! font-bold! mb-6!`} style={{ color: "#F171AC" }}>When Is the Grant Paid?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                method: "Through an Approved Agent (Lender / Broker)",
                                color: "#86489B",
                                rows: [
                                    { type: "New home or off-the-plan", timing: "Paid at settlement" },
                                    { type: "Comprehensive building contract", timing: "Paid on first construction progress payment" },
                                    { type: "Owner-builder", timing: "Paid once supporting docs + statutory declaration submitted" },
                                ],
                            },
                            {
                                method: "Directly Through RevenueSA",
                                color: "#F171AC",
                                rows: [
                                    { type: "New home or off-the-plan", timing: "Within 5 business days of approval (after proof of lodgement with Land Titles Office)" },
                                    { type: "Comprehensive building contract", timing: "Within 5 business days of approval (after first progress payment invoice)" },
                                    { type: "Owner-builder", timing: "Within 5 business days of approval once statutory declaration submitted" },
                                ],
                            },
                        ].map((col) => (
                            <div key={col.method} className="bg-white rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${col.color}33` }}>
                                <div className="px-6 py-4" style={{ background: `${col.color}15` }}>
                                    <h4 className={`${archivo.className} font-semibold! text-base!`} style={{ color: col.color }}>{col.method}</h4>
                                </div>
                                <div className="divide-y" style={{ borderColor: `${col.color}15` }}>
                                    {col.rows.map((r) => (
                                        <div key={r.type} className="px-6 py-4">
                                            <div className={`${roboto.className} text-md! font-medium! mb-1!`} style={{ color: "#000000" }}>{r.type}</div>
                                            <div className={`${roboto.className} text-[14px]! font-normal! tracking-normal!`} style={{ color: "#6B6B6B" }}>{r.timing}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          SA ADDITIONAL BENEFITS
      ══════════════════════════════════════ */}
            <section className="px-6 md:px-12 py-20" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto">
                    <div className="mb-4 section-divider" />
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-5!`}>
                        Other Benefits for First-Home Buyers in South Australia
                    </h2>
                    {/* <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { title: "Stamp Duty Exemption", desc: "Full exemption on new homes and vacant land in South Australia — with no value cap. Normal stamp duty applies for established homes or if eligibility isn't met.", icon: "🏷️" },
                            { title: "First Home Guarantee", desc: "Buy with just a 5% deposit through the Australian Government 5% Deposit Scheme and avoid Lenders Mortgage Insurance entirely.", icon: "🛡" },
                            { title: "HomeStart Shared Equity", desc: "Borrow up to 25% of the property value interest-free and repayment-free. HomeStart shares proportionally in any gain or loss when you sell or refinance.", icon: "🤝" },
                        ].map((b) => (
                            <div key={b.title} className="guarantee-card rounded-2xl p-6 card-hover">
                                <div className="text-3xl mb-4">{b.icon}</div>
                                <h4 className={`${archivo.className} font-semibold! text-lg! mb-3!`} style={{ color: "#86489B" }}>{b.title}</h4>
                                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{b.desc}</p>
                            </div>
                        ))}
                    </div> */}

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            {
                                title: "Stamp Duty Exemption",
                                desc: "Full exemption on new homes and vacant land in South Australia — with no value cap. Normal stamp duty applies for established homes or if eligibility isn't met.",
                                icon: Tag,
                            },
                            {
                                title: "First Home Guarantee",
                                desc: "Buy with just a 5% deposit through the Australian Government 5% Deposit Scheme and avoid Lenders Mortgage Insurance entirely.",
                                icon: ShieldCheck,
                            },
                            {
                                title: "HomeStart Shared Equity",
                                desc: "Borrow up to 25% of the property value interest-free and repayment-free. HomeStart shares proportionally in any gain or loss when you sell or refinance.",
                                icon: Handshake,
                            },
                        ].map((b) => {
                            const Icon = b.icon;

                            return (
                                <div key={b.title} className="guarantee-card rounded-2xl p-6 card-hover">
                                    <Icon className="w-7 h-7 mb-4 text-[#86489B]" />

                                    <h4 className={`${archivo.className} font-semibold! text-lg! mb-3!`} style={{ color: "#86489B" }}>{b.title}</h4>
                                <p className={`${roboto.className} text-sm! font-normal! tracking-normal!`} style={{ color: "#6B6B6B", lineHeight: 1.7 }}>{b.desc}</p>
                            
                                </div>
                            );
                        })}
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
                        Common questions about the First Home Owner Grant answered.
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
                    <h2 className={`${archivo.className} text-4xl! md:text-5xl! font-medium! mb-4! text-white`}>
                        Ready to claim
                        <br />
                        <em>your grant?</em>
                    </h2>
                    <p className={`${roboto.className} font-normal! tracking-normal! text-[16px]! mb-7! max-w-2xl! mx-auto! text-white`} style={{ lineHeight: 1.7, opacity: 0.95 }}>
                        {`Speak to a participating lender or mortgage broker to apply for the FHOG alongside your home loan — or apply directly through your state's revenue office.`}
                    </p>


                    <div className={`flex flex-wrap justify-center gap-4  scroll-reveal ${roboto.className}`} style={{ animationDelay: "0.3s" }}>
                        <div className="flex gap-3 lg:p-0">
                            <div className="">
                                <a href="https://www.housingaustralia.gov.au/support-buy/help-buy" className="extra-btn">
                                    RevenueSA → Apply Now
                                </a>
                            </div>

                            <div className="">
                                <a href="https://www.commbank.com.au/home-loans/help-to-buy.html" className="extra-btn">
                                    Read the FAQs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
}