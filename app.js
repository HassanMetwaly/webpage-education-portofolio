const nav = document.querySelector('nav');

const scrol = () => {
    nav.style.boxShadow = '0 0 1.8px #111'
}

window.onscroll = function () {
    if (scrollY > 50) {
        scrol()
    } else {
        nav.style.boxShadow = '0 0 0'
    }
}
