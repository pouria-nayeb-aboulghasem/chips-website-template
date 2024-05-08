import { useEffect, useState } from "react";

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const shadowHeader = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', shadowHeader);

        return () => window.removeEventListener('scroll', shadowHeader);
    }, []);

    return [scrollY];
}

export default useScroll;