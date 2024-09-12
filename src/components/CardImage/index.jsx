import './index.css';

export const CardImage = (props) =>{
    const [titleImage, decriptionImage, urlImage ] = props;
    return(
        <figure className="CardImage">
            <img className="CardImage-Img" src={urlImage} alt="picture" />
            <figcaption className="CardImage-Title">{titleImage}</figcaption>
            <p>{decriptionImage}</p>
        </figure>
    )
}