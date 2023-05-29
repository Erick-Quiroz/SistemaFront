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
  const [userData, setUserData] = useState(null);
  // Resto del código

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        // Obtener los datos del usuario usando el token
        const { data } = await shopAPI.get('/user/get-user', {
          headers: { 'token': token },
        });

        setUserData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response?.data?.message || 'Error al obtener los datos del usuario');
      }
    };

    fetchUserData();
  }, []);
  // Resto del código

  return (
    <ShopLayout>
      <Content style={{ margin: '0 8px' }}>
        <div style={{ padding: 14, minHeight: '84vh' }}>
          <h1>User Profile</h1>
          {userData && (
            <div>
              <p>Email: {userData.email}</p>
              <p>Name: {userData.name}</p>
              <p>Last Name: {userData.lastname}</p>
              <p>Phone: {userData.phone}</p>
            </div>
          )}
        </div>
      </Content>
    </ShopLayout>
  );
};
