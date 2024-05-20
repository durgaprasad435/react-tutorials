import React, { useState } from "react";
import { Select,Textarea } from "@chakra-ui/react";

const Feedback = () => {
    
  const [value, setValue] = useState("--None--");
  const [feedback, setFeedback] = useState("");
  const [res,setRes]=useState([])
  const fbList={
    "feedback_type":value,
    "user_response":feedback ? feedback:"No response from user"
  }
  const submit  = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please enter a value");
    } else {
      //alert(`${value}`);
      //console.log(value,feedback)
      //window.location.reload()
      res.push(fbList)
      console.log(res)
      setValue("")
      setFeedback("")
      console.log(feedback)
    }
    //console.log(feedback)
  };
  return (
    <div className="Addvalue">
      <Select className="select" placeholder="--None--" variant='filled' value={value}  onChange={e => {setValue(e.target.value)}}>
        <option value="Data Quality" >Data Quality</option>
        <option value="Product Bug">Product Bug</option>
        <option value="Product Performance">Product Performance</option>
        <option value="Service Quality" >Service Quality</option>
        <option value="User Interface">User Interface</option>
      </Select><br/>
      <Textarea placeholder='Your response goes here..' value={feedback} maxLength={255} onChange={e => {setFeedback(e.target.value)}}/><br/>
      <button onClick={submit}>Save Feedback</button>
    </div>
  );
};


export default Feedback;