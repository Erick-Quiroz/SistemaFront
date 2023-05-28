import { Layout, Col, Row, Typography, Radio, Space, Button, Checkbox } from 'antd'
import { ShopLayout } from '../../components/layouts/ShopLayout'
import { useEffect, useState } from 'react'
import { CardComponent } from '../../components/ui/user/CardComponent'
import { shopAPI } from '../../services'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'

export const FilterPage = () => {
    const { Content } = Layout
    const { Title } = Typography
    const [products, setProducts] = useState([])// Todos los productos filtrados por categorias
    const location = useLocation()
    const categoria = location.state.data

    const getAll = async () => {
        try {
            const { data } = await shopAPI.get(`/productLG/filter-Category-productLG/${categoria}`)
            if (data.success) {
                setProducts(data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            <ShopLayout>
                <Content>
                    <>
                        <Row justify="center">
                            <Title className='Titulo'>Busqueda de Productos</Title>
                        </Row>
                        <Row>
                            <Col span={22} className='Productos' style={{
                                flexWrap: 'nowrap'
                            }}>
                                <Row className='asds' justify="center" align="middle">
                                    {
                                        products?.map(c => (
                                            <Col key={c._id}>
                                                <CardComponent key={c._id} {...c} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </>
                </Content >
            </ShopLayout>
        </>
    )
}
