import TodoItem from "../components/TodoItem"
import {useState, useEffect} from "react"

export default function TodoContainer() {
  const [state, setState] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(res => setState(res)
      ).catch(err => setHasError(true))
  }, [])


console.log(state, "this is state")

  return (
    <>
    {hasError? <div>Error occured.</div> : (state.map( d => <div>{d}</div>))}      
    </>
      // <div className="todo-item">
      //     {/* <TodoItem userId = {user} id= {key} title= {title} completed={completed} />
      //      */}

      // </div>
  )
}