import React from 'react';

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

// Form = ({ all the vars/functions from app.js })
const Form = ({ name, amount, error, handleName, handleAmount, handleSubmitForm, handleClearExpenses }) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense?"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}>
        $ Amount
      </Label>
      <Col sm={4}>
        <Input
          type="number"
          min="0.01"
          step="0.01"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <div>
      <Button
        id="submit"
        type="submit"
        color="primary"
      >
        Add
      </Button>

      <Button
        id="clear"
        type="submit"
        color="danger"
        onClick={handleClearExpenses}
      >
        Clear list
      </Button>
      { error &&
          <font id='errorText'>{error}</font>
      }
    </div>
  </BTForm>
)

export default Form
