import React, { useContext, useDebugValue } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'
import { FaFileVideo } from 'react-icons/fa'

export const Item = ({ name, price, _id, existence, imageUrl }) => {
    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item._id === _id)
            console.log(isItemsFound)
            if (isItemsFound) {
                return currItems.map((item) => {
                    if (item._id === _id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            } else {
                return [...currItems, { _id, quantity: 1, price, name, existence, imageUrl }]
            }
        })
    }

    const removeItem = (_id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item._id === _id)?.quantity === 1) {
                return currItems.filter((item) => item._id !== _id)
            } else {
                return currItems.map((item) => {
                    if (item._id === _id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const getQuantityById = (_id) => {
        return cart.find((item) => item._id === _id)?.quantity || 0
    }

    const quantityPerItem = getQuantityById(_id)

    return (

        <div className="item-box">
            {quantityPerItem > 0 && (
                <div className="item-quantity">{quantityPerItem}</div>
            )}

            <div>{name}</div>
            <img src={imageUrl} width="100" height="100" />
            <div className="item-price">${price}</div>

            {quantityPerItem === 0
                ? (
                    <div>
                        <button className="item-add-button" onClick={() => addToCart()}>
                            + Add to cart
                        </button>
                    </div>
                )
                : (
                    <div>
                        <button className="item-plus-button" onClick={() => addToCart()}>
                            + add more
                        </button>
                    </div>
                )}

            {quantityPerItem > 0 && (
                <div>
                    <button className="item-minus-button" onClick={() => removeItem(_id)}>
                        subtract item
                    </button>
                </div>
            )}
        </div>
    )
}
