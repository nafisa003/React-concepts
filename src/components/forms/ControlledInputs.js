import React, { useState } from 'react';

const ControlledInputs = () => {
    const [firstName,setFirstName]=useState('');
    const [email,setEmail]=useState('');
    const [people,setPeople]=useState([]);
    const [age,setAge]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName && email)
        {
            console.log("submit form");
            const person={id:new Date().getTime().toString(), firstName,email};
            setPeople((people)=>{
                return [...people,person];
            })
            setFirstName('');
            setEmail('');
        }
        else
        {
            console.log('mpty vals')
        }
    }
    return (
        <div>
            <h2>Controlled I/P</h2>
            <article>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">Name: </label>
                        <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="text" name="Email" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="age">age: </label>
                        <input type="text" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <button type="submit">Add person</button>
                </form>
                {
                    people.map((person)=>{
                        const {id,firstName,email}=person;
                        return(
                            <div key={id}>
                                <h3>{firstName}</h3>
                                <h4>{email}</h4>
                            </div>
                        )

                        
                    })
                }
            </article>
        </div>
    );
};

export default ControlledInputs;