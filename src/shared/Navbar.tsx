import { useEffect, useState } from "react";
import "./Navbar.scss";
import useScroll from "../hooks/useScroll";

type MenuItemType = {
    path: string,
    anchorText: string,
    hideMenu?: () => void
}

const MenuItem = (menuItem: MenuItemType) => {
    return <li
        className="nav__item"
        onClick={menuItem.hideMenu}>
        <a href={`#${menuItem.path}`} className="nav__link">{menuItem.anchorText}</a>
    </li>
};

type socialLinkType = {
    path: string,
    iconName: string
}

const SocialLink = (socialItem: socialLinkType) => {
    return <a href={`${socialItem.path}`}
        target="_blank" className="nav__social--link">
        <i className={`${socialItem.iconName}`}></i>
    </a>
};

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const [menuList] = useState<MenuItemType[]>([
        { path: "hero", anchorText: "Home" },
        { path: "favorites", anchorText: "Favorites" },
        { path: "care", anchorText: "Care" },
        { path: "products", anchorText: "Products" },
        { path: "contact", anchorText: "Contact" }
    ]);
    const [scrollY] = useScroll();
    const [socialList] = useState<socialLinkType[]>([
        { path: "https://www.facebook.com/", iconName: "ri-facebook-circle-line" },
        { path: "https://www.instagram.com/", iconName: "ri-instagram-line" },
        { path: "https://whatsapp.com/", iconName: "ri-whatsapp-line" }
    ]);

    useEffect(() => {
        const divisions = document.querySelectorAll('div[id]') as NodeListOf<HTMLDivElement>;

        const scrollActive = () => {
            const scrollDown = scrollY;

            divisions.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass?.classList.add('nav__link--active')
                } else {
                    sectionsClass?.classList.remove('nav__link--active')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)
    }, [scrollY]);


    return (<nav className="nav container">
        <a href="#" className="nav__logo">CHIPS</a>

        <div className={`nav__menu ${activeMenu ? "nav__menu--active" : ""}`}>
            <ul className="nav__list">
                {menuList.map((menuItem, index) => <MenuItem key={index}
                    {...menuItem}
                    hideMenu={() => setActiveMenu(false)} />)}
            </ul>

            <div className="nav__close" onClick={() => setActiveMenu(false)}>
                <i className="ri-close-large-line"></i>
            </div>

            <div className="nav__social">
                {socialList.map((socialItem, index) => <SocialLink key={index} {...socialItem} />)}
            </div>
        </div>

        <div className="nav__show" onClick={() => setActiveMenu(true)}>
            <i className="ri-apps-2-line"></i>
        </div>
    </nav>);
}

export default Navbar;