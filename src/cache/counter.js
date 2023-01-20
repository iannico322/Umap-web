import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  logout,
  increment,
  incrementByAmount,
  selectCount,
} from './counterSlice';


export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div >
        <button
          
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        {console.log(typeof count)}
        <span >{count}</span>
        <button
          c
          aria-label="Decrement value"
          onClick={() => dispatch(logout())}
        >
          -
        </button>
      </div>
      <div>
        <input
         
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          
          onClick={() =>
            dispatch(incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </button>
        
      </div>
    </div>
  );
}