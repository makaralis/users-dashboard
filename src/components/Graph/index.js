import React from 'react';
import './Graph.scss';

 
const Graph = ({color}) => {
    return (
        <div className="graph-wrapper">
            <div className="column-wrapper">
                <div className="column" style={{ height: '50%', backgroundColor: color}}/>
            </div>
            <div className="column-wrapper">
                <div className="column" style={{ height: '30%',  backgroundColor: color}}/>
            </div>
            <div className="column-wrapper">
                <div className="column" style={{ height: '60%',  backgroundColor: color}}/>
            </div>
            <div className="column-wrapper">
                <div className="column" style={{ height: '80%',  backgroundColor: color}}/>
            </div>
          
        </div>
    )
}

export default Graph;