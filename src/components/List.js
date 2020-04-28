import React from 'react'
import { Button } from 'reactstrap'

import { ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses, handleSingleDelete }) => (
  <div>
    <ListGroup id="list">
      {expenses.map((item,id) => (
        <ListGroupItem key={id}>
          {item.name} - $ {item.amount}
          <Button
            type="submit"
            value={id}
            outline color="danger"
            size="sm"
            onClick={handleSingleDelete}
            style={{float: 'right'}}
          >
            Remove
          </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List
