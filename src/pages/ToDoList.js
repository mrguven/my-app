import { useState } from "react"

export default function ToDoList(){



const [task,setTask]=useState('');

const [taskList,setTaskList]=useState([])

const [description,setDescription]=useState('');

const [completed,setComplete]=useState()

const [completeTask,setCompleteTask ]=useState(true)

const [err,setErr]=useState('')


const addList=()=> {

    if(task==='' || description===''  ) {
            setErr('write task,please!')
    }
    else {
    const id=taskList.length+1
   setTaskList(prev=> [
    ...prev,{
        id:id,
        task:task,
        description:description,
        completed:false
    }
   ])

   setTask('');
   setDescription('')
    }
 
}


function deleteTask(a) {
   console.log(a);
setTaskList(
    (current)=> current.filter((task)=> task.id !==a)
)
}


    return(

            <div> 

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task</label>
    <input type="text" className="form-control" id="task"  placeholder="type task" value={task}   onChange={(e)=>  setTask(e.target.value)} />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Describe</label>
    <input type="text" className="form-control" id="description" placeholder="describe your task" value={description}   onChange={(e)=> setDescription(e.target.value)} />
    
  </div>

<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"> 
        <i>{err}</i>
</div>
  <button onClick={()=>addList()} class="btn btn-primary">Add Task</button>


{
    taskList.map((el,index)=> {
        return  ( 
            
            <div class="list-group" key={index}>
               <i><h1> Task: {el.task}      </h1></i> 
               <i><h1> Description: {el.description}      </h1></i>  <button  onClick={()=> deleteTask(el.id)} class="btn btn-warning">done</button>
                </div>
                    
   )
    })

    
  


}

<div>

</div>






            </div>

    )
}