import React, { useState, useEffect } from 'react';
import './SpinTimer.css';

let startTime, prevTime;
let done = false;

function SpinTimer() {

    const [timer, setTimer] = useState(0);
    // const [startTime, setStartTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [animation, setAnimation] = useState(0);

    function timerAnimation(time) {
        if (startTime === undefined) {
            // setStartTime(time);
            startTime = time;
        }
        // console.log(startTime);
        const elapsed = time - startTime;

        if (prevTime !== time && !done) {
            const count = Math.min(elapsed, 5000);
            setTimer(count);
            if (count === 500) {
                done = true;
                startTime = undefined;
            }
        }

        if (elapsed < 500) {
            prevTime = time;
            if (!done) {
                window.requestAnimationFrame(timerAnimation);
            }
        }
    }

    useEffect(() => {

        if (isActive) {
            window.requestAnimationFrame(timerAnimation)
        }
        if (!isActive) {
            setTimer(0);
            startTime = undefined;
            done = false;
        }

    }, [timer, isActive]);


    const handleClick = () => {
        setIsActive(isActive => !isActive);
        // setAnimation(animation => !animation);
        setAnimation(animation => {
            if (animation === 1) {
                return 0;
            } else return 1;
        });
    }


    return (
        <div className='SpinTimer container'>
            <div className='outer'
                timerCircle={animation}>
                <div className='inner'
                    onClick={handleClick}>
                    <h2>Time: {Number(timer / 1000).toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
}

export default SpinTimer;