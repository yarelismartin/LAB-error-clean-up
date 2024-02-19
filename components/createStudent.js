import allHouses from '../utils/data/houses';
import { students } from '../utils/data/students';
import cardsOnDom from '../pages/cardsOnDom';

// const createId = (array) => {
//   if (array.length) {
//     const idArray = array.map((el) => el.id);
//     return Math.max(...idArray) + 1;
//   }
//   return 0;
// };

// sorts student to a house and then place them in the students array
// const sortStudent = (e) => {
//   e.preventDefault();
//   const sortingHat = houses[Math.floor(Math.random() * houses.length)];

//   if (e.target.id === 'sorting') {
//     const student = document.querySelector('#student-name');

//     // create the new student object
//     students.push({
//       id: createId(students),
//       name: student.value,
//       house: sortingHat.house,
//       crest: sortingHat.crest
//     });

//     student.value = ''; // reset value of input
//     studentsOnDom('#students', students);
//   }
// };

// create  a student function

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
