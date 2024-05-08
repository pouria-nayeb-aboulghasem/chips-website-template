import CheeseImg from "../../assets/cheese.png";
import FavoriteChips1Img from "../../assets/favorite-chips-1.png";
import FavoriteChips2Img from "../../assets/favorite-chips-2.png";
import FavoriteChips3Img from "../../assets/favorite-chips-3.png";
import Leaf1Img from "../../assets/leaf-1.png";
import Leaf2Img from "../../assets/leaf-2.png";
import 'swiper/scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "./Favorites.scss";
import { useState } from "react";

type CarouselItemType = {
    id: number,
    imgName: string
}

const Favorites = () => {
    const [carouselList] = useState<CarouselItemType[]>([
        {
            id: 1,
            imgName: FavoriteChips1Img
        },
        {
            id: 2,
            imgName: FavoriteChips2Img
        },
        {
            id: 3,
            imgName: FavoriteChips3Img
        },
        {
            id: 4,
            imgName: FavoriteChips1Img
        },
        {
            id: 5,
            imgName: FavoriteChips2Img
        },
        {
            id: 6,
            imgName: FavoriteChips3Img
        }
    ]);

    return (<div className="favorite section" id="favorites">
        <div className="favorite__container container grid">
            <div className="favorite__content grid">
                <section className="favorite__data">
                    <h2 className="section__title">
                        DISCOVER YOUR <br /> FAVORITE FLAVORS
                    </h2>

                    <div className="favorite__description">
                        Try some exotic flavors or delicious
                        toppings. We have collected some delicious
                        snack recipes from around the world for you.
                    </div>

                    <img src={CheeseImg} alt="" className="favorite__cheese-1" />
                    <img src={CheeseImg} alt="" className="favorite__cheese-2" />
                </section>
            </div>

            <Swiper
                className="favorite__swiper"
                loop={true}
                grabCursor={true}
                slidesPerGroup={1}
                autoplay={{
                    delay: 2500,
                    reverseDirection: true,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                centeredSlides={true}
                modules={[Autoplay]}
            >
                {carouselList.map((carouselItem) => <SwiperSlide key={carouselItem.id} className="favorite__item">
                    <img src={carouselItem.imgName} alt="" className="favorite__img" />

                    <img src={Leaf1Img} alt="" className="favorite__leaf-1" />
                    <img src={Leaf2Img} alt="" className="favorite__leaf-2" />
                </SwiperSlide>)}
            </Swiper>
        </div>
    </div>);
}

export default Favorites;