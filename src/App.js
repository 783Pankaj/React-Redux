import './App.css';
import Count from './redux/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch =  useDispatch();
  // console.log(dispatch)
  return (
    <div className="App">
      <button onClick={(e)=>dispatch({type : "Increment"})} className='incre'>Increment</button>
       <p className='count'> <Count /> </p>
     <button onClick={(e)=>dispatch({type:"Decrement"})} className='decre'>Decrement</button>
    </div>
    
  );
}

export default App;


