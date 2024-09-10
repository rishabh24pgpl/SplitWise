import React, { useEffect, useState } from 'react';

function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem('friends')) || [];
    setFriends(storedFriends);
  }, []);

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Friend List</h2>
      {friends.length === 0 ? (
        <p>No friends added yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {friends.map((friend) => (
            <li key={friend.id} className="mb-2">
              <span className="font-semibold">{friend.name}</span> - {friend.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FriendList;
