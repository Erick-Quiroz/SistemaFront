import { Layout } from 'antd'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { CarouselAdds, CarouselProducts} from '../components/ui/user'
import './HomePage.css'
import React from 'react'

export const HomePage = () => {
    const { Content } = Layout

    return (
        <ShopLayout>
            <Content className='fondo'
                style={{
                    height: '100%',
                    minHeight: '84vh',
                    lineHeight: '100vh',
                    textAlign: 'center'
                }}
            >
                <CarouselAdds />
                <div className= 'Contenedor'>
                    <h1 style={{color:'white'}}>Productos</h1>
                </div>
                <CarouselProducts />
            </Content >
        </ShopLayout>
    )
}
