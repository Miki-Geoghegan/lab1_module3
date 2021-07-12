function Utilities(props) {
    const {image, title, paragraph, } = props
    return(
        <div>
            <img src={image} alt='description image' />
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}
export default Utilities;