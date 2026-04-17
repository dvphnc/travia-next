import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [showTop, setShowTop] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(pct);
            setShowTop(scrollTop > 300);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* Reading Progress Bar */}
            <div className="progress-bar" style={{ width: `${progress}%` }} />

            {/* Back to Top */}
            <button
                className={`back-to-top ${showTop ? 'show' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                title="Back to top"
            >↑</button>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-top">

                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="footer-brand">TRAVIA</Link>
                        <p className="footer-desc">
                            A solo travel blog by Joana Daphne Sy. Exploring the world one story and one trivia at a time.
                        </p>
                        <div className="footer-social" style={{ marginTop: '20px' }}>
                            <a
                                href="https://twitter.com/traviajournal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                title="X / Twitter"
                            >𝕏</a>
                            <a
                                href="https://facebook.com/traviajournal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                title="Facebook"
                            >f</a>
                            <a
                                href="https://instagram.com/traviajournal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                title="Instagram"
                            >◎</a>
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div className="footer-col">
                        <h5>Explore</h5>
                        <ul className="footer-links-list">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/all-posts">All Stories</Link></li>
                            <li><Link href="/asia">Asia</Link></li>
                            <li><Link href="/europe">Europe</Link></li>
                            <li><Link href="/americas">Americas</Link></li>
                        </ul>
                    </div>

                    {/* Info Column */}
                    <div className="footer-col">
                        <h5>About</h5>
                        <ul className="footer-links-list">
                            <li><Link href="/about">About Travia</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; 2025 Travia by Joana Daphne Sy. All rights reserved.</p>
                    </div>
                    <ul className="footer-bottom-links">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}