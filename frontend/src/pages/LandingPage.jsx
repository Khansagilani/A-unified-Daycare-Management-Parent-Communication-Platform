import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

// ─── Color palette ────────────────────────────────────────────────────────────
const C = {
    green: '#0d7c4f',
    greenLight: '#e8f5ee',
    greenMid: '#10b981',
    teal: '#0e9f82',
    amber: '#f59e0b',
    amberLight: '#fef3c7',
    navy: '#0f2044',
    navyMid: '#1e3a5f',
    text: '#1a2e1a',
    muted: '#5c7060',
    bg: '#f8fdf9',
    white: '#ffffff',
}

const WA_NUMBER = '924234567890'
const WA_TOUR = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello NestCare! I'd like to book a free tour for my child.")}`
const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello NestCare! I have a question about enrollment.")}`

// ─── Reusable section wrapper ─────────────────────────────────────────────────
function Section({ id, style, children }) {
    return (
        <section id={id} style={{ padding: '5rem 1.5rem', ...style }}>
            <div style={{ maxWidth: 1120, margin: '0 auto' }}>
                {children}
            </div>
        </section>
    )
}

function SectionLabel({ children }) {
    return (
        <span style={{
            display: 'inline-block',
            background: C.greenLight,
            color: C.green,
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: 999,
            marginBottom: '1rem',
            border: `1px solid #b6e2cb`,
        }}>
            {children}
        </span>
    )
}

function SectionTitle({ children, light }) {
    return (
        <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            color: light ? C.white : C.navy,
            lineHeight: 1.15,
            margin: '0 0 1rem',
            fontFamily: "'Georgia', serif",
        }}>
            {children}
        </h2>
    )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
    return (
        <div style={{
            background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 55%, #0a4a6e 100%)`,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{ position: 'absolute', top: -120, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(16,185,129,0.07)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -80, left: -80, width: 350, height: 350, borderRadius: '50%', background: 'rgba(245,158,11,0.06)', pointerEvents: 'none' }} />

            <div style={{ height: 68 }} />

            <div style={{
                flex: 1, display: 'flex', alignItems: 'center',
                padding: '3rem 2.5rem 4rem',
                maxWidth: 1120, margin: '0 auto', width: '100%',
                gap: '3rem',
            }}>
                <div style={{ flex: 1, maxWidth: 600 }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: 'rgba(16,185,129,0.15)',
                        border: '1px solid rgba(16,185,129,0.3)',
                        borderRadius: 999, padding: '5px 14px',
                        marginBottom: '1.5rem',
                    }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                        <span style={{ color: '#6ee7b7', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em' }}>NOW ENROLLING — 2025–2026</span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        color: '#fff',
                        lineHeight: 1.08,
                        margin: '0 0 1.4rem',
                        fontFamily: "'Georgia', serif",
                        letterSpacing: '-0.02em',
                    }}>
                        A nurturing home <br />
                        <span style={{ color: '#6ee7b7' }}>where children thrive</span>
                    </h1>

                    <p style={{
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: '1.1rem',
                        lineHeight: 1.75,
                        marginBottom: '2.5rem',
                        maxWidth: 480,
                    }}>
                        NestCare provides premium early childhood care in a safe, loving environment. From infants to preschoolers — every child gets the attention and warmth they deserve.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        <Link to="/register" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '0.9rem 1.8rem',
                            background: 'linear-gradient(135deg, #10b981, #0d7c4f)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: 14,
                            fontWeight: 800,
                            fontSize: '0.95rem',
                            boxShadow: '0 6px 24px rgba(16,185,129,0.4)',
                        }}>
                            Register as Parent →
                        </Link>
                        <a href={WA_TOUR} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '0.9rem 1.8rem',
                            background: '#25D366',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: 14,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Book a Free Tour
                        </a>
                        <a href="#about" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            padding: '0.9rem 1.8rem',
                            background: 'rgba(255,255,255,0.08)',
                            border: '1.5px solid rgba(255,255,255,0.15)',
                            color: 'rgba(255,255,255,0.9)',
                            textDecoration: 'none',
                            borderRadius: 14,
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            backdropFilter: 'blur(8px)',
                        }}>
                            Learn More
                        </a>
                    </div>

                    {/* Trust stats */}
                    <div style={{ display: 'flex', gap: 28, marginTop: '2.5rem', flexWrap: 'wrap' }}>
                        {[
                            ['500+', 'Happy Families'],
                            ['98%', 'Parent Satisfaction'],
                            ['8+', 'Years of Care'],
                            ['1:4', 'Staff–Child Ratio'],
                        ].map(([num, label]) => (
                            <div key={label}>
                                <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', lineHeight: 1 }}>{num}</div>
                                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', fontWeight: 500, marginTop: 3 }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ flex: '0 0 380px', display: 'none' }} className="hero-card-lg">
                    <HeroDashboardCard />
                </div>
            </div>

            <div style={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
                <a href="#about" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.8rem' }}>↓ scroll to explore</a>
            </div>
        </div>
    )
}

function HeroDashboardCard() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 24,
            padding: '1.5rem',
            color: '#fff',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Today</div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>Care Overview</div>
                </div>
                <div style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 999, padding: '4px 10px', fontSize: '0.75rem', color: '#6ee7b7' }}>Live</div>
            </div>
            {['Maya — Checked in ✓', 'Noah — Daily log ready', 'Ayaan — Nap time'].map((item) => (
                <div key={item} style={{
                    background: 'rgba(255,255,255,0.06)', borderRadius: 10,
                    padding: '0.6rem 0.8rem', marginBottom: 8,
                    fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 8,
                }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #10b981, #0d7c4f)', flexShrink: 0 }} />
                    {item}
                </div>
            ))}
        </div>
    )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
    const values = [
        { icon: '💛', title: 'Warmth & Safety', desc: 'A home-like environment where every child feels secure, loved, and cared for every single day.' },
        { icon: '🌱', title: 'Holistic Development', desc: 'We nurture cognitive, social, emotional, and physical growth through play-based learning.' },
        { icon: '🤝', title: 'Parent Partnership', desc: 'We keep parents connected with real-time updates, daily logs, and open communication.' },
        { icon: '🎓', title: 'Qualified Caregivers', desc: 'Our staff are trained in early childhood education and certified in first aid and childcare.' },
    ]

    const ratios = [
        { group: 'Infants', ratio: '1:3', color: '#f59e0b', bg: '#fef3c7' },
        { group: 'Toddlers', ratio: '1:5', color: C.green, bg: C.greenLight },
        { group: 'Pre-Nursery', ratio: '1:7', color: '#2563eb', bg: '#eff6ff' },
        { group: 'Nursery', ratio: '1:8', color: '#7c3aed', bg: '#f5f3ff' },
    ]

    return (
        <Section id="about" style={{ background: C.bg }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                <div>
                    <SectionLabel>About NestCare</SectionLabel>
                    <SectionTitle>Where every child is known by name</SectionTitle>
                    <p style={{ color: C.muted, lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.97rem' }}>
                        Founded with a mission to provide exceptional early childhood care, NestCare has been a trusted partner for families since 2016. Our center offers a warm, stimulating environment that supports every stage of your child's development.
                    </p>
                    <p style={{ color: C.muted, lineHeight: 1.8, fontSize: '0.97rem', marginBottom: '1.5rem' }}>
                        We believe childcare is more than just supervision — it's a foundation for lifelong learning. With low child-to-staff ratios and individualized care plans, each child at NestCare receives the attention they need to flourish.
                    </p>

                    {/* Staff-to-child ratio strip */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
                            Staff–Child Ratios
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {ratios.map(r => (
                                <div key={r.group} style={{
                                    background: r.bg, border: `1px solid ${r.color}30`,
                                    borderRadius: 10, padding: '6px 12px',
                                    display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    <span style={{ fontWeight: 900, color: r.color, fontSize: '0.9rem' }}>{r.ratio}</span>
                                    <span style={{ color: C.muted, fontSize: '0.75rem' }}>{r.group}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link to="/register" style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '0.75rem 1.5rem',
                        background: C.green, color: '#fff',
                        borderRadius: 12, fontWeight: 700, fontSize: '0.9rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(13,124,79,0.25)',
                    }}>
                        Register Your Child →
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {values.map(v => (
                        <div key={v.title} style={{
                            background: C.white,
                            borderRadius: 18,
                            padding: '1.4rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                            border: '1px solid #eef3f0',
                        }}>
                            <div style={{ fontSize: 28, marginBottom: '0.7rem' }}>{v.icon}</div>
                            <div style={{ fontWeight: 700, color: C.navy, fontSize: '0.93rem', marginBottom: '0.4rem' }}>{v.title}</div>
                            <div style={{ color: C.muted, fontSize: '0.8rem', lineHeight: 1.6 }}>{v.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

// ─── Programs ─────────────────────────────────────────────────────────────────
function Programs() {
    const programs = [
        {
            icon: '🍼',
            name: 'Infant Care',
            age: '3 months – 1 year',
            color: '#fef3c7',
            accent: '#f59e0b',
            features: ['Low 1:3 staff ratio', 'Feeding & sleep schedules', 'Milestone tracking', 'Parent daily updates'],
            desc: 'Gentle, responsive care for your youngest family members. We work closely with parents to maintain familiar routines.',
        },
        {
            icon: '🧸',
            name: 'Toddler Room',
            age: '1 – 3 years',
            color: '#e8f5ee',
            accent: C.green,
            features: ['1:5 staff ratio', 'Language development', 'Social skills', 'Potty training support'],
            desc: 'An active, exploratory environment where toddlers build independence, language, and early social bonds.',
        },
        {
            icon: '🎨',
            name: 'Pre-Nursery',
            age: '3 – 4 years',
            color: '#eff6ff',
            accent: '#2563eb',
            features: ['1:7 staff ratio', 'STEM & creative arts', 'Early literacy', 'Bilingual (English/Urdu)'],
            desc: 'Preparing young minds for school with structured creative activities, stories, and collaborative play.',
        },
        {
            icon: '🔤',
            name: 'Nursery / KG Prep',
            age: '4 – 5 years',
            color: '#f5f3ff',
            accent: '#7c3aed',
            features: ['1:8 staff ratio', 'School readiness', 'Numeracy & literacy', 'Confidence building'],
            desc: 'A focused, school-readiness program that equips children with the skills and confidence to excel in formal education.',
        },
    ]

    return (
        <Section id="programs" style={{ background: '#fff' }}>
            <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 3rem' }}>
                <SectionLabel>Our Programs</SectionLabel>
                <SectionTitle>Care tailored to every age</SectionTitle>
                <p style={{ color: C.muted, lineHeight: 1.75 }}>
                    From newborns to kindergarten-ready children, our age-specific programs are designed by early childhood educators to support each developmental stage.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
                {programs.map(p => (
                    <div key={p.name} style={{
                        background: p.color,
                        borderRadius: 22,
                        padding: '1.8rem',
                        border: `1.5px solid ${p.accent}22`,
                    }}>
                        <div style={{ fontSize: 36, marginBottom: '1rem' }}>{p.icon}</div>
                        <div style={{
                            display: 'inline-block',
                            background: p.accent + '18',
                            color: p.accent,
                            fontSize: '0.7rem', fontWeight: 700,
                            padding: '3px 10px', borderRadius: 999,
                            marginBottom: '0.6rem',
                            border: `1px solid ${p.accent}30`,
                        }}>
                            {p.age}
                        </div>
                        <h3 style={{ color: C.navy, fontWeight: 800, fontSize: '1.1rem', margin: '0 0 0.6rem', fontFamily: "'Georgia', serif" }}>{p.name}</h3>
                        <p style={{ color: C.muted, fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {p.features.map(f => (
                                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 7, color: C.muted, fontSize: '0.78rem', marginBottom: 5 }}>
                                    <span style={{ color: p.accent, fontWeight: 700 }}>✓</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    )
}

// ─── Photo Gallery ────────────────────────────────────────────────────────────
function PhotoGallery() {
    const spaces = [
        { icon: '🌳', title: 'Outdoor Play Area', gradient: 'linear-gradient(135deg, #84cc16 0%, #15803d 100%)', desc: 'Spacious garden & playground' },
        { icon: '📚', title: 'Reading Corner', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', desc: 'Cozy library nook' },
        { icon: '🎵', title: 'Music & Movement', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', desc: 'Dance & instruments studio' },
        { icon: '🍽️', title: 'Dining Hall', gradient: 'linear-gradient(135deg, #0e9f82 0%, #0d7c4f 100%)', desc: 'Bright & hygienic meal area' },
        { icon: '😴', title: 'Sleep Room', gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2044 100%)', desc: 'Quiet nap rooms with soft lighting' },
        { icon: '🎭', title: 'Arts Studio', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', desc: 'Daily painting, clay & craft' },
        { icon: '🧩', title: 'Activity Room', gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', desc: 'STEM toys & puzzles' },
        { icon: '🛡️', title: 'Secure Entry', gradient: 'linear-gradient(135deg, #475569 0%, #1e293b 100%)', desc: 'CCTV & controlled access' },
    ]

    return (
        <Section id="gallery" style={{ background: C.bg }}>
            <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 3rem' }}>
                <SectionLabel>Our Facility</SectionLabel>
                <SectionTitle>A space designed for wonder</SectionTitle>
                <p style={{ color: C.muted, lineHeight: 1.75 }}>
                    Every corner of NestCare is thoughtfully designed to spark curiosity, encourage exploration, and ensure your child's safety and comfort.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem',
            }}>
                {spaces.map((s, i) => (
                    <div key={s.title} style={{
                        background: s.gradient,
                        borderRadius: 20,
                        padding: '2rem 1.5rem',
                        minHeight: i === 0 || i === 4 ? 220 : 170,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'default',
                    }}>
                        <div style={{
                            position: 'absolute', top: '1.2rem', left: '1.2rem',
                            fontSize: 36,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                        }}>
                            {s.icon}
                        </div>
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
                            borderRadius: 20,
                        }} />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.92rem', lineHeight: 1.2 }}>{s.title}</div>
                            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem', marginTop: 3 }}>{s.desc}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a href={WA_TOUR} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '0.8rem 1.6rem',
                    background: '#25D366', color: '#fff',
                    borderRadius: 12, fontWeight: 700, fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Book a Free Tour via WhatsApp
                </a>
            </div>
        </Section>
    )
}

// ─── Environment ──────────────────────────────────────────────────────────────
function Environment() {
    const spaces = [
        { icon: '🌳', title: 'Outdoor Play Area', desc: 'Spacious, safe outdoor space with age-appropriate play equipment, sandpit, and garden.' },
        { icon: '📚', title: 'Reading Corner', desc: 'Cozy library nook stocked with age-appropriate books to build a love of reading early.' },
        { icon: '🎵', title: 'Music & Movement', desc: 'Dedicated space for music, dance, and creative expression through movement and instruments.' },
        { icon: '🍽️', title: 'Dining Hall', desc: 'Clean, bright dining area where children enjoy nutritious halal-certified meals together.' },
        { icon: '😴', title: 'Sleep Room', desc: 'Quiet, safe nap rooms with individual beds and soft lighting for restful afternoon sleep.' },
        { icon: '🎭', title: 'Creative Arts Studio', desc: 'A dedicated arts space for painting, clay, craft, and sensory activities every day.' },
    ]

    return (
        <Section id="environment" style={{ background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)` }}>
            <div style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 3rem' }}>
                <SectionLabel>Our Environment</SectionLabel>
                <SectionTitle light>Purpose-built for early learning</SectionTitle>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
                    Every corner of NestCare is thoughtfully designed to spark curiosity, encourage exploration, and ensure your child's safety and comfort.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {spaces.map(s => (
                    <div key={s.title} style={{
                        background: 'rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 18,
                        padding: '1.5rem',
                    }}>
                        <div style={{ fontSize: 32, marginBottom: '0.8rem' }}>{s.icon}</div>
                        <h3 style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '1rem' }}>{s.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                gap: 12, marginTop: '3rem',
            }}>
                {[
                    'CCTV Monitored',
                    'Halal Meals',
                    'First Aid Certified Staff',
                    'Air Conditioned',
                    'Hygienic & Clean',
                    'Secure Entry System',
                    'Bilingual English/Urdu',
                    'Low Staff–Child Ratios',
                ].map(f => (
                    <span key={f} style={{
                        background: 'rgba(16,185,129,0.12)',
                        border: '1px solid rgba(16,185,129,0.25)',
                        color: '#6ee7b7',
                        borderRadius: 999, padding: '6px 16px',
                        fontSize: '0.78rem', fontWeight: 600,
                    }}>
                        ✓ {f}
                    </span>
                ))}
            </div>
        </Section>
    )
}

// ─── Fees ─────────────────────────────────────────────────────────────────────
function Fees() {
    const plans = [
        {
            name: 'Infant Care',
            price: '25,000',
            period: '/month',
            highlight: false,
            includes: ['Full-day care (7am–5pm)', 'Formula/bottle feeding', 'Daily log & photos', 'Nap tracking', 'Parent app access'],
        },
        {
            name: 'Toddler & Pre-Nursery',
            price: '18,000',
            period: '/month',
            highlight: true,
            badge: 'Most Popular',
            includes: ['Full-day care (7am–5pm)', 'Healthy meals included', 'Daily activity updates', 'Monthly progress report', 'Parent app access'],
        },
        {
            name: 'Half Day',
            price: '12,000',
            period: '/month',
            highlight: false,
            includes: ['Half-day (7am–1pm)', 'Snack included', 'Daily log updates', 'Parent app access', 'Flexible timing'],
        },
    ]

    return (
        <Section id="fees" style={{ background: C.bg }}>
            <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 3rem' }}>
                <SectionLabel>Fee Structure</SectionLabel>
                <SectionTitle>Transparent, all-inclusive pricing</SectionTitle>
                <p style={{ color: C.muted, lineHeight: 1.75 }}>
                    No hidden charges. All fees are monthly and include meals, activities, and access to the NestCare parent portal. One-time registration fee of PKR 5,000.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
                {plans.map(p => (
                    <div key={p.name} style={{
                        background: p.highlight ? C.navy : C.white,
                        borderRadius: 22,
                        padding: '2rem',
                        border: p.highlight ? 'none' : '1.5px solid #e8f0ea',
                        boxShadow: p.highlight ? '0 20px 60px rgba(15,32,68,0.25)' : '0 2px 12px rgba(0,0,0,0.04)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {p.badge && (
                            <div style={{
                                position: 'absolute', top: 16, right: 16,
                                background: 'linear-gradient(135deg, #10b981, #0d7c4f)',
                                color: '#fff', fontSize: '0.68rem', fontWeight: 800,
                                padding: '3px 10px', borderRadius: 999,
                                letterSpacing: '0.05em',
                            }}>
                                {p.badge}
                            </div>
                        )}
                        <h3 style={{ color: p.highlight ? '#fff' : C.navy, fontWeight: 700, fontSize: '1rem', margin: '0 0 0.8rem' }}>{p.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: '1.5rem' }}>
                            <span style={{ color: p.highlight ? '#6ee7b7' : C.green, fontSize: '0.85rem', fontWeight: 700 }}>PKR</span>
                            <span style={{ color: p.highlight ? '#fff' : C.navy, fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>{p.price}</span>
                            <span style={{ color: p.highlight ? 'rgba(255,255,255,0.4)' : C.muted, fontSize: '0.82rem' }}>{p.period}</span>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem' }}>
                            {p.includes.map(item => (
                                <li key={item} style={{
                                    display: 'flex', alignItems: 'flex-start', gap: 8,
                                    color: p.highlight ? 'rgba(255,255,255,0.7)' : C.muted,
                                    fontSize: '0.82rem', marginBottom: 8, lineHeight: 1.5,
                                }}>
                                    <span style={{ color: p.highlight ? '#6ee7b7' : C.green, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/register" style={{
                            display: 'block', textAlign: 'center',
                            padding: '0.75rem',
                            background: p.highlight ? 'linear-gradient(135deg, #10b981, #0d7c4f)' : C.greenLight,
                            color: p.highlight ? '#fff' : C.green,
                            borderRadius: 12, fontWeight: 700, fontSize: '0.88rem',
                            textDecoration: 'none',
                            border: p.highlight ? 'none' : `1.5px solid #b6e2cb`,
                        }}>
                            Enroll Now
                        </Link>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '2rem', background: C.amberLight,
                border: `1.5px solid #fde68a`, borderRadius: 14,
                padding: '1rem 1.5rem',
                display: 'flex', alignItems: 'flex-start', gap: 12,
            }}>
                <span style={{ fontSize: 20 }}>💡</span>
                <div>
                    <strong style={{ color: '#92400e', fontSize: '0.88rem' }}>Sibling Discount: </strong>
                    <span style={{ color: '#78350f', fontSize: '0.85rem' }}>10% off monthly fees for your second child and 15% off for your third child enrolled at NestCare simultaneously.</span>
                </div>
            </div>
        </Section>
    )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
    const testimonials = [
        { name: 'Sarah Khan', role: 'Mother of Maya, 2 yrs', quote: 'NestCare has been a blessing for our family. The daily updates and photos keep us connected throughout the day. Maya absolutely loves going to daycare!' },
        { name: 'Ahmed & Fatima', role: 'Parents of Ali, 3 yrs', quote: 'The staff genuinely care about each child. Ali\'s development has been incredible since joining — his confidence and social skills have grown so much.' },
        { name: 'Zara Siddiqui', role: 'Mother of twins, 4 yrs', quote: 'As a working mother, NestCare gives me complete peace of mind. The parent app is a game changer — I know exactly what my children are doing all day.' },
    ]

    return (
        <Section style={{ background: '#fff' }}>
            <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 3rem' }}>
                <SectionLabel>Parent Stories</SectionLabel>
                <SectionTitle>What 500+ families say about us</SectionTitle>
                {/* Satisfaction stat */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: C.greenLight, border: `1px solid #b6e2cb`,
                    borderRadius: 999, padding: '6px 16px', marginTop: '0.75rem',
                }}>
                    <span style={{ color: C.green, fontSize: '1rem', fontWeight: 900 }}>98%</span>
                    <span style={{ color: C.muted, fontSize: '0.8rem', fontWeight: 500 }}>parent satisfaction rate</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {testimonials.map(t => (
                    <div key={t.name} style={{
                        background: C.bg,
                        borderRadius: 20,
                        padding: '1.8rem',
                        border: '1.5px solid #e8f0ea',
                    }}>
                        <div style={{ fontSize: 28, marginBottom: '1rem', color: C.green }}>"</div>
                        <p style={{ color: C.muted, fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.2rem', fontStyle: 'italic' }}>
                            {t.quote}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: '50%',
                                background: 'linear-gradient(135deg, #10b981, #0d7c4f)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontWeight: 800, fontSize: '0.85rem',
                            }}>
                                {t.name[0]}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, color: C.navy, fontSize: '0.88rem' }}>{t.name}</div>
                                <div style={{ color: C.muted, fontSize: '0.75rem' }}>{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
    const [open, setOpen] = useState(null)

    const faqs = [
        {
            q: 'What are your operating hours?',
            a: 'NestCare is open Monday to Saturday, 7:00 AM to 6:00 PM. We also offer extended care by arrangement for parents who need flexibility.',
        },
        {
            q: 'What age groups do you accept?',
            a: 'We enroll children from 3 months to 5 years across four programs: Infant Care, Toddler Room, Pre-Nursery, and Nursery/KG Prep.',
        },
        {
            q: 'What is your staff-to-child ratio?',
            a: 'We maintain low ratios throughout: 1:3 for infants, 1:5 for toddlers, 1:7 for Pre-Nursery, and 1:8 for Nursery. This ensures every child receives personal attention.',
        },
        {
            q: 'Are meals included in the fees?',
            a: 'Yes — all full-day programs include nutritious, age-appropriate halal-certified meals and snacks. We accommodate dietary requirements and allergies on request.',
        },
        {
            q: 'How do you keep parents updated during the day?',
            a: 'Our NestCare parent app gives you real-time access to daily logs, photos, attendance check-ins, nap records, and direct messaging with your child\'s caregivers.',
        },
        {
            q: 'How do I enroll my child?',
            a: 'You can register online through our Parent Portal, or book a free tour via WhatsApp first. After registration, we\'ll guide you through the enrollment process and required documents.',
        },
        {
            q: 'Do you offer sibling discounts?',
            a: 'Yes! We offer 10% off monthly fees for your second child and 15% off for your third child enrolled simultaneously at NestCare.',
        },
        {
            q: 'What safety measures are in place?',
            a: 'NestCare has CCTV throughout all spaces, a secure entry system with controlled access, first aid certified staff, daily sanitisation, and an emergency contact protocol for every enrolled child.',
        },
    ]

    return (
        <Section id="faq" style={{ background: C.bg }}>
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <SectionLabel>FAQs</SectionLabel>
                    <SectionTitle>Common questions from parents</SectionTitle>
                    <p style={{ color: C.muted, lineHeight: 1.75 }}>
                        Can't find your answer here? Message us on WhatsApp — we respond within minutes.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                background: C.white,
                                borderRadius: 16,
                                border: `1.5px solid ${open === i ? '#b6e2cb' : '#e8f0ea'}`,
                                overflow: 'hidden',
                                transition: 'border-color 0.2s',
                            }}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: '100%', textAlign: 'left',
                                    padding: '1.1rem 1.4rem',
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    gap: 12,
                                }}
                            >
                                <span style={{ color: C.navy, fontWeight: 700, fontSize: '0.93rem', lineHeight: 1.4 }}>
                                    {faq.q}
                                </span>
                                <span style={{
                                    color: open === i ? C.green : C.muted,
                                    fontSize: '1.1rem', flexShrink: 0,
                                    transform: open === i ? 'rotate(45deg)' : 'none',
                                    transition: 'transform 0.2s, color 0.2s',
                                    display: 'inline-block',
                                }}>
                                    +
                                </span>
                            </button>
                            {open === i && (
                                <div style={{
                                    padding: '0 1.4rem 1.2rem',
                                    color: C.muted, fontSize: '0.88rem', lineHeight: 1.75,
                                    borderTop: '1px solid #e8f0ea',
                                    paddingTop: '1rem',
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '0.75rem 1.5rem',
                        background: '#25D366', color: '#fff',
                        borderRadius: 12, fontWeight: 700, fontSize: '0.88rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Ask us on WhatsApp
                    </a>
                </div>
            </div>
        </Section>
    )
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
    return (
        <Section style={{ background: `linear-gradient(135deg, ${C.green} 0%, #0e9f82 100%)`, padding: '4rem 1.5rem' }}>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
                <h2 style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', margin: '0 0 1rem', fontFamily: "'Georgia', serif" }}>
                    Give your child the best start
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.97rem' }}>
                    Limited spots available for 2025–2026. Register today or book a free tour to see NestCare for yourself.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                    <Link to="/register" style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '0.85rem 1.8rem',
                        background: '#fff', color: C.green,
                        borderRadius: 12, fontWeight: 800, fontSize: '0.95rem',
                        textDecoration: 'none',
                        boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
                    }}>
                        Register as Parent
                    </Link>
                    <a href={WA_TOUR} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '0.85rem 1.8rem',
                        background: '#25D366',
                        color: '#fff',
                        borderRadius: 12, fontWeight: 700, fontSize: '0.95rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Book a Free Tour
                    </a>
                    <Link to="/login?role=parent" style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '0.85rem 1.8rem',
                        background: 'rgba(255,255,255,0.15)',
                        border: '1.5px solid rgba(255,255,255,0.3)',
                        color: '#fff',
                        borderRadius: 12, fontWeight: 700, fontSize: '0.95rem',
                        textDecoration: 'none',
                    }}>
                        Parent Login
                    </Link>
                </div>
            </div>
        </Section>
    )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
    return (
        <Section id="contact" style={{ background: C.bg }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                        <div style={{
                            width: 42, height: 42, borderRadius: 12,
                            background: 'linear-gradient(135deg, #10b981, #0d7c4f)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                        }}>🌿</div>
                        <span style={{ fontWeight: 800, fontSize: '1.2rem', color: C.navy }}>NestCare</span>
                    </div>
                    <p style={{ color: C.muted, lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.92rem' }}>
                        Premium early childhood care where every child is nurtured, known, and loved. Enrolling children aged 3 months to 5 years.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                            padding: '8px 16px',
                            background: '#25D366',
                            color: '#fff',
                            borderRadius: 10, fontWeight: 700, fontSize: '0.82rem',
                            textDecoration: 'none',
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            WhatsApp Us
                        </a>
                        {['Parent Portal', 'Staff Login'].map((label, i) => (
                            <Link key={label} to={i === 0 ? '/login?role=parent' : '/login?role=staff'} style={{
                                padding: '8px 14px',
                                background: i === 0 ? C.green : C.white,
                                color: i === 0 ? '#fff' : C.navy,
                                borderRadius: 10, fontWeight: 600, fontSize: '0.8rem',
                                textDecoration: 'none',
                                border: i === 1 ? `1.5px solid #e8f0ea` : 'none',
                            }}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 style={{ color: C.navy, fontWeight: 700, marginBottom: '1rem', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Quick Links</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {[
                            ['About Us', '#about'],
                            ['Programs', '#programs'],
                            ['Our Facility', '#gallery'],
                            ['Fees', '#fees'],
                            ['FAQs', '#faq'],
                            ['Register', '/register'],
                            ['Parent Login', '/login?role=parent'],
                        ].map(([label, href]) => (
                            <a key={label} href={href} style={{ color: C.muted, fontSize: '0.88rem', textDecoration: 'none' }}>
                                → {label}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 style={{ color: C.navy, fontWeight: 700, marginBottom: '1rem', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contact Us</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                            { icon: '📍', text: '123 Children Street, DHA Phase 2, Lahore, Pakistan' },
                            { icon: '📞', text: '+92 42 3456 7890' },
                            { icon: '✉️', text: 'info@nestcaredaycare.com' },
                            { icon: '🕐', text: 'Mon–Sat: 7:00 AM – 6:00 PM' },
                        ].map(c => (
                            <div key={c.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <span style={{ fontSize: 16 }}>{c.icon}</span>
                                <span style={{ color: C.muted, fontSize: '0.85rem', lineHeight: 1.5 }}>{c.text}</span>
                            </div>
                        ))}
                        <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            color: '#25D366', fontSize: '0.85rem', fontWeight: 600,
                            textDecoration: 'none', marginTop: 4,
                        }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid #e8f0ea',
                marginTop: '3rem', paddingTop: '1.5rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                flexWrap: 'wrap', gap: 12,
            }}>
                <span style={{ color: C.muted, fontSize: '0.8rem' }}>© 2025 NestCare Early Learning Centre. All rights reserved.</span>
                <span style={{ color: C.muted, fontSize: '0.8rem' }}>Licensed daycare facility · Registered with Punjab Dept. of Education</span>
            </div>
        </Section>
    )
}

// ─── Floating WhatsApp button ─────────────────────────────────────────────────
function WhatsAppFloat() {
    const [hovered, setHovered] = useState(false)
    return (
        <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'fixed',
                bottom: '1.75rem',
                right: '1.75rem',
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: '#25D366',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: 999,
                padding: hovered ? '0.75rem 1.2rem 0.75rem 1rem' : '0.85rem',
                boxShadow: '0 6px 24px rgba(37,211,102,0.5)',
                transition: 'all 0.25s ease',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            }}
            title="Chat on WhatsApp"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {hovered && (
                <span style={{ fontSize: '0.88rem', fontWeight: 700 }}>Chat with us</span>
            )}
        </a>
    )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
    return (
        <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
            <SiteHeader />
            <Hero />
            <About />
            <Programs />
            <PhotoGallery />
            <Environment />
            <Fees />
            <Testimonials />
            <FAQ />
            <CTABanner />
            <Contact />
            <SiteFooter />
            <WhatsAppFloat />
        </div>
    )
}
