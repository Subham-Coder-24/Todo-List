import React, { useState } from "react";
function App() {
  const [fullname, setFullname] = useState({
    fName:"",
    lName:"",
    email:""
  });
  function updateFullname(event){

    // const newValue = event.target.value;
    // const input = event.target.name;
    const {value:newValue,name:input}=event.target;
    
    
        
    // if(input === "fName"){
    //   setFullname({fname:newValue});
    // }else if(input === "lName"){
    //   setFullname({lname:newValue});
    // }

    // setFullname((prevValue)=>{
    //   if(input === "fName"){
    //     return{
    //       fName:newValue,
    //       lName:prevValue.lName,
    //       email:prevValue.email
    //     }
    //   }else if(input === "lName"){
    //     return{
    //         fName:prevValue.fName,
    //         lName:newValue,
    //         email:prevValue.email
    //       }
    //   }else if(input === "email"){
    //     return{
    //         fName:prevValue.fName,
    //         lName:prevValue.lName,
    //         email:newValue
    //       }
    //   }  
    // })

    
    setFullname((prevValue)=>({...prevValue,[input]:newValue}));

  }
  return (
    
    <div>
      <div>Hello {fullname.fName} {fullname.lName} {fullname.email}</div>
      <input name="fName" onChange={updateFullname} ></input>
      <input name="lName" onChange={updateFullname} ></input>
      <input name="email" onChange={updateFullname} ></input>
      <br></br>
      <button>Click me</button>
    </div>
  );
}

export default App;
