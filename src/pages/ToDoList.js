import { useState } from "react"

export default function ToDoList(){



const [task,setTask]=useState('');

const [description,setDescription]=useState([]);

const [completeTask,setCompleteTask ]=useState(true)


const addList=()=> {
    
 description.push(task)
 console.log(description);
}



    return(

            <div> 


<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task</label>
    <input type="text" className="form-control" id="task"  placeholder="type task" value={task}   onChange={(e)=> setTask(e.target.value)} />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Describe</label>
    <input type="text" className="form-control" id="description" placeholder="describe your task"  />
  </div>

  <button onClick={addList} class="btn btn-primary">Add Task</button>
</form>




<div class="list-group">

<ul>

    <h1> {task}    <button class="btn btn-warning">done</button>  </h1>
</ul>



</div>







            </div>

    )
}