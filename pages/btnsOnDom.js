import renderToDom from '../utils/renderToDom';

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
