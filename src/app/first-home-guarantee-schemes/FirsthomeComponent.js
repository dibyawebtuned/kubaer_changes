"use client";

import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ─── DATA ───────────────────────────────────────────────────────────────────

const stats = [
    { value: '248,000+', label: 'Australians Helped Since 2020' },
    { value: '5%', label: 'Min. Deposit — First Home Buyers' },
    { value: '2%', label: 'Min. Deposit — Single Parents' },
    { value: '$0', label: 'Lenders Mortgage Insurance' },
]

const benefits = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
        ),
        title: 'Smaller Deposit',
        desc: "Buy your first home with just a 5% deposit — or as little as 2% if you're a single parent or legal guardian.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        title: 'No LMI',
        desc: 'The Government guarantee means you skip Lenders Mortgage Insurance — saving thousands in upfront costs.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'No Income Caps',
        desc: 'Since 1 October 2025, income caps have been removed — more Australians than ever can now qualify.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
        ),
        title: 'No Waitlists',
        desc: 'Apply any time through a participating lender — no limited places, no queues, no delays.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M3 6h18M3 10h18M3 14h18M3 18h18" />
            </svg>
        ),
        title: 'Flexible Properties',
        desc: 'New or existing homes, townhouses, apartments, house & land packages — choose what suits your lifestyle.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Higher Price Caps',
        desc: 'Updated property price limits reflect current market values so you can buy in more locations.',
    },
]

const steps = [
    { num: '01', title: 'Check Eligibility', desc: 'Confirm you meet the criteria — first home buyer or single parent/guardian, Australian citizen or permanent resident.' },
    { num: '02', title: 'Save Your Deposit', desc: 'Reach your minimum deposit — 5% for first home buyers, or 2% for single parents and legal guardians.' },
    { num: '03', title: 'Choose a Lender', desc: 'Select one of 30+ participating lenders across Australia and begin your application with their guidance.' },
    { num: '04', title: 'Buy Your Home', desc: 'Settlement complete — move in within six months and enjoy your new home with government-backed security.' },
]

const faqs = [
    {
        q: 'Do I have to be a first home buyer?',
        a: "For the First Home Guarantee: yes — you must not have owned a home or land in Australia in the past 10 years. For the Family Home Guarantee: you don't need to be a first-time buyer, but you cannot own another property once your new home settles.",
    },
    {
        q: "Can I apply if I'm not an Australian Citizen?",
        a: 'The Scheme is available to Australian Citizens and Permanent Residents only. Your lender will confirm your eligibility as part of the assessment.',
    },
    {
        q: 'Do I still need a Notice of Assessment after 1 October 2025?',
        a: 'For applications on or after 1 October 2025: No — income caps no longer apply, so a Notice of Assessment is not required. For applications before 1 October 2025: Yes, the pre-October rules still apply.',
    },
    {
        q: 'What if I default on my loan?',
        a: 'The Government guarantee protects your lender — not you personally. It covers any shortfall if the property sale does not fully repay the loan. Contact your lender early if you face financial difficulty.',
    },
    {
        q: 'Do I have to live in the property straight away?',
        a: 'You must move in within six months of settlement and continue living there while the Government Guarantee is active. Properties with existing tenants are allowed, as long as you move in within six months.',
    },
    {
        q: 'Is my deposit a percentage of the purchase price?',
        a: "It's based on the home's value as assessed by your lender, which may differ from the purchase price. Speak with your Participating Lender if this happens.",
    },
]

const lenders = [
    'Australian Military Bank', 'Australian Mutual Bank', 'Auswide Bank', 'Bank Australia',
    'Bank First', 'Bank of Melbourne', 'Bank SA', 'Bank of Us', 'Bendigo Bank', 'Beyond Bank',
    'Border Bank', 'Commonwealth Bank', 'Community First Bank', 'Credit Union SA',
    'Defence Bank', 'Firefighters Mutual Bank', 'G&C Mutual Bank', 'Gateway Bank',
    'Great Southern Bank', 'Health Professionals Bank', 'Hume Bank',
    'Indigenous Business Australia (IBA)', 'Illawarra Credit Union', 'IMB Bank',
    'MyState Bank', 'National Australia Bank (NAB)', 'Newcastle Permanent', "People's Choice",
    'Police Bank', 'QBank', 'Queensland Country Bank', 'Regional Australia Bank',
    'Southern Cross Credit Union', 'St George Bank', 'Teachers Mutual Bank',
    'The Mutual Bank', 'UniBank', 'Unity Bank', 'Westpac', 'Bank WAW',
]

// ─── BRAND TOKENS ────────────────────────────────────────────────────────────
// pink:       #e91e8c   purple:    #9b27af   deep purple: #6a1b9a
// pink light: #fdf4ff   pink soft: #fce8f8   border pink: #f0d6f5
// text dark:  #1a1a2e   footer:    #1a1a3e

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

function ChevronDown({ open }) {
    return (
        <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            style={{ color: '#e91e8c' }}
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}

function FaqItem({ q, a, open, onToggle }) {
    return (
        <div
            className="rounded-xl overflow-hidden transition-colors duration-200"
            style={{ border: `1px solid ${open ? '#e91e8c' : '#f0d6f5'}` }}
        >
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left transition-colors"
                style={{ background: open ? '#fdf4ff' : 'white' }}
                onMouseEnter={e => { if (!open) e.currentTarget.style.background = '#fdf4ff' }}
                onMouseLeave={e => { if (!open) e.currentTarget.style.background = 'white' }}
            >
                <span className="text-[15px] font-semibold leading-snug" style={{ color: '#1a1a2e' }}>{q}</span>
                <ChevronDown open={open} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 pb-5' : 'max-h-0'}`}
                style={{ background: 'white' }}
            >
                <p className="px-6 text-[14px] leading-relaxed font-light text-gray-500">{a}</p>
            </div>
        </div>
    )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function FirsthomeComponent() {
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <>
            <Head>
                <style>{`
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
          .animate-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

          .hero-grid {
            background-image:
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
            background-size: 60px 60px;
          }

          .benefit-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .benefit-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 40px rgba(233,30,140,0.12);
            border-color: #e91e8c !important;
          }

          .lender-pill { transition: border-color 0.15s, color 0.15s; }
          .lender-pill:hover { border-color: #e91e8c !important; color: #e91e8c !important; }

          .btn-white {
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .btn-white:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 28px rgba(0,0,0,0.2) !important;
          }

          .btn-ghost { transition: border-color 0.2s, background 0.2s; }
          .btn-ghost:hover {
            border-color: rgba(255,255,255,0.7) !important;
            background: rgba(255,255,255,0.1) !important;
          }
        `}</style>
            </Head>

            <div className="overflow-x-hidden bg-white">

                {/* ══════════════════════════════════════════ HERO — pink to purple gradient (matches Kubaer) ══════════════════════════════════════════ */}
                <section
                    className="relative overflow-hidden px-6 pt-28 pb-24"
                    style={{ background: 'linear-gradient(135deg, #e91e8c 0%, #c2185b 28%, #9b27af 65%, #6a1b9a 100%)' }}
                >
                    <div className="hero-grid absolute inset-0 pointer-events-none" />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 70% 55% at 80% 25%, rgba(255,255,255,0.12) 0%, transparent 65%)' }}
                    />

                    <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        {/* Left */}
                        <div>
                            <span
                                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
                                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
                                Australian Government Initiative
                            </span>

                            <h1 className="text-5xl xl:text-6xl font-black text-white leading-[1.08] mb-5">
                                Your Home.<br />
                                <span style={{ color: '#fce4f7' }}>5% Deposit.</span><br />
                                No LMI.
                            </h1>

                            <p className="text-[17px] leading-relaxed font-light mb-9 max-w-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                                The Australian Government 5% Deposit Scheme helps first home buyers and single parents step into home ownership sooner — no income caps, no waitlists, and no Lenders Mortgage Insurance.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#how-it-works"
                                    className="btn-white inline-block font-bold text-[15px] px-8 py-4 rounded-lg"
                                    style={{ background: 'white', color: '#e91e8c', boxShadow: '0 4px 20px rgba(0,0,0,0.18)' }}
                                >
                                    Get Started Today
                                </a>
                                <a
                                    href="#benefits"
                                    className="btn-ghost inline-block font-medium text-[15px] px-7 py-4 rounded-lg text-white"
                                    style={{ border: '1px solid rgba(255,255,255,0.4)' }}
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Right card */}
                        <div
                            className="rounded-2xl p-9"
                            style={{ background: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(12px)' }}
                        >
                            <p className="text-[17px] font-semibold mb-6 text-white">
                                Two Pathways to Home Ownership
                            </p>
                            <div className="flex flex-col gap-4">
                                <div
                                    className="rounded-xl p-5"
                                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)' }}
                                >
                                    <p className="text-[11px] font-bold tracking-widest uppercase mb-1.5" style={{ color: '#fce4f7' }}>First Home Buyers</p>
                                    <p className="font-semibold text-[15px] mb-1 text-white">First Home Guarantee (FHBG)</p>
                                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        Minimum deposit: <span className="font-bold text-white">5%</span>
                                    </p>
                                </div>
                                <div
                                    className="rounded-xl p-5"
                                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)' }}
                                >
                                    <p className="text-[11px] font-bold tracking-widest uppercase mb-1.5" style={{ color: '#fce4f7' }}>Single Parents &amp; Legal Guardians</p>
                                    <p className="font-semibold text-[15px] mb-1 text-white">Family Home Guarantee (FHG)</p>
                                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        Minimum deposit: <span className="font-bold text-white">2%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════ STATS BAR — very light pink ══════════════════════════════════════════ */}
                <div
                    className="px-6 py-12"
                    style={{ background: '#fdf4ff', borderTop: '1px solid #f0d6f5', borderBottom: '1px solid #f0d6f5' }}
                >
                    <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((s, i) => (
                            <div key={s.label} className="text-center px-5 py-6 relative">
                                {i < stats.length - 1 && (
                                    <span
                                        className="absolute right-0 top-1/4 bottom-1/4 w-px"
                                        style={{ background: 'rgba(233,30,140,0.18)' }}
                                    />
                                )}
                                <p className="text-4xl font-bold leading-none mb-2" style={{ color: '#e91e8c' }}>{s.value}</p>
                                <p className="text-[13px] leading-snug text-gray-500">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════════════════════════════════════ BENEFITS — white bg ══════════════════════════════════════════ */}
                <section id="benefits" className="px-6 py-20 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: '#e91e8c' }}>Why This Scheme</p>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1a1a2e' }}>
                            Everything You Need to<br className="hidden lg:block" /> Own Your First Home
                        </h2>
                        <p className="text-[16px] leading-relaxed font-light max-w-xl mb-12 text-gray-500">
                            Since 1 October 2025, the Scheme has been simplified and expanded to help more Australians get into the property market sooner.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((b) => (
                                <div
                                    key={b.title}
                                    className="benefit-card rounded-xl p-8 bg-white cursor-default"
                                    style={{ border: '1px solid #f0d6f5' }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                                        style={{ background: '#fdf0fb', color: '#e91e8c' }}
                                    >
                                        {b.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-3" style={{ color: '#1a1a2e' }}>{b.title}</h3>
                                    <p className="text-sm leading-relaxed font-light text-gray-500">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════ HOW IT WORKS — soft lavender-pink bg ══════════════════════════════════════════ */}
                <section id="how-it-works" className="relative px-6 py-20 overflow-hidden" style={{ background: '#fce8f8' }}>
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse 50% 70% at 95% 50%, rgba(155,39,175,0.08) 0%, transparent 65%)' }}
                    />
                    <div className="relative z-10 max-w-6xl mx-auto">
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: '#e91e8c' }}>The Process</p>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: '#1a1a2e' }}>Four Simple Steps</h2>
                        <p className="text-[16px] font-light leading-relaxed max-w-xl mb-14 text-gray-500">
                            From eligibility check to moving in — here is how to take advantage of the Scheme.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
                            {/* connecting line desktop */}
                            <div
                                className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
                                style={{ background: 'linear-gradient(90deg, transparent, rgba(233,30,140,0.4), transparent)' }}
                            />

                            {steps.map((s) => (
                                <div key={s.num} className="text-center px-4">
                                    <div className="flex justify-center mb-5">
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white"
                                            style={{
                                                background: 'linear-gradient(135deg, #e91e8c, #9b27af)',
                                                boxShadow: '0 4px 18px rgba(233,30,140,0.38)',
                                            }}
                                        >
                                            {s.num}
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-[16px] mb-3" style={{ color: '#1a1a2e' }}>{s.title}</h3>
                                    <p className="text-sm leading-relaxed font-light text-gray-500">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════ CTA BANNER ══════════════════════════════════════════ */}
                <section className="px-6 py-20 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div
                            className="relative rounded-2xl px-10 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #e91e8c 0%, #c2185b 35%, #9b27af 100%)' }}
                        >
                            <div
                                className="absolute right-0 top-0 w-80 h-80 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%)' }}
                            />
                            <div className="relative z-10 max-w-xl">
                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                                    Ready to Own Your Home Sooner?
                                </h3>
                                <p className="text-[15px] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                                    Over 248,000 Australians have already used the Scheme. Speak with a participating lender today — no income caps, no queues.
                                </p>
                            </div>
                            <div className="relative z-10 flex-shrink-0">
                                <a
                                    href="#lenders"
                                    className="btn-white inline-block font-bold text-[15px] px-9 py-4 rounded-lg whitespace-nowrap"
                                    style={{ background: 'white', color: '#e91e8c', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
                                >
                                    Find a Lender
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════ FAQ — very light pink ══════════════════════════════════════════ */}
                <section className="px-6 py-20" style={{ background: '#fdf4ff' }}>
                    <div className="max-w-2xl mx-auto">
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-3 text-center" style={{ color: '#e91e8c' }}>Common Questions</p>
                        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#1a1a2e' }}>
                            Frequently Asked Questions
                        </h2>
                        <div className="flex flex-col gap-3">
                            {faqs.map((f, i) => (
                                <FaqItem
                                    key={i}
                                    q={f.q}
                                    a={f.a}
                                    open={openFaq === i}
                                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════ LENDERS — white ══════════════════════════════════════════ */}
                <section id="lenders" className="px-6 py-20 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: '#e91e8c' }}>Approved Lenders</p>
                        <h2 className="text-4xl font-bold mb-3" style={{ color: '#1a1a2e' }}>30+ Participating Lenders</h2>
                        <p className="text-[16px] font-light leading-relaxed max-w-xl mb-10 text-gray-500">
                            Choose from a wide network of authorised lenders across Australia. They will assess your eligibility and guide you through every step.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {lenders.map((l) => (
                                <div
                                    key={l}
                                    className="lender-pill rounded-lg px-4 py-3 text-[13px] font-medium text-center cursor-default"
                                    style={{ background: '#fdf4ff', border: '1px solid #f0d6f5', color: '#4a3a5e' }}
                                >
                                    {l}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════ IMPORTANT NOTICE ══════════════════════════════════════════ */}
                <div className="px-6 pb-16 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div
                            className="rounded-xl px-6 py-5 text-sm leading-relaxed text-gray-500"
                            style={{ background: '#fdf0fb', border: '1px solid #f5c6ea' }}
                        >
                            <span className="font-semibold" style={{ color: '#1a1a2e' }}>Important: </span>
                            To apply, you must speak directly with a Participating Lender. They will review your individual circumstances and confirm your eligibility. The Government guarantee protects the lender — not the borrower — in the event of a loan default.
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}