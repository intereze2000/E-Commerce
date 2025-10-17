import { Link } from "react-router-dom";

export const Nav = ({ user, logout }) => {

  return (
    <div>    
      <header className="app-header">
        <Link to="/">TiendaOnline</Link>
        <nav>
          {user ? (
          <>
            <Link to="/compras">Compras</Link>
            <Link to="/productos">Productos</Link>
            <button onClick={logout}>Salir</button>
          </>
          ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registro</Link>
          </>
          )}
        </nav>
      </header>
    </div>
  )
}