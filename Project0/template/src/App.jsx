import React, { useState } from 'react'

// todo ist, lista de tareas

function App() {
    //Listado de Tareas, valor inicial del array
    const [tasks, setTasks] = useState([]);
    // Tarea nueva, valor inicial para un string
    const [newTasks, setNewTasks] = useState("");

    const addTask = () => {
        // validacion que no llegue vacio
        // trim()  elimina espacios de adelante y atras de un string
        if(newTasks.trim() !== ""){
            //spread operator ... trae todo
            // añado una tarea a la ya existente
            setTasks([...tasks, {text: newTasks}]);
            //limpio el input con el texto anterior
            setNewTasks("");
        }
    };
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <input type="text"  value={newTasks} onChange={ e => setNewTasks(e.target.value)}/>
        <button onClick={addTask}>Agregar Tarea</button>

        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task.text}</li>
            ))}
        </ul>
    </div>
  )
}

export default App


