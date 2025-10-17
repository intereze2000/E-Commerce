// LoginPage.jsx (resumen)
//import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
//import { useAuth } from '../../hooks/useAuth'
export default function LoginPage(){
const { login } = useAuth()
const navigate = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)
async function onSubmit(e){
e.preventDefault()
const ok = login({ email, password })
if(ok) navigate('/')
else setError('Credenciales inválidas')
}
return (
<form onSubmit={onSubmit} className="auth-form">
<h2>Iniciar sesión</h2>
<input value={email} onChange={e=>setEmail(e.target.value)}
placeholder="Email" />
<input value={password} onChange={e=>setPassword(e.target.value)}
placeholder="Contraseña" type="password" />
{error && <div className="error">{error}</div>}
<button type="submit">Entrar</button>
</form>
)
}

