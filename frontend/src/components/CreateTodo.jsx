import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" /><br />
        <input type="text" placeholder="description" /><br />
        <button onClick={() =>{

        }}>Add a todo</button>
    </div>
}