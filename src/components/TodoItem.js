export default function TodoItem(props) {
  console.log(props, "this is props")
  return (
      <div>
         <input type="checkbox" checked={props.completed} />
    
          <p>{props.title}</p>
         
      </div>
  )
}