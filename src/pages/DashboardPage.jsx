import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="page-container">
                <div className="card" style={{ padding: '48px', maxWidth: '600px' }}>
                    <h1 className="hero-title">Welcome to EcoTrack</h1>
                    <p className="hero-subtitle" style={{ marginBottom: '32px' }}>Your journey to better wellness starts here.</p>

                    <div style={{ padding: '24px', backgroundColor: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd', textAlign: 'center' }}>
                        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🌊</div>
                        <h3 style={{ margin: '0 0 8px 0', color: '#0369a1' }}>Hydration Status</h3>
                        <p style={{ color: '#475569', margin: '0 0 24px 0' }}>Track your daily water intake and hit your goals consistently.</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/dashboard/water')}
                        >
                            Open Water Tracker
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
