import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import {useEffect} from "react";

const createTodoForm= () =>{

}

const  Todos = ()=>{}

function App() {
  const store = useSelector(store => store);
  console.log(store);
  const fetchTodos = async ()=>{
    const resp = await fetch('http://localhost:8888/get-todos')
    const data = await resp.json()
    console.log(data, 'data')
  }

  useEffect(() =>{
    fetchTodos()
  },[])

  return (
    <div>

    </div>
  );
}

export default App;
