import React from 'react';

const DataList = ({ users, handleEdit, handleDelete }) => {
  if (!users.length) {
    return <p>No users available</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.ID}>
          <div className="user-info">
            {user.FirstName} {user.LastName} - Age: {user.Age}
          </div>
          <div className="button-container">
            <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.ID)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DataList;

