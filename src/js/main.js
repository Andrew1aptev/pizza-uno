const header = document.querySelector(".header");

function headerScroll () {
    const coords = window.pageYOffset; // получаем число пикселей на которое пролистали документ в данный момент
    if(coords === 0){
        header.classList.remove("header-scroll") //удаляем класс header-scroll
    }else{
        header.classList.add("header-scroll") //добавляем класс header-scroll
    }
    console.log(coords); // выводим координаты в консоль
}
//вешаем слушатель и при скролее вызываем функцию headerScroll
window.addEventListener("scroll", headerScroll)