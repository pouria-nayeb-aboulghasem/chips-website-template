import "./Hero.scss";
import MeatImg from "../../assets/meat.png";
import HeroChipsImg from "../../assets/hero-chips.png";
import Chips1Img from "../../assets/chips-1.png";
import Chips2Img from "../../assets/chips-2.png";
import Chips3Img from "../../assets/chips-3.png";
import Tomato1Img from "../../assets/tomato-1.png";
import Tomato2Img from "../../assets/tomato-2.png";
import Leaf3Img from "../../assets/leaf-3.png";
import ButtonLink from "../ui/ButtonLink";

const Hero = () => {

    return (<div className="hero section" id="hero">
        <div className="hero__container container">
            <div className="hero__content grid">
                <section className="hero__data">
                    <h2 className="hero__title">
                        SNACK <br /> WITH NO <br /> LIMITS
                    </h2>
                    <p className="hero__description">
                        When you are hungry and don't have time
                        to cook, snacks are the perfect solution,
                        always prepare for midday hunger.
                    </p>

                    <img src={MeatImg} alt="" className="hero__meat" />

                    <div className="hero__actions">
                        <ButtonLink path="#" skin="primary" anchorText="Snack Now" />
                        <ButtonLink path="#" skin="ghost" anchorText="Buy Now" />
                    </div>
                </section>

                <figure className="hero__figure">
                    <img src={HeroChipsImg} alt="" className="hero__img" />

                    <img src={Chips1Img} alt="" className="hero__chips-1" />
                    <img src={Chips2Img} alt="" className="hero__chips-2" />
                    <img src={Chips3Img} alt="" className="hero__chips-3" />
                    <img src={Tomato1Img} alt="" className="hero__tomato-1" />
                    <img src={Tomato2Img} alt="" className="hero__tomato-2" />
                    <img src={Leaf3Img} alt="" className="hero__leaf" />

                    <div className="hero__circle">
                        <div className="hero__subcircle"></div>
                    </div>
                </figure>
            </div>
        </div>
    </div>);
}

export default Hero;