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
    const [radio, setRadio] = useState('0') // el radio Precio
    const [checked, setChecked] = useState('0')// El checkbox Oferta
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

    const filterProduct = async () => {
        try {
            console.log('envio de datos')
            console.log(radio)// Precio
            console.log(checked)// Categoria
            console.log(categoria)
            const { data } = await shopAPI.get(`/productLG/filter-Offer-Category-productLG/${radio}/${checked}/${categoria}`)
            if (data.success) {
                setProducts(data.products)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleRadioPrecioChange = (e) => {
        const value = e.target.value
        if (value === radio) {
            setRadio('0')
        } else {
            setRadio(value)
        }
    }

    const handleRadioOfertaChange = (e) => {
        const value = e.target.value
        if (value === checked) {
            setChecked('0')
        } else {
            setChecked(value)
        }
    }

    useEffect(() => {
        if (checked === '0' || radio === '0') getAll()
        if (checked !== '0' || radio !== '0') filterProduct()
    }, [checked, radio])

    return (
        <>
            <ShopLayout>
                <Content>
                   
                        <h2>Hola</h2>
                </Content >
            </ShopLayout>
        </>
    )
}
