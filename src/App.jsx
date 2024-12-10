import React, { useState } from 'react'
import './App.css'

function App() {

  const handleButtonClick = (event) => {
    console.log(event.target)
    console.log(event.type)
    alert("Hey I'm onClick event. 📞");
  }

  const handleWelcomeUser = (user)=>{
    alert(`Hey ${user}, How are you!`);
  }

  return (
    <>
      <h1>Event Handling in React</h1>
      <div className="card">

        {/* // ?  Function Components with Named Functions - Subscribe to Thapa Technical Youtube Channel  */
        /* Remember how we haven't called this function, if you call this function here  then it will run without even clicking.
         You just need to pass reference and not call here. */}
        <button onClick={handleButtonClick}>
          count
        </button>

        {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow
         function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object
          to your handler function. This is because the arrow function creates a new function and calls your handler without 
          passing any arguments. */}
        <button onClick={(event)=>handleButtonClick(event)} style={{ marginLeft: "20px" }}>Click Me</button>

        {/* /* //? Inline Event Handlers} */}
        <button onClick={(event)=>console.log(event)} style={{ marginLeft: "20px" }}>Inline Event handler</button>


        {/* //? Function Components with Inline Arrow Functions */}
        <button onClick={()=> alert("Hey I'm Inline Arrow Function")} style={{ marginLeft: "20px" }}>Inline Arrow fun</button>

        {/* {/* //? Passing Arguments to Event Handlers } */}
        {/* <button onClick={handleWelcomeUser("Raj")} style={{ marginLeft: "20px" }}>Click</button> */}
        <button onClick={() => handleWelcomeUser("Raj")} style={{ marginLeft: "20px" }}>Click</button>

      </div>
      <p className="read-the-docs">
        Event Handling in React: Synthetic Events, Naming Conventions of Events & Functions
      </p>
    </>
  )
}

export default App