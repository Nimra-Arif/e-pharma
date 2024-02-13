import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './screens/AdminDashboard';
import StaffDashboard from './screens/StaffDashboard';
import UserDashboard from './screens/UserDashboard';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import HomePage from './screens/HomePage';
import { AuthProvider } from '../src/context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/staffDashboard" element={<StaffDashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
