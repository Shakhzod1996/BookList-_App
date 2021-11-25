window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Basic Validation
        if (title.value == '' && author.value == '' && year.value == '') {
            alert('Please enter Your Information')
        } else {
            const newRow = document.createElement('tr');

            // Create new title
            const newTitle = document.createElement('td');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle)

            // Create new author
            const newAuthor = document.createElement('td');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor)

            // Create new author
            const newYear = document.createElement('td');
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear)

            bookList.appendChild(newRow);

            title.value = '' 
            author.value = '' 
            year.value = '' 
        }
    })

})




