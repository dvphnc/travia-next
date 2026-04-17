import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Link from 'next/link';
import posts from '../data/posts';

export default function Asia() {
    const asiaPosts = posts.filter(p => p.categorySlug === 'asia');

    return (
        <Layout title="Asia - Travia" description="Explore stories from Asia on Travia.">
            <header
                className="page-header"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920')" }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>ASIA</h1>
                    <p className="lead">the soul of traditions</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    {asiaPosts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                    <div className="down-btn">
                        <Link href="/" className="btn">Back to Home</Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}