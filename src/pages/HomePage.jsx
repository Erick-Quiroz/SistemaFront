import { Layout, theme } from 'antd'
import { ShopLayout } from '../components/layouts/ShopLayout'

export const HomePage = () => {
    const { Content } = Layout
    const { token: { colorBgContainer } } = theme.useToken()

    return (
        <>
            <ShopLayout>
                <Content style={{ margin: '0 8px' }}>
                    <div
                        style={{
                            padding: 0,
                            minHeight: '80vh',
                            background: colorBgContainer
                        }}
                    >
                        <h1>Home page</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                            ut at aspernatur numquam. Quos officiis nihil dolore quae ut molestiae
                            nulla, nisi repellendus ab, repellat aut. Quod nostrum iure deserunt.
                        </p>
                    </div>
                </Content >
            </ShopLayout>

        </>
    )
}
