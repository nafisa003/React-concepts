import React, { useState } from 'react';
import {data} from '../data';
import {Link} from 'react-router-dom';
const People = () => {

    const [people,setPeople]=useState(data);
    return (
        <div>
            <h2>People</h2>
            {
                people.map((el)=>{
                    return (
                        <div key={el.id}><h3>{el.name}</h3>
                        <Link to={`/person/${el.id}`}>Learn more</Link>
                        </div>
                    
                    )
                    
                })
            }
        </div>
    );
};

export default People;