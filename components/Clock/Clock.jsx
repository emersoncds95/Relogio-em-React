import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());
    const seconds = formatNumber(time.getSeconds());

    return (
        <div className="telaRelogio">
            <div className="relogio">
                <p>
                    <span className='hora'>{hours}</span>:
                    <span className='minuto'>{minutes}</span>:
                    <span className='segundo'>{seconds}</span>
                </p>
            </div>
        </div>
    );
}

export default Clock;