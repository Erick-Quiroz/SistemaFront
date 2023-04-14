import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { items } from '../../../helpers'

export const Sidebar = () => {
    const { Sider } = Layout
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
                style={{
                    height: '100vh',
                    margin: '9vh',
                    background: 'url(/public/logo.png)'
                }}
            >
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items.user}
            />
        </Sider>
    )
}
