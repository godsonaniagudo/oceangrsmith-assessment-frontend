import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import LockerResult from './lockerResult';

const LockerItem = (props) => {
    const location = useLocation()
    const history = useHistory()
    return (
        <tr>
            <td>{props.data.sizeString}</td>
            <td>{props.data.rate}</td>
            <td>{props.data.price}</td>
            <td>{props.data.numberAvailable + " available"}</td>
            <td><button onClick={() => {
                history.push("/success")
            }}>Rent Now</button></td>
        </tr>
    )
}

export default LockerItem