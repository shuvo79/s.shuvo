/* MIXIT UP */ 
var mixer = mixitup('.grid-portfolio');

//Hamburger Menu

function openMenu() {
    document.getElementById('hb-menu').style.width = "100%";
}
function closeMenu() {
    document.getElementById('hb-menu').style.width = "0%";
}

//Smooth Scroll

$('.hb-menu-item li a, .scroll-down a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});

// WOW

wow = new WOW(
    {
    mobile:       false      // default
  }
  )
  wow.init();