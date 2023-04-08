import { useState } from 'react'
import { Layout, theme } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import BACKENDURL from '../../utils/backendUrl.js'
import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'

// import "../../styles/AuthStyles.css";
export const ProveedorCreatePage = () => {
    const { Content } = Layout
    const {
        token: { colorBgContainer }
    } = theme.useToken()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phonenumber1, setPhone1] = useState('')
    const [phonenumber2, setPhone2] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')

    const navigate = useNavigate()

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        const regex = /^[a-zA-Z ]*$/
        if (!regex.test(name)) {
            toast.error('El nombre no es válido')
            return
        }
        const phoneRegex = /^[0-9]+$/
        if (!phoneRegex.test(phonenumber1) || !phoneRegex.test(phonenumber2)) {
        toast.error('Los campos de teléfono deben contener solo números')
        return
    }
        try {
            const res = await axios.post(`${BACKENDURL}/api/supplierLG/create-supplierLG`, {
                name, address, phonenumber1, phonenumber2, email1, email2
            })
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
                alert('Guardado exitosamente');
                navigate('/admin/proveedors')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    return (
        <AdminLayout>
            <Content style={{ margin: '0 8px' }}>
                <div
                    style={{
                        padding: 14,
                        minHeight: '86vh',
                        background: colorBgContainer
                    }}
                >

                    <div className="form-container container-fluid " >
                        <form onSubmit={handleSubmit} className='row g-3'>

                            <h4 className="title" >Registrar Proveedor</h4>
                            <div className="row  mb-3">
                                <div className="col">
                                    <label htmlFor="disabledTextInput" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder=""
                                        required
                                        autoFocus
                                    />
                                </div>

                                <div className="col">
                                    <label htmlFor="disabledTextInput" className="form-label">Direccion</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="form-control"
                                        id="description"
                                        placeholder=" "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row  mb-3">
                                <div className="col">
                                    <label htmlFor="disabledTextInput" className="form-label">Numero 1</label>
                                    <input
                                        type="text"
                                        value={phonenumber1}
                                        onChange={(e) => setPhone1(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder=""
                                        required
                                        autoFocus
                                    />
                                </div>

                                <div className="col">
                                    <label htmlFor="disabledTextInput" className="form-label">Numero 2</label>
                                    <input
                                        type="text"
                                        value={phonenumber2}
                                        onChange={(e) => setPhone2(e.target.value)}
                                        className="form-control"
                                        id="description"
                                        placeholder=" "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row  mb-3">
                                <div className="col">
                                    <label htmlFor="disabledTextInput" className="form-label">Email 1</label>
                                    <input
                                        type="text"
                                        value={email1}
                                        onChange={(e) => setEmail1(e.target.value)}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder=""
                                        required
                                        autoFocus
                                    />
                                </div>

                                <div className="col">
                                    <label htmlFor="disabledTextInput" className="form-label">Email 2</label>
                                    <input
                                        type="text"
                                        value={email2}
                                        onChange={(e) => setEmail2(e.target.value)}
                                        className="form-control"
                                        id="description"
                                        placeholder=" "
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                REGISTER
                            </button>

                        </form>
                        <div>
                            <h1></h1>
                        </div>

                    </div>
                </div>
            </Content>
        </AdminLayout>
    )
}
