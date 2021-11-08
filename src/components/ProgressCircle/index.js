import React from 'react';
import './ProgressCircle.scss';


 
const ProgressCircle = ({value, index}) => {
    return (
        <div className="progress-wrapper" style={{backgroundColor: index === 1 ? '#e0efc8' : '#ebdbea'}}>
            <div className={`item progress-${value}`}>
                <div className="radial-inner-bg" style={{backgroundColor: index === 1 ? '#e0efc8' : '#ebdbea'}}>
                    <div className='progress-value'>
                        {value + '%'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressCircle;