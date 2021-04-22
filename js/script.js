const addBttn = document.getElementById('addbttn');
const form = document.querySelector('form');
let nameList = [];
let nameCount = 1;

function addNameCard() {
  const nameInput = document.getElementById('nameinput');
  let name = nameInput.value;
  const ol = document.getElementById('list');
  let points = 0;
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  const li = document.createElement('li');
  const spanStarter = document.createElement('span');
  const spanDealer = document.createElement('span');
  const spanScore = document.createElement('span');
  const close = document.createElement('button');
  const h2 = document.createElement('h2');
  const bttnReset = document.createElement('button');
  const createnumScore = document.createElement('input');
  const enterbttn = document.createElement('button');

  function sameName() {
    if (nameList.includes(name)) {
      name += nameCount;
      nameCount++;
      nameList.push(name);
      return name;
    }
    nameList.push(name);
    return name;
  }

  function delItem() {
    const tagName = name;
    li.parentElement.removeChild(li);
    if (nameList.includes(tagName)) {
      nameList = nameList.filter((item) => !tagName.includes(item));
    } else {
      throw console.log('delItem Error');
    }
  }

  function reset() {
    const localpts = document.getElementById(name);
    points = 0;
    localpts.innerHTML = points;
  }

  function submitScore() {
    const localpts = document.getElementById(name);
    let numlocalpts = parseFloat(localpts.innerText, 10);
    const scoreInput = document.getElementById(name + name).valueAsNumber;
    const scoreLength = document.getElementById(name + name).value;
    const numScore = parseFloat(scoreInput, 10);

    if (!numScore) {
      alert('Please enter a number!');
    } else if (typeof numScore === 'number' && numlocalpts === 0 && scoreLength.length <= 7) {
      console.log('=== 0');
      numlocalpts = numScore;
      localpts.innerText = numlocalpts;
    } else if (typeof numScore === 'number' && numlocalpts !== 0 && scoreLength.length <= 7) {
      console.log('!== 0');
      numlocalpts += numScore;
      localpts.innerText = numlocalpts;
    } else if (scoreLength.length > 7) {
      alert('Score input cannot exceed 7 digits');
    } else {
      alert('Something is not right!');
    }
  }

  if (name === '') {
    alert('Please Enter a Name');
  } else {
    spanDealer.innerHTML = '<input type="radio" name="dealer"> Dealer';
    spanStarter.innerHTML = '<input type="radio" name="starter"> Starter';

    h2.innerText = sameName(name);
    close.innerText = 'X';
    bottomDiv.innerText = 'Score: ';
    spanScore.innerText = '0';
    enterbttn.innerText = 'Enter';
    bttnReset.innerText = 'Reset';

    topDiv.classList.add('top');
    bottomDiv.classList.add('bottom');
    spanDealer.classList.add('dealer');
    spanStarter.classList.add('starter');
    close.classList.add('close');
    bottomDiv.classList.add('bottom');
    bttnReset.classList.add('resetbttn');
    createnumScore.classList.add('score-input');
    enterbttn.classList.add('ptsbttn');
    spanScore.classList.add('score');
    spanScore.setAttribute('id', name);
    createnumScore.setAttribute('type', 'number');
    createnumScore.setAttribute('id', name + name);
    createnumScore.setAttribute('placeholder', '0');

    topDiv.appendChild(h2);

    topDiv.appendChild(spanDealer);
    topDiv.appendChild(spanStarter);
    li.appendChild(topDiv);
    bottomDiv.appendChild(spanScore);
    bottomDiv.appendChild(bttnReset);
    bottomDiv.appendChild(createnumScore);
    bottomDiv.appendChild(enterbttn);

    li.appendChild(bottomDiv);
    ol.appendChild(li);

    close.addEventListener('click', delItem);
    bttnReset.addEventListener('click', reset);
    enterbttn.addEventListener('click', submitScore);
    createnumScore.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submitScore();
      }
    });
  }

  nameInput.value = '';
  nameInput.focus();

  document.getElementsByName('starter').forEach((radioBttn) => {
    radioBttn.addEventListener('mousedown', function first() {
      if (this.checked) {
        this.onclick = function second() {
          this.checked = false;
        };
      } else {
        this.onclick = null;
      }
    });
  });

  document.getElementsByName('dealer').forEach((radioBttn) => {
    radioBttn.addEventListener('mousedown', function first() {
      if (this.checked) {
        this.onclick = function second() {
          this.checked = false;
        };
      } else {
        this.onclick = null;
      }
    });
  });
}

form.addEventListener('submit', addNameCard);
addBttn.addEventListener('click', addNameCard);
