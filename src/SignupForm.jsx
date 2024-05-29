import React, { useState } from 'react';

const SignupForm = ({ setOutput }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signupData = { name, username, email, branch, password };

    try {
      const response = await fetch('http://13.234.92.253:8095/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        setOutput('Network error');
        return;
      }

      const responseData = await response.text();
      setOutput(responseData);

      // Resetting form values
      setName('');
      setUsername('');
      setEmail('');
      setBranch('');
      setPassword('');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-black space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-black"
          required
        />
      </div>
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
        <label className="block text-sm font-medium text-gray-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm shadow-black"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-400">Branch</label>
        <input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
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
        className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white shadow-sm font-mono hover:bg-indigo-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
