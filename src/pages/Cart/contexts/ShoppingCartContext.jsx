import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
        <>

            <CartContext.Provider value={[cart, setCart]}>

                {children}
            </CartContext.Provider>
        </>
    )
}
