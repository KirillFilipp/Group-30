import BigPicture from 'bigpicture';

export default function overlay() {
  document.getElementById('youtube-overlay').onclick = function () {
    BigPicture({
      el: this,
      ytSrc: this.getAttribute('ytSrc'),
    });
  };
}
