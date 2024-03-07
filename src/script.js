document.addEventListener('DOMContentLoaded', function () {
    var navHeight = 140; 
    
    var clothingButton = document.querySelector('.top-nav ul li:nth-child(2) a');
    var clothingSection = document.getElementById('clothing');

    var accessoriesButton = document.querySelector('.top-nav ul li:nth-child(3) a');
    var accessoriesSection = document.getElementById('accessories');

    var footerButton = document.querySelector('.top-nav ul li:nth-child(4) a');
    var footerSection = document.getElementById('footer');

    clothingButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        var sectionTop = clothingSection.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });

    accessoriesButton.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionTop = accessoriesSection.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });

    footerButton.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionTop = footerSection.offsetTop - navHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });
});
