const dropUp = document.querySelectorAll('.drop__up');
const dropDown = document.querySelectorAll('.drop__down');

dropUp.forEach(onDropUpClick);


function onDropUpClick(item){
    item.addEventListener('click', function(){
        let currentDropUp =  item;
        let dropId = currentDropUp.getAttribute('data-drop');
        let currentDropDown = document.querySelector(dropId);

        if(!currentDropUp.classList.contains('drop__up--active')){
        dropUp.forEach(currentDropUp => {
            currentDropUp.classList.remove('drop__up--active')
        })
        dropDown.forEach(currentDropDown=> {
            currentDropDown.classList.remove('drop__down--active')
        })
        currentDropUp.classList.add('drop__up--active');
        currentDropDown.classList.add('drop__down--active');

        ;}
    })
}


//По умолчанию первый заголовок дропдауна активный, вы не написали класс актив в HTML 
document.querySelector('drop__up--active').click();