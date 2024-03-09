import { useState, useEffect } from 'react';
import Router from 'next/router';

export default () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await doRequest();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className='form-group'>
                <label>Email Address</label>
                <input type='text' className='form-control' onChange={handleChange} name='email' />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' name='password' onChange={handleChange} />
            </div>
            <button className="btn btn-primary">Sign Up</button>
        </form>
    )
}