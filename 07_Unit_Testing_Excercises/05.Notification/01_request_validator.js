function validateRequest(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let { method, uri, version, message } = obj;

    function isValidMethod(method) {
        if (!validMethods.includes(method) || method == undefined) {
            throw new Error('Invalid Method');
        }
    }

    function isValidURI(uri) {
        let regex = /^(\.?[a-zA-Z0-9]+(\.*[a-zA-Z0-9]+)*)+$/g;
        if (!regex.test(uri) && uri != '*' || uri == undefined) {
            throw new Error('Invalid URI');
        }
    }

    function isValidVersion(version) {
        if (!validVersions.includes(version) || version == undefined) {
            throw new Error('Invalid Version');
        }
    }

    function isValidMessage(message) {
        let regex = /^[^<>\\&'"]*$/g;
        if (!regex.test(message) || message == undefined) {
            throw new Error('Invalid Message');
        }
    }

    try {
        isValidMethod(method);
        isValidURI(uri);
        isValidVersion(version);
        isValidMessage(message);

    } catch (err) {
        throw new Error('Invalid request header: ' + err.message);
    }

    return obj;
}

console.log(validateRequest(
    {
        method: 'GET',
        uri: '*',
        version: 'HTTP/1.1',
        message: ''
    }



));