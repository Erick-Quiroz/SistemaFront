
/* eslint-disable no-tabs */

import { useEffect, useState } from 'react'
import axios from 'axios'
import BACKENDURL from '../../../utils/backendUrl.js'
export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product._id)) {
            const products = allProducts.map(item =>
                item.id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            setTotal(total + product.price * product.quantity)
            setCountProducts(countProducts + product.quantity)
            return setAllProducts([...products])
        }

        setTotal(total + product.price * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
    }

    const [categories, setCategories] = useState([])

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${BACKENDURL}/api/productLG/get-productLG`)
            if (data.success) {
                setCategories(data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])
    return (

        <><div className='container-items'>
            {categories.map(product => (
                <div className='item' key={product._id}>
                    <figure>
                        <img src={product.imageUrl} alt={product.name} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.name}</h2>
                        <p className='price'>${product.price} </p>
                        <p className='price'>Stock {product.existence}</p>
                        <button onClick={() => onAddProduct(product)}>

                            Añadir al carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

