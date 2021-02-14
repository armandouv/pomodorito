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
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(Date.now() + props.intervalInMinutes * MINUTE_IN_MILLISECONDS));

    useEffect(() => {
        if (props.isActive)
        {
            const intervalId = window.setInterval(() => setStartDate(new Date()))
            return () => {
                window.clearInterval(intervalId)
            };
        }
    });

    return (
        <Display date={new Date(endDate.getTime() - startDate.getTime())}/>
    );
}

export default Countdown;
