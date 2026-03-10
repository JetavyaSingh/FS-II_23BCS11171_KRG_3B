import React, { useRef } from 'react';

const CounterDisplay = ({ count, goal, onIncrement, onDecrement, onReset }) => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    const isGoalReached = count >= goal;

    return (
        <div className="card">
            <div className={`water-bottle ${isGoalReached ? 'filling' : ''}`}>
                💧
            </div>
            <div className="progress-text">
                {count} <span style={{ color: '#64748b', fontSize: '20px' }}>/ {goal}</span>
            </div>
            <div style={{ color: '#64748b', fontWeight: '600', marginBottom: '16px' }}>glasses completed</div>

            {isGoalReached && (
                <div className="goal-reached">🎉 Daily Goal Reached!</div>
            )}

            <div className="controls-container">
                <button
                    className="btn btn-secondary btn-icon"
                    onClick={onDecrement}
                    disabled={count <= 0}
                    title="Remove water"
                >
                    -
                </button>
                <button
                    className="btn btn-primary btn-icon"
                    onClick={onIncrement}
                    title="Add water"
                >
                    +
                </button>
            </div>

            <div style={{ marginTop: '24px' }}>
                <button
                    className="btn btn-danger"
                    onClick={onReset}
                >
                    Reset Count
                </button>
            </div>

            <div className="render-badge">
                Component Renders: {renderCount.current}
            </div>
        </div>
    );
};

const MemoizedCounterDisplay = React.memo(CounterDisplay);
MemoizedCounterDisplay.displayName = 'CounterDisplay';

export default MemoizedCounterDisplay;
