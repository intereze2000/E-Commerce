import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/AuthProvider'
import { useAuth } from './hooks/useAuth'
import { Nav } from './nav/Nav'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ComprasPage from './pages/compras/ComprasPage'
import ProductosPage from './pages/productos/ProductosPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App(){
  const { user, logout } = useAuth()
  return (
    <div className="app-root">
      <Nav user={user} logout={logout} />
      <BrowserRouter>
        <AuthProvider>                  
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/compras/*" element={<ComprasPage/>} />
              <Route path="/productos/*" element={<ProductosPage/>} />
              <Route path="*" element={<NotFoundPage/>} />
            </Routes>
          </main>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}
