import React from 'react';
import './App.css';

const Button = props => (
  //passing an unnamed function, which contains console log, to the onclick. then the console function is not evaluated on render. and don't forget that all js must be in an expression
  <button onClick={function () {
    console.log('bite me')
  }} type="button">{props.children}</button>
)

const Button2 = props => (
  //binding an unnamed function to console log. using syntax sugar, but this is the same as the above Button.
  <button onClick={() => console.log('i like pie')} type="button">{props.children}</button>
)

const Button3 = props => (
  //binding a function that is stated elsewhere
  <button onClick={()=>foo(props.logMe)} type="button">{props.children}</button>
)

//this whole file is js. so define the functions here, not in the rendered html. lol.
function foo(a){console.log(a)}

console.log('ready to roll')

function App() {
  return (
    <div className="App">
      <Button>Click me</Button>
      <Button2>222</Button2>
      <Button3 logMe='doggy doggy'>external function</Button3>
      <Button3 logMe="i rule the dog land"> ok</Button3>
    </div>
  );
}

export default App;
