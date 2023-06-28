import axios from "axios";
import { useState } from "react";

export default function Demo (){




axios.get('fsq3GOSro0WI5X3NIcWW7hrMMnd8WmqGekV2smHBQ7rEhuQ=')


const [task,setTask]=useState('');

const [description,setDescription]=useState('');



const search =()=> {

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
       
</div>
  <button onClick={()=>search()} class="btn btn-primary">Search </button>

  </div>
    )
}