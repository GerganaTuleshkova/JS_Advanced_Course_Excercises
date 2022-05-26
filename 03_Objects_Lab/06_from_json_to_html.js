function fromJSONToHTMLTable(json) {

    let arr = JSON.parse(json);

    console.log(arr);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    console.log(outputArr);

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let result = '<tr>';
        for (let key of Object.keys(arr[0])) {
            result += `<th>${key}</th>`;
        }
        result += '</tr>';
        return result;
    }
    function makeValueRow(obj) {
        let result = '<tr>';

        for (let value of Object.values(obj)) {
            result += `<td>${value}</td>`;
        }


        result += '</tr>';
        return result;

    };
    // function escapeHtml(value) { };
    // print the result
    console.log(outputArr.join('\n'));
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);