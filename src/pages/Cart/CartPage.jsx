import { useState } from 'react'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import './index.css'
import { ShopLayout } from '../../components/layouts/ShopLayout'
export const CartPage = () => {
    const [allProducts, setAllProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [countProducts, setCountProducts] = useState(0)

    return (
        <ShopLayout>
            <>
                <Header
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                />
                <ProductList
                    allProducts={allProducts}
                    setAllProducts={setAllProducts}
                    total={total}
                    setTotal={setTotal}
                    countProducts={countProducts}
                    setCountProducts={setCountProducts}
                />

            </>
        </ShopLayout>
    )
}
