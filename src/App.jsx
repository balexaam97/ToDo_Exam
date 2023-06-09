import {useState} from "react";

function App() {
  const[todos,setTodos] = useState([]);
  const[todo,setTodo] = useState("");
function handleSubmit(event){
  event.preventDefault();

  let newTodo={id:Date.now(), text:todo, done: false};
  setTodos([...todos, newTodo]);
  setTodo("");
}

function handleChange(event){
  setTodo(event.target.value);
}

function handleCheckbox(event){
  const { name, checked }= event.target;
  let updateTodos= todos.map((item)=>({
    ...item,
    done:item.id == name ? checked: item.done
  }));
  setTodos(updateTodos);
}

function handleDelete(){
  setTodos(todos.filter((item) => !item.done));

}
  return (
  <div className="container mx-auto max-w-2xl  mt-20">
    <h1 className="font-bold text 2xl text-center mb-8">
      React ToDo
    </h1>
    <form onSubmit= {handleSubmit}> 
  <input className= "w-full border-2 border-gray-400 px-4 py-4 mb-8" value={todo} onChange={handleChange}/>
  </form> 
  <ul className="mb-8">
  {todos.map(({id, text, done})=>(
    <li key={id} className="py-2 text-xl flex" style={{ textDecoration: done ? 'line-through' : 'none' }}>
      <input type="checkbox" 
      name={id} 
      defaultChecked={done} onClick={handleCheckbox}
      />
      <p className="pl-4">
        {text}</p>
      </li>
  )
    )}
    </ul>
    <hr className="hr" />
    <div className="flex justify-end mt-4">
    <button className="bg-slate-800 px-4 py-2 text-white" onClick= {handleDelete}
    >
      Clear done
      </button>
      </div>
  </div>

  );
}

export default App;
