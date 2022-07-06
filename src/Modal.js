import React from 'react';
import { useEffect } from 'react';

const Modal=({closedModal,randomTask})=>{
    useEffect(()=>{
       console.log(randomTask);
    },[])

    return(
            <div className="modalBackground">
            <div className="modalContainer">
                
                <div className="titleCloseBtn">
                    <button onClick={()=>{closedModal(false)}}>X</button>
                </div>
                
                <div className="header">
                    <h3>Decision I'M going to make for u now is !!</h3>
                </div>
                
                <div className="text">
                    <h2>{randomTask}</h2>
                </div>
                      
                <div className="footer">
                    <button onClick={()=>{closedModal(false)}}>Cancel</button>
                </div>    
            </div>
            </div>
    )
}
export default Modal