import React from 'react';
import './Header.css'

export default props => (
    <header>
        <h2> {props.name} <small>{props.small}</small> </h2>
        <div className='media-buttons'>
            <a target="_blank" href='https://www.linkedin.com/in/ggsilva28/'> Linkedin </a>
            <a target="_blank" href='https://github.com/ggsilva28'> Github </a>
        </div>
    </header>
)