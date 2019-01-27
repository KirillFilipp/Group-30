import $ from 'jquery';

export default function choiceLanguage(language) {
  $('.translate').click(function () {
    const lang = $(this).attr('id');
    $('.lang').each(function (index, element) {
      $(this).text(language[lang][$(this).attr('key')]);
    });
  });
}
