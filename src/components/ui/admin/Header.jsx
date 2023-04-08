import { Layout } from 'antd'
import { HomeFilled, EditFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const Header = () => {
    const { Header } = Layout

    return (
        <Header
            style={{
                paddingRight: 15,
                textAlign: 'right',
                color: 'white',
                fontSize: '30px',
                height: 90
            }}>
            <Link to={'/'} >

                <HomeFilled />
                <h1 style={{

                    textAlign: 'right',
                    color: 'white',
                    fontSize: '15px'

                }}>Salir</h1>
            </Link>

        </Header>
    )
}
