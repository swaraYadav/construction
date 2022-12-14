function Projectitem(item){
    return(
        <div className="project">
            <div className="image">
                <img src={item.imageUrl} alt="logo"/>
                <p> <b>{item.name}</b></p>
            </div>
        </div>

    )
}
export default Projectitem;