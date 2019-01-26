import getMainPath from './getMainPath';

function getHeaderHtml() {
  const urlPath = getMainPath();
  return `
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
  <div class="container">
    <span class="navbar-brand">Режиссеры театра Беларуси</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="${urlPath}/index.html">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="${urlPath}/pages/search/index.html">Список деятелей</a>
        </li>        
      </ul>
    </div>
    <div class="buttons">
      <button class="buttons_ru translate" id='ru'>RU</button>
      <button class="buttons_en translate" id='en'>EN</button>
      <button class="buttons_by translate" id='by'>BY</button>
    </div>
  </div>
</nav>
`;
}

export default function addHeader() {
  const headerElement = document.createElement('header');
  headerElement.innerHTML = getHeaderHtml();
  const body = document.querySelector('body');
  body.insertBefore(headerElement, document.body.firstChild);
}
