import renderToDom from '../utils/renderToDom';
// import { sortStudent } from '../components/sortStudent';

// add form to DOM on start-sorting click.
// const form = () => {
//   const domString = `<form id="sorting" class="d-flex flex-column form-floating ">
//     <input
//     type="text"
//     class="form-control mb-1"
//     id="student-name"
//     placeholder="Enter a name"
//     required
//   />
//   <label for="floatingInputValue">Name to be sorted</label>
// <button type="submit" class="btn btn-success">Get Sorted!</button>
// </form>`;

//   renderToDOM('#form-container', domString);

//   // has to be put on the DOM after form is on DOM, not before
//   // on form submit, sort student
//   document.querySelector('#sorting').addEventListener('submit', sortStudent);
// };

// render FormOnDom
const formOnDom = () => {
  const domString = `
  <h5>Enter First Year's Name</h5>
  <div class="mb-3 form-center">
  <input type="text" class="form-control" id="name" placeholder="Name"
  required style="width:400px;">
  <button type="submit" class="btn btn-primary sorting-btn" id="sortingBtn" style="margin-left:20px;">Sort!</button>
  </div>`;
  renderToDom('#sortingForm', domString);
};

export default formOnDom;
