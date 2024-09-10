import React, { useState, useEffect } from 'react';

function AddExpense() {
  const [groups, setGroups] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [involvedFriends, setInvolvedFriends] = useState([]);
  const [groupPersons, setGroupPersons] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem('friends')) || [];
    setFriends(storedFriends);
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      const group = groups.find(g => g.name === selectedGroup);
      setGroupPersons(group ? group.persons : []);
    }
  }, [selectedGroup, groups]);

  const handleFriendChange = (e) => {
    const { value, checked } = e.target;
    setInvolvedFriends(prev => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(friend => friend !== value);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (involvedFriends.length < 2) {
      alert('At least 2 persons must be involved in the expense.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount,
      group: selectedGroup,
      involvedFriends,
    };

    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    storedExpenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(storedExpenses));

    setDescription('');
    setAmount('');
    setInvolvedFriends([]);
    setSelectedGroup('');
    setGroupPersons([]);
  };

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="group" className="block text-sm font-medium text-gray-700">
            Group
          </label>
          <select
            id="group"
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select a group</option>
            {groups.map((group) => (
              <option key={group.id} value={group.name}>
                {group.name}
              </option>
            ))}
          </select>
        </div>

        {groupPersons.length > 0 && (
          <>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>

            <fieldset className="mb-4">
              <legend className="block text-sm font-medium text-gray-700 mb-2">Involved Friends</legend>
              <div className="space-y-2">
                {groupPersons.map((person, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`friend-${index}`}
                      value={person}
                      checked={involvedFriends.includes(person)}
                      onChange={handleFriendChange}
                      className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={`friend-${index}`} className="text-sm text-gray-800">
                      {person}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add Expense
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default AddExpense;
