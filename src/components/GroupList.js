import React, { useEffect, useState } from 'react';

function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
  }, []);

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Group List</h2>
      {groups.length === 0 ? (
        <p>No groups added yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {groups.map((group) => (
            <li key={group.id} className="mb-2">
              <span className="font-semibold">{group.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GroupList;
