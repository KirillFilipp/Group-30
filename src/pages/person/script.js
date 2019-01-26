import $ from 'jquery';

export default function heelo2() {
  console.log('hello2');

  const Lang = {
    en: {
      firstName: 'first',
      lastName: 'last',
      patronymic: 'patr',
      desc: 'Description',
    },
    ru: {
      firstName: 'имя',
      lastName: 'фамилия',
      patronymic: 'отчество',
      desc: 'Описание',
    },
    by: {
      firstName: 'імя',
      lastName: 'прозвішча',
      patronymic: 'імя па бацьку',
      desc: 'Апісанне',
    },
  };
  $(() => {
    $('.translate').click(function () {
      const lang = $(this).attr('id');
      $('.lang').each(function (index, element) {
        $(this).text(Lang[lang][$(this).attr('key')]);
      });
    });
  });
}
