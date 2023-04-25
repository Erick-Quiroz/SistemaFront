
import BACKENDURL from '../../utils/backendUrl.js'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Layout, theme, Button, Modal } from 'antd'

import 'bootstrap/dist/css/bootstrap.min.css'
// import { AdminLayout } from '../components/layouts/AdminLayout.jsx'
import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'
import ModalUpdateCategory from './ModalUpdateCategory.jsx'
import { Link } from 'react-router-dom'
import CategoryForm from '../../components/Form/CategoryForm.jsx'

export const ProveedoresPage = () => {
    // const url = 'http://localhost:8080/api/supplierLG/get-supplierLG'
    const { Content } = Layout

    const {token: { colorBgContainer }} = theme.useToken()
    const [categories, setCategories] = useState([])
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null)
    const [updatedName, setUpdatedName] = useState('')
    //cambios
    const [supplierToEdit, setSupplierToEdit] = useState({})
    const [showModal, setShowModal] = useState(false)    

    // get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${BACKENDURL}/api/supplierLG/get-supplierLG`)
            if (data.success) {
                setCategories(data.supplier)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something wwent wrong in getting catgeory')
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    // update category
    /*
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(
                `/api/productLG/update-productLG/${selected._id}`,
                { name: updatedName }
            )

            if (data.success) {
                toast.success(`${updatedName} is updated`)
                setSelected(null)
                setUpdatedName('')
                setVisible(false)
                getAllCategory()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Somtihing went wrong')
        }
    }
    */
//name, 
//address,
//phonenumber1,
//phonenumber2,
//email1,
//email2, 


    //update supplier new
    const  updateSupplier = async (supplier,name,address,phonenumber1,phonenumber2,email1,email2,) => {
        try {
            const supplierUpdated = {
                name: name,         
                address: address,     
                phonenumber1: phonenumber1,
                phonenumber2: phonenumber2,
                email1: email1,
                email2: email2,  
                

            }
            const { data } = await axios.put(`${BACKENDURL}/api/supplierLG/update-supplierLG/${supplier._id}`,
                supplierUpdated
            )
            console.log(data)
            if (data.success) {
                getAllCategory()
                //const updatedCategoryIndex = categories.findIndex(c => c._id === categoryId);
                //const updatedCategories = [...categories];
                //updatedCategories[updatedCategoryIndex] = {...updatedCategories[updatedCategoryIndex], name};
                //setCategories(updatedCategories); // actualizar el estado categories
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
    }



    // delete supplier
    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `${BACKENDURL}/api/supplierLG/supplierLG/${pId}`
            )
            if (data.success) {
                toast.success('supplier is deleted')

                getAllCategory()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error('Somtihing went wrong')
        }
    }
    const handleGetSupplier = async(supplierId) => {
        try{
            const {data}= await axios.get(`${BACKENDURL}/api/supplierLG/get-supplierLG/${supplierId}`)
            console.log(data)
            if(data.success){
                setSupplierToEdit(data.provider)
                console.log(data.provider)
            }
        }catch(error){
            toast.error('Something went wrong in getting supplier')
        }
        setShowModal(true)
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
                        <div className="text-center"><h1>Mis Proveedores</h1></div>
                        <div className="col-10"></div>
                        <div className="col-2">
                            <Link to={'/admin/registro/proveedor'}>


                                <Button className=" btn btn-success btn-sm" type="primary" htmlType="submit" style={{

                                    width: 100,

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
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Direccion</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Correo</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((v) =>
                                        <>
                                            <tr className="text-center">
                                                <td>{v._id}</td>
                                                <td>{v.name}</td>
                                                <td>{v.address}</td>
                                                <td>{v.phonenumber1}</td>
                                                <td>{v.phonenumber2}</td>
                                                <td>{v.email1}</td>
                                                <td>{v.email2}</td>

                                                <td>
                                                    
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => {
                                                            {/*setVisible(true)
                                                            setUpdatedName(v.name)
                                                            setSelected(v)*/}
                                                            handleGetSupplier(v._id)
                                                        }} style={{
                                                            padding: 2,
                                                            width: 80,
                                                            margin: 2

                                                        }}
                                                    >
                                                    Editar
                                                    </button>
                                                    
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                            handleDelete(v._id)
                                                        }}style={{
                                                            padding: 1,
                                                            width: 80,
                                                            margin: 2
                                                        }}
                                                    >
                                                    Eliminar
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
                <ModalUpdateCategory
                    show={showModal}
                    supplierToEdit={supplierToEdit}
                    setShowModal={setShowModal}
                    setSupplierToEdit={setSupplierToEdit}
                    updateSupplier={updateSupplier}
                />
            </Content>
        </AdminLayout>
    )
}
