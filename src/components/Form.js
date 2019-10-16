import React, {useState} from 'react';

const Form = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({
            name: '',
            email: '',
            role: ''
        })

    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Team Member</label>
            <input 
               name= 'name' 
               id= 'name' 
               type= 'text' 
               placeholder= 'name'
               onChange= {changeHandler}
               value= {member.name}
            />
            <label htmlFor='email'>Email</label>
            <input 
               name= 'email' 
               id= 'email' 
               type= 'text' 
               placeholder= 'email'
               onChange= {changeHandler}
               value= {member.email}
            />
            <label htmlFor='role'>Role</label>
            <input 
               name= 'role' 
               id= 'role' 
               type= 'text' 
               placeholder= 'role'
               onChange= {changeHandler}
               value= {member.role}
            />
            <button type='submit'>Add Team Member</button>
        </form>
    );
}

export default Form;