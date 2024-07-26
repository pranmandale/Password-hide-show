import React, { useState } from 'react';

function Form() {
  const [show, setShow] = useState(false);
  const [process, setProcess] = useState(false);
  const [msg ,setMsg] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ch, setCh] = useState(false);

  const [greet, setGreet] = useState(false);

  const showPassword = () => {
    setShow(prevState => !prevState);
  };

  const Msg = () => {
    if (!(email && password)) {
      setMsg(false);
    }
    else {
      setCh(true)
    }

    setTimeout (() => {
      setMsg(true);
    },2000)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    setProcess(true);
    
    setTimeout(() => {
      setProcess(false);
    }, 4000); 
    setGreet(true);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-600'>
      <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-sm'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>{process? "Process ho raha hai wait karo": "Login"}</h1>
        
        <form onSubmit={handleSubmit} className='w-full'>
          <label htmlFor='email' className='font-semibold p-2 text-xl'>Email</label>
          <input
            id='email'
            className='p-2 border border-gray-400 rounded-lg w-full mb-4'
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            required
          />

          <label htmlFor='password' className='font-semibold p-2 text-xl'>Password</label>
          <div className='relative w-full mb-4'>
            <input
              id='password'
              className='p-2 border border-gray-400 rounded-lg w-full'
              placeholder='Password'
              value={password}
              type={show ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type='button'
              onClick={showPassword}
              className='absolute right-2 top-2 text-sm text-gray-700 font-semibold'
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
          
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 w-full'
            onClick={Msg}
          >
            {msg ? ch?"sabbas": "submit" : "data to daalo beta!"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
