/* eslint-disable react/prop-types */
const Lobby = (props) => {

    return (
        <div>
            <div>Online</div>
            <ul>
            {props.players.map(player => {
                <li key={player.id}>{player.name}</li>
            })}
            </ul>
        </div>
    )
}

export default Lobby