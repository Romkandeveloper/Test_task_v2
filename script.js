$(function(){
    $('.slider').slick({
        //set-slider
    });
});


//Native JS
const tabsLinks = document.querySelectorAll('.tabs__links input');
const tabsItems = document.querySelectorAll('.tabs__item');
tabsLinks.forEach(element => {
    element.addEventListener('change', function(){
        tabsItems.forEach(item => item.classList.remove('tabs__item-active'));
        let data = element.getAttribute('data-tab');
        document.getElementById(data).classList.add('tabs__item-active');
    });
}); 