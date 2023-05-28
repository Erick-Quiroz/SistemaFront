import React, { useContext } from 'react'
import { CartContext, ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { Layout, theme, Button, Modal } from 'antd'
import { ShopLayout } from '../../../components/layouts/ShopLayout'
import { DeleteOutlined } from '@ant-design/icons'
import './style.css'
export const ShoppingCart = () => {
    const [cart, setCart] = useContext(CartContext)

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    )
    const obj = cart.forEach(element => {
        console.log(element)
    })
    const { Content } = Layout
    const handleCheckout = () => {
        console.log(cart) // Realiza el proceso de checkout con los datos del carrito
    }
    const vaciar = () => {
        setCart([]) // Vaciar el carrito estableciendo un arreglo vacío
        console.log('Carrito vaciado')
    }
    const aumentarCantidad = (index) => {
        const updatedCart = [...cart] // Copia del carrito actual
        updatedCart[index].quantity++ // Aumentar la cantidad del producto en 1
        setCart(updatedCart) // Actualizar el carrito con la nueva cantidad
    }

    const disminuirCantidad = (index) => {
        const updatedCart = [...cart] // Copia del carrito actual
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity-- // Disminuir la cantidad del producto en 1
            setCart(updatedCart) // Actualizar el carrito con la nueva cantidad
        }
    }
    const eliminarItem = (index) => {
        const updatedCart = [...cart] // Copia del carrito actual
        updatedCart.splice(index, 1) // Eliminar el ítem del carrito
        setCart(updatedCart) // Actualizar el carrito con el ítem eliminado
    }
    return (
        <ShopLayout>
            <Content style={{ margin: '0 8px' }}>
                {/* <div className="cart-container">
                    <div>
                        <div>Items in cart: {quantity}</div>
                        <div>Total: {totalPrice} Bs.</div>
                        <div>Cart items:</div>

                        {cart.map((item, index) => (
                            <div key={index}>Nombre:{item.name} Precio : {item.price} Cantidad:{item.quantity}</div>

                        ))}
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </div> */}
                {/* Modelo de html cart */}

                <div className="container">
                    <h1>Productos en el carrito</h1>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Sub total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? '' : 'even-row'}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <img src={item.imageUrl} alt={item.name} className="product-image" style={{ width: 40, height: 40 }} />
                                    </td>
                                    <td>{item.price} Bs.</td>
                                    <td>
                                        <button onClick={() => disminuirCantidad(index)} className="btn btn-outline-danger" style={{ margin: '6px 5px' }}>
                                            -
                                        </button>
                                        {item.quantity}
                                        <button onClick={() => aumentarCantidad(index)} className="btn btn-outline-success" style={{ margin: '6px 5px' }}>
                                            +
                                        </button>
                                    </td>
                                    <td>${item.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => eliminarItem(index)} className="btn btn-outline-danger">
                                            <DeleteOutlined />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="total">
                        Total: {totalPrice} Bs.
                    </div>

                    <div className="total">
                        <button className="btn btn-outline-danger" onClick={vaciar}>Vaciar carrito</button>
                    </div>
                </div>

            </Content>
        </ShopLayout >
    )
}
