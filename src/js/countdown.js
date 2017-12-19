const $ = require('jquery');
require('./lib/jquery.countdown.min.js');

module.exports = () => {
  $countdown = $('#countdown');
  $countdown.countdown('2018/03/24', (event) => {
    $countdown.html(
      event.strftime('<div class="countdown">'
          + '<div class="countdown__item">'
            + '<span class="countdown__item__value">%D</span>'
            + '<span class="countdown__item__desc">dni</span>'
          + '</div>'
          + '<div class="countdown__item">'
            + '<span class="countdown__item__value">%H</span>'
            + '<span class="countdown__item__desc">h</span>'
          + '</div>'
          + '<div class="countdown__item">'
            + '<span class="countdown__item__value">%M</span>'
            + '<span class="countdown__item__desc">min</span>'
          + '</div>'
          + '<div class="countdown__item">'
            + '<span class="countdown__item__value">%S</span>'
            + '<span class="countdown__item__desc">s</span>'
          + '</div>'
        + '</div>'
      )
    )
  });
};