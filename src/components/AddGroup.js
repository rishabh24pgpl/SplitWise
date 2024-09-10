import React, { useState } from 'react';

function AddGroup() {
  const [groupName, setGroupName] = useState('');
  const [person, setPerson] = useState('');
  const [persons, setPersons] = useState([]);

  const handleGroupSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      id: Date.now(),
      name: groupName,
      persons,
    };
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    storedGroups.push(newGroup);
    localStorage.setItem('groups', JSON.stringify(storedGroups));
    setGroupName('');
    setPersons([]);
  };

  const handlePersonAdd = () => {
    if (person) {
      setPersons([...persons, person]);
      setPerson('');
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Group</h2>
      <form onSubmit={handleGroupSubmit}>
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
            Group Name
          </label>
          <input
            id="groupName"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="person" className="block text-sm font-medium text-gray-700">
            Add Person
          </label>
          <div className="flex">
            <input
              id="person"
              type="text"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <button
              type="button"
              onClick={handlePersonAdd}
              className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Persons in Group:</h3>
          <ul className="list-disc pl-5">
            {persons.map((p, index) => (
              <li key={index} className="mb-1">{p}</li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Create Group
        </button>
      </form>
    </div>
  );
}

export default AddGroup;
