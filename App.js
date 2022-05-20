import React from 'react'
import { AuthProvider } from './module/Auth/AuthContext';
import Navigation from './module/Navigation/Navigation'
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
