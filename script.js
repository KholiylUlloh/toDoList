window.addEventListener('DOMContentLoaded', function() {
const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    //basic validation
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please fill the input field')
    }else{
        const newRow = document.createElement('tr')
        //creating new title
        const newTitle = document.createElement('td')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        //creating new author
        const newAuth = document.createElement('td')
        newAuth.innerHTML = author.value
        newRow.appendChild(newAuth)

        //creating new year
        const newDate = document.createElement('td')
        newDate.innerHTML = year.value
        newRow.appendChild(newDate)

        //display in UI
        bookList.appendChild(newRow)
    }
});

});

