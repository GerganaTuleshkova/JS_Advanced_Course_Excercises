function argumentInfo(...args) {
    let summary = {};
    args.forEach(arg => {
        printInfo(arg);
        collectInfo(arg);
    })

    function printInfo(arg) {
        console.log(`${typeof arg}: ${arg}`);
    }

    function collectInfo(arg) {
        if (!summary[(typeof arg)]) {
            summary[(typeof arg)] = 0;
        }

        summary[(typeof arg)] += 1
    }

    let sortable = []
    for (let type in summary) {
        sortable.push([type, summary[type]]);
    }
    sortable.sort((a, b) => b[1] - a[1]);
    sortable.forEach(t => console.log(`${t[0]} = ${t[1]}`));
}

argumentInfo({ name: 'bob' }, 3.333, 9.999);