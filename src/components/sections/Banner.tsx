import "./Banner.scss";

const Banner = () => {
    return (<div className="banner">
        <div className="banner__container">
            <div className="banner__content">
                <ul className="banner__list">
                    <li className="banner__item">
                        <i className="ri-leaf-line"></i>
                        <span>GOOD FOR NATURE</span>
                    </li>
                    <li className="banner__item">
                        <i className="ri-heart-pulse-line"></i>
                        <span>LOW CALORIES</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Banner;