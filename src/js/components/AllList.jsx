import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const AllList = () => {
    const [tasks, setTaks] = useState([]);
    const [newTasks, setNewTaks] = useState("");

    const addtaks = () => {
        if (newTasks.trim() === "") return;
        setTaks([...tasks, newTasks]);
        setNewTaks("");
    }

    const keyEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addtaks();
        }
    }

    return (
        <div className="container mt-4">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Añadir tarea..."
                    value={newTasks}
                    onChange={(e) => setNewTaks(e.target.value)}
                    onKeyDown={keyEnter}
                />
                <button className="btn btn-primary" onClick={addtaks}>
                    Agregar
                </button>
            </div>

            {tasks.length === 0 ? (
                <p className="text-muted">No hay tareas, ¡añade algunas!</p>
            ) : (
                <ul className="list-group mb-3">
                    {tasks.map((task, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <input type="checkbox" className="form-check-input me-2" />
                                <span>{task}</span>
                            </div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => setTaks(tasks.filter((_, i) => i !== index))}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="text-end">
                <strong>Items:</strong> {tasks.length}
            </div>
        </div>
    )
}

export default AllList;