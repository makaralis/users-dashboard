import './Table.scss';
import StatusCard from '../StatusCard';

const Table = ({tableTitle, theads, data}) => {
    return (
        <div className="table-wrapper">
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h1>{tableTitle}</h1>
                    </div>
                        <div className="panel-body">
                            <table className="table-latitude">
                                <thead>
                                    {theads.map((title) => <th key={title}>{title}</th>)}
                                </thead>
                              
                                <tbody>
                                    {data.map((row, index) =>  {
                                        return (
                                            <tr key={index}>
                                                {row.map((rowData) => <td key={rowData}>
                                                    {rowData === "Active" ? <StatusCard status='active'/> : rowData === 'In Review' ? <StatusCard status='in-review'/> : rowData}
                                                </td>)}
                                            </tr>
                                        )    
                                        })}
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Table;