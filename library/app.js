var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    Member.prototype.borrowBook = function (book) {
        this.borrowedBooks.push(book);
    };
    Member.prototype.returnBook = function (bookId) {
        this.borrowedBooks = this.borrowedBooks.filter(function (book) { return book.id !== bookId; });
    };
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.registerMember = function (member) {
        this.members.push(member);
    };
    return Library;
}());
// Example Usage
var library = new Library();
var book1 = new Book(1, "1984", "George Orwell");
var member1 = new Member(1, "John Doe");
library.addBook(book1);
library.registerMember(member1);
member1.borrowBook(book1);
console.log(member1.borrowedBooks);
