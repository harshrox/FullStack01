import React, { useState } from 'react';

const LoginForm = ({ setOutput }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginData = { username, password };

        try {
            const response = await fetch('http://13.234.92.253:8095/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.status === 404) {
                setOutput('User not registered.');
                return;
            } else if (response.status === 401) {
                setOutput('Password did not match.');
                return;
            } else {
                const responseData = await response.json();
                const outputData = `Name: ${responseData.name} \nUsername: ${responseData.username} \nE-mail: ${responseData.email} \nBranch: ${responseData.branch}`;
                setOutput(outputData);

                // Resetting form values
                setUsername('');
                setPassword('');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-black space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-400">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-black"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-black"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium font-mono text-white shadow-sm hover:bg-indigo-700 "
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
