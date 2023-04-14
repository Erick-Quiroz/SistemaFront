import { Layout, theme } from 'antd'
import { ShopLayout } from '../components/layouts/ShopLayout'
import './HomePage.css'

export const HomePage = () => {
    const { Content } = Layout
    const { token: { colorBgContainer } } = theme.useToken()

    return (
        <>
            <ShopLayout>
                <Content style={{ margin: '0 8px' }}>
                    <div className="contenedorTodo">
                        <seccion className='imagenSuperMercado'> 
                            <div className="contenedorPantalla">
                                <img className= "fondoPantalla"
                                    src="../../public/Fondo.png" 
                                    alt="Foto_de_fondo"/>
                                <p className='textoBien'>Bienvenido</p>   
                            </div>                  
                        </seccion>
                    </div>
                </Content >
            </ShopLayout>
        </>
    )
}
