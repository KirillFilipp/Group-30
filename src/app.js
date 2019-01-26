import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heelo from './pages/home/script';
import heelo3 from './pages/search/script';
import header from './components/header';
import footer from './components/footer';
import language from './components/vocabulary';
import choiceLanguage from './components/translate';


heelo();
choiceLanguage(language);
heelo3();
