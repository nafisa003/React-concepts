import React, { useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';
import Modal from './Modal';
import {reducer} from './reducer';
const UseReducer = () => {
    const defaultState={
        people:[],
        isModalOpen:false,
        modalContent:'hello henry'
        }
        const [state,dispatch]=useReducer(reducer,defaultState)
        const [name,setName]=useState('');
        const handleSubmit=(e)=>{
        e.preventDefault();
        if(name)
        {
            const newItem={
                id:new Date().getTime().toString(),
                name,
        
            }
          dispatch({type:'ADD_ITEM',payLoad:newItem}) 
          setName('') 
        }
        else
        {
            dispatch({type:'NO_VALUE'})
        }
        };
        const closeModal=()=>{
        dispatch({type:'CLOSE_MODAL'})
        } 
  
  
    return (
        <div>
                <h3>UseReducer</h3>
                {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}></Modal>}
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                        <button type="submit">Add person</button>
                    </div>
                </form>
                {
                    state.people.map((person)=>{
                        return (
                            <div key={person.id}>
                                <h4>{person.name}</h4>
                            <button  onClick={()=>{dispatch({type:'REMOVE_ITEM',payLoad:person.id})}}>Remove</button>
                            </div>
                        )
                    })
                }

        </div>
    );
};

export default UseReducer;