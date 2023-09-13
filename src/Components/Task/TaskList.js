import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TaskCard from './TaskCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addtask } from '../../JS/Actions/TaskAction'

const TaskList = () => {
  const [show, setShow] = useState(false);
  const [Name,setName]=useState("")
  const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Tasks=useSelector((state)=>state.TaskReducer.Tasks)
    return (
    <div>
  <Button variant="primary" onClick={handleShow}>
add task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<input placeholder='add new task'onChange={(e)=>setName(e.target.value)} ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>(  dispatch(addtask({id:Math.random(),name:Name,IsDone:false})),handleClose())} >
            add task
          </Button>
        </Modal.Footer>
      </Modal>
        {Tasks.map(task =><TaskCard task={task} key={task.id} />)}
    </div>
  )
}

export default TaskList