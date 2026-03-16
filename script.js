const menuOpenButton = document.querySelector('#menu-open-button');

menuOpenButton.addEventListener('click', () => {
    //Toggle mobile menu visibilty
    document.body.classList.toggle("show-mobile-menu");
});