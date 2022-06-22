import React from 'react';
import './EmptyList.css'
import empty from '../assets/empty.svg';

export default props => (
    <div className='emptyList'>
        <img src={empty} alt="Ilustração de um homem colocando papeis em uma parede." />
        <p>Comece a cadastrar suas tarefas</p>
    </div>
)