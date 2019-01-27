import jQuery from 'jquery';

(function ($) {  
  $.fn.albeTimeline = function (json, options) {
    const _this = this;
    _this.html('');

    // Mescla opções do usuário com o padrão
    const settings = $.extend({}, $.fn.albeTimeline.defaults, options);

    const idioma = $.fn.albeTimeline.languages.hasOwnProperty(settings.language)
      ? $.fn.albeTimeline.languages[settings.language]
      : {
        // pt-BR
        days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        months: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь',
        ],
        shortMonths: [
          'Янв',
          'Фев',
          'Мар',
          'Апр',
          'Май',
          'Июнь',
          'Июль',
          'Авг',
          'Сен',
          'Окт',
          'Нов',
          'Дек',
        ],
        separator: 'de',
        msgEmptyContent: 'Sem informações a serem exibidas.',
      };

    // Se for passado 'string', convert para 'object'.
    if (typeof json === 'string') {
      json = $.parseJSON(json);
    }

    // Exibe mensagem padão
    if ($.isEmptyObject(json)) {
      console.warn(idioma.msgEmptyContent);
      return;
    }

    // Ordena pela data
    json = json.sort((a, b) => (settings.sortDesc
      ? Date.parse(b.time) - Date.parse(a.time)
      : Date.parse(a.time) - Date.parse(b.time)));

    const eMenu = $('<ul>').attr('id', 'timeline-menu');
    const eTimeline = $('<section>').attr('id', 'timeline');

    $.each(json, (index, element) => {
      const ano = new Date(element.time).getFullYear();
      let agrupador = $(eTimeline).find(`div.group${ano}`);

      // Se o agrupador não existe, cria.
      if (agrupador.length === 0) {
        agrupador = $('<div>')
          .attr('id', `y${ano}`)
          .addClass(`group${ano}`)
          .text(ano);

        $(eTimeline).append(agrupador);

        const anchor = $('<a>')
          .attr('href', `#y${ano}`)
          .text(ano);
        eMenu.append($('<li>').append(anchor));
      }

      /** **************************************SLOT <article>*************************************** */
      const badge = $('<div>').addClass('badge');
      badge.text(fnDateFormat(element.time, settings.formatDate, idioma));

      const ePanel = $('<div>')
        .addClass('panel')
        .append(badge);

      if (element.header) {
        const ePanelHead = $('<div>').addClass('panel-heading');
        const ePaneltitle = $('<h4>')
          .addClass('panel-title')
          .text(element.header);

        ePanelHead.append(ePaneltitle);
        ePanel.append(ePanelHead);
      }

      const ePanelBody = $('<div>').addClass('panel-body');
      $.each(element.body, (index2, value2) => {
        // Elemento HTML
        const e = $(`<${value2.tag}>`);

        // Atributos do elemento
        $(value2.attr).each(function () {
          $.each(this, (index3, value3) => {
            // Atributo especial, defido o 'class' ser palavra reservada no javascript.
            index3.toLowerCase() === 'cssclass' ? e.addClass(value3) : e.attr(index3, value3);
          });
        });

        // Conteúdo do elemento
        if (value2.content) e.html(value2.content);

        ePanelBody.append(e);
      });

      ePanel.append(ePanelBody);

      if (element.footer) {
        const ePanelFooter = $('<div>')
          .addClass('panel-footer')
          .html(element.footer);
        ePanel.append(ePanelFooter);
      }

      // Adiciona o item ao respectivo agrupador.
      const irmaos = agrupador.siblings(`article[id^="a${ano}"]`);
      const slot = $(`<article id="a${ano}-${irmaos.length + 1}">`).append(ePanel);

      if (irmaos.length > 0) slot.insertAfter(irmaos.last());
      else slot.insertAfter(agrupador);
      /** **************************************FIM - SLOT <article> *************************************** */
    });

    // Marcador inicial da Timeline
    const badge = $('<div>')
      .addClass('badge')
      .html('&nbsp;');
    const ePanel = $('<div>')
      .addClass('panel')
      .append(badge);
    eTimeline.append($('<article>').append(ePanel));
    eTimeline.append(
      $('<div>')
        .addClass('clearfix')
        .css({ float: 'none' }),
    );

    $.each(eTimeline.find('article'), function (index, value) {
      // Adiciona classe css responsável por inverter o lado do item.
      $(this).addClass(index % 2 == 0 ? '' : 'inverted');
      // Adiciona classe de animação.
      if (settings.effect && settings.effect != 'none') {
        $(this).addClass(`animated ${settings.effect}`);
      }
    });

    // A exibição do menu depende da definição de visibilidade do agrupador.
    if (settings.showGroup) {
      if (settings.showMenu) {
        eMenu.appendTo(_this);
      }
    } else {
      $.each(eTimeline.find('div[class*="group"]'), function (index, value) {
        $(this).css('display', 'none');
      });
    }

    eTimeline.appendTo(_this);
    // return this;
  };

  $.fn.albeTimeline.languages = {};
  $.fn.albeTimeline.defaults = {
    effect: 'fadeInUp',
    formatDate: 'dd MMM',
    language: 'pt-BR',
    showGroup: true,
    showMenu: true,
    sortDesc: true,
  };

  // value = "YYYY-MM-DD" (ISO 8601)
  // format =
  // .:"dd MMMM"
  // .:"dd/MM/yyyy"
  // .:"dd de MMMM de yyyy"
  // .:"DD, dd de MMMM de yyyy"
  // .:"MM/dd/yyyy"

  // Thank you Amit Gupta, https://github.com/amitguptagwl
  var fnDateFormat = function (value, format, language) {
    const parts = value.split('-');
    const newDate = new Date(parts[0], parts[1] - 1, parts[2]);

    if (language.separator) {
      format = format.replace(new RegExp(language.separator, 'g'), '___');
    }

    format = format.replace('ss', padLeft(newDate.getSeconds(), 2));
    format = format.replace('s', newDate.getSeconds());
    format = format.replace('dd', padLeft(newDate.getDate(), 2));
    format = format.replace('d', newDate.getDate());
    format = format.replace('mm', padLeft(newDate.getMinutes(), 2));
    format = format.replace('m', newDate.getMinutes());
    format = format.replace('MMMM', language.months[newDate.getMonth()]);
    format = format.replace('MMM', language.months[newDate.getMonth()].substring(0, 3));
    format = format.replace('MM', padLeft(newDate.getMonth() + 1, 2));
    format = format.replace('DD', language.days[newDate.getDay()]);
    format = format.replace('yyyy', newDate.getFullYear());
    format = format.replace('YYYY', newDate.getFullYear());
    format = format.replace('yy', `${newDate.getFullYear()}`.substring(2));
    format = format.replace('YY', `${newDate.getFullYear()}`.substring(2));
    format = format.replace('HH', padLeft(newDate.getHours(), 2));
    format = format.replace('H', newDate.getHours());

    if (language.separator) {
      format = format.replace(new RegExp('___', 'g'), language.separator);
    }

    return format;
  };

  var padLeft = function (n, width, z) {
    z = z || '0';
    n += '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  };
}(jQuery));
