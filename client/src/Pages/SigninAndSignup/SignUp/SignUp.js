import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../../Assets/Images/register-bg.png';
const SignUp = ({ setCurrentUser }) => {
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
        email: ''
    });

    const location = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:5000/api/user/register', {
                userName: userData.userName,
                email: userData.email,
                password: userData.password
            })
            .then((res) => setCurrentUser(res.data))
            .then(() =>
                setUserData({
                    ...userData,
                    userName: '',
                    email: '',
                    password: ''
                })
            )
            .then(() => location('/'))
            .catch((err) => console.log(err));
    };
    const values = [
        {
            placeholder: 'User Name',
            name: 'userName',
            type: 'text',
            value: userData.userName,
            errorMessage: ''
        },
        {
            placeholder: 'Email',
            name: 'email',
            type: 'email',
            value: userData.email
        },
        {
            placeholder: 'PassWord',
            name: 'password',
            type: 'password'
        }
    ];
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex h-screen  bg-white justify-center items-center ">
            <div
                className=" flex-1  flex-col flex h-2/3 w-2/6 justify-around
             items-center "
            >
                <form
                    onSubmit={handleSubmit}
                    className="p-6 w-2/3 flex justify-around shadow-black items-center flex-col h-full  bg-blue-800 text-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                    <Typography
                        variant="h3"
                        className="mb-52
                    "
                    >
                        Register
                    </Typography>
                    {values.map((value) => (
                        <div key={value.name} className="w-4/6">
                            <label
                                for="first_name"
                                className=" text-lg text-white block mb-2 font-medium  dark:text-gray-300"
                            >
                                {value.name}
                            </label>
                            <input
                                onChange={handleChange}
                                {...value}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className=" w-2/3 inline-block px-6 py-2.5 bg-slate-900 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Register
                    </button>
                    <Link to="/login">already have an account Login </Link>
                </form>
            </div>
            <div
                style={{
                    backgroundImage: `url('${Image}')`,
                    backgroundSize: 'cover'
                }}
                className="flex-1 h-screen "
            />
        </div>
    );
};

export default SignUp;
