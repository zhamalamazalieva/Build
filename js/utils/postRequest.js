let form =  document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('email')




fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'name',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



});