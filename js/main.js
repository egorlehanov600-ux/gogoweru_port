/* gogoweru — портфолио: мобильное меню + лайтбокс скриншотов */

(function () {
  // --- бургер-меню ---
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });

    // закрывать меню после клика по ссылке (мобильные)
    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }
})();

// --- лайтбокс ---
function openLightbox(figure) {
  var img = figure.querySelector('img');
  var box = document.getElementById('lightbox');
  var boxImg = document.getElementById('lightbox-img');
  if (!img || !box || !boxImg) return;
  boxImg.src = img.src;
  boxImg.alt = img.alt || '';
  box.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var box = document.getElementById('lightbox');
  if (!box) return;
  box.classList.remove('open');
  document.body.style.overflow = '';
}

// закрытие по Esc
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});
