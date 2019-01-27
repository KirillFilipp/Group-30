import $ from 'jquery';

$(document).ready(() => {
  if (localStorage.getItem('lang') === 'en') {
    $('.buttons_en').click();
  }

  if (localStorage.getItem('lang') === 'ru') {
    $('.buttons_ru').click();
  }

  if (localStorage.getItem('lang') === 'by') {
    $('.buttons_by').click();
  }
});
