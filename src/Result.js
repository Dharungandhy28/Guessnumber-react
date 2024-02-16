import React from "react";

function Result({ term, secretNumber }) {
  let result;

  if (term) {
    if (term > secretNumber) {
      result = "Higher";
    } else if (term < secretNumber) {
      result = "Lower";
    } else if (term == secretNumber) {
      result = "You are right!";
    } else {
      result = "Enter valid Input";
    }
  }
  return (
    <div>
      <h3>You Guessed: {result}</h3>
    </div>
  );
}

export default Result;
