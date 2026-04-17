import { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
    const [phase, setPhase] = useState('enter'); // enter → hold → exit

    useEffect(() => {
        // Phase 1: Enter animation runs (1.5s)
        // Phase 2: Hold for a moment (1s)
        // Phase 3: Exit animation (1s)
        // Phase 4: Done

        const holdTimer = setTimeout(() => setPhase('exit'), 2500);
        const doneTimer = setTimeout(() => onComplete(), 3500);

        return () => {
            clearTimeout(holdTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete]);

    return (
        <div className={`splash ${phase}`}>
            {/* Background overlay */}
            <div className="splash-bg" />

            {/* Content */}
            <div className="splash-content">
                {/* Logo / Brand */}
                <div className="splash-logo">TRAVIA</div>

                {/* Tagline */}
                <div className="splash-tagline">travel smart, trivia start</div>

                {/* Loading line */}
                <div className="splash-line">
                    <div className="splash-line-fill" />
                </div>

                {/* By line */}
                <div className="splash-by">by Joana Daphne Sy</div>
            </div>

            <style jsx>{`
                /* =====================
                   SPLASH SCREEN
                ===================== */
                .splash {
                    position: fixed;
                    inset: 0;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #3d3834;
                    opacity: 1;
                    transition: opacity 0.8s ease;
                }

                .splash.exit {
                    opacity: 0;
                    pointer-events: none;
                }

                /* Background texture */
                .splash-bg {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse at 20% 50%, rgba(139, 115, 85, 0.15) 0%, transparent 60%),
                        radial-gradient(ellipse at 80% 50%, rgba(107, 93, 84, 0.1) 0%, transparent 60%);
                }

                /* Content wrapper */
                .splash-content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                /* Brand name */
                .splash-logo {
                    font-family: 'Inter', sans-serif;
                    font-size: 72px;
                    font-weight: 300;
                    letter-spacing: 16px;
                    color: #f8f6f3;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: splashFadeUp 0.8s ease forwards 0.3s;
                }

                /* Tagline */
                .splash-tagline {
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    font-weight: 300;
                    letter-spacing: 4px;
                    color: #c8b99a;
                    text-transform: lowercase;
                    opacity: 0;
                    animation: splashFadeUp 0.8s ease forwards 0.7s;
                }

                /* Loading line */
                .splash-line {
                    width: 120px;
                    height: 1px;
                    background: rgba(255,255,255,0.1);
                    margin: 10px 0;
                    overflow: hidden;
                    opacity: 0;
                    animation: splashFadeUp 0.5s ease forwards 1s;
                }

                .splash-line-fill {
                    height: 100%;
                    background: #8b7355;
                    width: 0%;
                    animation: splashLine 1.5s ease forwards 1.1s;
                }

                /* By line */
                .splash-by {
                    font-family: 'Inter', sans-serif;
                    font-size: 11px;
                    font-weight: 400;
                    letter-spacing: 2px;
                    color: rgba(200, 185, 154, 0.6);
                    text-transform: uppercase;
                    opacity: 0;
                    animation: splashFadeUp 0.5s ease forwards 1.2s;
                }

                /* Animations */
                @keyframes splashFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes splashLine {
                    from { width: 0%; }
                    to   { width: 100%; }
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .splash-logo {
                        font-size: 48px;
                        letter-spacing: 10px;
                    }
                }
            `}</style>
        </div>
    );
}