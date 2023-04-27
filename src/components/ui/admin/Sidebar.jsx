import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { items } from '../../../helpers'
import { imageLogo } from '../../../helpers/imageAdds'
export const Sidebar = () => {
    const { Sider } = Layout
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div

            >
                <img
                    className='logo'
                    alt="logo"
                    src={imageLogo}
                />
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
