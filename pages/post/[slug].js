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
    const related = posts.filter(p => p.categorySlug === post.categorySlug && p.slug !== post.slug).slice(0, 3);

    return { props: { post, content, related } };
}

export default function PostPage({ post, content, related }) {
    const shareUrl = `https://travia.vercel.app/post/${post.slug}`;

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied!');
        });
    };

    return (
        <Layout title={`${post.title} - Travia`} description={post.excerpt} image={post.image}>
            {/* Header */}
            <header
                className="page-header"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${post.headerImage}')` }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>{post.headerTitle}</h1>
                    <p className="lead">{post.headerLead}</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    <div className="single-post">
                        {/* Back Button */}
                        <div className="back-button">
                            <Link href={`/${post.categorySlug}`}>Back to {post.category}</Link>
                        </div>

                        {/* Category */}
                        <Link href={`/${post.categorySlug}`} className="post-category-label">
                            {post.category.toUpperCase()}
                        </Link>

                        {/* Title */}
                        <h1>{post.title}</h1>

                        {/* Meta */}
                        <div className="post-meta">
                            <span>{post.date}</span>
                            <span className="sep">·</span>
                            <span>{post.author}</span>
                            <span className="sep">·</span>
                            <span>{post.readTime} min read</span>
                        </div>

                        {/* Tags */}
                        <div className="tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>

                        <div className="post-spacer" />

                        {/* Content */}
                        {content && (
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        )}

                        {/* Social Share */}
                        <div className="social-share">
                            <p>Share this story</p>
                            <div className="share-buttons">
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-btn twitter"
                                >Twitter</a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-btn facebook"
                                >Facebook</a>
                                <button onClick={copyLink} className="share-btn copy">Copy Link</button>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {related.length > 0 && (
                            <div className="related-posts">
                                <h3>More from {post.category}</h3>
                                <div className="related-grid">
                                    {related.map(r => (
                                        <Link key={r.slug} href={`/post/${r.slug}`} className="related-card">
                                            <span className="cat">{r.category.toUpperCase()}</span>
                                            <h4>{r.title}</h4>
                                            <p>{r.author} · {r.date}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}