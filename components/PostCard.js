import Link from 'next/link';

export default function PostCard({ post }) {
    const shareUrl = `https://travia.vercel.app/post/${post.slug}`;
    const shareText = encodeURIComponent(post.title + ' - Travia');
    const shareUrlEnc = encodeURIComponent(shareUrl);

    return (
        <div className="post-card">
            {/* Thumbnail */}
            <Link href={`/post/${post.slug}`}>
                <div
                    className="post-thumbnail"
                    style={{ backgroundImage: `url(${post.image})` }}
                />
            </Link>

            {/* Content */}
            <div className="post-content">
                <Link href={`/${post.categorySlug}`} className="post-category-label">
                    {post.category.toUpperCase()}
                </Link>

                <h2>
                    <Link href={`/post/${post.slug}`}>{post.title}</Link>
                </h2>

                <div className="post-meta">
                    <span>{post.date}</span>
                    <span className="sep">·</span>
                    <span>{post.author}</span>
                    <span className="sep">·</span>
                    <span>{post.readTime} min read</span>
                </div>

                <div className="tags">
                    {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <p className="excerpt">{post.excerpt}</p>

                {/* Card Footer: Read More + Quick Share */}
                <div className="card-footer">
                    <Link href={`/post/${post.slug}`} className="read-more">
                        Read Story
                    </Link>

                    <div className="card-share">
                        {/* X / Twitter */}
                        <a
                            href={`https://twitter.com/intent/tweet?url=${shareUrlEnc}&text=${shareText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-share-btn"
                            title="Share on X"
                        >𝕏</a>

                        {/* Facebook */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrlEnc}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-share-btn"
                            title="Share on Facebook"
                        >f</a>

                        {/* Instagram (copy link - Instagram doesn't support direct share) */}
                        <button
                            className="card-share-btn"
                            title="Copy link for Instagram"
                            onClick={() => {
                                navigator.clipboard.writeText(shareUrl);
                                alert('Link copied! Paste it on Instagram.');
                            }}
                        >◎</button>
                    </div>
                </div>
            </div>
        </div>
    );
}