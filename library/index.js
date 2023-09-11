// Sample book data
const books = [
    { id: 1, title: "Book 1", author: "Author 1", available: true },
    { id: 2, title: "Book 2", author: "Author 2", available: true },
    { id: 3, title: "Book 3", author: "Author 3", available: false },
];

// Function to display books in the HTML
function displayBooks() {
    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${book.title}</strong> by ${book.author}
            <button onclick="borrowBook(${book.id})" ${book.available ? '' : 'disabled'}>Borrow</button>
        `;
        bookList.appendChild(li);
    });
}

// Function to borrow a book
function borrowBook(bookId) {
    const book = books.find(book => book.id === bookId);
    if (book) {
        book.available = false;
        displayBooks();
    }
}

// Display the initial list of books
displayBooks();
