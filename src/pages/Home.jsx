import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/room/${value}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-5 text-gray-800">Welcome to Video Chat</h1>
        <p className="text-gray-600 mb-8">Enter a room ID to start your video call</p>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          placeholder="Enter Room ID"
          className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleClick} 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200">
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
