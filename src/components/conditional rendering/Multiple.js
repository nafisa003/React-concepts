import React, { useState,useEffect } from 'react';
const url='https://api.github.com/users/QuincyLarson';
const Multiple = () => {
    const [load,setLoad]=useState(true);
    const [isError,setIsError]=useState(false);
    const[user,setUser]=useState('default user');
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(res.status>=200 && res.status<=299)
            {
                return res.json();
            }
            else{
            setLoad(false);
            setIsError(true);
            throw new Error(res.statusText)
            }
        })
        .then(user=>{
            const {login}=user;
            setUser(login);
            setLoad(false);
        })
        .catch(err=>console.log(err))
    },[]);
    if(load)
    {
        return (
            <h2>Loading...</h2>
        )   
    }
    if(isError)
    {
        return (
            <h2>Error...</h2>
        )   
    }

    return (
        <div>
            <h2>{user}</h2>
        </div>
    );
};

export default Multiple;