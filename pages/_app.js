import '../styles/globals.css';
import { useState, useEffect, useCallback } from 'react';
import SplashScreen from '../components/SplashScreen';

export default function App({ Component, pageProps }) {
    const [showSplash, setShowSplash] = useState(false);

    useEffect(() => {
        // Only show splash on first visit per session
        const visited = sessionStorage.getItem('travia_visited');
        if (!visited) {
            setShowSplash(true);
        }
    }, []);

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false);
        sessionStorage.setItem('travia_visited', 'true');
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