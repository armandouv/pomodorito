import {Button, Box} from "@chakra-ui/react";
import * as React from "react";
import {useEffect, useState} from "react";
import Countdown from "./Countdown";

const SECOND_IN_MILLISECONDS = 1000;
const MINUTE_IN_MILLISECONDS = SECOND_IN_MILLISECONDS * 60;


function Timer()
{
    //setInterval(() => setCurrentDate(new Date()), SECOND_IN_MILLISECONDS);
    const MINUTES = 15;
    const [isActive, setIsActive] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(Date.now() + MINUTES * MINUTE_IN_MILLISECONDS));
    let intervalId: number;

    function toggleTimer(): void
    {
        if (!isActive) intervalId = window.setInterval(() => setStartDate(new Date()), 500);
        else window.clearInterval(intervalId);
        setStartDate(new Date());
        setEndDate(new Date(Date.now() + MINUTES * MINUTE_IN_MILLISECONDS));
        setIsActive(!isActive);
    }

    return (
        <Box>
            <Countdown isActive={isActive} intervalInMinutes={MINUTES}/>
            <Button onClick={toggleTimer}>
                {isActive ? "Stop" : "Start"}
            </Button>
        </Box>
    )
}

export default Timer;
