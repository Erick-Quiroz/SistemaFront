import { enqueueSnackbar } from 'notistack'
import { Layout, theme } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AdminLayout } from '../../components/layouts/AdminLayout.jsx'
import { shopAPI } from '../../services'
import { useForm } from '../../hooks'
import axios from 'axios'

const initialState = {
    name: '',
    supplier: '',
    quantity: '',
    total: '',
    state: 'Activo'

}

export const ComprasCreatePage = () => {
    const navigate = useNavigate()
    const { token: { colorBgContainer } } = theme.useToken()
    const [formValues, handlerInputChange] = useForm(initialState)
    const { name, supplier, quantity, total, state } = formValues
    const { Content } = Layout

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await shopAPI.post('/compras/create-compra', { name, supplier, quantity, total, state })
            if (data.success) {
                <Link to={'/admin/compras'} />
                enqueueSnackbar('Compra agregado', {
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
    // datos de producto
    const [categories, setCategories] = useState([])
    const [prove, setProveedor] = useState([])
    const getAllCategory = async () => {
        try {
            const { data } = await shopAPI.get('/productLG/get-productLG')
            if (data.success) {
                setCategories(data.product)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getAllPrveedor = async () => {
        try {
            const { data } = await shopAPI.get('supplierLG/get-supplierLG')
            if (data.success) {
                setProveedor(data.supplier)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // datos de proveedor
    useEffect(() => {
        getAllCategory()
        getAllPrveedor()
    }, [])

    return (
        <AdminLayout>
            <Content style={{ margin: '0 8px' }}>
                <div
                    style={{
                        padding: 14,
                        minHeight: '84vh',
                        background: colorBgContainer
                    }}
                >
                    <div className="form-container container-fluid " >
                        <form className='row g-3 needs-validation was-validated'
                            noValidate=""
                            onSubmit={handleSubmit}
                        >
                            <h4 className="title" >Registo de compras</h4>

                            <div className="row mb-3">
                                <div className="col">
                                    <label
                                        htmlFor="disabledSelect1"
                                        className="form-label">
                                        <strong>Producto</strong>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="disabledSelect"
                                        name='name'
                                        onChange={handlerInputChange}
                                        required
                                        value={name}
                                    >
                                        <option value="" disabled>Seleccione un producto</option>
                                        {categories?.map((v) =>
                                            <>
                                                <option className="">
                                                    {v.name}
                                                </option>
                                            </>
                                        )}
                                    </select>
                                    <div className="invalid-feedback">
                                        Elije una producto.
                                    </div>
                                </div>

                                <div className="col">
                                    <label
                                        htmlFor="disabledSelect"
                                        className="form-label">
                                        <strong>Proveedor</strong>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="disabledSelect"
                                        name='supplier'
                                        onChange={handlerInputChange}
                                        placeholder="Seleccione categoria!!!"
                                        required
                                        value={supplier}
                                    >
                                        <option value="" disabled>Seleccione un proveedor</option>
                                        {prove?.map((v) =>
                                            <>
                                                <option className="">
                                                    {v.name}
                                                </option>
                                            </>
                                        )}
                                    </select>
                                    <div className="invalid-feedback">
                                        Completa este campo.
                                    </div>
                                </div>
                            </div>

                            <div className="row  mb-3">

                                <div className="col-md-3">
                                    <label
                                        htmlFor="validationCustom05"
                                        className="form-label">
                                        <strong>Cantidad</strong>
                                    </label>
                                    <input
                                        className="form-control"
                                        id="validationCustom05"
                                        min={1}
                                        name='quantity'
                                        onChange={handlerInputChange}
                                        required
                                        step={'any'}
                                        type="number"
                                        value={quantity}
                                    />
                                    <div className="invalid-feedback">
                                        Completa este campo.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label
                                        htmlFor="validationCustom05"
                                        className="form-label">
                                        <strong>Precio</strong>
                                    </label>
                                    <input
                                        className="form-control"
                                        id="validationCustom05"
                                        min={1}
                                        name='total'
                                        onChange={handlerInputChange}
                                        required
                                        step={'any'}
                                        type="number"
                                        value={total}
                                    />
                                    <div className="invalid-feedback">
                                        Completa este campo.
                                    </div>
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="disabledSelect"
                                        className="form-label">
                                        <strong>Estado</strong>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="disabledSelect"
                                        name='state'
                                        onChange={handlerInputChange}
                                        placeholder="Seleccione un estado!!!"
                                        required
                                        value={state}
                                    >

                                        <option className="">Activo</option>
                                        <option className="">Inactivo</option>

                                    </select>
                                    <div className="invalid-feedback">
                                        Completa este campo.
                                    </div>
                                </div>
                            </div>

                            <div className="container text-end">
                                <div className="">
                                    <Link to={'/admin/compras'}>
                                        <button className=" btn btn-primary" type="primary" style={{
                                            padding: 8,
                                            width: 100,
                                            height: 35
                                        }}>
                                            CANCELAR
                                        </button>
                                    </Link>
                                    <button className="btn btn-primary m-2" type="submit" style={{
                                        padding: 8,
                                        width: 100,
                                        height: 35
                                    }}>
                                        REGISTRAR
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Content >
        </AdminLayout >
    )
}
