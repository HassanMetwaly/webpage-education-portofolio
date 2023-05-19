const nav = document.querySelector('header');
const section = document.getElementById('landing');

const scroly = () => {
    nav.style.boxShadow = '0 0 10px #ddd';
}

const scroll = (sec) => {
    sec.style.cssText = "animation:im-3 2s linear forwards"; 
}

scroll(nav)
scroll(section)

window.onscroll = function () {
    if (scrollY >= 50) {
        scroly();
    } else {
        nav.style.boxShadow = '0 0 0';
    }
}

// Coded By Hassan Metwaly