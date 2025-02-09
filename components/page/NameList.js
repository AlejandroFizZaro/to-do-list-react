"use client"
import React from "react";

export const NameList = () => {  
  const [names, setNames] = React.useState(['This is the first task.', 'Below you can type and add a task.', 'Right next to this task, press the X button to remove it.']);
  const [task, setTask] = React.useState("");
  
  let taskFieldValue = {
    sameInputMessage: 'Wrong task' ,
    initialInput: 'Type a task here!',
    emptyInput: null || '' || undefined,
    spaceInput: " ".repeat(task?.length) 
  }

  let noValidValue = 
    ( task == taskFieldValue.sameInputMessage ) ||
    ( task == taskFieldValue.initialInput )     ||
    ( task == taskFieldValue.emptyInput )       || 
    ( task == taskFieldValue.spaceInput);

  let notMutateTaskFieldName = () =>{
    setTask (taskFieldValue.sameInputMessage);
    return;
  }
  

  const addTask = () => {
    if (noValidValue){
      notMutateTaskFieldName();
      return;
    }
    // Check if the value in the task field is correct
    for ( const currentName of names){
      if(currentName === task) {
        setTask(taskFieldValue.sameInputMessage);
        return;
      }      
    }
    
    // Add task to array
    if (task != taskFieldValue.sameInputMessage){
      setNames([...names, task]);
      setTask('')
    }
    
  }

  const removeTask = (e) => {
    let deletedTask = Object.values(e.target.parentElement)[0].key;
    setNames(names.filter(task => task != deletedTask))
  }

  return (
    <>
      <ul className={classes.ul}>
        { names[0] === undefined
          ? "The task list is empty."
          : names.map((name) => (
          <li className={classes.table} key={name}>
            <a className={classes.task}>{name}</a>
            <button 
              className={classes.deleteButton} 
              onClick={(e) => removeTask(e) }
            >
            ❌
            </button>
          </li>
        ))}
      </ul>
      
      <input
        placeholder={taskFieldValue.initialInput}
        className={classes.input}
        value={task}
        
        onChange={e => setTask(e.target.value)}
      />
      <a
       className={classes.removeInput}
       onClick={e => setTask("")}>
        ❌
      </a>
      <button className={classes.button} type="submit" onClick={addTask}>
        Add Task
      </button>
      </>
  )
} 

let classes = {
  ul: /* class= */"text-black border-8 w-5/4 top-8 p-8 bg-teal-200 border-yellow-400 table",
  table: "flex",
  task: "w-96",
  input: /* class= */"p-10 text-red-400 bg-white w-80 text-wrap h-20",
  removeInput: "p-8 text-red-400 bg-white t-0 h-20",
  deleteButton: " inset-y-0 h-20",
  button: /* class= */"p-5 text-red-400 bg-white rounded w-50 m-4 h-20"
}