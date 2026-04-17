import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [showTop, setShowTop] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop  = window.scrollY;
            const docHeight  = document.body.scrollHeight - window.innerHeight;
            const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
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
            >
                ↑
            </button>

            {/* Footer */}
            <footer className="footer">
                <ul className="footer-links">
                    <li><Link href="/asia">Asia</Link></li>
                    <li><Link href="/europe">Europe</Link></li>
                    <li><Link href="/americas">Americas</Link></li>
                </ul>
                <div className="copyright">
                    <p>&copy; 2025 Travia by Joana Daphne Sy. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}