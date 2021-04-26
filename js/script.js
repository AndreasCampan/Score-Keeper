const playerBttn = document.getElementById('playerBttn');
const form = document.querySelector('form');
let nameList = [];
let nameCount = 1;

function addNameCard() {
  const li = document.createElement('li');

  const topDiv = document.createElement('div');
  const spanStarter = document.createElement('span');
  const spanDealer = document.createElement('span');
  const close = document.createElement('button');
  const h2 = document.createElement('h2');

  const midDiv = document.createElement('div');
  const enterbttn = document.createElement('button');
  const scrReset = document.createElement('button');
  const bttnMinus = document.createElement('button');
  const createNumScore = document.createElement('input');
  const spanScore = document.createElement('span');
  const scoreString = document.createElement('span');

  const mid2Div = document.createElement('div');
  const miscReset = document.createElement('button');
  const miscInput = document.createElement('input');
  const addMisc = document.createElement('button');

  const bottomDiv = document.createElement('div');
  const miscList = document.createElement('div');

  const nameInput = document.getElementById('nameinput');
  const ul = document.getElementById('list');
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

  function resetScore() {
    const localpts = document.getElementById(name);
    points = 0;
    localpts.innerHTML = points;
  }

  function resetMisc() {
    const resetmisc = document.getElementById(`list${name}`);
    resetmisc.innerText = '';
  }

  function minus() {
    const scoreInput = document.getElementById(`${name}num`);
    console.log(scoreInput);
    scoreInput.value = '-';
    console.log('ran');
  }

  function submitMisc() {
    const miscInputBox = document.getElementById(`misc${name}`);
    const miscValue = miscInputBox.value;
    const miscListBox = document.getElementById(`list${name}`);
    if (miscValue) {
      miscListBox.innerText += `${miscValue},  `;
      miscInputBox.value = '';
    } else {
      alert('Please enter a game call');
    }
  }

  function submitScore() {
    const localpts = document.getElementById(name);
    const scoreInputBox = document.getElementById(`${name}num`);
    const scoreInput = document.getElementById(`${name}num`).value;
    const scoreLength = document.getElementById(`${name}num`).value;

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
        scoreInputBox.value = '';
      } else if (numlocalpts !== 0 && scoreLength.length <= 7) {
        console.log('!== 0');
        numlocalpts += numScore;
        localpts.innerText = numlocalpts;
        scoreInputBox.value = '';
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
    topDiv.classList.add('top');
    h2.innerText = sameName(name);
    spanDealer.classList.add('dealer');
    spanDealer.innerHTML = '<input type="radio" name="dealer"> Dealer';
    spanStarter.classList.add('starter');
    spanStarter.innerHTML = '<input type="radio" name="starter"> Starter';
    close.classList.add('close');
    close.innerText = 'X';

    midDiv.classList.add('mid');
    scrReset.classList.add('resetbttn');
    scrReset.innerText = 'Rst';
    scoreString.innerText = 'Score:';
    createNumScore.classList.add('score-input');
    enterbttn.classList.add('enterbttn');
    enterbttn.innerText = 'Add';
    spanScore.classList.add('score');
    spanScore.innerText = '0';
    bttnMinus.classList.add('minus');
    bttnMinus.innerText = '-';
    spanScore.setAttribute('id', name);
    createNumScore.setAttribute('type', 'text');
    createNumScore.setAttribute('id', `${name}num`);
    createNumScore.setAttribute('placeholder', '0');

    mid2Div.classList.add('mid2');
    miscReset.classList.add('resetbttn');
    miscReset.innerText = 'Clear';
    miscInput.classList.add('misc-input');
    miscInput.setAttribute('type', 'text');
    miscInput.setAttribute('id', `misc${name}`);
    miscInput.setAttribute('placeholder', 'Miscellaneous');
    addMisc.classList.add('enterbttn');
    addMisc.innerText = 'Submit';

    bottomDiv.classList.add('bottomDiv');
    miscList.classList.add('misc-List');
    miscList.setAttribute('id', `list${name}`);

    topDiv.appendChild(h2);
    topDiv.appendChild(spanDealer);
    topDiv.appendChild(spanStarter);
    topDiv.appendChild(close);
    midDiv.appendChild(scrReset);
    midDiv.appendChild(scoreString);
    midDiv.appendChild(spanScore);
    midDiv.appendChild(bttnMinus);
    midDiv.appendChild(createNumScore);
    midDiv.appendChild(enterbttn);
    mid2Div.appendChild(miscReset);
    mid2Div.appendChild(miscInput);
    mid2Div.appendChild(addMisc);
    bottomDiv.appendChild(miscList);

    li.appendChild(topDiv);
    li.appendChild(midDiv);
    li.appendChild(mid2Div);
    li.appendChild(bottomDiv);
    ul.appendChild(li);

    close.addEventListener('click', delItem);
    scrReset.addEventListener('click', resetScore);
    bttnMinus.addEventListener('click', minus);
    enterbttn.addEventListener('click', submitScore);
    miscReset.addEventListener('click', resetMisc);
    addMisc.addEventListener('click', submitMisc);
    createNumScore.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submitScore();
      }
    });
    miscInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        submitMisc();
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
playerBttn.addEventListener('click', addNameCard);
