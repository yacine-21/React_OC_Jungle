import React from 'react';
import CareScale from './CareScale'
import '../styles/PlanItem.css'

const PlantItem = ({id, cover, name, water,light}) =>{
    const handleClick = () =>{
        alert(`vous voulez acheter 1 ${name} ? très bon choix `)
    }

    return(
        <li key={id} className="lmj-plant-item">
            <img onClick={handleClick} className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
            <CareScale
                careType="light"
                scaleValue={light}
            />
            <CareScale
                careType="water"
                scaleValue={water}
            />
            </div>
        </li>
    )
}

export default PlantItem;