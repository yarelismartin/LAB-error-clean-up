import formOnDom from '../pages/form';
import btnsOnDom from '../pages/btnsOnDom';
// import studentAreas from '../pages/studentAreas';
import { students, expelledStudents } from '../utils/data/students';
import cardsOnDom from '../pages/cardsOnDom';
import createStudent from './createStudent';
import expelCardsOnDom from '../pages/expelCardsOnDom';

// Add events for form after the form is on the DOM
// const events = () => {
//   // get form on the DOM on button click
//   document.querySelector('#start-sorting').addEventListener('click', () => {
//     // put html elements on the DOM on click
//     form(); // form
//     filterBtnRow(); // filter buttons
//     studentAreas(); // students and voldy's army divs
//   });

//   // target expel buttons to move to voldys army
//   document
//     .querySelector('#student-container')
//     .addEventListener('click', (e) => {
//       if (e.target.id.includes('expel')) {
//         const [, id] = e.target.id.split('--');
//         const index = students.findIndex((student) => student.id === Number(id));

//         // move from one array to another
//         voldysArmy.push(...students.splice(index, 1));
//         // get both sets of students on the DOM
//         studentsOnDom('#students', students);
//         studentsOnDom('#voldy', voldysArmy);
//       }
//     });

//   // target filter buttons on Dom
//   document.querySelector('#filter-container').addEventListener('click', (e) => {
//     if (e.target.id.includes('filter')) {
//       const [, house] = e.target.id.split('--');

//       if (house === 'all') {
//         studentsOnDom('#students', students);
//       } else if (house) {
//         const filter = students.filter((student) => student.house === house);
//         studentsOnDom('#students', filter, house);
//       }
//     }
//   });
// };

const events = () => {
  // eventListener for the form btn by using click and submit
  document.querySelector('#sortingBtn').addEventListener('click', formOnDom);

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createStudent();
    btnsOnDom();
    document.querySelector('#displayStudentsBorder').hidden = false;
    document.querySelector('#displayExpelledBorder').hidden = false;
  });

  // Expel a student
  const displayStudent = document.querySelector('#displayStudents');

  displayStudent.addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');

      // Finding the Index of the Clicked Student in the students Array
      const index = students.findIndex((student) => student.id === Number(id));
      // Removing the Found Student from the students Array:
      const expelledStudent = students.splice(index, 1)[0];

      expelledStudents.push(expelledStudent);

      // create a new array containing onlt the students from the originaal array that have not been expelled using .filter
      const remainingStudents = students.filter((student) => !expelledStudents.includes(student));

      cardsOnDom(remainingStudents);
      // Rendering expelled students in a separate section of the DOM

      expelCardsOnDom(expelledStudents);
    }
  });

  const buttonFilter = (e) => {
    if (e.target.id.includes('gryffindor')) {
      const gryffindorArray = students.filter(
        (item) => item.house.toLocaleLowerCase() === 'gryffindor'
      );
      cardsOnDom(gryffindorArray);
    }
    if (e.target.id.includes('hufflepuff')) {
      const hufflepuffArray = students.filter(
        (item) => item.house.toLocaleLowerCase() === 'hufflepuff'
      );
      cardsOnDom(hufflepuffArray);
    }
    if (e.target.id.includes('ravenclaw')) {
      const ravenclawArray = students.filter(
        (item) => item.house.toLocaleLowerCase() === 'ravenclaw'
      );
      cardsOnDom(ravenclawArray);
    }
    if (e.target.id.includes('slytherin')) {
      const slytherinArray = students.filter(
        (item) => item.house.toLocaleLowerCase() === 'slytherin'
      );
      cardsOnDom(slytherinArray);
    }
    if (e.target.id.includes('all')) {
      cardsOnDom(students);
      expelCardsOnDom(expelledStudents);
    }
  };

  document.querySelector('#btn-group').addEventListener('click', buttonFilter);
};

export default events;
