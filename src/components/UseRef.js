import React, { useEffect, useRef } from 'react';

const UseRef = () => {
    const refContainer=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(refContainer.current.value)
    }
    useEffect(()=>{
        console.log(refContainer.current.value);
        refContainer.current.focus();
    })
    return (
        <div>
            <h3>UseRef basics</h3>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="" id="" ref={refContainer} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UseRef;