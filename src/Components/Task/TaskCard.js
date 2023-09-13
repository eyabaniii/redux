import React from 'react'
import {useState} from 'react'

import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deletetask } from '../../JS/Actions/TaskAction'
import { donetask } from '../../JS/Actions/TaskAction'
import { edittask } from '../../JS/Actions/TaskAction'
const TaskCard = ({task}) => {
    const dispatch=useDispatch()
    const [edit,setEdit]=useState(false)
    const [NewName,setNewName]=useState("")

    return (
    <div style={{display:"flex",justifyContent:"space-around",margin:"30px",}}>

{edit?         <form> <input type="text" placeholder='enter ur name' onChange={(id)=>setNewName(id.target.value) } />

</form> 
 :<p>{task.name}</p>}
 {edit? <Button onClick={()=>(  dispatch(edittask(task.id,NewName)),setEdit(false))} >save</Button>:<Button onClick={()=>setEdit(true)} >edit</Button>}

        <Button onClick={()=>dispatch(deletetask(task.id))}>Delete</Button>
        <Button onClick={()=>dispatch(donetask(task.id))}> {task.IsDone?<span>Make it unDone</span>:<span>Make it Done</span>}           
        </Button>
        
    </div>
  )
}

export default TaskCard