
/* Display login script */
function dispalyLogin() {
    document.querySelector('.popup-position2').style.zIndex = '5';
    document.querySelector('.loginform').style.display = 'flex';
}
document.querySelector('.login-close').addEventListener('click', function(){
    document.querySelector('.loginform').style.display = 'none';
    document.querySelector('.popup-position2').style.zIndex = '-5';
});
document.querySelector('.lgbtn').addEventListener('click', function(){
    document.querySelector('.loginform').style.display = 'none';
    document.querySelector('.popup-position2').style.zIndex = '-5';
});

/* Slider buttons script*/
function scrollLeft() {
    var left = document.querySelector(".slider-card-container");
    left.scrollBy(315, 0);
}
document.getElementById("nextbtn").addEventListener("click", scrollLeft);

function scrollright() {
    var right = document.querySelector(".slider-card-container");
    right.scrollBy(-315, 0);
}
document.getElementById("prevbtn").addEventListener("click", scrollright);

/* Popup script*/   
function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if (scrollValue > 50) {
        navbar.classList.add('active-nav');
    } else {
        navbar.classList.remove('active-nav');
    }
}
window.addEventListener('scroll', changeBg);

function dispalyDt() {
    document.querySelector('.popup-position').style.zIndex = '3';
    document.querySelector('.bg-dishdetails').style.display = 'flex';
}
document.querySelector('.close-card').addEventListener('click', function(){
    document.querySelector('.bg-dishdetails').style.display = 'none';
    document.querySelector('.popup-position').style.zIndex = '-3';
});

function message() {
    alert('Hi all, Learning in progress will add more features in future. So, now just close the popup and view the website.For the better experience, view it in the laptop or PC');
}