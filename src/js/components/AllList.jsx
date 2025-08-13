import React, { useState } from "react"

const AllList = () => {
    // estado para almacenar las tareas en el array

    const [tasks, setTaks] = useState([]);

    // estado para almacenar lo que el usuario escribe en el input

    const [newTasks, setNewTaks] = useState("")

    // funcion para anadir tarea
    const addtaks = () => {
        (newTasks)
    }


    return (
        <div className="container">
            <input value={newTasks} onChange={(e) => setNewTaks(e.target.value)} />
            <button onClick={() => { setTaks([...tasks, newTasks]); setNewTaks("") }}>agregar</button>
            <hr />
            <ul>
                {tasks.map((l, li) =>
                    <li key={`li_${li}`}>
                        <input type="checkbox" />
                        <span>{l}</span>
                        <button onClick={() => setTaks(tasks.filter((_, i) => i !== li))}>delete</button>
                    </li>
                )
                }

            </ul>
           <div className="taks-counter">
            Items: <strong>{tasks.length}</strong>
           </div>
        </div>



    )

}

export default AllList

