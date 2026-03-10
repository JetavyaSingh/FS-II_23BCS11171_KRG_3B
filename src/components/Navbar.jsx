import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { isDarkMode, toggleTheme } = useTheme();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-color)' }}>
                💧 EcoTrack
            </div>
            <div className="nav-links">
                <button
                    onClick={toggleTheme}
                    className="btn btn-secondary btn-icon"
                    style={{ width: '36px', height: '36px', fontSize: '18px', marginRight: '8px' }}
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/dashboard/water" className="nav-link">Water Tracker</Link>
                <button onClick={handleLogout} className="btn btn-danger" style={{ padding: '6px 16px', fontSize: '14px' }}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
