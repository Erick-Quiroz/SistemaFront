import { Carousel } from 'antd'

export const CarouselAdds = () => {
    return (
        <Carousel autoplay dots={false} draggable>
            <div style={{
                padding: 14,
                minHeight: '84vh'
            }}>
                <div className="contenedorTodo">
                    <seccion className='imagenSuperMercado'>
                        <div className="contenedorPantalla">
                            <img className="fondoPantalla"
                                src="../../public/img1.png"
                                alt="Foto_de_fondo" />
                        </div>
                    </seccion>
                </div>
            </div>

            <div>
                <div className="contenedorTodo">
                    <seccion className='imagenSuperMercado'>
                        <div className="contenedorPantalla">
                            <img className="fondoPantalla"
                                src="../../public/img2.png"
                                alt="Foto_de_fondo" />
                        </div>
                    </seccion>
                </div>
            </div>

            <div>
                <div className="contenedorTodo">
                    <seccion className='imagenSuperMercado'>
                        <div className="contenedorPantalla">
                            <img className="fondoPantalla"
                                src="../../public/img3.png"
                                alt="Foto_de_fondo" />
                        </div>
                    </seccion>
                </div>
            </div>
        </Carousel>
    )
}
