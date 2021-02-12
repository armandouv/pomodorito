import { Box } from "@chakra-ui/react";
import React from "react";
import {convertToTwoDigitString} from "./TimerUtils";

interface TimeSplit
{
    minutes: number,
    seconds: number
}

function Display(props: TimeSplit)
{
    return (
        <Box>
            {`${convertToTwoDigitString(props.minutes)}:${convertToTwoDigitString(props.seconds)}`}
        </Box>
    );
}

export default Display;
