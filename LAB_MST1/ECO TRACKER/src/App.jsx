import React from 'react';
import TaskManager from './components/TaskManager';
import VehicleLogs from './components/VehicleLogs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>EcoTrack Dashboard</h1>
      </header>
      <main className="dashboard-content">
        <section className="dashboard-section logs-section">
          <VehicleLogs />
        </section>
        <section className="dashboard-section tasks-section">
          <TaskManager />
        </section>
      </main>
    </div>
  );
}

export default App;
