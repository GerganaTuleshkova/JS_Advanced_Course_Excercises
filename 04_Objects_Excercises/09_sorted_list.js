// option 1
// function createSortedList() {
//     const obj = new (function () {
//         this.list = [];
//         this.size = 0;
//         this.add = (element) => {

//             this.list.unshift(element);
//             this.list.sort((a, b) => a - b);
//             this.size++;
//             return this.list;
//         };
//         this.remove = (index) => {
//             if (index >= 0 && index < this.size) {
//                 this.list.splice(index, 1);
//                 this.size--;
//                 return this.list;
//             }

//         },
//             this.get = (index) => {
//                 if (index >= 0 && index < this.size) {
//                     return obj.list[index];
//                 }

//             };

//         this.getSize = () => {
//             return this.list.length
//         };


//     })()
//     return obj;
// }

// option 2
function createSortedList() {
    const obj = {
        list: [],
        size: 0,
        add(element) {
            obj.list.unshift(element);
            obj.list.sort((a, b) => a - b);
            obj.size++;
        },
        remove(index) {
            if (index >= 0 && index < obj.size) {
                obj.list.splice(index, 1);
                obj.size--;
            }
        },

        get(index) {
            if (index >= 0 && index < obj.size) {
                return obj.list[index];
            }
        },
    }
    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
list.add(7);
console.log(list.get(1));
console.log(list.size);


