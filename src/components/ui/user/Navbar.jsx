import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { imageLogo } from '../../../helpers/imageAdds'
import './navbar.css'

export const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <nav className='navbar'>
            <img
                alt="logo"
                className='logo'
                src={imageLogo}
            />
            
            <ul
                className={Mobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setMobile(false)}
            >
                <Link to={'/admin'} className='text-center'>
                    <button
                        className="btn btn-outline-success "
                        style={{
                            height: '10hv',
                            margin: '3vh',
                            width: 100
                        }}
                        type="summit"
                    >
                        Ingresar
                    </button>
                </Link>
                <Link to={'/User'} className='text-center'>
                    <button
                        className="btn btn-outline-success "
                        style={{
                            height: '10hv',
                            margin: '3vh',
                            width: 160
                        }}
                        type="summit"
                    >
                        Editar Usuario
                    </button>
                </Link>
            </ul>
            <button
                className='mobile-menu-icon '
                onClick={() => setMobile(!Mobile)}
            >
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav >
    )
}
export default Navbar
