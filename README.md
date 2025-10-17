# TiendaOnline - Proyecto ABMC (React SPA)
## Descripción
Aplicación SPA desarrollada como trabajo práctico de Programación Web.
Permite realizar ABMC sobre dos entidades: Compras (entidad principal) y
Productos (entidad de soporte). Usa React + Vite y almacenamiento local
(localStorage) para persistencia simple.
## Funcionalidades
- Registro e inicio de sesión (simulado, datos en localStorage).
- ABMC de Productos (crear, leer, actualizar, borrar).
- ABMC de Compras (crear, leer, actualizar, borrar), con paginado.
- SPA con navegación (react-router-dom).
- Uso de Hooks: useState, useEffect, useCallback, useContext, useParams,
useNavigate y shim para useHistory.
## Estructura del proyecto
(Ver árbol de archivos en el repositorio)
## Instalación y ejecución
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:5173`
## Notas
- Es un proyecto educativo; la autenticación y persistencia son de ejemplo
(localStorage).
- Para producción, reemplazar la capa de servicios por una API real y mejorar
la seguridad.
