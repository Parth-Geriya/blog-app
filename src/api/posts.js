import axios from 'axios'

const BASE = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts() {
  const res = await axios.get(`${BASE}/posts`)
  return res.data
}

export async function fetchPostById(id) {
  const res = await axios.get(`${BASE}/posts/${id}`)
  return res.data
}

export async function fetchCommentsForPost(postId) {
  const res = await axios.get(`${BASE}/comments`, { params: { postId } })
  return res.data
}