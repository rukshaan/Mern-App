
import { useState } from 'react';
import './App.css';
import Home from './Home';
import axios from 'axios';
function Create() {
  const [task,setTask]=useState();
  const handleAdd=()=>{
      axios.post('http://localhost:3001/add',{task :task})
      .then(result=>{
       window.location.reload()
      })
      .catch(err=>console.log(err))
  }
  return (
    <>
    <div className='create_Form'>
        <input type='text' name="add" id='addText' placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
     
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
    </>
  );
}

export default Create;
