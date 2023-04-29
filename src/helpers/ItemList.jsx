import { AppstoreOutlined, PieChartOutlined, CarryOutOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const getItem = (label, key, icon, children) => {
    return { key, icon, children, label }
}

export const admin = [
    getItem('Inicio', '1',
        <Link to={'/admin'}>
            <PieChartOutlined />
        </Link>
    ),
    getItem('Registro', 'sub2',
        <AppstoreOutlined />
        , [
            getItem('Producto', '3', <Link to={'/admin/productos'} />),
            getItem('Categoria', '4', <Link to={'/admin/categorias'} />),
            getItem('Proveedor', '5', <Link to={'/admin/proveedors'} />),
            getItem('Ofertas', '6', <Link to={'/admin/ofertas'} />)
<<<<<<< HEAD
=======
            // getItem('Stock', '9', <Link to={'/admin/stock'} />)
        ]
    ),
    getItem('Operaciones', 'sub3',
        <CarryOutOutlined />
        , [
            getItem('Ofertas', '6', <Link to={''} />),
            getItem('Compras', '7', <Link to={'/admin/compras'} />),
            getItem('Ventas', '8', <Link to={''} />)
>>>>>>> bef635569cba673bece59d27f32ae0edc495fc93
        ]
    )
]

export const user = [
    getItem('Inicio', '15',
        <Link to={'/'}>
            <PieChartOutlined />
        </Link>
    )
]
