let addBttn = document.getElementById("addbttn");
let resetBttn = document.getElementById("resetbttn");
let form = document.querySelector('form');
let nameList = [];
nameCount = 1;

function addNameCard(){
  let nameInput = document.getElementById("nameinput");
  let name = nameInput.value;
  let ol = document.getElementById("list");
  let bttnstate = undefined;
  let points = 0;

  if (name === "") {
    alert("Please Enter a Name");
  } else {
    let topDiv = document.createElement("div");
    let bottomDiv = document.createElement("div");
    let li = document.createElement("li");
    let spanDealer = document.createElement("span");
    let spanStarter = document.createElement("span");
    let spanScore = document.createElement("span");
    let close = document.createElement("button");
    let h2 = document.createElement("h2");
    let bttn1 = document.createElement("button");
    let bttn2 = document.createElement("button");
    let bttn3 = document.createElement("button");
    let bttnChange = document.createElement("button");
    let bttnReset = document.createElement("button");

    spanDealer.innerHTML = '<label><input type="radio" name="dealer"> Dealer</label>'
    spanStarter.innerHTML = '<label><input type="radio" name="starter"> Starter</label>'

    h2.innerText = sameName(name);
    close.innerText = "X"
    bottomDiv.innerText = "Score: "
    spanScore.innerText = "0"
    bttnChange.innerText = "+/-";
    bttn1.innerText = "1";
    bttn2.innerText = "5";
    bttn3.innerText = "10";
    bttnReset.innerText= "Reset";

    topDiv.classList.add('top');
    bottomDiv.classList.add('bottom');
    spanDealer.classList.add('dealer');
    spanStarter.classList.add('starter');
    close.classList.add('close');
    bottomDiv.classList.add('bottom');
    bttnReset.classList.add('ptsbttn')
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
    bottomDiv.appendChild(bttn3);  
    bottomDiv.appendChild(bttn2);
    bottomDiv.appendChild(bttn1);
    bottomDiv.appendChild(bttnChange);
    bottomDiv.appendChild(bttnReset);
    li.appendChild(bottomDiv);
    ol.appendChild(li); 

    close.addEventListener('click', delItem);
    bttnReset.addEventListener('click', reset);
    bttnChange.addEventListener('click', changeColor);
    bttn1.addEventListener('click', scoreCalc1);
    bttn2.addEventListener('click', scoreCalc2);
    bttn3.addEventListener('click', scoreCalc3);

    function sameName(){
      if (nameList.includes(name)){
        name = name + nameCount
        nameCount++;
        nameList.push(name);
        console.log(nameList);
        return name;
      }
      nameList.push(name);
      return name;
    }

    function delItem(){
      li.classList.add('delete');
    }

    function reset(){
      let localpts = document.getElementById(name);
      points = 0;
      localpts.innerHTML = points;
    }

    function scoreCalc1(){
      let localpts = document.getElementById(name);
      if(bttnstate === true){
        points = points - 1;
      } else {
        points = points + 1;
      }
      localpts.innerHTML = points;
    }

    function scoreCalc2(){
      let localpts = document.getElementById(name);
      if(bttnstate === true){
        points = points - 5;
      } else {
        points = points + 5;
      }
      localpts.innerHTML = points;
    }

    function scoreCalc3(){
      let localpts = document.getElementById(name);
      if(bttnstate === true){
        points = points - 10;
      } else {
        points = points + 10;
      }
      localpts.innerHTML = points;
    }

    function changeColor(){
      if(bttnstate === true){
        bttnChange.classList.remove('bttnred');
        bttnChange.classList.add('bttngrn');
        bttn1.classList.remove('bttnred');
        bttn1.classList.add('bttngrn');
        bttn2.classList.remove('bttnred');
        bttn2.classList.add('bttngrn');
        bttn3.classList.remove('bttnred');
        bttn3.classList.add('bttngrn');
        return bttnstate = false;
      } else {
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
  }
  nameInput.value = "";
  nameInput.focus();
}

form.addEventListener('submit', addNameCard);
addBttn.addEventListener('click', addNameCard);


