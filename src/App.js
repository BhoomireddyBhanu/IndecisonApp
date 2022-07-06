import React from 'react';
import {useState} from 'react';
import UserInput from './UserInput';
import Modal from './Modal';
import './Modal.css';
import './App.css';

function App() {
  const [input,setInput]=useState("")
  const [arr,setArr]=useState([]);
  const [openModal,setopenModal]=useState(false);
  const [randomIndex,setRandomIndex] = useState(0);
  
  const changeHandler=(e)=>{
       setInput(e.target.value);
  }
  
  
  const submitHandler=(e)=>{
    e.preventDefault();
    if(input.length==0){
      alert("Enter a valid input!")
      return
    }
    const newarr= [...arr,input];
    setArr(newarr);
    setInput("")
  }
  
  
  const deleteHandler=(indexValue)=>{
    const newarr= arr.filter((item,index)=>index !== indexValue);
    setArr(newarr);
  }
  
  
  const removeAll=(e)=>{
    e.preventDefault()
    console.log(e.target.disabled)
    e.target.disabled=true
    setArr([]);
  }
  
  const selectOne = () => {
    let min=0;
    setRandomIndex(Math.floor(Math.random() * arr.length -min )+min);
  }

  return (
    <div>
      <div style={{height:70,backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"40%",height:50,display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
          <h1 style={{margin  :0}}>Indecision</h1>
          <p style={{margin  :0}}>Put Your Life in the Hands of a Computer</p>
        </div>
      </div>
      
      <center>
      
      <button className='WhatButton'  onClick={()=>{ 
        selectOne();
        setopenModal(true);
        }}>What Should I do?</button>
        



        <form onSubmit={submitHandler}>
        <input className="search" type="text" placeholder="enter your tasks here" value={input} onChange={changeHandler} /> 
        <br></br>
        <div className='add'>
        <input  className="submitButton" type="submit" value="Add Option"></input>
      {/* <h3>{arr.map((item)=>{item})}</h3> */}
             
      {arr.length>0?<button  className="removeButton" onClick={removeAll} disabled={false}>RemoveAll</button>:<button className="removeButton" onClick={removeAll} disabled={true}>RemoveAll</button>}
      </div>

      </form>
      {/* <button  style={{size:"20",}}onClick={()=>{ 
        selectOne();
        setopenModal(true);
        }}>What Should I do?</button> */}
      <UserInput arr={arr} deleteHandler={deleteHandler} />
      </center>
      
      {
      (openModal) && (
        <div style={{position : "absolute", top : 0, left : 0, width : "100%", height : "100%",backgroundColor : "white", opacity : 0.8}}>
        <Modal closedModal={setopenModal} randomTask = { arr[randomIndex] } />
      </div>
      
      ) }
      
    </div>
     
  );
}

export default App;
