import React, { useState } from 'react';
import axios from 'axios';

const Put = () => {
  const [id, setId] = useState('');
  const [student, setStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({ name: '', email: '' });

  const handleSearch = () => {
    axios.get(`http://localhost:8080/hello/${id}`)
      .then(res => {
        setStudent(res.data);
        setUpdatedStudent(res.data);
      })
      .catch(err => {
        alert(err.message);
        setStudent(null);
      });
  };

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/hello/${id}`, updatedStudent)
      .then(() => alert('Student updated successfully'))
      .catch(err => alert('Update failed'));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search and Update Student</h2>

      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Student ID"
      />
      <button onClick={handleSearch}>Search</button>

      {student && (
        <div style={{ marginTop: '20px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={updatedStudent.name}
            onChange={handleChange}
          /><br /><br />

          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={updatedStudent.email}
            onChange={handleChange}
          /><br /><br />

          <button onClick={handleUpdate}>Update Student</button>
        </div>
      )}
    </div>
  );
};

export default Put;
