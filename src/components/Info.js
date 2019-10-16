import React from 'react';

const Info = props => {
    return (
        <div className='allInfo'>
            {props.memberInfo.map( tm => {
                return (
                    <div className='memberCards'>
                        <h1>{tm.name}</h1>
                        <h4>{tm.role}</h4>
                        <p>{tm.email}</p>
                        <button>Edit Info</button>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Info;