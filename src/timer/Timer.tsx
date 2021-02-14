import {Box, Button} from "@chakra-ui/react";
import * as React from "react";
import {useState} from "react";
import Countdown from "./Countdown";

function Timer()
{
    const MINUTES = 15;
    const [isActive, setIsActive] = useState(false);

    return (
        <Box>
            <Countdown isActive={isActive} intervalInMinutes={MINUTES}/>
            <Button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Stop" : "Start"}
            </Button>
        </Box>
    )
}

export default Timer;
