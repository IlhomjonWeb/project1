import React from 'react'
import '../assets/css/button.scss'
const Button = ({ text }) => {
    return (
        <div>
            <button className='btn'>{text}</button>
        </div>
    )
}

export default Button
