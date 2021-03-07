const API = "https://jsonplaceholder.typicode.com/photos";

async function getResponse(){

    let response = await fetch(API);
    let content = await response.json();
    content = content.splice(0, 5);
   console.log(content)
    let Photos =  document.querySelector('.projects__track');
    let item;
    for(item in content){
      Photos.innerHTML +=
    
      `
      <div class="projects__item">
      <div class="projects__arena">
          <img class="w-100" src="${content[item].url}" alt="Arena">
          <h3 class="projects__name">${content[item].title}</h3>
          <p class="projects__discription">
              Мы сделали самую красивую арену в Европе.
              Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия.
              Мы очень рады данному еву.
          </p>
      </div>
  </div>
      `}
};
getResponse();