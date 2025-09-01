let buttonObject = document.querySelector('.subscribe-button');
let changed = false;
console.log(buttonObject);
console.log(buttonObject.innerHTML);
console.log(buttonObject.innerText);
let anotherButtonObject = buttonObject;
function calculateShipping() {
  let costInput = Number(document.getElementById('order-cost-input').value);
  let test = document.querySelector('#order-cost-input').value;
  costInput = costInput * 100
  if (costInput >= 4000) {
    document.querySelector('.result').innerText = `$${(costInput / 100)}`;
  }
  else {
    document.querySelector('.result').innerText = `$${(costInput + 1000) / 100}`;
  }
}

//For immediate displayer
let reflect = window.document.querySelector(".reflect");
let displayer = window.document.querySelector(".immediate-displayer");
