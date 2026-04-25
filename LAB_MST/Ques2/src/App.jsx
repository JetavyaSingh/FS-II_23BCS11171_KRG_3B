import React, { useState } from 'react';

const PatientForm = () => {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientName.trim() || !email.trim()) {
      alert("Please fill both the fields.");
      return;
    }

    console.log('Form Submitted: ', {
      patientName,
      email,
    });

    setPatientName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '1rem', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Patient Details</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="patientName" style={{ marginBottom: '0.5rem' }}>Patient Name:</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Enter patient name"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="email" style={{ marginBottom: '0.5rem' }}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Submit
      </button>
    </form>
  );
};

export default PatientForm;