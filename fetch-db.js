


/* created by obline student .ie*/


// Option 1 START
const fe = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => {
   return res.json()
})
.then(data => {
    data.forEach((user) => {
        const userName =
         ` <li>  ${user.id} - ${user.title} </li>`
        const ul = document.querySelector('ul')
        ul.insertAdjacentHTML('beforeend', userName);
    });
})
.catch(error => console.log(error))
console.log(fe)
// Option 1 END



/*
// Option 2 START
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const users = await response.json();

    const userList = document.querySelector('ul');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = ` ${user.id} - ${user.title}`;
        userList.appendChild(listItem);
    });
});
// Option 2 END
*/





