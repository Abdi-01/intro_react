import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className="container-dashboard" style={{ margin: "auto", width: "60vw" }}>
        <h2>Your To Do List</h2>
        <table >
          <thead>
            <tr>
              <th>No</th>
              <th>Kegiatan</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <th>1</th>
              <th>Sepak bola</th>
              <th>Dilapangan</th>
              <th><button type="button" >Delete</button></th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>-</th>
              <th><input type="text" placeholder="Add Kegiatan" ref="kegiatan" /></th>
              <th><input type="text" placeholder="Add Detail" ref="detail" /></th>
              <th><button type="button" >Add</button></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default App



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

// export default App;
