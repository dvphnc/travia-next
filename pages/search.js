import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import posts from '../data/posts';

export default function Search() {
    const router = useRouter();
    const query  = (router.query.q || '').toLowerCase().trim();

    const results = query
        ? posts.filter(post => {
            const searchIn = [
                post.title,
                post.category,
                post.excerpt,
                ...post.tags,
            ].join(' ').toLowerCase();
            return searchIn.includes(query);
        })
        : [];

    return (
        <Layout title={`Search: ${query} - Travia`}>
            <header
                className="page-header"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')" }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>SEARCH</h1>
                    <p className="lead">{query ? `results for "${query}"` : 'find your destination'}</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    {results.length > 0 ? (
                        results.map(post => (
                            <PostCard key={post.slug} post={post} />
                        ))
                    ) : (
                        <div className="no-results">
                            <h2>No results found</h2>
                            <p style={{ marginBottom: '30px' }}>
                                Try searching for destinations like Japan, Portugal, or Peru
                            </p>
                            <Link href="/" className="btn">Back to Home</Link>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}