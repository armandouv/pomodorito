import React, {useEffect, useState} from "react";
import Display from "./Display";

interface CountdownProps
{
    isActive: boolean;
    intervalInMinutes: number;
}

const MINUTE_IN_MILLISECONDS = 1000 * 60;

function Countdown(props: CountdownProps)
{
    const [startDateMs, setStartDateMs] = useState(performance.now());
    const [endDateMs, setEndDateMs] = useState(startDateMs + props.intervalInMinutes * MINUTE_IN_MILLISECONDS);

    useEffect(() => {
        const minutesInMs = props.intervalInMinutes * MINUTE_IN_MILLISECONDS;
        const start = performance.now();
        setStartDateMs(start);
        setEndDateMs(start + minutesInMs);

    }, [props.intervalInMinutes, props.isActive]);

    useEffect(() => {
        if (!props.isActive) return;
        const handler = () => setStartDateMs(performance.now());
        const intervalId = window.setInterval(handler, 50);
        return () => window.clearInterval(intervalId);
    }, [props.isActive]);


    return (
        <Display date={new Date(endDateMs - startDateMs)}/>
    );
}

export default Countdown;
