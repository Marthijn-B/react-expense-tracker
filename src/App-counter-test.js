import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Button, Container } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container style={{ marginTop: 20 }}>
      <p className="text-primary">You clicked {count} times.</p>
      <Button onClick={() => setCount(count + 1)} color="success">
        Increase the count
      </Button> <Button onClick={() => setCount(count - 1)} color="danger">
        Decrease the count
      </Button>
    </Container>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
