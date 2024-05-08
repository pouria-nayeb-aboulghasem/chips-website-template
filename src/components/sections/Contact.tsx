import "./Contact.scss";
import ContactManImg from "../../assets/contact-man.png";
import ShrimpImg from "../../assets/shrimp.png";
import CrabImg from "../../assets/crab.png";
import MeatImg from "../../assets/meat.png";

const Contact = () => {
    return (<div className="contact section" id="contact">
        <div className="contact__container container">
            <h2 className="section__title">
                CONTACT US TO <br /> EAT CHIPS
            </h2>

            <div className="contact__content grid">
                <div className="contact__data grid">
                    <div>
                        <h3 className="contact__title">Write to us</h3>

                        <div className="contact__social">
                            <a href="https://api.whatsapp.com/send?phone=989966557685&text=Hello" target="_blank">
                                <i className="ri-whatsapp-fill"></i>
                            </a>
                            <a href="https://m.me/pouria-nayeb" target="_blank">
                                <i className="ri-messenger-fill"></i>
                            </a>
                            <a href="mailto:info@pouria-nayeb.ir" target="_blank">
                                <i className="ri-mail-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="contact__title"> Call us </h3>
                        <address className="contact__info">
                            +98-9966557685 <br />
                            +98-9354425459
                        </address>
                    </div>

                    <div>
                        <h3 className="contact__title"> Find us here </h3>
                        <address className="contact__info">
                            Av. Shariati - Tehran City - Iran <br />
                            Daftari-sharghi ally #5
                        </address>
                    </div>
                </div>

                <img src={ContactManImg} alt="" className="contact__img" />
            </div>

            <img src={ShrimpImg} alt="" className="contact__shrimp" />
            <img src={CrabImg} alt="" className="contact__crab" />
            <img src={MeatImg} alt="" className="contact__meat" />
        </div>
    </div>);
}

export default Contact;