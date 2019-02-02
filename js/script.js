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
var previousWrappedButton = document.querySelector('.button--next-wrapped');
previousWrappedButton.addEventListener('click', function () {
  flkty.next(true);
});
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});


window.initMap = function () {
  var uluru = { lat: -25.344, lng: 131.036 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: uluru });
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

initMap();