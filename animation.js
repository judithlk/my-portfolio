//light mode colors
var bgLight = "white";
var linkLight = "#712B75";
var labelBgLight = "#87556F";
var headersLight = "black";
var standardTextLight = "rgb(68, 67, 67)";
var subheadLight = "#C74B50";
var headerSmallLight = "rgb(68, 67, 67)";

//dark mode colors
// var bgDark = "#46244C";
// var bgDark = "#59405C";
var bgDark = "#322F3D";
var linkDark = "#C74B50";
var labelBgDark = "grey";
var headersDark = "#87556F";
var standardTextDark = "lightgray";
var subheadDark = "#87556F";
var labelHoverDark = "#D49B54";
var headerSmallDark = "#D49B54";

$(document).ready(function() {
    var typed = new Typed('.typed-text', {
        stringsElement: '.typed-strings',
        typeSpeed: 50
    });
    const bright = localStorage.getItem("state");
    if(bright == "dark") {
        darkMode();
        document.getElementById('moon-icon').style.display = 'none';
        document.getElementById('sun-icon').style.display = 'block';
    } else {
        lightMode();
        document.getElementById('sun-icon').style.display = 'none';
        document.getElementById('moon-icon').style.display = 'block';
    };

    $('.brightness-icon').click(function() {
        if(document.getElementById('moon-icon').style.display == 'block') {
            document.getElementById('moon-icon').style.display = 'none';
            document.getElementById('sun-icon').style.display = 'block';
            darkMode();
            localStorage.setItem("state", "dark");
        } else if(document.getElementById('moon-icon').style.display == 'none') {
            document.getElementById('sun-icon').style.display = 'none';
            document.getElementById('moon-icon').style.display = 'block';
            lightMode();
            localStorage.setItem("state", "light");
        }
        return;
    })

    function darkMode() {
        document.body.style.backgroundColor = bgDark;
        $('.inner-link').css("color", linkDark);
        $('.label').css("background-color", labelBgDark);
        $('h1').css("color", headersDark);
        $('h2').css("color", headersDark);
        $('.standard-text').css("color", standardTextDark);
        $('.sub-head').css("color", subheadDark);
        $('.label').hover(function() {
                $(this).css("background-color", labelHoverDark)
            },
            function(){
                $(this).css("background-color", labelBgDark);
        });
        $('.header-small-text').css("color", headerSmallDark);
    }

    function lightMode() {
        document.body.style.backgroundColor = bgLight;
        $('.inner-link').css("color", linkLight);
        $('.label').css("background-color", labelBgLight);
        $('h1').css("color", headersLight);
        $('h2').css("color", headersLight);
        $('.standard-text').css("color", standardTextLight);
        $('.sub-head').css("color", subheadLight);
        $('.header-small-text').css("color", headerSmallLight);
    };

});



  