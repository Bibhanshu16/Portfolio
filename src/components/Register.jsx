import React, {useState} from 'react';
import axios from "axios";

function Register() {

    const [form, setForm] = useState({username: "", password: ""});
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
              const res = await axios.post('http://localhost:3000/register', form, {
                withCredentials: true,
              });
              console.log('Registered user:', res.data);
        } catch(err) {
            console.error(err.response?.data || err.message);
        }
    };

  return (
    <div>
        <h2>Regiter</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button type="submit" style={{ width: '100%' }}>Register</button>
      </form>
    </div>
  )
}

export default Register;