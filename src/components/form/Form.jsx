import React, { useState } from 'react';

function Form() {
  const [show, setShow] = useState(false); 

  const showPassword = () => {
    setShow(prevState => !prevState);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-600'>
      <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Login Form</h1>
        
        <label htmlFor='email' className='font-semibold p-2 text-xl'>Email</label>
        <input
          className='p-2 border border-gray-400 rounded-lg w-full mb-4'
          placeholder='Email'
          type='email'
        />

        <label htmlFor='password' className='font-semibold p-2 text-xl'>Password</label>
        <div className='relative w-full mb-4'>
          <input
            className='p-2 border border-gray-400 rounded-lg w-full'
            placeholder='Password'
            type={show ? 'text' : 'password'} 
          />
          <button
            type='button'
            onClick={showPassword}
            className='absolute right-2 top-2 text-sm text-gray-700 font-semibold'
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
