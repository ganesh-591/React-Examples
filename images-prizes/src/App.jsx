import React from 'react'
import Child from './components/Child'
import pizzaimg from "./assets/pizza.jpg"
import burgerimg from "./assets/burger.jpg"
import friesimg from "./assets/fries.jpg"
const App = () => {
const title1 = "Pizza";
const price1 = 400;
const title2 = "Burger";
const price2 = 200;
const title3 = "Fries";
const price3 = 150;
  return (
    <div>
      <Child pizza={pizzaimg} a={title1} a1={price1}
      burger={burgerimg} b={title2} b2={price2}
      fries={friesimg} c={title3} c3={price3}/>
    </div>
  )
}

export default App
