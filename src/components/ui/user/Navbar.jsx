import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { imageLogo } from '../../../helpers/imageAdds'
import { Search } from '../Search'
import './navbar.css'
import { useCart } from 'react-use-cart'
import { BiCart } from 'react-icons/bi'
import { Header } from '../../../pages/Cart/components/Header'
import { ProductList } from '../../../pages/Cart/components/ProductList'

export const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    const { isEmpty, totalItems } = useCart()
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0)

    return (
        <nav className='navbar'>
            <a href="/">
                <img
                    alt="logo"
                    className='logo'
                    src={imageLogo}
                    href="/"
                />
            </a>

            <ul
                className={Mobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setMobile(false)}
            >
                <Search />
                <Link to={'/register'} className='text-center'>
                    <button
                        className="btn btn-outline-success "
                        style={{
                            height: '10hv',
                            margin: '3vh',
                            width: 150
                        }}
                        type="summit"
                    >
                        Registrarse
                    </button>
                </Link>
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
                <Link to={'/cart'} className='text-center'>
                    <button
                        className="btn btn-outline-success "
                        style={{
                            height: '10hv',
                            margin: '3vh',
                            width: 100
                        }}
                        type="summit"
                    >
                        Tienda
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
