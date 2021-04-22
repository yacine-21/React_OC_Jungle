import React from 'react';
import '../styles/Header.css'

const Header = ({children}) => {
    return(
        <div className="lmj-Header">{children}</div>
    )
}

export default Header;