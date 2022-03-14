import './Result.css';

export default function Result(props) {

    return (
        <div className='resultWrapper'>
            <h2 className='resultHeader'>Longest time worked on a project:</h2>
            <table>
                <thead>
                    <tr>
                        <th className='lineRight'>Employee-1 ID</th>
                        <th className='lineRight'>Employee-2 ID</th>
                        <th className='lineRight'>Project ID</th>
                        <th>Days worked total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='lineRight'>{props.dataToDisplay.empl1}</td>
                        <td className='lineRight'>{props.dataToDisplay.empl2}</td>
                        <td className='lineRight'>{props.dataToDisplay.projectName.slice(7)}</td>
                        <td>{props.dataToDisplay.days}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
