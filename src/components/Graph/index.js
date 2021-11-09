import React from 'react';
import './Graph.scss';

const columnsHeightData = ['50%', '30%', '60%', '80%'];
 
const Graph = ({color}) => {
    return (
        <div className="graph-wrapper">
            <div className="column-wrapper">
                {columnsHeightData.map((height) =>  <div key={height} className="column" style={{ height: height, backgroundColor: color}}/>)}
            </div>          
        </div>
    )
}

export default Graph;