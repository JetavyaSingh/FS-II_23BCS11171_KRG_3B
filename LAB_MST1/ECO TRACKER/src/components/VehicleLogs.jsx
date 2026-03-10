import React, { useState } from 'react';
import { vehicleLogs } from '../logs';

const VehicleLogs = () => {
    const [filter, setFilter] = useState('all'); 

    const getFilteredLogs = () => {
        if (filter === 'high') return vehicleLogs.filter(log => log.emission > 4);
        if (filter === 'low') return vehicleLogs.filter(log => log.emission <= 4);
        return vehicleLogs;
    };

    const filteredLogs = getFilteredLogs();

    return (
        <div className="vehicle-logs">
            <h2>Vehicle Carbon Emission Logs</h2>
            <div className="filter-buttons">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All Logs
                </button>
                <button
                    className={filter === 'high' ? 'active' : ''}
                    onClick={() => setFilter('high')}
                >
                    High Emission ({'>'}4)
                </button>
                <button
                    className={filter === 'low' ? 'active' : ''}
                    onClick={() => setFilter('low')}
                >
                    Low Emission ({'<='}4)
                </button>
            </div>
            <div className="logs-list">
                <table>
                    <thead>
                        <tr>
                            <th>Vehicle Type</th>
                            <th>Carbon Emission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLogs.map(log => (
                            <tr key={log.id}>
                                <td>{log.type}</td>
                                <td className={log.emission > 4 ? 'high-emission' : 'low-emission'}>
                                    {log.emission}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VehicleLogs;
