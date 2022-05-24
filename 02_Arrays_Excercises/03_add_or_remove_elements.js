function addOrRemove(commands) {
    const result = [];
    let currentNumber = 1;
    for (let command of commands) {
        if (command === 'add') {
            result.push(currentNumber);
        } else {
            result.pop();
        }
        currentNumber++
    }

    if (result.length == 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'))
    }
}

addOrRemove(['add', 
'add', 
'add', 
'add']
)

addOrRemove(['add', 
'add', 
'remove', 
'add', 
'add']

)