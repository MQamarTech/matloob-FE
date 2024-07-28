import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../feature/counter/CounterSlice';
const Counter = () => {
  const selecor = useSelector(state => state?.counter?.value);
  
  const dispatch = useDispatch();
  const add = () => {
    dispatch(increment());
  };
  return (
    <div>
      <button onClick={add}> - </button>
      <div>{selecor}</div>
      <button onClick={add}> + </button>
    </div>
  );
};

export default Counter;
