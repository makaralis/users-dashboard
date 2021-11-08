import React from 'react';
import './Card.scss';
import Graph from '../Graph';
import ProgressCircle from '../ProgressCircle';
 
const Card = ({title, subTitle, index}) => {
    return (
    <div className="wrapper">
        {index === 0 ? <Graph color="blue"/> : index === 2 ? <Graph color="purple" />  : <ProgressCircle value={title.replace('%', '')} index={index}/>}
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
    </div>
    )
}

export default Card;