import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { items } from '../../../helpers'

export const AdminSidebar = () => {
    const { Sider } = Layout
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
                style={{
                    height: 102,
                    margin: 16,
                    background: 'url(/public/logo.png)'
                }}
            >
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items.admin} />
        </Sider>
    )
}
