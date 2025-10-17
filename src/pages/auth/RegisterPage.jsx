// RegisterPage.jsx (resumen)
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
export default function RegisterPage(){
    const { register } = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    
    function onSubmit(e){
    e.preventDefault()
    const ok = register({ name, email, password })
    if(ok) navigate('/')
    else setError('El email ya está registrado')
    }

    return (
        <form onSubmit={onSubmit} className="auth-form">
            <h2>Registro</h2>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Contraseña" type="password" />
                {error && <div className="error">{error}</div>}
            <button type="submit">Crear cuenta</button>
        </form>
    )
}