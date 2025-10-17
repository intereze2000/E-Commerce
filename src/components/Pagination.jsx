import React from 'react'
export default function Pagination({ total, page, limit, onChange }){
const pages = Math.max(1, Math.ceil(total / limit))
return (
<div className="pagination">
<button onClick={()=>onChange(Math.max(1, page-1))} disabled={page<=1}
>Anterior</button>
<span>Pagina {page} / {pages}</span>
<button onClick={()=>onChange(Math.min(pages, page+1))}
disabled={page>=pages}>Siguiente</button>
</div>
)
}
