import Navbar from "./Navbar";
import "./Header.scss";
import { useEffect, useRef } from "react";
import useScroll from "../hooks/useScroll";

const Header = () => {
    const [scrollY] = useScroll();
    const referenceHeader = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shadowHeader = () => {
            const header = referenceHeader.current;

            scrollY >= 50 ? header?.classList.add('header--shadow')
                : header?.classList.remove('header--shadow');

        }

        window.addEventListener('scroll', shadowHeader);

        return () => window.removeEventListener('scroll', shadowHeader);
    }, [scrollY]);

    return (<header className="header" ref={referenceHeader}>
        <Navbar />
    </header>);
}

export default Header;