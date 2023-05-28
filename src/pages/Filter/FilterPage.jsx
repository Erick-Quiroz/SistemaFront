import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
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
        window.location.reload()
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
    return (
        <nav className='navbar'>
            <Link to={'/'} className='text-center'>
                <img
                    alt="logo"
                    className='logo'
                    src={imageLogo}

                />
            </Link>
            <ul>
                <div>
                    <Select
                        className='Boton_select'
                        allowClear
                        placeholder="Categorías"
                        options={categories.map((cate) => ({ label: cate.name, value: cate.name }))}
                        onSelect={handleSelectChange}
                    >
                    </Select>
                </div>
            </ul>

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
                <Link to={'/Login'} className='text-center'>
                    <button
                        className="btn btn-outline-success "
                        style={{
                            height: '10hv',
                            margin: '3vh',
                            width: 100
                        }}
                        type="summit"
                    >
                        Login
                    </button>
                </Link>
                <Link to={'/shop'} className='text-center'>
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
                <Link to={'/cart'} className='text-center' >

                    <ShoppingCartOutlined style={
                        {
                            fontSize: 40,
                            color: '#000000',
                            margin: '3vh 0vh'
                        }}

                    /><span className="cart-count" style={navStyles}>{quantity}</span>
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
