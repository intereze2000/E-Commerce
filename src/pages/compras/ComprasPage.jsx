import React, { useState, useEffect } from 'react'
import { api } from '../../services/apiService'
import CompraForm from './CompraForm'
import Pagination from '../../components/Pagination'
export default function ComprasPage(){
const [compras, setCompras] = useState([])
const [page, setPage] = useState(1)
const [limit] = useState(5)
const [editing, setEditing] = useState(null)
useEffect(()=>{ setCompras(api.listCompras()) }, [])
function refresh(){ setCompras(api.listCompras()) }
function onDelete(id){ api.deleteCompra(id); refresh() }
function onEdit(comp){ setEditing(comp) }
function onSaved(){ setEditing(null); refresh() }
const start = (page-1)*limit
const paged = compras.slice(start, start+limit)
return (
<div>
<h2>Compras</h2>
<button onClick={()=>setEditing({})}>Nueva compra</button>
{editing && <CompraForm compra={editing} onSaved={onSaved}
onCancel={()=>setEditing(null)} />}
<div className="card-grid">
{paged.map(c => (
<div className="card" key={c.id}>
<h3>{c.title}</h3>
<p>Total: ${c.total}</p>
<p>Proveedor: {c.supplier}</p>
<p>Fecha: {new Date(c.createdAt).toLocaleString()}</p>
<div className="card-actions">
<button onClick={()=>onEdit(c)}>Editar</button>
<button onClick={()=>onDelete(c.id)}>Borrar</button>
</div>
</div>
))}
</div>
<Pagination total={compras.length} page={page} limit={limit}
onChange={setPage} />
</div>
)
}
