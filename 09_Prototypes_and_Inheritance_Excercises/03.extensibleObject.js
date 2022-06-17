function extensibleObject() {
    let proto = {};
    let inst = Object.create(proto);

    inst.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                inst[key] = value;
            }
        });
    }

    return inst;
};


const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log(myObj.extensionProperty)
