import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const [scrolled, setScrolled]   = useState(false);
    const [menuOpen, setMenuOpen]   = useState(false);
    const [query, setQuery]         = useState('');
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            setQuery('');
            setMenuOpen(false);
        }
    };

    const isActive = (path) => router.pathname === path ? 'active' : '';

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <Link href="/" className="navbar-brand">TRAVIA</Link>

                <div className="navbar-right">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search destinations"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit">↗</button>
                    </form>

                    <ul className="navbar-links">
                        <li><Link href="/" className={isActive('/')}>Home</Link></li>
                        <li><Link href="/about" className={isActive('/about')}>About</Link></li>
                        <li><Link href="/contact" className={isActive('/contact')}>Contact</Link></li>
                    </ul>
                </div>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <form onSubmit={handleSearch} className="search-form" style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search destinations"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ width: '100%' }}
                    />
                    <button type="submit">↗</button>
                </form>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link href="/asia" onClick={() => setMenuOpen(false)}>Asia</Link>
                <Link href="/europe" onClick={() => setMenuOpen(false)}>Europe</Link>
                <Link href="/americas" onClick={() => setMenuOpen(false)}>Americas</Link>
            </div>
        </>
    );
}