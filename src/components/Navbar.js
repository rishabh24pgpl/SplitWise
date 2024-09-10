import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Splitwise App</Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/add-friend"
            className="text-white hover:bg-blue-700 hover:text-yellow-300 px-4 py-2 rounded transition duration-300"
          >
            Add Friend
          </Link>
          <Link
            to="/friends"
            className="text-white hover:bg-blue-700 hover:text-yellow-300 px-4 py-2 rounded transition duration-300"
          >
            Friends List
          </Link>
          <Link
            to="/groups"
            className="text-white hover:bg-blue-700 hover:text-yellow-300 px-4 py-2 rounded transition duration-300"
          >
            Add Group
          </Link>
          <Link
            to="/grouplist"
            className="text-white hover:bg-blue-700 hover:text-yellow-300 px-4 py-2 rounded transition duration-300"
          >
            Group List
          </Link>
          <Link
            to="/expenses"
            className="text-white hover:bg-blue-700 hover:text-yellow-300 px-4 py-2 rounded transition duration-300"
          >
            Add Expense
          </Link>
          <Link
            to="/expense-list"
            className="text-white hover:bg-blue-700 hover:text-yellow-300 px-4 py-2 rounded transition duration-300"
          >
            Expense List
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
