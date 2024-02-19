import renderToDom from '../utils/renderToDom';

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
