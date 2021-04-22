import React from 'react';
import {useState} from 'react';
import "../styles/Footer.css"

const Footer = () => {

    const [inputValue, setInputValue] = useState("");

    const getInput = (e) =>{
        setInputValue(e.target.value)
    }

    
    const isValid = () =>{
        if(!inputValue.includes("@")){
            alert("ce n'est pas une adresse mail valide, il n'y a pas de @")
        }
    }

    return(
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionnées de plantes !
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <div>
                <label name="email">Entrez votre email: </label>
                <input value={inputValue} onChange={getInput} type="email" name="email" id="email" required></input>
                <button onClick={isValid}>Submit</button>
            </div>
        </footer>
    )
}

export default Footer;