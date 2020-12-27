let list = document.querySelector('#book-list ul');
// let titles =document.getElementsByClassName('title');

list.addEventListener('click', (e)=>{
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    }
})

const addForm = document.forms['add-book']

addForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const value= addForm.querySelector('input[type="text"]').value;


// create elements
    const li= document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

// append to dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

// filter books
const searchBar =document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e)=> {
    let result = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    // console.log(books)

    // Important books nu este array initial => Array.from() !!
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(result) != -1){
            book.style.display ='block'
        } else {
            book.style.display ='none';
        }
    })
    result = '';
})