import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const TestCompanyComponent = () => {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  
  return(
    <>
      <h1>Hello Company</h1>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
}

export default TestCompanyComponent;