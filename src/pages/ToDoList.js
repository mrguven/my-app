export default function ToDoList(){



    return(

            <div> 


<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="type task" value={task} />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Describe</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="describe your task" value={description} />
  </div>

  <button type="submit" class="btn btn-primary">Add Task</button>
</form>




<div class="list-group">

<ul>

    <h1>asdfasd    <button class="btn btn-warning">done</button>  </h1>
</ul>



</div>







            </div>

    )
}