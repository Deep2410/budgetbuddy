import React, {useState} from 'react'
import '../css/header.css'

function Header({heading}){
    return(
        <div>
            <div className='container-fluid sec-1'>
                <h2>{heading}</h2>
            </div>
        </div>
    )
}

export default Header;