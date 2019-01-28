export default function randomAuthor() {
  const author = document.getElementById('random-author');
  if (author) {
    const image = [
      '../src/pages/person/images/larisa-pompeevna.jpg',
      '../src/pages/person/images/Vadzim_Dapkiunas.jpg',
      '../src/pages/person/images/Ihnat_Bujnicki.jpg',
      '../src/pages/person/images/markova-irina.jpg',
      '../src/pages/person/images/smolych_Dmitriy.jpg',
    ];
    const name = [
      'first-director',
      'third-director',
      'second-director',
      'fourth-director',
      'fifth-director',
    ];
    const linkDirectors = [
      '../src/pages/person/aleksandrovskaya.html',
      '../src/pages/person/dopkunas.html',
      '../src/pages/person/byinickiy.html',
      '../src/pages/person/markova.html',
      '../src/pages/person/smolitch.html',
    ];
    const a = Math.floor(Math.random() * image.length);
    author.innerHTML = `<img id="photo-author" src=${image[a]} alt='key=${name[a]}'><figcaption><a id="name-author" class="lang" key=${name[a]} href=${linkDirectors[a]} target="_blank"></a></figcaption>`;
  }
}
