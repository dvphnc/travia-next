import Link from 'next/link';

export default function PostCard({ post }) {
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

                <Link href={`/post/${post.slug}`} className="read-more">
                    Read Story →
                </Link>
            </div>
        </div>
    );
}