import getMainPath from './getMainPath';

function getFooterHtml() {
  const imagesPath = getMainPath();
  return `
  <div class="container">
    <p class="project-authors text-center">Авторы проекта</p>
    <div class="row">
      <div class="col-lg-2 col-md-4 col-sm-6 project-author">
        <figure>
          <img class="img-project-author" src="${imagesPath}/imagesComponents/kirillfilipp.jpeg" alt="kirillfilipp">
          <figcaption>GitHub: <a href="https://github.com/kirillfilipp" target="_blank">kirillfilipp</a></figcaption>
        </figure>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 project-author">
        <figure>
          <img class="img-project-author" src="${imagesPath}/imagesComponents/mozgoen.jpeg" alt="mozgoen">
          <figcaption>GitHub: <a href="https://github.com/mozgoen" target="_blank">mozgoen</a></figcaption>
        </figure>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 project-author">
        <figure>
          <img class="img-project-author" src="${imagesPath}/imagesComponents/kozyritskiy.jpeg" alt="kozyritskiy">
          <figcaption>GitHub: <a href="https://github.com/kozyritskiy" target="_blank">kozyritskiy</a></figcaption>
        </figure>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 project-author">
        <figure>
          <img class="img-project-author" src="${imagesPath}/imagesComponents/kulinar310.jpeg" alt="kulinar310">
          <figcaption>GitHub: <a href="https://github.com/kulinar310" target="_blank">kulinar310</a></figcaption>
        </figure>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 project-author">
        <figure>
          <img class="img-project-author" src="${imagesPath}/imagesComponents/estel1591.jpeg" alt="estel1591">
          <figcaption>GitHub: <a href="https://github.com/estel1591" target="_blank">estel1591</a></figcaption>
        </figure>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-6 project-author">
        <figure>
          <img class="img-project-author" src="${imagesPath}/imagesComponents/niksrakevich.jpeg" alt="niksrakevich">
          <figcaption>GitHub: <a href="https://github.com/niksrakevich" target="_blank">niksrakevich</a></figcaption>
        </figure>
      </div>
    </div>
  </div>
`;
}

export default function addFooter() {
  const footerElement = document.createElement('footer');
  footerElement.innerHTML = getFooterHtml();
  const body = document.querySelector('body');
  body.appendChild(footerElement);
}
