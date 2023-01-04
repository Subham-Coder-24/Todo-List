import React, { useState } from "react";
import './App.css';

function App() {
  const [goods, setgoods] = useState();
  const [items, setitems] = useState(["Add items"]);

  function fun(event){
    const x = event.target.value;
    setgoods(x);
  }
  function fun2(){
    setitems((prevItem)=>{
      return [...prevItem, goods]
    });
    setgoods(" ");
  }
  console.log(goods);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input value={goods} onChange={fun} type="text" name="item" />
        <button onClick={fun2} >
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todo)=>{
            return <li>{todo}</li>
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
