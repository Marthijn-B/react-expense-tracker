import React, { useState, useEffect } from 'react'
import Logo from './logo.svg';
import './App.css';

import { Container, Jumbotron } from 'reactstrap';

import Form from './components/Form';
import List from './components/List';

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



// mock initial data
// const ALL_EXPENSES = [
// { id: 1, name: 'Buy a book', amount: 20 },
// { id: 2, name: 'Buy a milk', amount: 5 },
// { id: 3, name: 'Book a flight ticket', amount: 225 }
// ]

// retrieve data from localstorage unpon initialise
const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];


function App() {
  // react hook [var, function to update var]
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [removed, setRemoved] = useState('');
  const [error, setError] = useState('');

  const handleName = event => {
    setName(event.target.value);
    clearMessages();
  }

  const handleAmount = event => {
    setAmount(event.target.value);
  }

  const handleSubmitForm = event => {
    event.preventDefault() // this line prevents the form from refreshing
    setAmount(Number(amount).toFixed(2));

    //check whether the name is not empty and the amount is not negative
    if (name !== '' && amount > 0) {
      console.log(Number(amount).toFixed(2));
      // single expense object
      const expense = { name, amount }
      console.log(expense);
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense])

      // clean input fields
      setName('')
      setAmount('')
      setError('')
    } else {
      // TODO: Display this error on the form
      console.log('Invalid expense name or the amount')
      setError('Invalid expense name or the amount');
    }
  }

  // useEffect you can handle lifecycle methods directly inside the functional components
  // use this function to update the localStorage
  useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

  // Clear the expense list
  const handleClearExpenses = () => {
    clearMessages();
    setExpenses([]);
  }

  // Remove a single expense
  const handleSingleDelete = event => {
    event.preventDefault();
    const pos = event.target.value;
    setRemoved([expenses[pos].name, expenses[pos].amount]);
    // remove item at position 'pos' from state
    expenses.splice(pos, 1);
    // update localStorage
    localStorage.setItem('expenses', JSON.stringify(expenses));
    setError('');
  }

  // Clear display messages
  const clearMessages = () => {
    setRemoved('');
    setError('');
  }

  return (
    <Container>
      <Jumbotron fluid>
        <h3 className='display-6 text-center'>
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt='react-logo' />
        </h3>
        <div className='text-center'>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
         {/* You need to pass in for Form.js to access these functions/Vars */}
        <Form
          name={name}
          amount={amount}
          error={error}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
          handleClearExpenses={handleClearExpenses}
        />

        <List
          expenses={expenses}
          handleSingleDelete={handleSingleDelete}
        />
        { removed &&
          <center><p style={{color: 'red'}}><i>
            {removed[0]} expense of ${removed[1]} has been removed.
          </i></p></center>
        }
      </Jumbotron>
    </Container>
    )
  }

export default App
