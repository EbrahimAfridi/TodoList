import React from "react";
import '../styles/App.css'
import AddIcon from '@mui/icons-material/Add';


function App() {

  return (
      <div className='App'>
        <h1 className='heading'>Todo List</h1>
          <label htmlFor="addTask">Add</label>
          <div className='inputAndButton'>
              <input className='input' type='text' placeholder=''/>
              <button> <AddIcon/> </button>
          </div>
      </div>
  );
}

export default App
