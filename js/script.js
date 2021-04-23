const addBttn = document.getElementById('addbttn');
const form = document.querySelector('form');
let nameList = [];
let nameCount = 1;

function addNameCard() {
  const nameInput = document.getElementById('nameinput');
  const ul = document.getElementById('list');
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');
  const li = document.createElement('li');
  const spanStarter = document.createElement('span');
  const spanDealer = document.createElement('span');
  const spanScore = document.createElement('span');
  const scoreString = document.createElement('span');
  const close = document.createElement('button');
  const h2 = document.createElement('h2');
  const bttnReset = document.createElement('button');
  const bttnMinus = document.createElement('button');
  const createnumScore = document.createElement('input');
  const enterbttn = document.createElement('button');
  let points = 0;
  let name = nameInput.value;

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

  function minus() {
    const scoreInput = document.getElementById(name + name);
    console.log(scoreInput);
    scoreInput.value = '-';
    console.log('ran');
  }

  function submitScore() {
    const localpts = document.getElementById(name);
    const scoreInput = document.getElementById(name + name).value;
    const scoreLength = document.getElementById(name + name).value;

    if (!/[^a-zA-Z]+$/.test(scoreInput)) {
      console.log('Please insert a valid number');
    } else {
      const numScore = parseFloat(scoreInput, 10);
      let numlocalpts = parseFloat(localpts.innerText, 10);
      if (!numScore) {
        alert('Please enter a number!');
      } else if (numlocalpts === 0 && scoreLength.length <= 7) {
        console.log('=== 0');
        numlocalpts = numScore;
        localpts.innerText = numlocalpts;
      } else if (numlocalpts !== 0 && scoreLength.length <= 7) {
        console.log('!== 0');
        numlocalpts += numScore;
        localpts.innerText = numlocalpts;
      } else if (scoreLength.length > 7) {
        alert('Score input cannot exceed 7 digits');
      } else {
        alert('Something is not right!');
      }
    }
  }

  if (name === '') {
    alert('Please Enter a Name');
  } else {
    spanDealer.innerHTML = '<input type="radio" name="dealer"> Dealer';
    spanStarter.innerHTML = '<input type="radio" name="starter"> Starter';

    h2.innerText = sameName(name);
    close.innerText = 'X';
    spanScore.innerText = '0';
    enterbttn.innerText = 'Enter';
    bttnReset.innerText = 'Reset';
    bttnMinus.innerText = '-';
    scoreString.innerText = 'Score:';

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
    bttnMinus.classList.add('minus');
    spanScore.setAttribute('id', name);
    createnumScore.setAttribute('type', 'text');
    createnumScore.setAttribute('id', name + name);
    createnumScore.setAttribute('placeholder', '0');

    topDiv.appendChild(h2);
    topDiv.appendChild(spanDealer);
    topDiv.appendChild(spanStarter);
    topDiv.appendChild(close);
    li.appendChild(topDiv);
    bottomDiv.appendChild(bttnReset);
    bottomDiv.appendChild(scoreString);
    bottomDiv.appendChild(spanScore);
    bottomDiv.appendChild(bttnMinus);
    bottomDiv.appendChild(createnumScore);
    bottomDiv.appendChild(enterbttn);

    li.appendChild(bottomDiv);
    ul.appendChild(li);

    close.addEventListener('click', delItem);
    bttnReset.addEventListener('click', reset);
    bttnMinus.addEventListener('click', minus);
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
