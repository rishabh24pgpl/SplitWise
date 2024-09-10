import React, { useState } from 'react';

function AddFriend() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddFriend = () => {
    const newFriend = { id: Date.now(), name, email };
    const existingFriends = JSON.parse(localStorage.getItem('friends')) || [];
    localStorage.setItem('friends', JSON.stringify([...existingFriends, newFriend]));
    setName('');
    setEmail('');
  };

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Friend</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleAddFriend} className="bg-blue-500 text-white p-2 rounded">
        Add Friend
      </button>
    </div>
  );
}

export default AddFriend;
