/* eslint-disable react/prop-types */
const Card = (props) => {

    const color = (rating) => {
        if (rating >= 85) {
            return "gold"
        } else if (rating < 85 && rating > 69) {
            return "green"
        } else if (rating < 70 && rating > 59) {
            return "orange"
        } else {
            return "white"
        }
    }

    return (
        <div className="card">
            <img className="flag" src={props.flag} alt="" />
            <img className="player-image" src={props.imgUrl} alt="" />
            <div className="card-content">
                <h2>{props.name}</h2>
                <h4>{props.position} | {props.nationality}</h4>
                <h1 style={{color: color(props.rating)}}>{props.rating}</h1>
            </div>
        </div>
    )
}

export default Card