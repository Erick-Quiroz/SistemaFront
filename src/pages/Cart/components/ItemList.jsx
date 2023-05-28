import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from 'axios'

import { Item } from './Item'
// import { Navbar } from '../components/NavBar'
import { Layout, theme, Button, Modal } from 'antd'
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext'
import { ShopLayout } from '../../../components/layouts/ShopLayout'
export const ItemList = () => {
    const { Content } = Layout
    const [pro, setCategories] = useState([])

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('https://sistema-back.onrender.com/api/productLG/get-productLG')
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
        <ShopLayout>
            <Content style={{ margin: '0 8px' }}>

                {/* <Navbar /> */}
                <div className="items-list">
                    {pro.map((product, idx) => {
                        return <Item key={pro._id} {...product} />
                    })}
                </div>

            </Content>
        </ShopLayout>
    )
}
