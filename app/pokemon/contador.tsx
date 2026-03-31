import { useState } from 'react';
'use client';
export default function ContadorPage() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '20px' }}>
            <h1>Contador</h1>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{count}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={decrement} style={{ padding: '10px 20px', fontSize: '18px' }}>
                    -
                </button>
                <button onClick={reset} style={{ padding: '10px 20px', fontSize: '18px' }}>
                    Reset
                </button>
                <button onClick={increment} style={{ padding: '10px 20px', fontSize: '18px' }}>
                    +
                </button>
            </div>
        </div>
    );
}