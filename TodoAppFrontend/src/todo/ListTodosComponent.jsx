import { useState, useEffect } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 4, today.getMonth(), today.getDay())
    const[todos, setTodos] = useState([])
    const[message, setMessage] = useState(null)
    useEffect (
        () => refreshTodos(), []
    )
    
    const username = useAuth().username

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
        .then((response) => {setTodos(response.data)})
        .catch((error) => console.log(error))
        .finally(() => console.log("cleanup"))
    }
    
    function deleteTodo(id) {
        deleteTodoApi(username, id)
        .then(
            () => {
                setMessage(`Todo with id: ${id} successfully deleted.`)
                refreshTodos()
            }
        )
        .catch((error) => console.log(error))
    }
    
    const navigate = useNavigate()

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewTodo(id) {
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Your Todos</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is done?</th>
                            <th>Target Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}


