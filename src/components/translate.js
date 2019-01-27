import $ from 'jquery';

export default function choiceLanguage(language) {
  $('.translate').click(function () {
    const lang = $(this).attr('id');
    if (lang === 'en') {
      localStorage.setItem('lang', 'en');
    }
    if (lang === 'ru') {
      localStorage.setItem('lang', 'ru');
    }
    if (lang === 'by') {
      localStorage.setItem('lang', 'by');
    }
    $('.lang').each(function (index, element) {
      $(this).text(language[lang][$(this).attr('key')]);
    });
  });
}
