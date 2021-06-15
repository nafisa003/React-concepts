import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    // let [value,setValue]=useState(0);
    // useEffect(()=>{
    //     console.log('call useeffect');
    //     if(value>1){
    //     document.title=`New msg-${value}`;
    //     }
    // },[value]);
    // console.log('render component');

    // const [size,setSize]=useState(window.innerWidth);
    // console.log(size);
    
    // const checkSize=()=>{
    //     setSize(window.innerWidth);
    // }
    // useEffect(()=>{
    //     console.log('hello world')
    //     window.addEventListener('resize',checkSize);

    //     return ()=>{
    //         console.log('cleanup');
    //         window.removeEventListener('resize',checkSize)
    //     }
    // })
    const url='https://api.github.com/users';
    const [users,setUsers]=useState([]);
    const getUsers=async()=>{
        const res=await fetch(url)
        const users=await res.json();
        setUsers(users);
    }
    useEffect(()=>{
      getUsers()
    },[])//if we don't mention this getusers will be called and setusers will trigger re-render which will call useeffect with each re-render thus setting up infinite loop
    return (
        // <div>
        //         <h1>UseEffect basics</h1>
        //         <h3>{value}</h3>
        //         <button onClick={()=>setValue(value+1)}>click meh</button>
        // </div>

        // <div>
        //     <h1>UseEffect cleanup</h1>
        //     <h3>window</h3>
        //     <h4>{size} px</h4>

        // </div>
        <div>
            <h3>Github users</h3>
        {
            users.map((user)=>{
                const {id,login,avatar_url}=user;
                return( 
                    <li><img src={avatar_url} alt="" />
                    <h4>login: {login}</h4>
                    </li>
                )
            })
        }
        </div>
    );
};

export default UseEffect;