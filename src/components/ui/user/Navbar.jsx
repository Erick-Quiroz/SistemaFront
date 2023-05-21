import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { imageLogo } from '../../../helpers/imageAdds'
import { Search } from '../Search'
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
                <Search />
                <Link to={'/admin'} className='text-center'>
                    <button
                        className="btn btn-outline-success "
                        style={{
                            margin: '3vh',
                            width: 100
                        }}
                        type="summit"
                    >
                        Ingresar
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
