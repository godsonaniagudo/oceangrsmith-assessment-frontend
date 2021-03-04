import React from 'react';

const LockerResult = (props) => {

    return (
        <div className="lockerResultItem" onClick={() => {
            props.selectLocation()
        }}>
            <p>{props.data.location}</p>
            <p>{"Locker " + props.data.locationNumber}</p>
        </div>
    )
}

export default LockerResult