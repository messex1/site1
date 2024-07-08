import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { username, password });
      setMessage('Login successful');
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Login</button>
      </form>
      <p>{message}</p>
      <Link href="/register"><a>Register</a></Link>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .input {
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .button {
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
