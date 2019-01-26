import $ from 'jquery';

export default function heelo2() {
  console.log('hello2');

  const Lang = {
    en: {
      firstName: 'first',
      lastName: 'last',
      patronymic: 'patr',
      desc: 'Description',
      'title-search': 'The Directors of the theatre of Belarus',
      'title-search-form': 'Search',
      'first-director': 'Aleksandrovskaya Larisa Pompeevna',
      'second-director': 'Buynitsky Ignat Terentyevich',
      'third-director': 'Dopkyunas Vadim Vyacheslavovich',
      'fourth-director': 'Markova Irina Vasilyevna',
      'fifth-director': 'Smolich Dmitry Nikolaevich',
      'first-director-born': 'b.p. с. Minsk',
      'second-director-born': 'b.p. h. Polivach',
      'third-director-born': 'b.p. с. Anadyr',
      'fourth-director-born': 'b.p. с. Minsk',
      'fifth-director-born': 'b.p. с. St. Petersburg',
    },
    ru: {
      firstName: 'имя',
      lastName: 'фамилия',
      patronymic: 'отчество',
      desc: 'Описание',
      'title-search': 'Режиссеры театра Беларуси',
      'title-search-form': 'Поиск',
      'first-director': 'Александровская Лариса Помпеевна',
      'second-director': 'Буйницкий Игнат Терентьевич',
      'third-director': 'Допкюнас Вадим Вячеславович',
      'fourth-director': 'Маркова Ирина Васильевна',
      'fifth-director': 'Смолич Дмитрий Николаевич',
      'first-director-born': 'м.р. г. Минск',
      'second-director-born': 'м.р. у. Поливачи',
      'third-director-born': 'м.р. г. Анадырь',
      'fourth-director-born': 'м.р. г. Минск',
      'fifth-director-born': 'м.р. г. Санкт-Петербург',
    },
    by: {
      firstName: 'імя',
      lastName: 'прозвішча',
      patronymic: 'імя па бацьку',
      desc: 'Апісанне',
      'title-search': 'Рэжысёры тэатра Беларусі',
      'title-search-form': 'Поиск',
      'first-director': 'Александроўская Ларыса Пампееўна',
      'second-director': 'Буйніцкі Ігнат Цярэнцьевіч',
      'third-director': 'Допкюнас Вадзім Вячаслававіч',
      'fourth-director': 'Маркава Ірына Васільеўна',
      'fifth-director': 'Дзмітрый Мікалаевіч Смоліч',
      'first-director-born': 'м.н. г. Менск',
      'second-director-born': 'м.н. ф. Палівачы',
      'third-director-born': 'м.н. г. Анадыр',
      'fourth-director-born': 'м.н. г. Менск',
      'fifth-director-born': 'м.н. Санкт-Пецярбург',
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
