// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI constructor
function UI() {}

// add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
          row.innerHTML = `<td>${book.title}</td>
                           <td>${book.author}</td>
                           <td>${book.isbn}</td>
                           <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
}

// create error alert
UI.prototype.showAlert = function(message, className) {
    // create div
    const div = document.createElement('div');
          //add class
          div.className = `alert ${className}`;
          // add text node
          div.appendChild(document.createTextNode(message));

    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
          // insert alert
          container.insertBefore(div, form);

    // timeout after 3 seconds
    setTimeout(function() {
        // remove needs to have the () after it
        document.querySelector('.alert').remove();
    }, 3000);
}

//delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// event listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e) {

    // get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // instantiate a new book
    const book = new Book(title, author, isbn);

    //instantiate a UI object
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === ''){
        // error alert 
        ui.showAlert('Please fill out all fields', 'error');
    } else {
        // add book to list
        ui.addBookToList(book);

        // show success
        ui.showAlert('Book Added!', 'success');

        // clear fields 
        ui.clearFields();
    }
    e.preventDefault();
});

// event listener for delete book
document.getElementById('book-list').addEventListener('click', function(e) {
    //instantiate a UI object
    const ui = new UI();

    // delete book
    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book removed', 'success');

    e.preventDefault;
});