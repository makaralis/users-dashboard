import './StatusCard.scss';

const StatusCard = ({status}) => {
    return (
        <div className={`status-card-${status}`}>
            {status === 'in-review' ? 'In Review' : 'Active'}
        </div>
    )
}

export default StatusCard;