import React from "react";

function NameList() {
  const names = ["Durga", "Prudvi", "Uday", "Dilli", "Reddy",'Durga'];
  const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
