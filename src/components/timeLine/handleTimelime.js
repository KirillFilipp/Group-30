import $ from 'jquery';

$(document).ready(($) => {
  const $timelineBlock = $('.cd-timeline-block');

  // hide timeline blocks which are outside the viewport
  $timelineBlock.each(function () {
    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
      $(this)
        .find('.cd-timeline-img, .cd-timeline-content')
        .addClass('is-hidden');
    }
  });

  // on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', () => {
    $timelineBlock.each(function () {
      if (
        $(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75
        && $(this)
          .find('.cd-timeline-img')
          .hasClass('is-hidden')
      ) {
        $(this)
          .find('.cd-timeline-img, .cd-timeline-content')
          .removeClass('is-hidden')
          .addClass('bounce-in');
      }
    });
  });
});
