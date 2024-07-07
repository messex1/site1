// pages/client-dashboard.js
import React from 'react';
import RequestedDocuments from './components/RequestedDocuments';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/ProtectedRoute';

const ClientDashboard = () => {
  return (
    <ProtectedRoute>
      <div>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <RequestedDocuments />
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default ClientDashboard;
