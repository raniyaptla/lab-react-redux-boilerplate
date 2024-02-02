
import React, { useReducer } from 'react';
import reducer from './Reducer'; 
import { incrementLike, decrementLike } from './Actions'; 
import './App.css'

const LikeCounter = () => {
  
  const [state, dispatch] = useReducer(reducer, { likes: 0 });

  const handleIncrement = () => {
    
    dispatch(incrementLike());
  };

  const handleDecrement = () => {
    
    dispatch(decrementLike());
  };

  return (
    <div className="like-counter-container">
      <h1 style={{marginLeft:'70px'}}>{state.likes}</h1>
      <button onClick={handleIncrement}>LIKE</button>
      <button onClick={handleDecrement}>UNLIKE</button>
    </div>
  );
};

export default LikeCounter;
