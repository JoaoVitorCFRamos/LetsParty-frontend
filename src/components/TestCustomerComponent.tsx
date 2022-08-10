import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const TestCustomerComponent = () => {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  
  return(
    <>
      <h1>Hello Customer</h1>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
}

export default TestCustomerComponent;