import React, { useState } from 'react'

const Todolist = () => {
 let [todolist, setTodolist] = useState([])

  let saveToDoList=(event )=> {
    event.preventDefault();

    let toname = event.target.toname.value;
    if(!
      todolist.includes(toname)){
     let finalDolist = [...todolist, toname]
     setTodolist(finalDolist);
    }
    else{
     alert("ToDo Name Allready Exists...") ;
    }
   
  }
    function ToDoListItems({value,indexNumber,todolist,setTodolist}){
      let [status,setStatus]=useState(false)
      let deleteRow=()=>{
        let finalData=todolist.filter((value,index)=>index!= indexNumber)
        setTodolist(finalData)
      }
      return(
        <li className='w-101 h-10 mt-5 mx-50 bg-black text-white d-flex  justify-between '>{indexNumber+1} {value} <span className='ms-70 cursor-pointer  justify-between' onClick={deleteRow}>&times;</span></li>
      )
    }
   let list = todolist.map((value,index) =>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} 
      todolist={todolist}
      setTodolist={setTodolist}  />
    )
   })
  return (
    <div>
     
     
     <h1 className='px-60'>ToDo List</h1>
    <form className='px-50 mt-10'
     onSubmit={saveToDoList}
    >
            <input className=' border h-10 w-70' type="text" name='toname' /> <button className='h-10 w-30 border'>save</button>

    </form>
<ul>
    {list}
</ul>
    

    </div>
  )
}

export default Todolist