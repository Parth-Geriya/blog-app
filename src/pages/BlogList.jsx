import React, { useMemo, useState } from 'react'
import { fetchPosts } from '../api/posts'
import { fetchUsers } from '../api/users'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import Error from '../components/Error'
import PostCard from '../components/PostCard'

export default function BlogList() {
  const { data: posts, loading: loadingPosts, error: errorPosts } = useFetch(fetchPosts, [])
  const { data: users, loading: loadingUsers, error: errorUsers } = useFetch(fetchUsers, [])

  const [page, setPage] = useState(1)
  const perPage = 10

  const merged = useMemo(() => {
    if (!posts || !users) return []
    const usersById = Object.fromEntries(users.map(u => [u.id, u]))
    return posts.map(p => ({ ...p, author: usersById[p.userId] }))
  }, [posts, users])

  if (loadingPosts || loadingUsers) return <Loader />
  if (errorPosts || errorUsers) return <Error message={(errorPosts || errorUsers).message} />

  const total = merged.length
  const pages = Math.ceil(total / perPage)
  const start = (page - 1) * perPage
  const pageItems = merged.slice(start, start + perPage)

  return (
    <div className="blog-list container">
      <h1>All Posts</h1>
      <div className="posts-grid">
        {pageItems.map(p => (
          <PostCard key={p.id} post={p} author={p.author} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
        <span>Page {page} of {pages}</span>
        <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}>Next</button>
      </div>
    </div>
  )
}