class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity == this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        let bookObj = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(bookObj);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let existingBook = this.books.find(b => b.bookName == bookName);

        if (existingBook == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (existingBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        existingBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let existingBook = this.books.find(b => b.bookName == bookName);

        if (existingBook == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!existingBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        const index = this.books.indexOf(existingBook);
        if (index !== -1) {
            this.books.splice(index, 1);
        }

        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor) {
        let result = [];

        if (bookAuthor == undefined) {
            result.push(`The book collection has ${ this.capacity - this.books.length } empty spots left.`);
            let sortedBooks = this.books.sort((a, b) => (a.bookName).localeCompare(b.bookName));
            for (let b of sortedBooks) {
                result.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed == true? 'Has Paid' : 'Not Paid'}.`);
            }
            return result.join('\n');
        }

        let existingBook = this.books.find(b => b.bookAuthor == bookAuthor);
        if (existingBook == undefined) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return `${existingBook.bookName} == ${existingBook.bookAuthor} - ${existingBook.payed == true? 'Has Paid' : 'Not Paid'}.`
    }
}



const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
console.log(library.getStatistics('James'));
