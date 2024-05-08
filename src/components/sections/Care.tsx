import "./Care.scss";
import CareImg from "../../assets/care-chips.png";
import { useState } from "react";

type CareItemType = {
    iconName: string,
    description: string
}

const CareItem = (careItem: CareItemType) => <li className="care__item">
    <i className={careItem.iconName}></i>
    <p>{careItem.description}</p>
</li>

const Care = () => {
    const [careList] = useState<CareItemType[]>([
        {
            iconName: "ri-plant-line",
            description: "The potatoes that are made into snacks are grown and harvested and are 100% organic."
        },
        {
            iconName: "ri-fire-line",
            description: "We fry the fries with vegetable and natural oil for good care."
        },
        {
            iconName: "ri-heart-pulse-line",
            description: "The potatoes are not processed, once cleaned they are cooked without preservatives."
        },
        {
            iconName: "ri-hand-heart-line",
            description: "They contain fewer calories and less fat for good health."
        }
    ]);
    return (<div className="care section" id="care">
        <h2 className="section__title">
            ENJOY AND TAKE <br /> CARE OF YOUR HEALTH
        </h2>

        <div className="care__container container">
            <div className="care__content grid">
                <ul className="care__list">
                    {careList.map((careItem, index) => <CareItem key={index} {...careItem} />)}
                </ul>

                <img src={CareImg} alt="" className="care__img" />
            </div>
        </div>
    </div>);
}

export default Care;