/* eslint-disable react/prop-types */
import Card from './card'

const Collection = ({ cards }) => {

    return (
        <div className='collection'>        
            {cards.map(card => 
                <Card key={card.id} name={card.name} position={card.position} rating={card.rating} nationality={card.nationality} imgUrl={card.imgUrl} flag={card.flag} />
            )}
        </div>
    )
}

export default Collection

