function database(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsList = []

    for (let ticketInfo of arr) {
        let [destination, price, ticketStatus] = ticketInfo.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, ticketStatus);
        ticketsList.push(ticket);
    }

    let sortedList = [];

    if (criteria == 'destination') {
        sortedList = ticketsList.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria == "price") {
        sortedList = ticketsList.sort((a, b) => a.price - b.price);
    } else if (criteria == 'status') {
        sortedList = ticketsList.sort((a, b) => a.status.localeCompare(b.status));
    }

    return sortedList;
}

console.log(database(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|6.20|departed'],
'price'
)[0]);
