const nav = document.querySelector('header');

const scrol = () => {
    nav.style.boxShadow = '0 0 10px #ddd'
}

window.onscroll = function () {
    if (scrollY > 50) {
        scrol()
    } else {
        nav.style.boxShadow = '0 0 0'
    }
}
