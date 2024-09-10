import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddFriend from './components/AddFriend';
import AddGroup from './components/AddGroup';
import AddExpense from './components/AddExpense';
import FriendList from './components/FriendList';
import GroupList from './components/GroupList';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/add-friend" element={<AddFriend />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/groups" element={<AddGroup />} />
          <Route path="/grouplist" element={<GroupList />} />
          <Route path="/expenses" element={<AddExpense />} />
          <Route path="/expense-list" element={<ExpenseList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
