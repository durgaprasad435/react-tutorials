import React from "react";

// function Greet() {
// return <h1>Hello Durga</h1>;<h1>How</h1>;
// }

const Greet =({name,heroName}) => {
  //console.log(props)
  //const {name,heroName}=props
  
  return (
    <div>
    <h1>Hello {name} a.k.a {heroName} </h1> 
    
    </div>
  ) 
};

export default Greet;
