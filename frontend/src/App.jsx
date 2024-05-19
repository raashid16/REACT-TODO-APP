import { useState } from 'react'
import './App.css'
import { CreateTodos } from './components/CreateTodo'
function App() {
const [todos,setTodos] = useState([]);

  
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
    
  )
}

export default App
