import React from 'react';
import '/src/styles/UserList.css';

function UserList(props) {
    return (
        <div className='userList'>
            <ul>
                {props.tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;





