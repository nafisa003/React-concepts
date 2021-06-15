import React, { useState,useContext } from 'react';
import {data} from './data';

const PersonContext=React.createContext();

//two components-provider,consumer
const PropDrilling = () => {
    const [people,setPeople]=useState(data);
    const removePerson=(id)=>{
        setPeople((people)=>{
            return people.filter((el)=>el.id!==id);
        })
    }
    return (
        <PersonContext.Provider value={{removePerson,people}}>
            <h2>prop drilling/useContext</h2>
            <List></List>
        </PersonContext.Provider>
    );
};
const List=()=>{
    const mainData=useContext(PersonContext);
    return (
        <div>
            {
              mainData.people.map((person)=>{
                    return <SinglePerson key={person.id} {...person} ></SinglePerson>
                })
            }
        </div>
    )
}
const SinglePerson=({id,name})=>{
    const {removePerson}=useContext(PersonContext)
    
    return ( 
        <div>
            <h4>Single Item</h4>
            <h4>{name}</h4>
            <button onClick={()=>removePerson(id)}>Remove</button>
        </div>
    )
}

export default PropDrilling;