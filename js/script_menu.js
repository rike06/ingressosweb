const btnMobile = document.getElementById('bnt-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.proventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded' , active);
    if (active) {
        event.currentTarget.setAttribute('aria-Iabel', 'fechar menu');
    } else{
        event.currentTarget.setAttribute('aria-Iabel')
    }
}