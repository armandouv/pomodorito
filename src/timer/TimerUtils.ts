interface SplitTime
{
    hours: number;
    minutes: number;
    seconds: number;
}

function numberToNDigitString(n: number, toConvert: number): string
{
    return toConvert.toLocaleString('en-US', {minimumIntegerDigits: n, useGrouping:false});
}

export const convertToTwoDigitString = (toConvert: number): string => numberToNDigitString(2, toConvert);

export function getTimeString(date: Date): string
{
    const hours = date.getHours()
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${numberToNDigitString(hours, 2)} : ${numberToNDigitString(minutes, 2)} : ${numberToNDigitString(seconds, 2)}`
}

export function getDifference(firstDate: Date, secondDate: Date): SplitTime
{
    return {
        hours: secondDate.getHours() - firstDate.getHours(),
        minutes: secondDate.getMinutes() - firstDate.getMinutes(),
        seconds: secondDate.getSeconds() - firstDate.getSeconds()
    };
}
