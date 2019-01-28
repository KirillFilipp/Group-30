export default function overlay() {
  const BigPicture = require('bigpicture');
  document.getElementById('youtube-overlay').onclick = function () {
    BigPicture({
      el: this,
      ytSrc: this.getAttribute('ytSrc'),
    });
  };
}
