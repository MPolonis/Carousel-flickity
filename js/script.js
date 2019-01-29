var flkty = new Flickity( '.carousel', {
  // options
  hash: true,
});
var previousWrappedButton = document.querySelector('.button--next-wrapped');
previousWrappedButton.addEventListener('click', function () {
  flkty.next(true);
});
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});