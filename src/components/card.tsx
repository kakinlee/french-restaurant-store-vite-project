import './card.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import cardProducts from '../data/cardProducts.json';
function Card() {
    const products = cardProducts; 

    const breakpoints = {
        0: { slidesPerView: 1 },
        350: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        1000: { slidesPerView: 4 }
    };

    return (
        <div>
            <p className="categories_titel">最新上架</p>
            <div className="products_list">
                <Swiper slidesPerView={4} loop={true}
                    pagination={false} navigation={true}
                    modules={[Navigation, Pagination]} spaceBetween={10}
                    speed={600} autoplay={{ delay: 5000 }}
                    breakpoints={breakpoints}
                    className="swiper-container-card">

                    {products.map((product) => (
                        <SwiperSlide className='SwiperSlide-card'>
                            <div className="swiper-slide" key={product.id}>
                                <div className="categories">{product.category}</div>
                                <img src={product.imageUrl} alt="" />
                                <div className="title">{product.title}</div>
                                <p className="intro">{product.description}</p>
                                <div className="price">
                                    <div className="onsale_price">NT{product.price}元</div>
                                    <div className="ori_price">原價{product.origin}元</div>
                                </div>

                                {/* <div className="more">
                {product.is_enabled ? (
                  <a href={`/categories/${product.id}`} className="read_more">詳細介紹</a>
                ) : (
                  <div className="add_cart">已售完</div>
                )}
                {product.is_enabled && (
                  <div className="add_cart" onClick={() => addtoCart(product.id, product.title)}>加入購物車</div>
                )}
              </div> */}
                            </div>

                            <div className="swiper-pagination" slot="pagination"></div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}

export default Card;
