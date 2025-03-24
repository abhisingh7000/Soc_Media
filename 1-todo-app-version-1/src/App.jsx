import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/Todoitems";
import WelcomeMessage from "./Component/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";




function App() {
  return (
    <TodoItemsContextProvider>
      < center className='todo-container' >
        <AppName></AppName>
        <AddTodo >
        </AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
};
export default App;