import renderToDom from '../utils/renderToDom';

const expelCardsOnDom = (array) => {
  let domString = '';
  array.forEach((student) => {
    domString += `<div class="card expeled-card" >
      <img src="https://pm1.aminoapps.com/6929/c50b896def25b54b11dfec725f9d8acac786ddfdr1-2044-1150v2_hq.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Sadly, <span style="color:red;">${student.name}</span> went over to the dark side! </p>
        <div  id="expel--${student.id}"></div>
      </div>
    </div>`;
  });
  renderToDom('#displayExpelled', domString);
};

export default expelCardsOnDom;
