import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/timeLine/styleForTimeline.css';
import './components/gallery/styleForGallery.css'; 
import './components/saveLanguageContext';
import heelo from './pages/home/script';
import search from './pages/search/script';
import addHeader from './components/header';
import addFooter from './components/footer';
import choiceLanguage from './components/translate';
import language from './components/vocabulary';
import './components/timeLine/handleTimelime';
import './components/gallery/gallery';
import './components/gallery/magnific-popup.min';

heelo();

search();

addHeader();
addFooter();
choiceLanguage(language);
