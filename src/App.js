
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Redux/Reducers/ConterSlice';

function App() {

  const counterVal = useSelector((state)=>state.counter.counter);
  console.log(counterVal);
  const dispatch = useDispatch();
  const Increment = ()=>{
    dispatch(increment())
  }
  const Decrement = ()=>{
    dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>{counterVal}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default App;
