import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Link from 'next/link';
import posts from '../data/posts';

export default function Americas() {
    const americasPosts = posts.filter(p => p.categorySlug === 'americas');

    return (
        <Layout title="Americas - Travia" description="Explore stories from the Americas on Travia.">
            <header
                className="page-header"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920')" }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>AMERICAS</h1>
                    <p className="lead">from northern lights to southern skies</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    {americasPosts.map(post => (
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