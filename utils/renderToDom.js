// const renderToDOM = (divId, content) => {
//   const selectedDiv = document.querySelector(divId);
//   selectedDiv.innerHTML = content;
// };

// renderToDom function expression
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

export default renderToDom;
