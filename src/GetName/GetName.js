import React from "react";

function getFnName(name) {
  return name.firstName + " " + name.lastName.toLowerCase();
}

const myname = {
  firstName: "Bob",
  lastName: "Dylan",
};

const GetName = () => {
  return <h1> This is {getFnName(myname)} </h1>;
};

export default GetName;
