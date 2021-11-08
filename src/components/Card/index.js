import React from 'react';
import './Card.scss';
import Graph from '../Graph';

 
const Card = ({title, subTitle, index}) => {
    return (
    <div className="wrapper">
        {index === 0 ? <Graph color="blue"/> : index === 2 ? <Graph color="purple" />  : null}
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
    </div>
    )
}

export default Card;