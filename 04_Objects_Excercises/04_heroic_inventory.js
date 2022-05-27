function makeInvemtory(arrOfStrings) {
    const inventory = [];

    for (let string of arrOfStrings) {
        let [name, level, items] = string.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        const heroObj = {
            name,
            level,
            items,
        }

        inventory.push(heroObj);
    }

    return JSON.stringify(inventory);
}

console.log(makeInvemtory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));