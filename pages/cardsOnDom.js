import renderToDom from '../utils/renderToDom';

const houseCardColor = (house) => {
  switch (house) {
    case 'Ravenclaw':
      return '#0D6EFD';
    case 'Gryffindor':
      return '#DC3545';
    case 'Slytherin':
      return '#198754';
    case 'Hufflepuff':
      return '#FFC107';
    default:
      return '';
  }
};
const cardsOnDom = (array) => {
  let domString = '';
  array.forEach((student) => {
    const backgroundColor = houseCardColor(student.house);
    domString += `<div class="card mb-3" >
      <div class="row g-0 example">
        <div class="col-md-4" style="background-color: ${backgroundColor}">
          <div class="card-image-placeholder">
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title card-name">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <button type="click" class="btn btn-outline-danger"  id="expel--${student.id}">EXPEL</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  renderToDom('#displayStudents', domString);
};

export default cardsOnDom;
