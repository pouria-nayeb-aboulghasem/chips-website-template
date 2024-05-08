import "./Products.scss";
import ProductChips1Img from "../../assets/product-chips-1.png";
import ProductChips2Img from "../../assets/product-chips-2.png";
import ProductChips3Img from "../../assets/product-chips-3.png";
import ProductChips4Img from "../../assets/product-chips-4.png";
import ProductChips5Img from "../../assets/product-chips-5.png";
import CrabImg from "../../assets/crab.png";
import HamburgerImg from "../../assets/hamburger.png";
import CheeseImg from "../../assets/cheese.png";
import { useState } from "react";

type ProductItemType = {
    imageName: string,
    subtitle: string,
    title: string,
    price: number
}

const ProductItem = (productItem: ProductItemType) => <li className="product__item">
    <img src={productItem.imageName} alt="" className="product__img" />

    <span className="product__subtitle">{productItem.subtitle}</span>
    <h2 className="product__title">{productItem.title}</h2>

    <span className="product__price">${productItem.price}</span>

    <button className="product__button">
        <i className="ri-shopping-bag-3-line"></i>
    </button>
</li>

const Products = () => {
    const [productList] = useState<ProductItemType[]>([{
        imageName: ProductChips1Img,
        subtitle: "Crab",
        title: "Chips",
        price: 8
    },
    {
        imageName: ProductChips2Img,
        subtitle: "Cheese",
        title: "Chips",
        price: 5
    },
    {
        imageName: ProductChips3Img,
        subtitle: "BBQ",
        title: "Chips",
        price: 6
    },
    {
        imageName: ProductChips4Img,
        subtitle: "Hot",
        title: "Chips",
        price: 5
    },
    {
        imageName: ProductChips5Img,
        subtitle: "Mix",
        title: "Chips",
        price: 10
    }]);

    return (<div className="product section" id="products">
        <h2 className="section__title">
            BEST SELLING <br /> PRODUCT
        </h2>
        <div className="product__container container">
            <div className="product__content">
                <ul className="product__list grid">
                    {productList.map((productItem, index) => <ProductItem key={index} {...productItem} />)}
                </ul>
            </div>

            <img src={CrabImg} alt="" className="product__crab" />
            <img src={HamburgerImg} alt="" className="product__hamburger" />
            <img src={CheeseImg} alt="" className="product__cheese" />
        </div>
    </div>);
}

export default Products;