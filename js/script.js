'use strict';
(function () {


var templateItem = document.getElementById('template-item').innerHTML;
Mustache.parse(templateItem);

var listItems = '';

for (var i = 0; i < slides.length; i++) {
  listItems += Mustache.render(templateItem, slides[i]);
}

  var fullSlidesList = Mustache.render(templateItem, { results: listItems });
  var finish = document.querySelector('.carousel');
  finish.insertAdjacentHTML('beforeend', fullSlidesList);
})();







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