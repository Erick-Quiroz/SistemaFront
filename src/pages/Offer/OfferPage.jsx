
import BACKENDURL from '../../utils/backendUrl.js'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Layout, theme, Button, Modal } from 'antd'

import 'bootstrap/dist/css/bootstrap.min.css'
import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'
import { useSnackbar } from 'notistack'
import ModalAddOffer from './ModalAddOffer.jsx'

export const OfferPage = () => {
    const { Content } = Layout
    const { token: { colorBgContainer } } = theme.useToken()
    const [categories, setCategories] = useState([])
    const [visible, setVisible] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [productToEdit, setProductToEdit] = useState({})
    const { enqueueSnackbar } = useSnackbar()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [productId, setProductId] = useState(null)
    const showModals = (productId) => {
        setProductId(productId)
        setIsModalVisible(true)
    }

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${BACKENDURL}/api/productLG/get-productLG`)
            if (data.success) {
                setCategories(data.product)
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar('Something wwent wrong in getting catgeory')
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `${BACKENDURL}/api/productLG/offerDproductLG/${pId}`
            )
            if (data.success) {
                toast.success('category is deleted')
                getAllCategory()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Somtihing went wrong')
        }
        toast.success('ofert is deleted')
        enqueueSnackbar('Oferta Eliminada', {
            variant: 'error',
            autoHideDuration: 1500,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }
        })
    }

    const handleGetProduct = async (pid) => {
        try {
            const { data } = await axios.get(`${BACKENDURL}/api/productLG/get-productLG/${pid}`)
            if (data.success) {
                setProductToEdit(data.product)
            }
        } catch (error) {
            toast.error('Something wwent wrong in getting catgeory')
        }
        setShowModal(true)
    }

    const updateProduct = async (product, name, description, price, porcentage, imageUrl) => {
        try {
            const productUpdated = {
                name,
                description,
                price,
                state: product.state,
                category: product.category,
                porcentage,
                // imageUrl: product.imageUrl,
                imageUrl

            }
            const { data } = await axios.put(`${BACKENDURL}/api/productLG/update-offerLG/${product._id}`,
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
            <Content style={{ margin: '0 8px' }}>
                <div

                    style={{
                        padding: 14,
                        minHeight: '86vh',
                        background: colorBgContainer
                    }}
                >

                    <div className="row">
                        <div className="text-center"><h1>Registar ofertas</h1></div>
                        <div className="col-10"></div>

                    </div><br></br>
                    <div className="container">
                        <div className="table-responsive">
                            <table border="1" className="table table-hover">
                                <thead className="thead-dark">
                                    <tr className="text-center">

                                        <th scope="col">Producto</th>

                                        <th scope="col">Precio(Bs)</th>
                                        <th scope="col">Ofertas%</th>
                                        <th scope="col">Precio Ofertas(Bs)</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((v) =>
                                        <>
                                            <tr className="text-center">

                                                <td>{v.name}</td>
                                                <td>{v.price}</td>
                                                <td>{v.porcentage}</td>
                                                <td>{(v.price) - ((v.price) * ((v.porcentage) / 100))}</td>

                                                <td>
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            handleGetProduct(v._id)
                                                        }} style={{
                                                            padding: 1,
                                                            width: 100,
                                                            margin: 2

                                                        }}
                                                    >
                                                        REGISTRAR OFERTAS
                                                    </button>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => showModals(v._id)}
                                                        style={{ padding: 13, width: 100, margin: 3 }}
                                                    >
                                                     Eliminar
                                                    </button>

                                                    <Modal
                                                        title="Eliminar oferta"
                                                        visible={isModalVisible}
                                                        onOk={() => {
                                                            handleDelete(productId)
                                                            setIsModalVisible(false)
                                                        }}
                                                        onCancel={() => setIsModalVisible(false)}
                                                    >
                                                        <p>¿Está seguro que desea eliminar la oferta?</p>
                                                    </Modal>

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
                <ModalAddOffer
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
