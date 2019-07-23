import React from 'react';

const DataObj = props => {
    return (
        <div>
            <h3>{props.obj.name}</h3>
            <p>{props.obj.course}</p>
            <ul>
                {props.obj.ingredients.map(ingredient => {
                    return <li>{ingredient}</li>
                })}
            </ul>
            <p>{props.obj.technique}</p>
        </div>
    );
};

export default DataObj;