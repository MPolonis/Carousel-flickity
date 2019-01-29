var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  // options
  hash: true,
});
var previousWrappedButton = document.querySelector('.button--next-wrapped');
previousWrappedButton.addEventListener('click', function () {
  flkty.next(true);
});