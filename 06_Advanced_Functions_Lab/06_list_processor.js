function listProcessor(arrOfStrings) {
    let collection = [];

    let commands = {
        add: (string) => collection.push(string),
        remove: (string) => collection = collection.filter(element => element != string),
        print: () => console.log(collection.join(',')),
    };

    for (let data of arrOfStrings) {
        let [command, input] = data.split(' ');
        commands[command](input);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);