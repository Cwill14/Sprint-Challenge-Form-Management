import React from 'react';
import { axiosWithAuth } from '../axiosAuth';


const Data = props => {
    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem('token');
                props.history.push("/");
            }}>Back</button>
            data
        </div>
    );
};

export default Data;