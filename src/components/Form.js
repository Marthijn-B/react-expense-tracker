import React from 'react';

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

const Form = () => (
  <BTForm style={{ margin: 10 }}>
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
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary">
      Add
    </Button>
  </BTForm>
)

export default Form
