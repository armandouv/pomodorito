import {Box} from "@chakra-ui/react";
import * as React from "react";
import {useState} from "react";

const SECOND_IN_MILLISECONDS = 1000;

function Clock()
{
    const [currentDate, setCurrentDate] = useState(new Date());
    setInterval(() => setCurrentDate(new Date()), SECOND_IN_MILLISECONDS);
    return (
        <Box>
            {`${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`}
        </Box>
    );
}

export default Clock;
