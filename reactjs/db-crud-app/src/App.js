import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import DataForm from './components/DataForm';
import DataList from './components/DataList';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({LastName: '', FirstName: '', Age:''});
  const [editId, setEditId] = useState(null);

  // Base URL using environment variable or default to localhost at port 4000
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000';

  // Fetch users from API on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('User fetchting error:', error);
    }
  };

  const handleInsert = async (newUser) => {
    try {
      const response  =await axios.post(`${API_BASE_URL}/users`, newUser);
      setUsers([...users, { ...newUser, ID: response.data.id}]);
      setFormData({LastName:'', FirstName: '', Age: ''});  // clear input fields
    } catch (error) {
      console.error('User inserting error:', error);
    }
  };

  /* Update the user's information on the server */
  const handleUpdate = async (id, updatedUser) => {
    try {
      await axios.put(`${API_BASE_URL}/users?id=${id}`, updatedUser); 
      const updatedUserList = users.map((user) => (user.ID === id ? { ...user, ...updatedUser} : user));
      setUsers(updatedUserList);
      setEditId(null);
      setFormData({LastName:'', FirstName: '', Age: ''});  // clear input fields
    } catch (error) {
      console.error('User updating error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/users?id=${id}`);
      setUsers(users.filter((user) => user.ID !== id));
    } catch (error) {
      console.error('User deleting error: ', error);
    }
  };

  /* Enter edit mode on the client side, allowing the user to modify details of a selected user */
  const handleEdit = (user) => {
    setEditId(user.ID);
    setFormData({ LastName: user.LastName, FirstName: user.FirstName, Age: user.Age });
  };

  return (
    <div className="App">
      <h1>React CRUD Application for Users</h1>
      <DataForm
        formData={formData}
        setFormData={setFormData}
        handleInsert={handleInsert}
        handleUpdate={handleUpdate}
        editId={editId}
      />
      <DataList users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
