import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout title="About - Travia" description="Learn about Travia and its creator Joana Daphne Sy.">
            <header
                className="page-header"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')" }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>ABOUT US</h1>
                    <p className="lead">more than travelers, we're storytellers</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    <div className="about-content">
                        <p className="intro-text">We believe in thoughtful travel and meaningful experiences.</p>

                        <h3>Our Philosophy</h3>
                        <p>Travia combines travel and trivia—the fascinating stories behind every destination. We believe travel is more than visiting new places. It's about discovering hidden histories, understanding local traditions, and uncovering the unique narratives that make each location special.</p>

                        <h3>What We Do</h3>
                        <p>From hidden urban gems to remote natural wonders, we explore destinations with depth and authenticity. Each story reveals the interesting facts, cultural insights, and lesser-known details that transform ordinary trips into extraordinary journeys.</p>

                        <h3>Our Journey</h3>
                        <p>Founded in 2025, Travia began as a passion project to document authentic travel experiences and share the intriguing trivia behind them. What started as a solo endeavor has grown into a platform for curious explorers seeking stories that inspire thoughtful journeys around the globe.</p>

                        <h3>The Creator</h3>
                        <p>Travia is created and maintained by <strong>Joana Daphne Sy</strong>, a solo traveler and storyteller with a passion for uncovering the hidden narratives of the world's most fascinating destinations. Through careful research and personal exploration, each article aims to bring you closer to the heart of every place featured.</p>

                        <h3>Join Us</h3>
                        <p>Whether you're planning your first adventure or your hundredth, we invite you to explore with curiosity. Follow our journeys, share your stories, and discover the world through the lens of travel and trivia.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}