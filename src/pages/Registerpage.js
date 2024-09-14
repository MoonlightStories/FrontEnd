import { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [role, setRole] = useState('user'); // Default role

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', { username, password, email, fname, lname, role })
      .then(response => {
        // Handle successful registration
        console.log('Registration successful:', response.data);
      })
      .catch(error => {
        // Handle registration error
        console.error('Registration error:', error);
      });
  };

  // Inline styles
  const formContainerStyle = {
    border: '1px solid #007bff', // Decreased border size
    padding: '10px',
    borderRadius: '10px'
  };

  const formLabelStyle = {
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  };

  const formControlStyle = {
    marginBottom: '1rem'
  };

  return (
    <div className="container mt-5">
      <div style={formContainerStyle}>
        <h1 className="mb-4">-Registration-</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group style={formControlStyle} controlId="formUsername">
            <Form.Label style={formLabelStyle}>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </Form.Group>

          <Form.Group style={formControlStyle} controlId="formPassword">
            <Form.Label style={formLabelStyle}>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Form.Group>

          <Form.Group style={formControlStyle} controlId="formEmail">
            <Form.Label style={formLabelStyle}>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group style={formControlStyle} controlId="formFname">
            <Form.Label style={formLabelStyle}>First Name</Form.Label>
            <Form.Control
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter your first name"
            />
          </Form.Group>

          <Form.Group style={formControlStyle} controlId="formLname">
            <Form.Label style={formLabelStyle}>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter your last name"
            />
          </Form.Group>

          <Form.Group style={formControlStyle} controlId="formRole">
            <Form.Label style={formLabelStyle}>Role</Form.Label>
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;


