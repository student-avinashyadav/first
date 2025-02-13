import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import './App.css';
import TodoItems from "./components/TodoItems";

function App() {

  let todoItems = [{
  name:'milk',
  dueDate: '20/02/2024',

  },
  {
    name:'go to agra',
    dueDate: '20/02/2024',
    
    }
]
  return (
    <>
      <center className="TodoContainer">
       <AppName></AppName>
       <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
        
      </center>
    </>
  );
}

export default App;
