import axiosInstance from './axiosInstance'

export const checkAuth = async () => {
  try {
    const res = await axiosInstance.get('/api/auth/me')
    return res.data.user
  } catch {
    return null
  }
}