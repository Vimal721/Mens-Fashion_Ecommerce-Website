document.addEventListener('DOMContentLoaded', function () {
    var navHeight = 140; 
    
    var clothingButton = document.querySelector('.top-nav ul li:nth-child(2) a');
    var clothingSection = document.getElementById('clothing');

    var accessoriesButton = document.querySelector('.top-nav ul li:nth-child(3) a');
    var accessoriesSection = document.getElementById('accessories');

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
});
