import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/saveLanguageContext';
import search from './pages/search/script';
import addHeader from './components/header';
import addFooter from './components/footer';
import choiceLanguage from './components/translate';
import language from './components/vocabulary';
import randomAuthor from './pages/home/script';

search();
addHeader();
addFooter();
choiceLanguage(language);
randomAuthor();
