import React, { useState } from 'react';
import { Layout, theme, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { shopAPI } from '../../services/index';
import { useForm } from '../../hooks/index';
import axios from 'axios';

const initialState = {
  email: '',
  password: ''
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const { colorBgContainer } = theme.useToken().token;
  const [formValues, setFormValues] = useForm(initialState);
  const { email, password } = formValues;
  const { Content } = Layout;
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await shopAPI.post('/user/login-user', { email, password });
      if (data.success) {
        const { role } = data;
        // Check user role and redirect accordingly
        if (role === 1) {
          navigate('/admin');
        } else if (role === 0) {
          navigate('/');
        }

        setAlertMessage('Usuario autenticado');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response?.status === 400 && response?.data?.message === 'Contraseña incorrecta') {
          setPasswordIncorrect(true);
          setUserNotFound(false);
          setAlertMessage('Contraseña incorrecta. Introduce una contraseña válida.');
        } else if (response?.status === 404 && response?.data?.message === 'Usuario no encontrado') {
          setPasswordIncorrect(false);
          setUserNotFound(true);
          setAlertMessage('El correo electrónico no está registrado. Introduce un correo electrónico válido.');
        } else {
          setAlertMessage(response?.data?.message || 'Error desconocido');
        }
      }
    }
  };

  return (
    <ShopLayout>
      <Content style={{ margin: '0 8px' }}>
        <div
          style={{
            padding: 14,
            minHeight: '84vh',
            background: colorBgContainer,
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form className="p-4 rounded bg-white" onSubmit={handleSubmit}>
                  <h4 className="text-center mb-4">Inicio de Sesión</h4>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <strong>Correo electrónico</strong>
                    </label>
                    <input
                      autoFocus
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={setFormValues}
                      required
                      type="email"
                      value={email}
                    />
                    {userNotFound && (
                      <div className="text-danger">Email no registrado. Introduce un email válido.</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <strong>Contraseña</strong>
                    </label>
                    <input
                      className={`form-control ${passwordIncorrect ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      onChange={setFormValues}
                      required
                      type="password"
                      value={password}
                    />
                    {passwordIncorrect && (
                      <div className="invalid-feedback">
                        Contraseña incorrecta. Introduce una contraseña válida.
                      </div>
                    )}
                  </div>
                  
                  {alertMessage && (
                    <Alert
                      className="mb-3"
                      type="error"
                      message={alertMessage}
                    />
                  )}

                  <div className="row justify-content-end">
                    <div className="col-auto">
                      <Link to="/">
                        <button
                          className="btn btn-danger"
                          type="button"
                          style={{ width: '100px' }}
                        >
                          CANCELAR
                        </button>
                      </Link>
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-success"
                        type="submit"
                        style={{ width: '100px' }}
                      >
                        INGRESAR
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </ShopLayout>
  );
};
