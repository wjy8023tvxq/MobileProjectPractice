import React from 'react';

const DataForm = ({ formData, setFormData, handleInsert, handleUpdate, editId }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      handleUpdate(editId, formData);
    } else {
      handleInsert(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="LastName"
        value={formData.LastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="FirstName"
        value={formData.FirstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="number"
        name="Age"
        value={formData.Age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">{editId ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default DataForm;
