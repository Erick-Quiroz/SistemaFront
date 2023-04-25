import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { CardComponent } from '../CardComponent'
import { shopAPI } from '../../../../services'
import { Row } from 'antd'

export const SliderMotion = () => {
    const [data, setData] = useState([])
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    const getAll = async () => {
        const { data: { product } } = await shopAPI.get('/productLG/get-productLG')
        setData(product)
    }

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        getAll()
    }, [])

    return (
        <motion.div
            ref={carousel}
            className='carousel'
            whileTap={{ cursor: 'grabbing' }}
        >
            <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                className='inner-carousel'
            >
                <Row justify="space-evenly" gutter={16} style={{ minHeight: '40rem', minWidth: '20rem', display: 'flex', alignItems: 'center' }}>
                    {data.map((data) => {
                        return (
                            <motion.div className='item' key={data.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                                <CardComponent {...data} />
                            </motion.div>
                        )
                    })}
                </Row>
            </motion.div>
        </motion.div>
    )
}
