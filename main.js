const burgerIcon = document.getElementById('burger-icon');
const burgerMenu = document.getElementById('nav-links');

burgerIcon.addEventListener('click',()=>{
    burgerMenu.classList.toggle('active');
})