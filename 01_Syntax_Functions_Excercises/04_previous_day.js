function previousDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let previousObj = new Date(today.getTime());
    previousObj.setDate(today.getDate() - 1);

    let previousDateDay = previousObj.getUTCDate() + 1;
    let previousDateMonth = previousObj.getUTCMonth() + 1;
    let previousDateYear = previousObj.getUTCFullYear();

    console.log(`${previousDateYear}-${previousDateMonth}-${previousDateDay}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
previousDay(2016, 1, 1);


