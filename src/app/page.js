"use client"
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Calc from "./Calc";

export default function Home() {
  return (
    <Provider store={store}>
      <Calc />
    </Provider>
  );
}
