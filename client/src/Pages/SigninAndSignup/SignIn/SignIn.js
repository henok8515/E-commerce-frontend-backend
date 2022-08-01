import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [users, setUsers] = useState({
        email: '',
        password: ''
    });
    const [user, setUser] = useState({});
    const [err, setErr] = useState(false);
    const [sucess, setSucess] = useState(false);

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };
    const location = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/user/login', {
                email: users.email,
                password: users.password
            })
            .then((res) => res.data)
            .then((res) => res && location('/'))
            .catch((err) => setErr(true));
    };
    console.log(user);
    return (
        <form
            onSubmit={handelSubmit}
            className="mt-40 flex flex-col  justify-center items-center"
        >
            <input
                onChange={handleChange}
                name="email"
                value={users.email}
                placeholder="email"
            />
            <input
                onChange={handleChange}
                name="password"
                value={users.password}
                placeholder="password"
            />
            <button type="submit">submit</button>
            {err ? <p>wrong credentioal</p> : null}
            {sucess ? <p>sucess</p> : null}
            <p>{user.email}</p>
        </form>
    );
}

export default SignIn;
