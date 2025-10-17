import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { AuthContext } from './AuthContext'

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tienda_user')) || null } catch { return null }
  })

  useEffect(() => {
    localStorage.setItem('tienda_user', JSON.stringify(user))
  }, [user])

  const login = useCallback(({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('tienda_users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)
    if(found){ setUser({ email: found.email, name: found.name }); return true }
    return false
  }, [])

  const register = useCallback(({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem('tienda_users') || '[]')
    if(users.some(u => u.email === email)) return false
    users.push({ name, email, password })
    localStorage.setItem('tienda_users', JSON.stringify(users))
    setUser({ name, email })
    return true
  }, [])

  const logout = useCallback(() => setUser(null), [])

  const value = useMemo(() => ({ user, login, register, logout }), [user, login, register, logout])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
