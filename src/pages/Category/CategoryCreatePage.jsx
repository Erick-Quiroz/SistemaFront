import { useState } from 'react'
import { Layout, theme } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import BACKENDURL from '../../utils/backendUrl.js'
import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'

// import "../../styles/AuthStyles.css";
export const CategoryCreatePage = () => {
    const { Content } = Layout
    const {
        token: { colorBgContainer }
    } = theme.useToken()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [state, setState] = useState('')
    const [category, setCategory] = useState('')

    const navigate = useNavigate()

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BACKENDURL}/api/category/create-category`, {
                name, description, state, category
            })
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
                navigate('/admin/categorias')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    return (
        <>
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

                                <h4 className="title" >Registrar Categoria</h4>
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
                                        <label htmlFor="disabledTextInput" className="form-label">Descripcion</label>
                                        <input
                                            type="text"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
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
        </>
    )
}
