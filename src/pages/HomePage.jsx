import { Layout } from 'antd'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { CarouselAdds, CarouselProducts } from '../components/ui/user'
import './HomePage.css'

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

                <CarouselProducts />
            </Content >
        </ShopLayout>
    )
}
