import { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import CounterDisplay from '../components/CounterDisplay';

const WaterTrackerPage = () => {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('waterCount');
        return saved !== null ? parseInt(saved, 10) : 0;
    });

    const [goal, setGoal] = useState(() => {
        const saved = localStorage.getItem('waterGoal');
        return saved !== null ? parseInt(saved, 10) : 8;
    });

    const [healthTip, setHealthTip] = useState('');
    const [loadingTip, setLoadingTip] = useState(true);
    const [tipError, setTipError] = useState(null);
    const [unrelatedCounter, setUnrelatedCounter] = useState(0);

    useEffect(() => {
        localStorage.setItem('waterCount', count);
    }, [count]);

    useEffect(() => {
        localStorage.setItem('waterGoal', goal);
    }, [goal]);

    useEffect(() => {
        const fetchTip = async () => {
            try {
                setLoadingTip(true);
                const response = await fetch('https://api.adviceslip.com/advice');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setHealthTip(data.slip.advice);
            } catch (err) {
                setTipError('Could not load tip today.');
            } finally {
                setLoadingTip(false);
            }
        };
        fetchTip();
    }, []);

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount((prev) => Math.max(0, prev - 1));
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    const handleGoalChange = (e) => {
        const val = Number(e.target.value);
        setGoal(val > 0 ? val : 1);
    };

    return (
        <div>
            <Navbar />
            <div className="page-container">
                <h2 className="hero-title">Daily Water Tracker</h2>
                <p className="hero-subtitle">Stay hydrated and hit your daily goals.</p>

                <div className="health-tip">
                    <strong style={{ color: '#0369a1', display: 'block', marginBottom: '8px' }}>Today's Health Tip:</strong>
                    {loadingTip ? (
                        <span style={{ fontStyle: 'italic', color: '#64748b' }}>Loading tip...</span>
                    ) : tipError ? (
                        <span style={{ color: '#ef4444' }}>{tipError}</span>
                    ) : (
                        <span style={{ color: '#0f172a', fontWeight: '500', lineHeight: '1.5' }}>{healthTip}</span>
                    )}
                </div>

                <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <label style={{ fontWeight: '600', color: '#475569' }}>Daily Goal (glasses): </label>
                    <input
                        type="number"
                        className="goal-input"
                        value={goal}
                        onChange={handleGoalChange}
                        min="1"
                    />
                </div>

                <CounterDisplay
                    count={count}
                    goal={goal}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onReset={handleReset}
                />

                
                <div className="test-area">
                    <button
                        onClick={() => setUnrelatedCounter(c => c + 1)}
                        className="btn btn-warning"
                    >
                        Force Parent Re-render ({unrelatedCounter})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WaterTrackerPage;
