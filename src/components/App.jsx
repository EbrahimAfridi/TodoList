import React from "react";
import '../styles/App.css'
import AddUser from "./AddUser.jsx";
import UserList from "./UserList.jsx";


function App() {

  return (
      <div className='App'>
          <AddUser />
          {/*<UserList tasks={tasks}/>*/}
      </div>
  );
}

export default App
