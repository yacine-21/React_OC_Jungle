import React from 'react';

const CareScale = ({scaleValue, careType}) =>{
    const range = [1, 2, 3]

    const scaleType = careType === "light" ? '🌞' : '💧';
    let arrossage = ""

    if(scaleValue === 1 && careType === "light"){
        arrossage = "peu de lumière"
    } else if(scaleValue === 2 && careType === "light"){
        arrossage = "modérement de lumière"
    }else if(scaleValue === 3 && careType === "light"){
        arrossage = "beaucoup de lumière"
    }
    if(scaleValue === 1 && careType !== "light"){
        arrossage = "peu d'arrosage"
    } else if(scaleValue === 2 && careType !== "light"){
        arrossage = "modérement d'arrosage"
    }else if(scaleValue === 3 && careType !== "light"){
        arrossage = "beaucoup d'arrosage"
    }

    const handleClick = () =>{
        alert("Cette plante requiert : " + arrossage + scaleType)
    }

    return (
        <div onClick={handleClick}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : ""
            )}
        </div>
    )
}

export default CareScale;