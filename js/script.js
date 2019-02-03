var flkty = new Flickity( '.carousel', {
  // options
  hash: true,
});
var restartButton = document.querySelector('.button-restart');
restartButton.addEventListener('click', function () {
  flkty.select(0);
});
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});