import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Logo({ size = 40, showText = true, light = false }) {
    return (
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
                width: size, height: size,
                borderRadius: Math.round(size * 0.28),
                background: 'linear-gradient(135deg, #10b981 0%, #0d7c4f 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: Math.round(size * 0.5),
                boxShadow: '0 4px 14px rgba(16,185,129,0.35)',
                flexShrink: 0,
            }}>
                🌿
            </div>
            {showText && (
                <div>
                    <div style={{
                        fontWeight: 900,
                        fontSize: `${size * 0.38}px`,
                        color: light ? '#fff' : '#0f2044',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        fontFamily: "'Georgia', serif",
                    }}>
                        NestCare
                    </div>
                    <div style={{
                        fontSize: `${size * 0.22}px`,
                        color: light ? 'rgba(255,255,255,0.45)' : '#5c7060',
                        fontWeight: 500,
                        letterSpacing: '0.03em',
                        lineHeight: 1,
                        marginTop: 2,
                    }}>
                        Early Learning Centre
                    </div>
                </div>
            )}
        </Link>
    )
}

export default function SiteHeader() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    // Close menu on route change
    useEffect(() => { setMenuOpen(false) }, [location.pathname])

    const isLanding = location.pathname === '/'
    const transparent = isLanding && !scrolled && !menuOpen

    const headerBg = transparent
        ? 'linear-gradient(to bottom, rgba(15,32,68,0.9), transparent)'
        : 'rgba(255,255,255,0.97)'

    const linkColor = transparent ? 'rgba(255,255,255,0.75)' : '#374151'
    const linkHoverColor = transparent ? '#fff' : '#0d7c4f'

    const navLinks = [
        { label: 'About', href: isLanding ? '#about' : '/#about' },
        { label: 'Programs', href: isLanding ? '#programs' : '/#programs' },
        { label: 'Facility', href: isLanding ? '#gallery' : '/#gallery' },
        { label: 'Fees', href: isLanding ? '#fees' : '/#fees' },
        { label: 'FAQs', href: isLanding ? '#faq' : '/#faq' },
        { label: 'Contact', href: isLanding ? '#contact' : '/#contact' },
    ]

    return (
        <>
            <header style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                transition: 'background 0.3s ease, box-shadow 0.3s ease',
                background: headerBg,
                backdropFilter: transparent ? 'none' : 'blur(20px)',
                borderBottom: transparent ? 'none' : '1px solid rgba(0,0,0,0.06)',
                boxShadow: transparent ? 'none' : '0 2px 20px rgba(0,0,0,0.06)',
            }}>
                <div style={{
                    maxWidth: 1200, margin: '0 auto',
                    padding: '0 1.25rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    height: 68,
                }}>
                    <Logo size={38} light={transparent} />

                    {/* Desktop nav — hidden on mobile */}
                    {!isMobile && (
                        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            {navLinks.map(link => (
                                <a key={link.label} href={link.href} style={{
                                    color: linkColor,
                                    textDecoration: 'none', padding: '7px 11px',
                                    borderRadius: 8, fontSize: '0.85rem', fontWeight: 500,
                                    transition: 'all 0.18s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = linkHoverColor; e.currentTarget.style.background = transparent ? 'rgba(255,255,255,0.08)' : '#f0fdf4' }}
                                onMouseLeave={e => { e.currentTarget.style.color = linkColor; e.currentTarget.style.background = 'transparent' }}
                                >
                                    {link.label}
                                </a>
                            ))}

                            <div style={{ width: 1, height: 20, background: transparent ? 'rgba(255,255,255,0.15)' : '#e5e7eb', margin: '0 6px' }} />

                            <Link to="/login?role=staff" style={{
                                color: linkColor,
                                textDecoration: 'none', padding: '7px 13px',
                                borderRadius: 8, fontSize: '0.85rem', fontWeight: 600,
                                border: `1.5px solid ${transparent ? 'rgba(255,255,255,0.2)' : '#e8f0ea'}`,
                                transition: 'all 0.18s',
                            }}>
                                Staff Login
                            </Link>

                            <Link to="/login?role=parent" style={{
                                color: '#fff',
                                textDecoration: 'none', padding: '8px 18px',
                                borderRadius: 10, fontSize: '0.85rem', fontWeight: 700,
                                background: 'linear-gradient(135deg, #10b981, #0d7c4f)',
                                boxShadow: '0 3px 12px rgba(16,185,129,0.3)',
                                marginLeft: 4,
                                transition: 'all 0.18s',
                            }}>
                                Parent Portal
                            </Link>
                        </nav>
                    )}

                    {/* Mobile hamburger */}
                    {isMobile && (
                        <button
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle menu"
                            style={{
                                border: 'none', cursor: 'pointer',
                                padding: '8px', borderRadius: 10,
                                display: 'flex', flexDirection: 'column', gap: 5,
                                background: transparent ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                            }}
                        >
                            {[0, 1, 2].map(i => (
                                <span key={i} style={{
                                    display: 'block',
                                    width: 22, height: 2, borderRadius: 2,
                                    background: transparent ? 'rgba(255,255,255,0.85)' : '#374151',
                                    transition: 'all 0.25s',
                                    transform: menuOpen
                                        ? i === 0 ? 'translateY(7px) rotate(45deg)'
                                        : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                                        : 'scaleX(0)'
                                        : 'none',
                                    opacity: menuOpen && i === 1 ? 0 : 1,
                                }} />
                            ))}
                        </button>
                    )}
                </div>

                {/* Mobile dropdown menu */}
                {isMobile && menuOpen && (
                    <div style={{
                        background: 'rgba(255,255,255,0.98)',
                        backdropFilter: 'blur(20px)',
                        borderTop: '1px solid #e8f0ea',
                        padding: '1rem 1.25rem 1.5rem',
                        display: 'flex', flexDirection: 'column', gap: 4,
                    }}>
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    color: '#374151', textDecoration: 'none',
                                    padding: '0.75rem 1rem',
                                    borderRadius: 10, fontSize: '0.95rem', fontWeight: 500,
                                    display: 'block',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = '#f0fdf4'; e.currentTarget.style.color = '#0d7c4f' }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151' }}
                            >
                                {link.label}
                            </a>
                        ))}

                        <div style={{ borderTop: '1px solid #e8f0ea', marginTop: '0.5rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <Link
                                to="/login?role=staff"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    display: 'block', textAlign: 'center',
                                    padding: '0.75rem',
                                    border: '1.5px solid #e8f0ea',
                                    color: '#374151', borderRadius: 12,
                                    fontWeight: 600, fontSize: '0.93rem',
                                    textDecoration: 'none',
                                }}
                            >
                                Staff Login
                            </Link>
                            <Link
                                to="/login?role=parent"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    display: 'block', textAlign: 'center',
                                    padding: '0.75rem',
                                    background: 'linear-gradient(135deg, #10b981, #0d7c4f)',
                                    color: '#fff', borderRadius: 12,
                                    fontWeight: 700, fontSize: '0.93rem',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 14px rgba(16,185,129,0.3)',
                                }}
                            >
                                Parent Portal
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer for fixed header on non-landing pages */}
            {!isLanding && <div style={{ height: 68 }} />}
        </>
    )
}
