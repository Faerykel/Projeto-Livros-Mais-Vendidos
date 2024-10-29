async function fetchBooks() {
    const response = await fetch('books.json');
    const books = await response.json();
    displayBooks(books);
    console.log(response);   
}

function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Limpa a lista antes de adicionar

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Ano de Lançamento:</strong> ${book.year}</p>
            <p><strong>Cópias Vendidas:</strong> ${book.copies_sold.toLocaleString()}</p>
        `;

        bookList.appendChild(bookDiv);
    });
}

fetchBooks();