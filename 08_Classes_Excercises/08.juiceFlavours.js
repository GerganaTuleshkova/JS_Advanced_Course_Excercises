function makeJuices(arr) {
    let juices = new Map();
    let obj = {}

    for (let info of arr) {
        let [kind, quantity] = info.split(' => ');
        quantity = Number(quantity)
        if (!obj[kind]) {
            obj[kind] = 0;
        }

        obj[kind] += quantity

        if (obj[kind] > 1000) {
            if (!juices.has(kind)) {
                juices.set(kind, 0);
            }
            let newQty = juices.get(kind) + Math.floor(obj[kind] / 1000)
            juices.set(kind, newQty);
            obj[kind] %= 1000;
        }
    }
    
    for (let [key, value] of juices) {
         console.log(`${key} => ${value}`);
    }
}

(makeJuices(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
))
