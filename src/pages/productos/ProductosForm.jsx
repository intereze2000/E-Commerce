import React, { useState, useEffect } from 'react'
import { api } from '../../services/apiService'
export default function ProductoForm({ producto, onSaved, onCancel }){
const [name, setName] = useState(producto.name || '')
const [sku, setSku] = useState(producto.sku || '')
const [price, setPrice] = useState(producto.price || 0)
const [stock, setStock] = useState(producto.stock || 0)
useEffect(()=>{
setName(producto.name || '')
setSku(producto.sku || '')
setPrice(producto.price || 0)
setStock(producto.stock || 0)
}, [producto])
function save(e){
e.preventDefault()
const payload = { name, sku, price: Number(price), stock: Number(stock) }
if(producto.id) api.updateProducto(producto.id, payload)
else api.createProducto(payload)
onSaved()
}
return (
<form onSubmit={save} className="form-card">
<h3>{producto.id ? 'Editar producto' : 'Nuevo producto'}</h3>
<input value={name} onChange={e=>setName(e.target.value)}
placeholder="Nombre" />
<input value={sku} onChange={e=>setSku(e.target.value)}
placeholder="SKU" />
<input value={price} onChange={e=>setPrice(e.target.value)}
placeholder="Precio" type="number" />
<input value={stock} onChange={e=>setStock(e.target.value)}
placeholder="Stock" type="number" />
<div className="form-actions">
<button type="submit">Guardar</button>
<button type="button" onClick={onCancel}>Cancelar</button>
</div>
</form>
)
}
