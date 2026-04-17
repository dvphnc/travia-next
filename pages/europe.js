import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Link from 'next/link';
import posts from '../data/posts';

export default function Europe() {
    const europePosts = posts.filter(p => p.categorySlug === 'europe');

    return (
        <Layout title="Europe - Travia" description="Explore stories from Europe on Travia.">
            <header
                className="page-header"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&auto=format&fit=crop')" }}
            >
                <div className="page-header-overlay" />
                <div className="page-header-content">
                    <h1>EUROPE</h1>
                    <p className="lead">where past meets the present</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    {europePosts.map(post => (
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