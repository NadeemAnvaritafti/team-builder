import React from 'react';

const Info = props => {
    return (
        <div>
            {props.memberInfo.map( tm => {
                return (
                    <div>
                        <h1>{tm.name}</h1>
                        <h4>{tm.role}</h4>
                        <p>{tm.email}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Info;