// create book obj 
class bookObj{
    constructor(author, title, isbn) {
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }
}

// book list ui 
class ui{
    // adding book to the list 
    static addToBookList(book) {
        let tr = document.createElement('tr');
        let bookDetails = `<td>${book.author}</td>
        <td>${book.title}</td>
        <td>${book.isbn}</td>
        <td><a href='#'>x</a></td>`;
        tr.innerHTML=bookDetails;
        bookList.appendChild(tr);
        // console.log(tr);
    }
    // clear form 
    static clearFields() {
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
    }
    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.getElementById('bookForm');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    
    static deleteFromBookList(obj) {
        if (obj.hasAttribute('href')) {
            ui.showAlert('Book Removed', 'removed');
            let par = obj.parentElement.parentElement;
            store.removeBook(obj.parentElement.previousElementSibling.textContent.trim());
            par.remove();   
        }
    }
}

// local storage object 
class store{
    static getBooks() {
        let books;
        if (localStorage.getItem('books')===null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    
    static addBooks(book) {
        let books = store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static showBooks() {
        let books = store.getBooks();
        books.forEach((book) => {
            ui.addToBookList(book);
        })
    }

    static removeBook(isbn) {
        let books = store.getBooks();
        books.forEach((book,index) => {
            if (book.isbn == isbn) {
                books.splice(index, 1);
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// let bookForm = document.getElementById('bookForm');
let bookForm = document.getElementById('bookForm');
let bookList = document.getElementById('bookList');
document.addEventListener('DOMContentLoaded', store.showBooks());

// event listener 
bookForm.addEventListener('submit', loadData);
bookList.addEventListener('click', removeBook);

// function declaration 
function loadData(e) {
    let author = document.getElementById('author').value,
        title = document.getElementById('title').value,
        isbn = document.getElementById('isbn').value;
    if (author === '' || title === '' || isbn === '') {
        ui.showAlert("Please Insert Data In All Fields","error");
    }
    else {
        let book = new bookObj(author, title, isbn);
        ui.addToBookList(book);
        store.addBooks(book);
        ui.clearFields();
        ui.showAlert("Book is Added to the list", 'success');
    }
    e.preventDefault();
}

// remove book from list function
function removeBook(e) {
    ui.deleteFromBookList(e.target);
    e.preventDefault();
}



