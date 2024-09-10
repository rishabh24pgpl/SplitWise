import React, { useEffect, useState } from 'react';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  return (
    <div className="bg-white p-6 shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {expenses.map((expense) => (
            <li key={expense.id} className="mb-2">
              <span className="font-semibold">{expense.description}</span> - ${expense.amount}
              <div>
                Involved Friends: {expense.involvedFriends.map(f => f.name).join(', ')}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
