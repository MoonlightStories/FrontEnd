import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', { username, password })
      .then(response => {
        // Handle successful login
      })
      .catch(error => {
        // Handle login error
      });
  };
  const formContainerStyle = {
    border: '1px solid #007bff', // Decreased border size
    padding: '10px',
    borderRadius: '10px'
  };

  return (
    <div className='container mt-5'>
        <div style={formContainerStyle}>
      <h1 className='mb-5'>-Login-</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group mb-1'>
        <label>
          Username:
          <input type="text" value={username} className='form-control' onChange={(e) => setUsername(e.target.value)} />
        </label>
        </div>
        <br />
        <div>
        <label className='form-group mb-1'>
          Password:
          <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <br /><br />
        <div className='btn-group btn-group-lg'>
        <button type="submit" className='btn btn-primary'>Login</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
