//navbar cambio color
if (windowScroll >= headerHeight) {
  $('nav').addClass('barranav-scrolled');
} else {
  $('nav').removeClass('barranav-scrolled');
}
;
//efecto sonido
const estilodiv1servicios = document.getElementById("estilodiv1servicios");
const miAudio = estilodiv1servicios.querySelector("audio");

window.addEventListener("scroll", function() {
  const rect = estilodiv1servicios.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0) {
    miAudio.play();
  }
});