function extract(content) {
    const text = document.getElementById(content).textContent;
    let result = ''

    const pattern = /\((.+?)\)/g;
    let matches = pattern.exec(text);

    while (matches != null) {
        result += matches[1] + "; ";
        matches = pattern.exec(text);
    }
    return result;
}