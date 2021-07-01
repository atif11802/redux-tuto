
import './App.css';
import {useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./actions/index";


function App() {

  const counter = useSelector(state => state.counter)
  const islogged= useSelector(state => state.islogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
      {
        !islogged?<h1>huhu valueable data</h1>:""
      }
      
      <h1>{counter}</h1>

      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button  onClick={()=>dispatch(decrement(3))}>-</button>

    </div>
  );
}

export default App;
