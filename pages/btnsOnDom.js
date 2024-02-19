import renderToDom from '../utils/renderToDom';

// const filterBtnRow = () => {
//   const domString = `<div class="btn-group" role="group" aria-label="Basic example">
//       <button type="button" id="filter--hufflepuff" class="btn btn-warning btn-sm">Hufflepuff</button>
//       <button type="button" class="btn btn-primary btn-sm" id="filter--ravenclaw">Ravenclaw</button>
//       <button type="button" class="btn btn-success btn-sm" id="filter--slytherin">Slytherin</button>
//       <button type="button" class="btn btn-danger btn-sm" id="filter--gryffindor">Gryffindor</button>
//       <button type="button" class="btn btn-secondary btn-sm" id="filter--all">All</button>
//     </div>`;

//   renderToDOM('#filter-container', domString);
// };

// render btnsOnDom

const btnsOnDom = () => {
  const domString = `
  <button type="click" class="btn btn-secondary" id="all">All</button>
  <button type="click" class="btn btn-danger" id="gryffindor">Gryffindor</button>
  <button type="click" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
  <button type="click" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
  <button type="click" class="btn btn-success" id="slytherin">Slytherin</button>`;
  renderToDom('#btn-group', domString);
};

export default btnsOnDom;
