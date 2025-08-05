import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Home() {
  const [todos,settodos]=useState([])
  useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result=>
        settodos(result.data))
        .catch(err=>console.log(err))
  },[]);
   

     const handleEdit =(id)=>{
      axios.put('http://localhost:3001/update/'+id)
      .then(result=>{
        window.location.reload();
      })
       .catch(err=>console.log(err))
    }
  
    const handleDelete =(id)=>{
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result=>{
        window.location.reload();
      })
       .catch(err=>console.log(err))
    }
  return (
    <div className='home'>
      <h1> Fs-todo List</h1>
      <h1> Fs-todo List</h1>
      <Create/>
      <br/>
     {
      todos.length === 0 ?
      <div className='h1'><h3>Empty data set</h3></div> :
      todos.map(todo=>(<>
        <div className='task'>
          <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
          {
            todo.done ? 
            <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
            
             : <BsCircleFill className='icon'/>
          }
          {/* <BsCircleFill className='icon'/> */}
          <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
          </div>
          <div>
          <span><BsFillTrashFill className='icon'  onClick={()=>handleDelete(todo._id)}/></span>
          </div>
         
        </div>
       
        </>
      ))
     }
</div>
    
  );
}

export default Home;
// const handleAdd=()=>{
//   axios.post('http://localhost:3001/add',{task :task})
//   .then(result=>console.log(result))
//   .catch(err=>console.log(err))
// }

 


  