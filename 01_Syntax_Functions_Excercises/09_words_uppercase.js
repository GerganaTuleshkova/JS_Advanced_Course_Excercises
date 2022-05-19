function toUppercase(string) {
    let result = string.toUpperCase();
    const regex = /(\w+)/g;
    let found = result.match(regex);
    console.log(found.join(', '));
}

toUppercase('Hi, how are you?');