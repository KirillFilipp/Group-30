export default function randomAuthor() {
  const author = document.getElementById('random-author');
  const image = [
    '../src/pages/person/images/larisa-pompeevna.jpg',
    '../src/pages/person/images/Vadzim_Dapkiunas.jpg',
    '../src/pages/person/images/Ihnat_Bujnicki.jpg',
    '../src/pages/person/images/Markova_Irina.jpg',
    '../src/pages/person/images/Smolych_Dmitriy.jpg',
  ];
  const name = [
    'Александровская Лариса Помпеевна',
    'Допкюнас Вадим Вячеславович',
    'Буйницкий Игнат Терентьевич',
    'Маркова Ирина Васильевна',
    'Смолич Дмитрий Николаевич',
  ];
  const linkDirectors = [
    '../src/pages/person/aleksandrovskaya.html',
    '../src/pages/person/dopkunas.html',
    '../src/pages/person/byinickiy.html',
    '../src/pages/person/markova.html',
    '../src/pages/person/smolitch.html',
  ];
  if (author) {
    const a = Math.floor(Math.random() * image.length);
    author.innerHTML = `<img id="photo-author" src=${image[a]} alt=${name[a]}><figcaption><a id="name-author" href=${linkDirectors[a]} target="_blank">${name[a]}</a></figcaption>`;
  }
}
