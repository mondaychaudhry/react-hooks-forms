import React, { useState } from "react";
import Form from './Form'

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  function handleOnCF (e){
    setFirstName(e.target.value)}
  function handleOnCL (e){
    setLastName(e.target.value)}
  return (
    <Form f={firstName} l={lastName} x={handleOnCF} y={handleOnCL}
    />);}

export default ParentComponent;