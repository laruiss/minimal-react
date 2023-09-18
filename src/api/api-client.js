const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL

const get = (url, options) => fetch(`${apiBaseUrl}${url}`, options).then(res => res.json())
const del = (url, options) => fetch(`${apiBaseUrl}${url}`, options).then(res => res.json())
const post = (url, options) => fetch(`${apiBaseUrl}${url}`, options).then(res => res.json())
const patch = (url, options) => fetch(`${apiBaseUrl}${url}`, options).then(res => res.json())

export {
  post,
  patch,
  get,
  del,
}