import React, { useEffect, useState } from 'react';

const ShowHide = () => {
    const [show,setShow]=useState(false);

    return (
        <div>
           <h2>Show/Hide</h2> 
           <button onClick={()=>setShow(!show)}>Toggle show</button>
       
        {
            show && <Item />
        } 
        </div>
    );
};

const Item=()=>{
    const [size,setSize]=useState(window.innerWidth)
     const checkSize=()=>{
    setSize(window.innerWidth);
    };
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=>{
            window.removeEventListener('resize',checkSize)
        }
    },[])
    return (
<div>
    <h3>windowww</h3>
    <h5>size: {size}px</h5>
</div>
    )
}
export default ShowHide;