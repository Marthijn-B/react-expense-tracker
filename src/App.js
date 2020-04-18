import React, { useState } from 'react';
import Logo from './logo.svg';
import './App.css';

import { Button, Container, Jumbotron } from 'reactstrap'

// React Hooks Notes:
// ==================

  // The useState hook returns two values in an array.
  // The first value is the current value of the state object
  // and the second value in the array the function to update
  // the state value fo the first.

  // useState() hook also takes a single argument that represents the initial state.

  // Jumbotron is a background

  // The reduce() method executes a function to
  // output a single value from all the individual values from an array




const ALL_EXPENSES = [
{ id: 1, name: 'Buy a book', amount: 20 },
{ id: 2, name: 'Buy a milk', amount: 5 },
{ id: 3, name: 'Book a flight ticket', amount: 225 }
]

function App() {
  // react hook [var, function to update var]
  const [expenses, setExpenses] = useState(ALL_EXPENSES)

  return (
    <Container className="text-center">
      <Jumbotron fluid>
        <h3 className="display-6">
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
          </div>
        </Jumbotron>
      </Container>
    )
  }

export default App
