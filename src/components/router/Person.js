import React, { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom';
import {data} from '../data';
const Person = () => {
    const {id}=useParams();
    const [name,setName]=useState('default');
    useEffect(()=>{
        const newPerson=data.find((el)=>{
            return el.id===parseInt(id);
        });
        setName(newPerson.name);
    })
    return (
        <div>
            <h1>person</h1>
            <h2>{name}</h2>
            <Link to="/people">Back to people</Link>
        </div>
    );
};

export default Person;