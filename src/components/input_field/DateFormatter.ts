export let days = [
    { s: 'Sun', l: 'Sunday' },
    { s: 'Mon', l: "Monday" },
    { s: 'Tue', l: 'Tuesday' },
    { s: 'Wed', l: 'Wednesday' },
    { s: 'Thu', l: 'Thursday' },
    { s: 'Fri', l: 'Friday' },
    { s: 'Sat', l: 'Saturday' }
];

export let months = [
    { s: 'Jan', l: 'January' },
    { s: 'Feb', l: 'February' },
    { s: 'Mar', l: 'March' },
    { s: 'Apr', l: 'April' },
    { s: 'May', l: 'May' },
    { s: 'Jun', l: 'June' },
    { s: 'Jul', l: 'July' },
    { s: 'Aug', l: 'August' },
    { s: 'Sep', l: 'September' },
    { s: 'Oct', l: 'October' },
    { s: 'Nov', l: 'November' },
    { s: 'Dec', l: 'December' },
];



// Got from StackOverflow....
export function getOrdinal(day = 0) {
    let selector;
    if (day <= 0) selector = 4;
    else if ((day > 3 && day < 21) || day % 10 > 3) selector = 0;
    else selector = day % 10;
    return ['th', 'st', 'nd', 'rd', ''][selector];
};

// Gets the full or short name of the day or month or the nth day of the week
function getName(year: number, month: number, day: number, token: string) {
    let dayIndex = new Date(year, month, day).getDay()
    let monthIndex = new Date(year, month - 1, day).getMonth()
    return token === "MMMM" ? months[monthIndex].l :
        token === "MMM" ? months[monthIndex].s :
            token === "DDDD" ? days[dayIndex].l :
                token === "DDD" ? days[dayIndex].s : (dayIndex + 1).toString()
}

export function formatDate(year: number, month: number, day: number, pattern: string) {
    // these are the accepted tokens
    let formatTokens = ["dd", "d", "o", "O", "DDDD", "DDD", "DW", "mm", "m", "MMMM", "MMM", "yyyy", "yy"]

    formatTokens.forEach(t => {
        switch (t) {
            case "dd":  // replace with day of the month in 2-digits
                pattern = pattern.replace(/[dd]{2}/g, day < 10 ? `0${day}` : `${day}`)
                break;
            case "d":  // replace with day of the month in 1-digit
                pattern = pattern.replace(/[d]{1}/g, `${day}`)
                break;
            case "o": // replace with ordinal day of the month value
                pattern = pattern.replace(/[o]{1}/g, getOrdinal(day))
                break;
            case "DDDD": // replace with the full name of the day of the Week
                pattern = pattern.replace(/[DDDD]{4}/g, getName(year, month, day, "DDDD"))
                break;
            case "DDD": // replace with the short name of the day of the week
                pattern = pattern.replace(/[DDD]{3}/g, getName(year, month, day, "DDD"))
                break;
            case "DW": // replace with the nth day of the the Week
                pattern = pattern.replace(/[DW]{2}/g, getName(year, month, day, "DW"))
                break;
            case "mm": // replace with the month of the year in 2 digits
                pattern = pattern.replace(/[mm]{2}/g, month < 10 ? `0${month}` : `${month}`)
                break;
            case "m": // replace with the month of the year in 2 digits
                pattern = pattern.replace(/[m]{1}/g, `${month}`)
                break;
            case "MMMM": // replace with the full name of the month
                pattern = pattern.replace(/[MMMM]{4}/g, getName(year, month, day, "MMMM"))
                break;
            case "MMM": // replace with the short name of the month
                pattern = pattern.replace(/[MMM]{3}/g, getName(year, month, day, "MMM"))

            case "yyyy": // replace with the year in 4 digit
                pattern = pattern.replace(/[yyyy]{4}/g, `${year}`)
                break;
            case "yy": // replace with the yeaar in 2 digits
                pattern = pattern.replace(/[yy]{2}/g, `${year.toString().substring(2)}`)
                break;
            default:
        }
    })
    return pattern
}
