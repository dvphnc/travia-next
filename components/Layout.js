import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title, description, image }) {
    return (
        <>
            <Head>
                <title>{title || 'Travia - Travel & Trivia'}</title>
                <meta name="description" content={description || 'Travia - Travel smart, trivia start. Explore the world one story at a time.'} />
                <meta name="author" content="Joana Daphne Sy" />
                <meta property="og:title" content={title || 'Travia - Travel & Trivia'} />
                <meta property="og:description" content={description || 'Explore the world one story at a time.'} />
                <meta property="og:image" content={image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200'} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page-wrapper">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
}