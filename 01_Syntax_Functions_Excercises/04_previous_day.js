function previousDay(year, month, day) {
    let givenDate = new Date(year, month - 1, day);
    givenDate.setDate(givenDate.getDate() - 1);

    let previousDateDay = givenDate.getDate();
    let previousDateMonth = givenDate.getMonth() + 1;
    let previousDateYear = givenDate.getFullYear();

    console.log(`${previousDateYear}-${previousDateMonth}-${previousDateDay}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
previousDay(2016, 1, 1);


