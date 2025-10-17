import React, { useEffect, useState } from 'react'
import { api } from '../../services/apiService'
import ProductosForm from './ProductosForm'
export default function ProductosPage(){
const [productos, setProductos] = useState([])
const [editing, setEditing] = useState(null)
useEffect(()=> setProductos(api.listProductos()), [])
function refresh(){ setProductos(api.listProductos()) }
function del(id){ api.deleteProducto(id); refresh() }
return (
<div>
<h2>Productos</h2>
<button onClick={()=>setEditing({})}>Nuevo producto</button>
{editing && <ProductosForm producto={editing} onSaved={()=>{
setEditing(null); refresh() }} onCancel={()=>setEditing(null)} />}
<div className="card-grid">
{productos.map(p=> (
<div className="card" key={p.id}>
<h3>{p.name}</h3>
<p>SKU: {p.sku}</p>
<p>Precio: ${p.price}</p>
<p>Stock: {p.stock}</p>
<div className="card-actions">
<button onClick={()=>setEditing(p)}>Editar</button>
<button onClick={()=>del(p.id)}>Borrar</button>
</div>
</div>
))}
</div>
</div>
)
}
