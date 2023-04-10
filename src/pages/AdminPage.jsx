import { Layout, theme, Progress } from 'antd'
import { AdminLayout } from '../components/layouts/AdminLayout'

export const AdminPage = () => {
    const { Content } = Layout
    const { token: { colorBgContainer } } = theme.useToken()

    return (
        <>
            <AdminLayout >
                <Content style={{ margin: '0 8px' }}>
                    <div
                        style={{
                            padding: 14,
                            minHeight: '86vh',
                            background: colorBgContainer
                        }}
                    >
                    </div>
                </Content>
            </AdminLayout >
        </>
    )
}
