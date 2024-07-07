// components/RequestedDocuments.js
import React from 'react';

const RequestedDocuments = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Requested Documents</h2>
      <div className="mb-4">
        <span className="mr-4">Resume</span>
        <button className="text-blue-500">Upload</button>
        <span className="ml-4 text-green-500">Complete</span>
      </div>
      <div className="mb-4">
        <span className="mr-4">Passport</span>
        <button className="text-blue-500">Upload</button>
        <span className="ml-4 text-green-500">Complete</span>
      </div>
      <div className="mb-4">
        <span className="mr-4">Family Information</span>
        <button className="text-blue-500">Upload</button>
        <span className="ml-4 text-red-500">Incomplete</span>
      </div>
      <p className="mt-6 text-gray-700">
        Add IMM signed forms here
      </p>
      <p className="text-gray-700">
        Customized to visa type
      </p>
      <p className="mt-6 text-gray-700">
        Disclaimer: All documents must be completed and uploaded within 60 days of receiving a login.
      </p>
      <button className="mt-6 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
};

export default RequestedDocuments;
