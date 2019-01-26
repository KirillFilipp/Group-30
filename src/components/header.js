const header = `
<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Режиссеры театра Беларуси</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Главная</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Список деятелей</a>
        </li>        
      </ul>
    </div>
  </div>
</nav>
`;

export default function addHeader() {
  const headerElement = document.createElement('header');
  headerElement.innerHTML = header;
  const body = document.querySelector('body');
  body.insertBefore(headerElement, document.body.firstChild);
}
