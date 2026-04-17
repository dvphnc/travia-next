import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen({ onComplete }) {
    const [phase, setPhase] = useState('enter');

    useEffect(() => {
        const holdTimer = setTimeout(() => setPhase('exit'), 2800);
        const doneTimer = setTimeout(() => onComplete(), 3600);
        return () => {
            clearTimeout(holdTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete]);

    return (
        <div className={`splash ${phase}`}>
            {/* Background */}
            <div className="splash-bg" />

            {/* Content */}
            <div className="splash-content">

                {/* Animated Logo */}
                <div className="splash-logo-wrap">
                    <Image
                        src="/logo.png"
                        alt="Travia Logo"
                        width={100}
                        height={100}
                        className="splash-logo-img"
                        priority
                    />
                </div>

                {/* Brand Name */}
                <div className="splash-brand">TRAVIA</div>

                {/* Tagline */}
                <div className="splash-tagline">travel smart, trivia start</div>

                {/* Loading Line */}
                <div className="splash-line">
                    <div className="splash-line-fill" />
                </div>

                {/* Credit */}
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

                /* Radial background glow */
                .splash-bg {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(ellipse at 30% 40%, rgba(139, 115, 85, 0.2) 0%, transparent 55%),
                        radial-gradient(ellipse at 70% 60%, rgba(107, 93, 84, 0.15) 0%, transparent 55%);
                }

                /* Content wrapper */
                .splash-content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 18px;
                }

                /* Logo wrapper - handles the float + fade animation */
                .splash-logo-wrap {
                    opacity: 0;
                    animation:
                        splashLogoFade 0.8s ease forwards 0.2s,
                        splashLogoFloat 3s ease-in-out infinite 0.5s;
                    filter: drop-shadow(0 10px 30px rgba(139, 115, 85, 0.4));
                }

                /* Brand name */
                .splash-brand {
                    font-family: 'Inter', sans-serif;
                    font-size: 64px;
                    font-weight: 300;
                    letter-spacing: 16px;
                    color: #f8f6f3;
                    opacity: 0;
                    animation: splashFadeUp 0.8s ease forwards 0.6s;
                    margin-top: 5px;
                }

                /* Tagline */
                .splash-tagline {
                    font-family: 'Inter', sans-serif;
                    font-size: 13px;
                    font-weight: 300;
                    letter-spacing: 4px;
                    color: #c8b99a;
                    text-transform: lowercase;
                    opacity: 0;
                    animation: splashFadeUp 0.8s ease forwards 0.9s;
                }

                /* Loading line */
                .splash-line {
                    width: 140px;
                    height: 1px;
                    background: rgba(255,255,255,0.1);
                    overflow: hidden;
                    opacity: 0;
                    animation: splashFadeUp 0.5s ease forwards 1.1s;
                    margin-top: 5px;
                }

                .splash-line-fill {
                    height: 100%;
                    background: linear-gradient(to right, #8b7355, #c8a97e);
                    width: 0%;
                    animation: splashLine 1.6s ease forwards 1.2s;
                }

                /* By line */
                .splash-by {
                    font-family: 'Inter', sans-serif;
                    font-size: 10px;
                    font-weight: 400;
                    letter-spacing: 2.5px;
                    color: rgba(200, 185, 154, 0.5);
                    text-transform: uppercase;
                    opacity: 0;
                    animation: splashFadeUp 0.5s ease forwards 1.4s;
                }

                /* =====================
                   KEYFRAMES
                ===================== */

                /* Logo fade in */
                @keyframes splashLogoFade {
                    from {
                        opacity: 0;
                        transform: scale(0.7) translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                /* Logo floating up and down */
                @keyframes splashLogoFloat {
                    0%   { transform: translateY(0px); }
                    50%  { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                /* Generic fade up */
                @keyframes splashFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Loading bar fill */
                @keyframes splashLine {
                    from { width: 0%; }
                    to   { width: 100%; }
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .splash-brand {
                        font-size: 42px;
                        letter-spacing: 10px;
                    }

                    .splash-logo-wrap img {
                        width: 80px !important;
                        height: 80px !important;
                    }
                }
            `}</style>
        </div>
    );
}