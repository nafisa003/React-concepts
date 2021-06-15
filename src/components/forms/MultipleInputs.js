import React, { useState } from 'react';

const MultipleInputs = () => {
    // const [firstName,setFirstName]=useState('');
    // const [email,setEmail]=useState('');
    const [people,setPeople]=useState([]);
    // const [age,setAge]=useState('');
    const [person,setPerson]=useState({firstName:'',email:'',age:''});
const handleChange=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setPerson({...person,[name]:value})

};
const handleSubmit=(e)=>{
    e.preventDefault();
    if(person.firstName && person.email && person.age)
    {
        const newPerson={...person,id:new Date().getTime().toString()};
        setPeople([...people,newPerson]);
        setPerson({firstName:'',email:'',age:''})
        
    }
};
    console.log(people)
    return (
        <div>
            <h2>Multiple I/P</h2>
            <article>
                <form action="" >
                    <div>
                        <label htmlFor="firstName">Name: </label>
                        <input type="text" name="firstName" id="firstName" value={person.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="text" name="email" id="Email" value={person.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="age">age: </label>
                        <input type="text" name="age" id="age" value={person.age} onChange={handleChange}/>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Add person</button>
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

export default MultipleInputs;