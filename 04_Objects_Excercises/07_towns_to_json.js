function toJson(arrOfStrings) {
    const table = [];

    let regex = /\s*\|\s*/g;
    let titleLine = arrOfStrings.shift();
    titleLine = titleLine.replace(regex, ',').slice(1, titleLine.length - 1)
    let [title1, title2, title3] = titleLine.split(',');

    for (let element of arrOfStrings) {
        element = element.replace(regex, ',').slice(1, element.length - 1)
        let [name, latitute, longitude] = element.split(',');
        latitute = Math.round(Number(latitute) * 100) / 100;
        longitude = Math.round(Number(longitude) * 100) / 100;
        table.push(
            {
                [title1]: name,
                [title2]: latitute,
                [title3]: longitude,
            }
        )
    }

    let result = JSON.stringify(table);
    console.log(result);
}

toJson([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']

);