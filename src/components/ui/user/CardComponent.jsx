import { Card, Col, Row } from 'antd'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const { Meta } = Card

export const CardComponent = (props) => {
    const { name, description, imageUrl } = props

    return (
        <Row
            align={'top'}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{
                padding: 14,
                minHeight: '84vh',
                height: '100%',
                lineHeight: '100vh',
                textAlign: 'center'
            }}
        >
            <Col span={6} className="gutter-row">
                <Card
                    className={styles.card}
                    style={{
                        marginBottom: 50,
                        marginLeft: 80,
                        marginTop: 50,
                        width: 200
                    }}
                    cover={
                        <img alt={name} src={imageUrl} />
                    }
                >
                    <Meta
                        style={{ color: 'yellowgreen' }}
                        title={name}
                        description={description}
                    />
                </Card>
            </Col>

            <Col span={6} className="gutter-row">
                <Card
                    className={styles.card}
                    style={{
                        marginBottom: 50,
                        marginLeft: 80,
                        marginTop: 50,
                        width: 200
                    }}
                    cover={
                        <img alt={name} src={imageUrl} />
                    }
                >
                    <Meta
                        style={{ color: 'yellowgreen' }}
                        title={name}
                        description={description}
                    />
                </Card>
            </Col>

            <Col span={6} className="gutter-row">
                <Card
                    className={styles.card}
                    style={{
                        marginBottom: 50,
                        marginLeft: 80,
                        marginTop: 50,
                        width: 200
                    }}
                    cover={
                        <img alt={name} src={imageUrl} />
                    }
                >
                    <Meta
                        style={{ color: 'yellowgreen' }}
                        title={name}
                        description={description}
                    />
                </Card>
            </Col>
        </Row >
    )
}

CardComponent.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string
}
