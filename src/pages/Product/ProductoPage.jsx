import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import shopAPI from '../../services/axios.service'
import '../Product/ProductPage.css'

export const ProductoPage = () => {
    const [data, setData] = useState({})
    const { productID } = useParams()
    const { name, description, imageUrl, price, category, supplier } = data

    const getProduct = async () => {
        const { data: { product } } = await shopAPI.get(`/productLG/get-productLG/${productID}`)
        setData(product)
        console.log(product)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className="modal">
                <div className="modal__container">

                    <div className="modal__featured">
                        <div className="modal__circle">
                            <img alt="image" className="modal__product" src={imageUrl} />
                        </div>
                    </div>

                    <div className="modal__content">
                        <div className='product__content'>

                            <ul className="form-list">
                                <li className="form-list__row">
                                    <h2>Producto: </h2>
                                    <h2>{name}</h2>
                                </li>
                                <li className="form-list__row">
                                    <br />
                                    <label>Descripcion</label>
                                    <p>{description}</p>
                                </li>

                                <li className="form-list__row">
                                    <label>Precio</label>
                                    <p>{price} Bs.</p>
                                </li>

                                <li className="form-list__row">
                                    <label>Proveedor</label>
                                    <p>{supplier}</p>
                                </li>

                                <li className="form-list__row">
                                    <label>category</label>
                                    <p>{category}</p>
                                </li>

                                <li>
                                    <button className="button">Agregar</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
