import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPostById, fetchCommentsForPost } from '../api/posts'
import { fetchUserById } from '../api/users'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import Error from '../components/Error'

export default function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: post, loading: loadingPost, error: errorPost } = useFetch(fetchPostById, [id])
  const { data: comments, loading: loadingComments } = useFetch(fetchCommentsForPost, [id])
  const userId = post?.userId
  const { data: author, loading: loadingAuthor } = useFetch(fetchUserById, [userId])

  if (loadingPost || loadingComments || loadingAuthor) return <Loader />
  if (errorPost) return <Error message={errorPost.message} />

  return (
    <div className="blog-detail container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h1>{post.title}</h1>
      <p className="meta">By {author?.name || 'Unknown'}</p>
      <div className="post-body">{post.body}</div>

      <section className="comments">
        <h2>Comments</h2>
        {comments && comments.length > 0 ? (
          <ul>
            {comments.map(c => (
              <li key={c.id}><strong>{c.name}</strong> — <small>{c.email}</small><p>{c.body}</p></li>
            ))}
          </ul>
        ) : (
          <p>No comments.</p>
        )}
      </section>
    </div>
  )
}