import { enqueueSnackbar } from 'notistack'
import { Layout, theme } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout.jsx'
import { shopAPI } from '../../services/index.js'
import { useForm } from '../../hooks/index.js'
import axios from 'axios'
import BACKENDURL from '../../utils/backendUrl.js'
const initialState = {
  email: '',
  name: '',
  lastname: '',
  phone: '',
  password: '',
  passwordconfirm: '',
}

export const UserPage = () => {
  const navigate = useNavigate()
  const { token: { colorBgContainer } } = theme.useToken()
  const [formValues, setFormValues] = useState(initialState)
  const { email, name, lastname, phone, password, passwordconfirm } = formValues
  const { Content } = Layout

  useEffect(() => {
    // Aquí debes recuperar los datos del usuario desde MongoDB y establecerlos en el estado
    // Esto se puede hacer utilizando la función handleGetUser al cargar la página o al iniciar sesión previo

    // Ejemplo:
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`${BACKENDURL}/api/user/get-User/${email}`)
        if (data.success) {
          setFormValues(data.user)
        }
      } catch (error) {
        console.error(error)
        enqueueSnackbar('Error al obtener los datos del usuario', {
          variant: 'error',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      }
    }

    // Aquí llamas a la función para obtener los datos del usuario
    fetchUserData()
  }, []) // Asegúrate de pasar un arreglo de dependencias vacío para que useEffect se ejecute solo una vez

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await shopAPI.post('/user/update-User', { email, name, lastname, phone, password })
      if (data.success) {
        navigate('/')
        enqueueSnackbar('Usuario Actualizado', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      }
    } catch (error) {
      console.error(error)
      enqueueSnackbar('Error al actualizar el usuario', {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    }
  }

  

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
                  <h4 className="text-center mb-4">Perfil de Usuario</h4>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <strong>Correo electrónico</strong>
                    </label>
                    <input
                      autoFocus
                      className="form-control"
                      id="email"
                      maxLength={320}
                      minLength={3}
                      name="email"
                      onChange={handleInputChange}
                      required
                      type="email"
                      value={email}
                    />
                    <div className="invalid-feedback">
                      Por favor, introduce un correo válido (8-100 caracteres).
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <strong>Nombre</strong>
                    </label>
                    <input
                      autoFocus
                      className="form-control"
                      id="name"
                      maxLength={20}
                      minLength={3}
                      name="name"
                      onChange={handleInputChange}
                      required
                      type="text"
                      value={name}
                      pattern="[A-Za-zá-ú ]{3,20}"
                    />
                    <div className="invalid-feedback">
                      Por favor, introduce un nombre válido (3-20 caracteres).
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      <strong>Apellido</strong>
                    </label>
                    <input
                      autoFocus
                      className="form-control"
                      id="lastname"
                      maxLength={20}
                      minLength={3}
                      name="lastname"
                      onChange={handleInputChange}
                      required
                      type="text"
                      value={lastname}
                      pattern="[A-Za-zá-ú ]{3,20}"
                    />
                    <div className="invalid-feedback">
                      Por favor, introduce un apellido válido (3-20 caracteres).
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      <strong>Celular</strong>
                    </label>
                    <input
                      autoFocus
                      className="form-control"
                      id="phone"
                      maxLength={8}
                      minLength={7}
                      name="phone"
                      onChange={handleInputChange}
                      required
                      type="tel"
                      pattern="[0-9]{7,8}"
                      value={phone}
                    />
                    <div className="invalid-feedback">
                      Por favor, introduce un número de teléfono válido (7-8 dígitos).
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <strong>Contraseña</strong>
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      maxLength={50}
                      minLength={8}
                      name="password"
                      onChange={handleInputChange}
                      required
                      type="password"
                      value={password}
                    />
                    <div className="invalid-feedback">
                      Por favor, introduce una contraseña válida (8-50 caracteres).
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="passwordconfirm" className="form-label">
                      <strong>Confirmar Contraseña</strong>
                    </label>
                    <input
                      className="form-control"
                      id="passwordconfirm"
                      maxLength={50}
                      minLength={8}
                      name="passwordconfirm"
                      onChange={handleInputChange}
                      required
                      type="password"
                      value={passwordconfirm}
                    />
                    {password !== passwordconfirm && (
                      <div className="alert alert-danger" role="alert">
                        Las contraseñas no coinciden.
                      </div>
                    )}
                    <div className="invalid-feedback">
                      Por favor, introduce una contraseña válida (8-50 caracteres).
                    </div>
                  </div>

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
                        style={{ width: '120px' }}
                      >
                        ACTUALIZAR
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
  )
}

export default UserPage
