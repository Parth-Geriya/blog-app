import axios from 'axios'
const BASE = 'https://jsonplaceholder.typicode.com'
export async function fetchUsers() {
  const res = await axios.get(`${BASE}/users`)
  return res.data
}
export async function fetchUserById(id) {
  const res = await axios.get(`${BASE}/users/${id}`)
  return res.data
}