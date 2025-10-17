import React, { useState, useEffect } from 'react'
import { api } from '../../services/apiService'
//import { api as apiWrapper } from '../../services/apiService'
export default function CompraForm({ compra, onSaved, onCancel }){
const [title, setTitle] = useState(compra.title || '')
const [supplier, setSupplier] = useState(compra.supplier || '')
const [total, setTotal] = useState(compra.total || 0)
const [items, setItems] = useState(compra.items || [])
useEffect(()=>{
setTitle(compra.title || '')
setSupplier(compra.supplier || '')
setTotal(compra.total || 0)
setItems(compra.items || [])
}, [compra])
function save(e){
e.preventDefault()
const payload = { title, supplier, total: Number(total), items }
if(compra.id) api.updateCompra(compra.id, payload)
else api.createCompra(payload)
onSaved()
}
return (
<form onSubmit={save} className="form-card">
<h3>{compra.id ? 'Editar compra' : 'Nueva compra'}</h3>
<input value={title} onChange={e=>setTitle(e.target.value)}
placeholder="Título" />
<input value={supplier} onChange={e=>setSupplier(e.target.value)}
placeholder="Proveedor" />
<input value={total} onChange={e=>setTotal(e.target.value)}
placeholder="Total" type="number" />
<div className="form-actions">
<button type="submit">Guardar</button>
<button type="button" onClick={onCancel}>Cancelar</button>
</div>
</form>
)
}
