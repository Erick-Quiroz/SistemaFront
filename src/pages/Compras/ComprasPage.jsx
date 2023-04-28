import BACKENDURL from '../../utils/backendUrl.js'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Layout, theme, Button, Modal } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'
import { useSnackbar } from 'notistack'
import ModalUpdateStock from './ModalUpdateStock.jsx'
// import ModalUpdateProduct from './ModalUpdateProduct.jsx'
import { Link } from 'react-router-dom'
export const ComprasPage = () => {
    const { Content } = Layout
    const { token: { colorBgContainer } } = theme.useToken()
    const [categories, setCategories] = useState([])
    const [visible, setVisible] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [productToEdit, setProductToEdit] = useState({})
    const { enqueueSnackbar } = useSnackbar()
    // traer todos las compras
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${BACKENDURL}/api/compras/get-compras`)
            if (data.success) {
                setCategories(data.compras)
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar('Something wwent wrong in getting catgeory')
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    const updateProduct = async (product, name, expiration, existence) => {
        try {
            const productUpdated = {
                name,
                existence,
                expiration
            }// modificar desde la 73 y api
            const { data } = await axios.put(`${BACKENDURL}/api/stock/update-stock/${product._id}`,
                productUpdated
            )
            if (data.success) {
                getAllCategory()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Somtihing went wrong')
        }
    }

    return (
        <AdminLayout >
            <Content >
                <div
                    style={{
                        padding: 14,
                        minHeight: '86vh',
                        background: colorBgContainer
                    }}
                >
                    <div className="row">
                        <div className="text-center"><h1>Mis Compras</h1></div>
                        <div className="col-10"></div>
                        <div className="col-2" >
                            <Link to={'/admin/registro/compras'}>
                                <Button className=" btn btn-success" type="primary" htmlType="submit" style={{
                                    padding: 10,
                                    width: 80,
                                    height: 35
                                }}>
                                        Agregar
                                </Button>
                            </Link>
                        </div>

                    </div><br></br>
                    <div className="container">
                        <div className="table-responsive">
                            <table border="1" className="table table-hover">
                                <thead className="thead-dark">
                                    <tr className="text-center">
                                        <th scope="col">ID</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Proveedor</th>
                                        <th scope="col">Fecha Compra</th>
                                        <th scope="col">Cantidad</th>

                                        <th scope="col">Total</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((v) =>
                                        <>
                                            <tr className="text-center">
                                                <td>0</td>
                                                <td>{v.name}</td>
                                                <td>{v.supplier}</td>
                                                <td>0</td>
                                                <td>{v.quantity}</td>
                                                <td>{v.total}</td>
                                                <td>{v.state}</td>

                                                <td>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            // handleGetProduct(v._id)
                                                        }} style={{
                                                            padding: 2,
                                                            width: 80,
                                                            margin: 2

                                                        }}
                                                    >
                                                        Añadir
                                                    </button>

                                                </td>
                                            </tr>
                                        </>
                                    )}
                                </tbody>
                            </table>
                            <Modal
                                onCancel={() => setVisible(false)}
                                footer={null}
                                open={visible}
                            >

                            </Modal>
                        </div>
                    </div>
                </div>
                <ModalUpdateStock
                    show={showModal}
                    productToEdit={productToEdit}
                    setShowModal={setShowModal}
                    setProductToEdit={setProductToEdit}
                    updateProduct={updateProduct}
                />

            </Content>
        </AdminLayout>
    )
}
