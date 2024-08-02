import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const isTokenExpired = (token) => {
  if (!token) return true

  const decoded = jwtDecode(token)
  
  return decoded.exp < Date.now() / 1000
}

const getAll = () => {
  const request = axios.get(baseUrl, {
    headers: { Authorization: token }
  })
  return request.then(response => response.data)
}

const createBlog = async (body) => {
  const response = await axios.post(baseUrl, body, {
    headers: { Authorization: token }
  })
  return response.data
}

const updateBlog = async (id, body) => {
  const response = await axios.put(`${baseUrl}/${id}`, body, {
    headers: { Authorization: token }
  })
  return response.data
}

const deleteBlog = async (id) => {
  await axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: token }
  })
}

const createComment = async (blogId, commentDto) => {
  const response = await axios.post(`${baseUrl}/${blogId}/comments`, commentDto, {
    headers: { Authorization: token }
  })
  return response.data
}

export default { 
  setToken,
  getAll,
  createBlog,
  updateBlog,
  deleteBlog,
  createComment,
  isTokenExpired
}