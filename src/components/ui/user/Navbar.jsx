import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaReact } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { imageLogo } from '../../../helpers/imageAdds'
import { Search } from '../Search'
import './navbar.css'
import { useCart } from 'react-use-cart'
import { Select } from 'antd'
import { shopAPI } from '../../../services'
import { CartContext } from '../../../pages/Cart/contexts/ShoppingCartContext'
import { ShoppingCartOutlined } from '@ant-design/icons'

export const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    const { isEmpty, totalItems } = useCart()
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0)
    const navigate = useNavigate('')
    const [categories, setCategories] = useState([])

    const handleSelectChange = (event) => {
        console.log(event)
        console.log('/Filter/' + event)
        navigate('/Filter', { state: { data: `${event}` } })
        
    }

    const getAllCategory = async () => {
        try {
            const { data } = await shopAPI.get('/category/get-category')
            if (data.success) {
                setCategories(data.category)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    const [cart, setCart] = useContext(CartContext)

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)

    const navStyles = {
        color: '#fff',
        listStyle: 'none',
        textDecoration: 'none'
    }

    const [toggleMenu, setToggleMenu] = useState(false)
    return (


        <div className="navbar-bg">

            <div className="sb__navbar">

                <Link to={'/'} className='navbar-brand'>
                    <img alt="logo" className='logo' src={imageLogo} style={{ width: 60, height: 50, padding: '0 0 0 5px' }} />
                </Link>
                <div className="sb__navbar-links">

                    <div className="sb__navbar-links_container ">
                        <p>

                            <Select
                                className='Boton_select'
                                allowClear
                                placeholder="Categoría"
                                options={categories.map((cate) => ({ label: cate.name, value: cate.name }))}
                                onSelect={handleSelectChange}
                            >
                            </Select>

                        
                        </p>
                        <p>
                            <Search />
                        </p>
                        <p>
                            <Link to={'/shop'} className='nav-link'>
                                <button className="btn btn-outline-success btn_nav" type="submit">
                                    Tienda
                                </button>
                            </Link>
                        </p>
                        <p>
                            <Link to={'/register'} className='nav-link'>
                                <button className="btn btn-outline-success btn_nav" type="submit">
                                    Registrarse
                                </button>
                            </Link>
                        </p>
                        <p>
                            <Link to={'/login'} className='nav-link' >
                                <button className="btn btn-outline-success btn_nav" type="submit">
                                    Login
                                </button>
                            </Link>
                        </p>
                        <p> 
                        <Link to={'/User'} className='text-center'>
                                <button className="btn btn-outline-success btn_nav" type="submit">
                                    Usuario
                                </button>
                        </Link>
                        </p>
                    </div>
                </div>
                <div className="sb__navbar-button">
                    <Link to={'/cart'} className='nav-link'>
                        <ShoppingCartOutlined style={{ fontSize: 25, color: '#000000' }} />
                        <span className="cart-count ml-2" style={navStyles}>{quantity}</span>
                    </Link>
                </div>
                <div className="sb__navbar-menu">
                    {toggleMenu
                        ? (

                            <FaTimes
                                color="#000"
                                size={27}
                                onClick={() => setToggleMenu(false)}
                            />)
                        : (
                            <FaBars
                                color="#000"
                                size={27}
                                onClick={() => setToggleMenu(true)}
                            />
                        )}
                    {toggleMenu && (
                        <div className="sb__navbar-menu_container scale-up-center">
                            <div className="sb__navbar-menu_container-links">

                                <p><Search style={{ with: '5' }} /></p>
                                <p>
                                    <Link to={'/shop'} className='nav-link'>
                                        <button className="btn btn-outline-success btn_nav" type="submit">
                                            Tienda
                                        </button>
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'/register'} className='nav-link'>
                                        <button className="btn btn-outline-success btn_nav" type="submit">
                                            Registrarse
                                        </button>
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'/login'} className='nav-link' >
                                        <button className="btn btn-outline-success btn_nav" type="submit">
                                            Login
                                        </button>
                                    </Link>
                                </p>
                                <p>
                                    <Link to={'/User'} className='nav-link' >
                                        <button className="btn btn-outline-success btn_nav" type="submit">
                                            Usuario
                                        </button>
                                    </Link>
                                </p>
                            </div>
                            <div className="sb__navbar-menu_container-links-sign">

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Navbar
