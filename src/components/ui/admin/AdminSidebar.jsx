import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { items } from '../../../helpers'
import { imageLogo2 } from '../../../helpers/imageAdds'
import { Container } from 'react-bootstrap'
export const AdminSidebar = () => {
    const { Sider } = Layout
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Sider breakpoint="md" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
                style={{
                    height: '10vh',
                    margin: '2vh',
                    Container: 'center'
                }}
            >
                <img
                    className='logo'
                    alt="logo"
                    src={imageLogo2}
                    style={{

                        width: '25vh',
                        height: '13vh'

                    }}
                />
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items.admin} />
        </Sider>
    )
}
