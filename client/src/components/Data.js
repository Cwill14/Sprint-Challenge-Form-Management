import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import DataObj from './DataObj';

const Data = props => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/restricted/data')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [data]);

    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem('token');
                props.history.push("/");
            }}>Back</button>
            {data.map(obj => {
               return <DataObj obj={obj} key={obj.name} />
            })}
        </div>
    );
};

export default Data;