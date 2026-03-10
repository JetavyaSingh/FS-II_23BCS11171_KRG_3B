import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', 'fake-jwt-token');
        navigate('/dashboard');
    };

    return (
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '48px 32px' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>💧</div>
                <h1 className="hero-title" style={{ fontSize: '2rem' }}>EcoTrack</h1>
                <p className="hero-subtitle">Sign in to track your wellness</p>

                <button
                    onClick={handleLogin}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '24px', padding: '12px' }}
                >
                    Fake Log In
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
