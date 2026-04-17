import Layout from '../../components/Layout';
import Link from 'next/link';
import posts from '../../data/posts';
import postContent from '../../data/postContent';

export async function getStaticPaths() {
    const paths = posts.map(p => ({ params: { slug: p.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post    = posts.find(p => p.slug === params.slug);
    const content = postContent[params.slug] || null;
    const related = posts
        .filter(p => p.categorySlug === post.categorySlug && p.slug !== post.slug)
        .slice(0, 3);
    return { props: { post, content, related } };
}

export default function PostPage({ post, content, related }) {
    const shareUrl     = `https://travia.vercel.app/post/${post.slug}`;
    const shareUrlEnc  = encodeURIComponent(shareUrl);
    const shareTxtEnc  = encodeURIComponent(post.title + ' - Travia');

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied to clipboard!');
        });
    };

    const copyForInstagram = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied! Open Instagram and paste it in your bio or story.');
        });
    };

    return (
        <Layout
            title={`${post.title} - Travia`}
            description={post.excerpt}
            image={post.image}
        >
            {/* Header */}
            <header
                className="page-header"
                style={{ backgroundImage: `url('${post.headerImage}')` }}
            >
                <div className="page-header-overlay" />
                <div className="page-header-content">
                    <h1>{post.headerTitle}</h1>
                    <p className="lead">{post.headerLead}</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    <div className="single-post-wrapper">

                        {/* ── Main Content ── */}
                        <div className="single-post">
                            <div className="back-button">
                                <Link href={`/${post.categorySlug}`}>
                                    Back to {post.category}
                                </Link>
                            </div>

                            <Link href={`/${post.categorySlug}`} className="post-category-label">
                                {post.category.toUpperCase()}
                            </Link>

                            <h1>{post.title}</h1>

                            <div className="post-meta">
                                <span>{post.date}</span>
                                <span className="sep">·</span>
                                <span>{post.author}</span>
                                <span className="sep">·</span>
                                <span>{post.readTime} min read</span>
                            </div>

                            <div className="tags" style={{ marginBottom: '30px' }}>
                                {post.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            {/* Article Content */}
                            {content && (
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            )}

                            {/* Share Bottom */}
                            <div className="social-share">
                                <p className="social-share-label">Share this story</p>
                                <div className="share-buttons">
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${shareUrlEnc}&text=${shareTxtEnc}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-btn twitter"
                                    >𝕏 Twitter</a>

                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrlEnc}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-btn facebook"
                                    >Facebook</a>

                                    <button
                                        onClick={copyForInstagram}
                                        className="share-btn instagram"
                                    >◎ Instagram</button>

                                    <button
                                        onClick={copyLink}
                                        className="share-btn copy"
                                    >Copy Link</button>
                                </div>
                            </div>

                            {/* Related Posts */}
                            {related.length > 0 && (
                                <div className="related-posts">
                                    <h3>More from {post.category}</h3>
                                    <div className="related-grid">
                                        {related.map(r => (
                                            <Link
                                                key={r.slug}
                                                href={`/post/${r.slug}`}
                                                className="related-card"
                                            >
                                                <img
                                                    src={r.image}
                                                    alt={r.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '140px',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                    }}
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop';
                                                    }}
                                                />
                                                <div className="related-card-body">
                                                    <span className="cat">{r.category}</span>
                                                    <h4>{r.title}</h4>
                                                    <p>{r.author} · {r.readTime} min read</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── Sidebar ── */}
                        <aside className="post-sidebar">

                            {/* Post Info */}
                            <div className="sidebar-widget">
                                <h4>About this Story</h4>
                                <div className="post-info-item">
                                    <span>Author</span>
                                    <span>{post.author}</span>
                                </div>
                                <div className="post-info-item">
                                    <span>Published</span>
                                    <span>{post.date}</span>
                                </div>
                                <div className="post-info-item">
                                    <span>Category</span>
                                    <span>{post.category}</span>
                                </div>
                                <div className="post-info-item">
                                    <span>Read Time</span>
                                    <span>{post.readTime} min</span>
                                </div>
                            </div>

                            {/* Share Widget */}
                            <div className="sidebar-widget">
                                <h4>Share this Story</h4>
                                <div className="sidebar-share">
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${shareUrlEnc}&text=${shareTxtEnc}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sidebar-share-btn twitter"
                                    >
                                        <span className="share-icon">𝕏</span>
                                        Share on X
                                    </a>

                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrlEnc}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sidebar-share-btn facebook"
                                    >
                                        <span className="share-icon">f</span>
                                        Share on Facebook
                                    </a>

                                    <button
                                        onClick={copyForInstagram}
                                        className="sidebar-share-btn instagram"
                                    >
                                        <span className="share-icon">◎</span>
                                        Share on Instagram
                                    </button>

                                    <button
                                        onClick={copyLink}
                                        className="sidebar-share-btn copy"
                                    >
                                        <span className="share-icon">⎘</span>
                                        Copy Link
                                    </button>
                                </div>
                            </div>

                            {/* Tags Widget */}
                            <div className="sidebar-widget">
                                <h4>Tags</h4>
                                <div className="tags">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Category Widget */}
                            <div className="sidebar-widget">
                                <h4>Explore More</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <Link href="/asia" className="read-more" style={{ fontSize: '11px' }}>Asia</Link>
                                    <Link href="/europe" className="read-more" style={{ fontSize: '11px' }}>Europe</Link>
                                    <Link href="/americas" className="read-more" style={{ fontSize: '11px' }}>Americas</Link>
                                    <Link href="/all-posts" className="read-more" style={{ fontSize: '11px' }}>All Stories</Link>
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>
            </div>
        </Layout>
    );
}