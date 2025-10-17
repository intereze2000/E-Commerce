//(shim para useHistory solicitado) ```jsx
import { useNavigate } from 'react-router-dom'

export default function useHistoryShim(){
  const navigate = useNavigate()
  return {
    push: (path) => navigate(path),
    replace: (path) => navigate(path, { replace: true }),
    goBack: () => globalThis.history.back()
  }
}


