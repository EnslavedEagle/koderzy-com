const $ = require('jquery');
const countdown = require('./js/countdown');

$(document).ready(() => {
  // Initialize countdown
  countdown();

  // Scroll to form on button click
  $('#goUpBtn').click((e) => {
    $('html, body').animate({
      scrollTop: $('#enroll').offset().top - 250
    }, 1000, () => {
      $('#enroll-name').focus();
    });
  });

  // Enroll Form
  require('./js/form')();
});