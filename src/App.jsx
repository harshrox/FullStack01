import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const App = () => {
  const [output, setOutput] = useState('');

  const clearOutput = () => {
    setOutput('');
  };

  return (
    <div className="flex flex-col gap-10 md:gap-0 p-4 min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col gap-10 items-center md:flex-row md:items-start md:justify-evenly md:gap-0">
        <div className="w-2/3 md:w-1/6">
          <h1 className="text-2xl font-bold mb-4 flex justify-center font-mono">Login</h1>
          <div className="w-full border-b-2 border-cyan-900 mb-5"></div>
          <LoginForm setOutput={setOutput} />
        </div>
        <div className="w-2/3 md:w-1/6">
          <h1 className="text-2xl font-bold mb-4 flex justify-center font-mono">Sign up</h1>
          <div className="w-full border-b-2 border-cyan-900 mb-5"></div>
          <SignupForm setOutput={setOutput} />
        </div>
      </div>
      <div className="flex-grow h-full flex justify-center items-center">
        <div className="my-4 flex flex-col w-2/3 md:w-1/4">
          <textarea
            id="messageOutput"
            value={output}
            readOnly
            className="resize-none p-2 border rounded-md h-56 md:h-40 font-mono text-black text-lg"
          />
          <button
            onClick={clearOutput}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 font-medium font-mono text-white shadow-sm hover:bg-red-700"
          >
            Clear Output
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
