import { useState, useRef } from 'react';
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - timeRemaining) - 10;
        }, 10)
    }

    function handelStop(){
        clearInterval(timer.current)
        // setTimerStarted(false)
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
        <section className="challenge">
            <h2>{title}</h2>
            <p className='challenge-time'>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
            <p>
                <button onClick={timerStarted ? handelStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'}  Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Timer is running...' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}
