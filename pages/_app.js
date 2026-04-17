import '../styles/globals.css';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/SplashScreen';

export default function App({ Component, pageProps }) {
    const [showSplash, setShowSplash] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Show splash every time user visits the home page
        if (router.pathname === '/') {
            setShowSplash(true);
        }
    }, [router.pathname]);

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false);
    }, []);

    return (
        <>
            {showSplash && (
                <SplashScreen onComplete={handleSplashComplete} />
            )}
            <div style={{
                opacity: showSplash ? 0 : 1,
                transition: 'opacity 0.5s ease',
            }}>
                <Component {...pageProps} />
            </div>
        </>
    );
}