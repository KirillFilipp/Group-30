import $ from 'jquery';
import {
  aleksandrovskaiy, buinickiy, dopkunas, markova, smolich,
} from './dataTimeline';

import './controlForTimeline';

$(document).ready(() => {
  $('#myTimeline').albeTimeline(aleksandrovskaiy);
});
// $(document).ready(() => {
//   $('#myTimeline').albeTimeline(buinickiy);
// });
// $(document).ready(() => {
//   $('#myTimeline').albeTimeline(dopkunas);
// });
// $(document).ready(() => {
//   $('#myTimeline').albeTimeline(markova);
// });
// $(document).ready(() => {
//   $('#myTimeline').albeTimeline(smolich);
// });

// $('.personality-aleksandrovskaiy').click(() => {
//   $('#myTimeline').albeTimeline(aleksandrovskaiy);
// });

// $('.personality-buinickiy').click(() => {
//   $('#myTimeline').albeTimeline(buinickiy);
// });
// $('.personality-dopkunas').click(() => {
//   $('#myTimeline').albeTimeline(dopkunas);
// });
// $('.personality-markova').click(() => {
//   $('#myTimeline').albeTimeline(markova);
// });
// $('.personality-smolich').click(() => {
//   $('#myTimeline').albeTimeline(smolich);
// });
