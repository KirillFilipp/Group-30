import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heelo from './pages/home/script';
import heelo3 from './pages/search/script';
import addHeader from './components/header';
import addFooter from './components/footer';
import choiceLanguage from './components/translate';
import language from './components/vocabulary';

heelo();

heelo3();


addHeader();
addFooter();
choiceLanguage(language);
