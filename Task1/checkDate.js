function checkDate(timestamp) {
    const date = new Date(timestamp * 1000);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();

    const currentDate = new Date();
    
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    let isSame = false;
    if (
        (day === currentDay) &
        (year === currentYear) &
        (month === currentMonth)
    ) {
        isSame = true;
    }
    return {
        isSameDate: isSame,
        dayPeriod: hour > 11 ? "pm" : "am",
    };
}

console.log(checkDate(1649415563));
