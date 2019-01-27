import $ from 'jquery';

$(document).ready(() => {
  $('.item').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });
});
