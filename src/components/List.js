import React from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.name}>
          {item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List
