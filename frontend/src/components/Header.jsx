
import { useNavigate, useLocation } from 'react-router-dom'
export default function Header() {
  const nav = useNavigate()
  const { pathname } = useLocation()
  return (
    <div className="topbar">
      <div className="pill">
        <span className={pathname === '/dashboard' ? 'active' : ''} onClick={() => nav('/dashboard')}>DASHBOARD</span>
        <span className={pathname === '/profile' ? 'active' : ''} onClick={() => nav('/profile')}>PROFILE</span>
        <span className={pathname === '/signup' ? 'active' : ''} onClick={() => nav('/signup')}>SIGN UP</span>
        <span className={pathname === '/signin' ? 'active' : ''} onClick={() => nav('/signin')}>SIGN IN</span>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />


      </div>
    </div>
  )
}
