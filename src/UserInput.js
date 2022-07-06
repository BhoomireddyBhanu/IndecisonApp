import React from 'react';
import './App.css';

const UserInput=({arr , deleteHandler})=>{
    return(
        <div style={{marginTop : 50}}>
            
        {arr.length>0?arr.map((item,index)=> (
                                <div className="foot">
                                <li style={{listStyle:"none"}}><p>{item}</p> </li>
                                <button className="Remove" onClick={()=>deleteHandler(index)}>Remove</button> 
                                </div>)
                            ):console.log("No tasks to remove")}
        
        </div>
    )
}
export default UserInput