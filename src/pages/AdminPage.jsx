import { Layout, theme } from 'antd'
import { AdminLayout } from '../components/layouts/AdminLayout'
import './AdminPage.css'

export const AdminPage = () => {
    const { Content } = Layout
    const { token: { colorBgContainer } } = theme.useToken()

    return (
        <>
            <AdminLayout >
                <Content>
                    <div className='contenedorPantalla'
                        style={{
                            background: colorBgContainer
                        }}
                    >
                    </div>
                </Content>
            </AdminLayout>
        </>
    )
}
