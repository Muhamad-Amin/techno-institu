const nav = document.querySelectorAll("nav")[0];

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        nav.classList.replace('bg-transparent', 'bg-dark')
    } else if (window.scrollY <= 0) {
        nav.classList.replace('bg-dark', 'bg-transparent')
    }
});

// Staff Start
const tombolSemua = $('#tombolSemua');
const tombolEngginer = $('#tombolEngginer');
const tombolUIUX = $('#tombolUIUX');

const semuaTimTampil = $('#semuaTim');
const engginerTampil = $('#engginer');
const uiuxTampil = $('#uiux');

engginerTampil.hide();
uiuxTampil.hide();
tombolSemua.addClass('active');

function tampilkanSemuaTim() {
    tombolSemua.addClass('active');
    tombolEngginer.removeClass('active');
    tombolUIUX.removeClass('active');

    engginerTampil.hide(1000);
    uiuxTampil.hide(1000);
    semuaTimTampil.show(1000);
}

function tampilkanEngginer() {
    tombolSemua.removeClass('active');
    tombolEngginer.addClass('active');
    tombolUIUX.removeClass('active');

    engginerTampil.show(1000);
    uiuxTampil.hide(1000);
    semuaTimTampil.hide(1000);
}

function tampilkanUIUX() {
    tombolSemua.removeClass('active');
    tombolEngginer.removeClass('active');
    tombolUIUX.addClass('active');

    engginerTampil.hide(1000);
    uiuxTampil.show(1000);
    semuaTimTampil.hide(1000);
}

tombolSemua.addEventListener('click', () => {
    tampilkanSemuaTim();
});

tombolEngginer.addEventListener('click', () => {
    tampilkanEngginer();
});

tombolUIUX.addEventListener('click', () => {
    tampilkanUIUX();
});

// Staff End