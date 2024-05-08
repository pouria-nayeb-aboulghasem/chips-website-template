import "./Footer.scss";

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__container container grid">
            <a href="#" className="footer__logo">Chips</a>

            <div className="footer__content grid">
                <a href="#" className="footer__link">Terms & Agreements</a>
                <a href="#" className="footer__link">Privacy Policy</a>

                <span className="footer__copyright">
                    &copy; All rights reserved by
                </span>
            </div>
        </div>
    </footer>);
}

export default Footer;