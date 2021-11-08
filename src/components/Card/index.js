import React from 'react';
import './Card.scss';

 
const Card = ({title, subTitle}) => {
    return (
    <div className="wrapper">
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
    </div>
    )
}

export default Card;