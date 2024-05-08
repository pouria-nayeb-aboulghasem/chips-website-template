import { useEffect, useRef } from "react";
import useScroll from "../hooks/useScroll";
import "./Scrollup.scss";

const Scrollup = () => {
    const [scrollY] = useScroll();
    const referenceScrollup = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const shadowHeader = () => {
            const scrollup = referenceScrollup.current;

            scrollY >= 350 ? scrollup?.classList.add('scrollup--show')
                : scrollup?.classList.remove('scrollup--show');

        }

        window.addEventListener('scroll', shadowHeader);

        return () => window.removeEventListener('scroll', shadowHeader);
    }, [scrollY]);

    return (<a href="#" className="scrollup" ref={referenceScrollup}>
        <i className="ri-arrow-up-line"></i>
    </a>);
}

export default Scrollup;