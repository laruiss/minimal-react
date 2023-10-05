import axios from 'axios'

const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
})

export const signIn = async (email, password) => {
  const response = await apiClient.post('/auth/tokens', {
    email,
    password,
  })
  
  localStorage.setItem('token', response.data.token)
}

export const getBooks = async () => {
  const response = await apiClient.get('/books')
  return response.data
}

export const getBook = async (id) => {
  const response = await apiClient.get(`/books/${id}`)
  return response.data
}


export const removeBook = async (id) => {
  const token = localStorage.getItem('token') 
  if (token) {
    const response = await apiClient.delete(`/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
  throw new Error('Unauthorized')   
}
