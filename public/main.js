// You have to import your styles for them to work. Comment in this line
import '../styles/main.scss';
// import houses from '../utils/data/houses';
// import { students, voldysArmy } from '../utils/data/students';
// import renderToDOM from '../utils/renderToDom';
// import form from '../pages/form';
// import header from '../pages/header';
// import htmlStructure from '../pages/htmlStructure';
// import createStudent from '../pages/startSortingBtn';
// import studentAreas from '../pages/studentAreas';
// import studentsOnDom from '../pages/studentsOnDom';
// import filterBtnRow from '../pages/filterBtnRow';
import events from '../components/events';
// import { createId, sortStudent } from '../components/createId';

// const startApp = () => {
//   htmlStructure(); // always load first
//   header();
//   // startSortingBtn();
//   events(); // always load last
// };

// startApp();

const startApp = () => {
  events(); // always load last
};

startApp();
