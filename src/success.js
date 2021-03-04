import React from 'react';
import { useHistory } from 'react-router-dom';
import Menu from './components/menu';

const Success = () => {
    const history = useHistory()

    return (
        <div>
            <Menu />
            <div className="successContainer">
                <p>Navigation to the rental page is successful</p>
                <button onClick={() => {history.push("/")}}>Back to home</button>
            </div>
        </div>
    )
}

export default Success