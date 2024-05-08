import Care from "../components/sections/Care";
import Contact from "../components/sections/Contact";
import Favorites from "../components/sections/Favorites";
import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import Banner from "../components/sections/Banner";
import "./Home.scss";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 300
        })

        sr.reveal(".hero__data, .favorite__container, .footer__container");
        sr.reveal(".hero__img", { scale: 0.5 });
        sr.reveal(".hero__chips-1, .hero__chips-2, .hero__chips-3", { delay: 1000, interval: 30 });
        sr.reveal(".hero__leaf", { delay: 1200 });
        sr.reveal(".hero__tomato-1, .hero__tomato-2", { delay: 1400, interval: 10 });
        sr.reveal(".care__img", { origin: "left" });
        sr.reveal(".care__list, .contact__data", { origin: "right" });
        sr.reveal(".banner__item, .product__item", { interval: 100 });
    }, [])

    return (<main className="main">
        <Hero />
        <Favorites />
        <Care />
        <Banner />
        <Products />
        <Contact />
    </main>);
}

export default Home;