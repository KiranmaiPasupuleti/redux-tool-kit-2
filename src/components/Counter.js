import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, decrementByValue, increment, incrementByValue } from '../redux/counterSlice'

function Counter() {
    //const  count = useSelector((store) => store.counter)
    const {count} = useSelector((store) => store.counter)

    const dispatch = useDispatch()

  return (
    <div>
        <p> Count: {count}</p>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByValue(50))}>Increment</button>
        <button onClick={()=> dispatch(decrementByValue(10))}>Decrement</button>
    </div>
  )
}

export default Counter