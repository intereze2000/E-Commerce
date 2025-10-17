import { v4 as uuid } from 'uuid'
const STORAGE_COMPRAS = 'tienda_compras_v1'
const STORAGE_PRODUCTOS = 'tienda_productos_v1'
function read(key){
return JSON.parse(localStorage.getItem(key) || '[]')
}
function write(key, data){
localStorage.setItem(key, JSON.stringify(data))
}
export const api = {
// Productos
listProductos(){ return read(STORAGE_PRODUCTOS) },
createProducto(prod){ const items = read(STORAGE_PRODUCTOS); prod.id =
uuid(); items.push(prod); write(STORAGE_PRODUCTOS, items); return prod },
updateProducto(id, data){ const items = read(STORAGE_PRODUCTOS); const idx
= items.findIndex(i=>i.id===id); if(idx>=0){ items[idx] =
{...items[idx], ...data}; write(STORAGE_PRODUCTOS, items); return
items[idx]} return null },
deleteProducto(id){ let items = read(STORAGE_PRODUCTOS); items =
items.filter(i=>i.id!==id); write(STORAGE_PRODUCTOS, items) },
getProducto(id){ return read(STORAGE_PRODUCTOS).find(p=>p.id===id) },
// Compras
listCompras(){ return read(STORAGE_COMPRAS) },
createCompra(comp){ const items = read(STORAGE_COMPRAS); comp.id = uuid();
comp.createdAt = new Date().toISOString(); items.push(comp);
write(STORAGE_COMPRAS, items); return comp },
updateCompra(id, data){ const items = read(STORAGE_COMPRAS); const idx =
items.findIndex(i=>i.id===id); if(idx>=0){ items[idx] =
{...items[idx], ...data}; write(STORAGE_COMPRAS, items); return items[idx]}
return null },
deleteCompra(id){ let items = read(STORAGE_COMPRAS); items =
items.filter(i=>i.id!==id); write(STORAGE_COMPRAS, items) },
getCompra(id){ return read(STORAGE_COMPRAS).find(p=>p.id===id) }
}
