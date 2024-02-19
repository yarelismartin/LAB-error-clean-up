// You have to import your styles for them to work. Comment in this line
import '../styles/main.scss';
import events from '../components/events';

const startApp = () => {
  events(); // always load last
};

startApp();
