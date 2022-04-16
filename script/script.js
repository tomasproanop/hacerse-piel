// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=80) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


// $(document).ready(function(){
//     $(window).scroll(function(){
//         $('.photo').css("opacity", 1- $(window).scrollTop() / 700)
//     })
// })

