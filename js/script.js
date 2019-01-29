var flkty = new Flickity( '.carousel', {
  // options
  hash: true,
});
var previousWrappedButton = document.querySelector('.button--next-wrapped');
previousWrappedButton.addEventListener('click', function () {
  flkty.next(true);
});