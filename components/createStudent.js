import allHouses from '../utils/data/houses';
import { students } from '../utils/data/students';
import cardsOnDom from '../pages/cardsOnDom';

const form = document.querySelector('form');

// create  a student function
const createStudent = () => {
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector('#name').value,
    house: allHouses[Math.floor(Math.random() * allHouses.length)],
  };
  students.push(newStudentObj);
  students.sort((a, b) => a.name.localeCompare(b.name));
  cardsOnDom(students);
  form.reset();
};

export default createStudent;
