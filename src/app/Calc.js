"use client";

import { decrement, increment, incrementByAmount } from "@/redux/counter";
import { useDispatch, useSelector } from "react-redux";

const Calc = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Count: {count} </h3>

      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Deccrement</button>
      <button onClick={() => {dispatch(incrementByAmount(5))}}>Increment by 5</button>

    </>
  );
};

export default Calc;
