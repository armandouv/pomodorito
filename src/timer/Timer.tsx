import {Button, Box} from "@chakra-ui/react";
import * as React from "react";
import {useState} from "react";
import Display from "./Display";

const SECOND_IN_MILLISECONDS = 1000;

function Timer()
{
    const [isActive, setIsActive] = useState(false);
    //setInterval(() => setCurrentDate(new Date()), SECOND_IN_MILLISECONDS);
    const minutes = 15;

    return (
        <Box>
            <Display minutes={25} seconds={0} />
            <Button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Stop" : "Start"}
            </Button>
        </Box>
    )
}

export default Timer;
