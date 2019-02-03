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


window.initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 3, center: { lat: -37.858, lng: 144.966 } });

  for (let i = 0; i < slides.length; i++) {
    var marker = new google.maps.Marker({ position: slides[i].coords, map: map });
    
    marker.addListener('click', function () {
      flkty.select(i);
    });
    flkty.on('change', function (i) {
      map.panTo(slides[i].coords);
      map.setZoom(5);
    });
  }

}

