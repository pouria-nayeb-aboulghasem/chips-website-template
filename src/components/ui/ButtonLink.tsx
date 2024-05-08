import "./ButtonLink.scss";

type ButtonLinkType = {
    path: string,
    skin: string,
    anchorText: string
};

const ButtonLink = ({ path, skin, anchorText }: ButtonLinkType) => {
    return (<a href={`${path}`} className={`button button-${skin}`}> {anchorText} </a>);
}

export default ButtonLink;