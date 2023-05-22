import { enqueueSnackbar } from 'notistack'
import { Layout, theme, Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { shopAPI } from '../../services'
import { useForm } from '../../hooks'
import axios from 'axios'
import { AdminLayout } from '../../components/layouts/LayoutsoloFooter.jsx'
const { Option } = Select
const initialState = {
    name: '',
    description: '',
    state: 'Activo',
    category: '',
    price: 0,
    imageUrl: '',
    supplier: ''
}

export const UserPageEdit = () => {
    const navigate = useNavigate()
    const { token: { colorBgContainer } } = theme.useToken()
    const [formValues, handlerInputChange] = useForm(initialState)
    const { name, description, state, category, price, imageUrl , supplier } = formValues
    const { Content } = Layout

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await shopAPI.post('/productLG/create-productLG', { name, description, state, category, price, imageUrl, supplier })
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
                        
                        padding: 20,
                        minHeight: '84vh',
                        background: colorBgContainer
                    }}
                >
                    <div className="form-container container-fluid "style={{ backgroundColor: 'rgb(240 248 255)' }} >
                        <form className='row g-3 needs-validation was-validated'
                            noValidate=""
                            onSubmit={handleSubmit}
                        >
                            <h4 className="title d-flex justify-content-center" style={{ backgroundColor: '#94B0BA' }}>Editar Usuario</h4>
                            <div className="row  mb-3 d-flex justify-content-center" >

                                <div className="col-md-6">
                                    <label
                                        htmlFor="validationCustom01"
                                        className="form-label">
                                        <strong>Nombre</strong>
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
                                        Completa este campo.
                                    </div>
                                </div>

                                
                            </div>
                            <div className="row  mb-3 d-flex justify-content-center" >

                                        <div className="col-md-6">
                                            <label
                                                htmlFor="validationCustom01"
                                                className="form-label">
                                                <strong>Apellido</strong>
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
                                                Completa este campo.
                                            </div>
                                        </div>


                            </div>

                            <div className="row  mb-3 d-flex justify-content-center">

                                <div className="col-md-6">
                                    <label
                                        htmlFor="validationCustom01"
                                        className="form-label">
                                        <strong>Email</strong>
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
                                        Completa este campo.
                                    </div>
                                </div>
                                
                                                                
                            </div>
                            <div className="row  mb-3 d-flex justify-content-center">

                                        <div className="col-md-6">
                                            <label
                                                htmlFor="validationCustom01"
                                                className="form-label">
                                                <strong>Telefono</strong>
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
                                                Completa este campo.
                                            </div>
                                        </div>


                            </div>
                            <h4 className="title d-flex justify-content-center" >Cambiar Contrasena</h4>
                            <div className="row  mb-3 d-flex justify-content-center">

                                                    <div className="col-md-6">
                                                        <label
                                                            htmlFor="validationCustom01"
                                                            className="form-label">
                                                            <strong>Contrasena Nueva</strong>
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
                                                            Completa este campo.
                                                        </div>
                                                    </div>

                                                    
                                                    </div>
                           

                            <div className="d-flex justify-content-center ">
                                <div className="">
                                    <Link to={'/User'}>
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
                                        ACEPTAR
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Content >
            
        </AdminLayout>  
    )
}
