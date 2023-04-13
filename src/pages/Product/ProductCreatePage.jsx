import { enqueueSnackbar } from 'notistack'
import { Layout, theme } from 'antd'
import { useNavigate } from 'react-router-dom'

import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'
import { shopAPI } from '../../services'
import { useForm } from '../../hooks'
import axios from 'axios'

const initialState = {
    name: '',
    description: '',
    state: 'Activo',
    category: '',
    price: 0,
    imageUrl: ''
}

export const ProductCreatePage = () => {
    const navigate = useNavigate()
    const { token: { colorBgContainer } } = theme.useToken()
    const [formValues, handlerInputChange] = useForm(initialState)
    const { name, description, state, category, price, imageUrl } = formValues
    const { Content } = Layout

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await shopAPI.post('/productLG/create-productLG', { name, description, state, category, price, imageUrl })
            if (data.success) {
                navigate('/admin/productos')
                enqueueSnackbar('Producto agregado', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
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
                        <form className='row g-3 needs-validation was-validated'
                            noValidate=""
                            onSubmit={handleSubmit}
                        >
                            <h4 className="title" >Registrar Producto</h4>
                            <div className="row  mb-3">

                                <div className="col-md-6">
                                    <label
                                        htmlFor="validationCustom01"
                                        className="form-label">
                                        Nombre
                                    </label>
                                    <input
                                        autoFocus
                                        className="form-control"
                                        id="name"
                                        maxLength={20}
                                        minLength={3}
                                        name='name'
                                        onChange={handlerInputChange}
                                        required
                                        type="text"
                                        value={name}
                                    />
                                    <div className="invalid-feedback">
                                        Nombre es requerido.
                                    </div>
                                </div>

                                <div className="col">
                                    <label
                                        htmlFor="disabledTextInput"
                                        className="form-label">
                                        Descripcion
                                    </label>
                                    <input
                                        className="form-control"
                                        id="description"
                                        maxLength={20}
                                        minLength={3}
                                        name='description'
                                        onChange={handlerInputChange}
                                        required
                                        type="text"
                                        value={description}
                                    />
                                    <div className="invalid-feedback">
                                        Descripcion es requerido.
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <label
                                        htmlFor="disabledSelect1"
                                        className="form-label">
                                        Estado
                                    </label>
                                    <select
                                        className="form-select"
                                        id="disabledSelect"
                                        name='state'
                                        onChange={handlerInputChange}
                                        required
                                        value={state}
                                    >
                                        <option>Activo</option>
                                        <option>Inactivo</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Elije una estado.
                                    </div>
                                </div>

                                <div className="col">
                                    <label
                                        htmlFor="disabledSelect"
                                        className="form-label">
                                        Categoria
                                    </label>
                                    <select
                                        className="form-select"
                                        id="disabledSelect"
                                        name='category'
                                        onChange={handlerInputChange}
                                        placeholder="Seleccione categoria!!!"
                                        required
                                        value={category}
                                    >
                                        <option></option>
                                        <option>Lacteos</option>
                                        <option>Gaseosa</option>
                                        <option>Dulces</option>
                                        <option>Abarrotes</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Elije una categoria.
                                    </div>
                                </div>
                            </div>

                            <div className="row  mb-3">

                                <div className="col-md-3">
                                    <label
                                        htmlFor="validationCustom05"
                                        className="form-label">
                                        Precio
                                    </label>
                                    <input
                                        className="form-control"
                                        id="validationCustom05"
                                        min={1}
                                        name='price'
                                        onChange={handlerInputChange}
                                        required
                                        type="number"
                                        value={price}
                                    />
                                    <div className="invalid-feedback">
                                        Precio es requerido.
                                    </div>
                                </div>

                                <div className="col">
                                    <label
                                        htmlFor="disabledTextInput"
                                        className="form-label">
                                        Link de imagen
                                    </label>
                                    <input
                                        className="form-control"
                                        id="disabledSelect"
                                        minLength={7}
                                        name='imageUrl'
                                        onChange={handlerInputChange}
                                        required
                                        type="text"
                                        value={imageUrl}
                                    />
                                    <div className="invalid-feedback">
                                        Ingresa una imagen.
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                REGISTER
                            </button>
                        </form>
                    </div>
                </div>
            </Content >
        </AdminLayout >
    )
}