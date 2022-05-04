import React from 'react'
import { AuthProvider } from './module/auth/AuthContext';
import Navigation from './module/navigation/Navigation'
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
