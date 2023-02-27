import React, {useState} from "react";
import '../styles/App.css';
import AddIcon from '@mui/icons-material/Add';
import UserList from "./UserList.jsx";

function AddUser (props) {

    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = e.target.elements.task.value;
        addTask(newTask);
        e.target.reset();
    };

    return  (
        <div className='addUser'>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addTask">Add Task</label>
                <div className='inputAndButton'>
                    <input type="text"
                           id="task"
                           className='input'
                           placeholder='Enter here'
                    />
                    <button type="submit"> <AddIcon/> </button>
                </div>
            </form>
            {/*User List is commented here*/}
            <UserList tasks={tasks}/>
       </div>
    )
}

export default AddUser;


