const addBttn = document.getElementById('addbttn');
const form = document.querySelector('form');
const nameList = [];
let nameCount = 1;

function addNameCard() {
  const nameInput = document.getElementById('nameinput');
  let name = nameInput.value;
  const ol = document.getElementById('list');
  let bttnstate;
  let points = 0;

  function sameName() {
    if (nameList.includes(name)) {
      name += nameCount;
      nameCount++;
      nameList.push(name);
      console.log(nameList);
      return name;
    }
    nameList.push(name);
    return name;
  }

  if (name === '') {
    alert('Please Enter a Name');
  } else {
    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    const li = document.createElement('li');
    const spanDealer = document.createElement('span');
    const spanStarter = document.createElement('span');
    const spanScore = document.createElement('span');
    const close = document.createElement('button');
    const h2 = document.createElement('h2');
    const bttn1 = document.createElement('button');
    const bttn2 = document.createElement('button');
    const bttn3 = document.createElement('button');
    const bttnChange = document.createElement('button');
    const bttnReset = document.createElement('button');

    spanDealer.innerHTML = '<label><input type="radio" name="dealer"> Dealer</label>';
    spanStarter.innerHTML = '<label><input type="radio" name="starter"> Starter</label>';

    h2.innerText = sameName(name);
    close.innerText = 'X';
    bottomDiv.innerText = 'Score: ';
    spanScore.innerText = '0';
    bttnChange.innerText = '+/-';
    bttn1.innerText = '1';
    bttn2.innerText = '5';
    bttn3.innerText = '10';
    bttnReset.innerText = 'Reset';

    topDiv.classList.add('top');
    bottomDiv.classList.add('bottom');
    spanDealer.classList.add('dealer');
    spanStarter.classList.add('starter');
    close.classList.add('close');
    bottomDiv.classList.add('bottom');
    bttnReset.classList.add('resetbttn');
    bttnChange.classList.add('ptsbttn');
    bttnChange.classList.add('bttngrn');
    bttn1.classList.add('ptsbttn');
    bttn1.classList.add('bttngrn');
    bttn2.classList.add('ptsbttn');
    bttn2.classList.add('bttngrn');
    bttn3.classList.add('ptsbttn');
    bttn3.classList.add('bttngrn');
    spanScore.classList.add('score');
    spanScore.setAttribute('id', name);

    topDiv.appendChild(h2);
    topDiv.appendChild(close);
    topDiv.appendChild(spanDealer);
    topDiv.appendChild(spanStarter);
    li.appendChild(topDiv);
    bottomDiv.appendChild(spanScore);
    bottomDiv.appendChild(bttnReset);
    bottomDiv.appendChild(bttn3);
    bottomDiv.appendChild(bttn2);
    bottomDiv.appendChild(bttn1);
    bottomDiv.appendChild(bttnChange);

    li.appendChild(bottomDiv);
    ol.appendChild(li);

    close.addEventListener('click', delItem);
    bttnReset.addEventListener('click', reset);
    bttnChange.addEventListener('click', changeColor);
    bttn1.addEventListener('click', scoreCalc1);
    bttn2.addEventListener('click', scoreCalc2);
    bttn3.addEventListener('click', scoreCalc3);

    function delItem() {
      li.classList.add('delete');
    }

    function reset() {
      const localpts = document.getElementById(name);
      points = 0;
      localpts.innerHTML = points;
    }

    function scoreCalc1() {
      const localpts = document.getElementById(name);
      if (bttnstate === true) {
        points -= 1;
      } else {
        points += 1;
      }
      localpts.innerHTML = points;
    }

    function scoreCalc2() {
      const localpts = document.getElementById(name);
      if (bttnstate === true) {
        points -= 5;
      } else {
        points += 5;
      }
      localpts.innerHTML = points;
    }

    function scoreCalc3() {
      const localpts = document.getElementById(name);
      if (bttnstate === true) {
        points -= 10;
      } else {
        points += 10;
      }
      localpts.innerHTML = points;
    }

    function changeColor() {
      if (bttnstate === true) {
        bttnChange.classList.remove('bttnred');
        bttnChange.classList.add('bttngrn');
        bttn1.classList.remove('bttnred');
        bttn1.classList.add('bttngrn');
        bttn2.classList.remove('bttnred');
        bttn2.classList.add('bttngrn');
        bttn3.classList.remove('bttnred');
        bttn3.classList.add('bttngrn');
        return bttnstate = false;
      }
      bttnChange.classList.remove('bttngrn');
      bttnChange.classList.add('bttnred');
      bttn1.classList.remove('bttngrn');
      bttn1.classList.add('bttnred');
      bttn2.classList.remove('bttngrn');
      bttn2.classList.add('bttnred');
      bttn3.classList.remove('bttngrn');
      bttn3.classList.add('bttnred');
      return bttnstate = true;
    }
  }
  nameInput.value = '';
  nameInput.focus();
}

form.addEventListener('submit', addNameCard);
addBttn.addEventListener('click', addNameCard);
