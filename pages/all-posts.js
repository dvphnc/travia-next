import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import posts from '../data/posts';

export default function AllPosts() {
    return (
        <Layout title="All Stories - Travia">
            <header
                className="page-header"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')" }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>ALL STORIES</h1>
                    <p className="lead">explore our complete collection</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    {posts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}