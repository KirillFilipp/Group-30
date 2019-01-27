import $ from 'jquery';

export default function search() {
  $('.page-search form').submit((e) => {
    e.preventDefault();
    const valueInput = new RegExp($('#search-term').val().toLowerCase());
    const nameDirector = [...document.querySelectorAll('.name-director')];
    const arrName = nameDirector.map((name, index) => {
      nameDirector[index].parentNode.style.display = 'block';
      return name.textContent.toLowerCase();
    });

    const bornDirector = [...document.querySelectorAll('.born-director')];
    const arrCity = bornDirector.map(city => city.textContent.toLowerCase());

    arrName.forEach((name, index) => {
      if (!name.match(valueInput) && !arrCity[index].match(valueInput)) {
        nameDirector[index].parentNode.style.display = 'none';
      }
    });
  });
}
