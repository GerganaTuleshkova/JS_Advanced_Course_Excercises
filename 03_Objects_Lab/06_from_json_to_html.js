
function fromJSONToHTMLTable(json) {

    let arr = JSON.parse(json);

    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let result = '<tr>';
        for (let key of Object.keys(arr[0])) {
            result += `<th>${escapeHTML(key)}</th>`;
        }
        result += '</tr>';
        return result;
    }
    function makeValueRow(obj) {
        let result = '<tr>';

        for (let value of Object.values(obj)) {
            result += `<td>${escapeHTML(value)}</td>`;
        }


        result += '</tr>';
        return result;

    };

    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }



    // print the result
    console.log(outputArr.join('\n'));
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);