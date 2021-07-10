function Meme (props) {
    const imageUrl = props.data.imageUrl;
    const description = props.data.description;
   
    return (
        <div className="meme">
            <img src={imageUrl} width="400" />
             <p>{description}</p>
        </div>
    );
}

export default Meme;