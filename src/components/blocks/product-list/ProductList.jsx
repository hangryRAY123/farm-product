import { ProductSwiper } from './styles';
import { ProductCard } from '../../ui/product-card/ProductCard';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Mousewheel,
  Scrollbar,
} from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export const ProductList = ({ products, setSwiperRef }) => {
  return (
    <>
      {products?.length ? (
        <ProductSwiper
          onSwiper={setSwiperRef}
          spaceBetween={12}
          direction="vertical"
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
          dragSize={50}
          mousewheel
          pagination={{
            type: 'fraction',
          }}
        >
          {products.map((e) => (
            <SwiperSlide key={e.id}>
              <ProductCard {...e} />
            </SwiperSlide>
          ))}
        </ProductSwiper>
      ) : null}
    </>
  );
};
