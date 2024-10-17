class Book {
    id: number;
    title: string;
    author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

class Member {
    id: number;
    name: string;
    borrowedBooks: Book[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book: Book) {
        this.borrowedBooks.push(book);
    }

    returnBook(bookId: number) {
        this.borrowedBooks = this.borrowedBooks.filter(book => book.id !== bookId);
    }
}

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    registerMember(member: Member) {
        this.members.push(member);
    }
}

// Example Usage
const library = new Library();
const book1 = new Book(1, "1984", "George Orwell");
const member1 = new Member(1, "John Doe");

library.addBook(book1);
library.registerMember(member1);
member1.borrowBook(book1);
console.log(member1.borrowedBooks);
