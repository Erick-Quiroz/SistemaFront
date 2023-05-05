import { Card, Col, Row } from 'antd'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const { Meta } = Card

export const CardComponent = (props) => {
    const { name, description, imageUrl, price } = props

    return (
        <Row
            align={'top'}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{
                padding: 14,
                height: '100%',
                lineHeight: '100vh',
                textAlign: 'center'
            }}
        >
            <Col span={8} className="gutter-row" style={{
                maxHeight: '60vh'
            }}>
                <Card
                    className={styles.card}
                    style={{
                        display: 'flow-root',
                        marginBottom: 50,
                        marginLeft: 0,
                        marginTop: 50,
                        width: 200,
                        height: 320
                    }}
                    cover={
                        <img draggable={false} alt={name} src={imageUrl} style={{
                            height: '100%',
                            width: '100%'
                        }}
                        />
                    }
                >
                    <div>precio: {price} Bs</div>
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
    imageUrl: PropTypes.string,
    price: PropTypes.number
}
