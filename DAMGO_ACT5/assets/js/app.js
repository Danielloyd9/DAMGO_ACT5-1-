

window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

// AOS
AOS.init({
    duration: 800,
});

var typed = new Typed(".typing-1",{
    strings: [
        "Singer", "Dancer","Developer",
        "Designer", "Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

