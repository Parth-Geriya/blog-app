import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard({ post, author }) {
  const excerpt = post.body.length > 120 ? post.body.slice(0, 120) + '…' : post.body
  return (
    <article className="post-card">
      <h3 className="post-title">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="post-excerpt">{excerpt}</p>
      <div className="post-meta">By {author?.name || 'Unknown'}</div>
    </article>
  )
}