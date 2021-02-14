import React from "react";
import {Box} from "@chakra-ui/react";
import {convertToTwoDigitString} from "./TimerUtils";


function Display(props: { date: Date })
{
    const minutes = convertToTwoDigitString(props.date.getMinutes());
    const seconds = convertToTwoDigitString(props.date.getSeconds());

    return (
        <Box>
            {`${minutes}:${seconds}`}
        </Box>
    );
}

export default Display;
