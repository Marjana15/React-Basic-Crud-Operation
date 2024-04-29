import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const result = await axios.get('http://localhost:5000/users');
        setUsers(result.data);
    };

    const addUser = async () => {
        await axios.post('http://localhost:5000/users', { name, email });
        fetchUsers();
        setName('');
        setEmail('');
    };

    const updateUser = async (id) => {
        await axios.put(`http://localhost:5000/users/${id}`, { name, email });
        fetchUsers();
        setName(''); // Clear fields after update
        setEmail(''); // Clear fields after update
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        fetchUsers();
    };

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
            </div>
            <div className="mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
            </div>
            <button className="btn btn-primary" onClick={addUser}>Add User</button>
            <ul className="list-group mt-3">
                {users.map(user => (
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {user.name} - {user.email}
                        <div>
                            <button className="btn btn-info me-2" onClick={() => updateUser(user.id)}>Update</button>
                            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
