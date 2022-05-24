function sortBy2Criteria(array) {
    array.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);
    console.log(array.join('\n'));
}

sortBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']

)

sortBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)