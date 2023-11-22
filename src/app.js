/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let theCard = document.getElementById("theCard");

  let randomNum = Math.floor(Math.random() * 13 + 1);

  let icon = "a";
  let iconReverse = "a";
  let specialCharacter = "a";

  if (randomNum === 1) {
    icon = `"fa-solid fa-heart" style="color: #f50000;"`;
    iconReverse = `"fa-solid fa-heart fa-rotate-180" style="color: #f50000;"`;
    specialCharacter = "A";
  }

  let thisHTML = `<div class="d-flex justify-content-start p-2">
    <i class='${icon} mb-8'></i>
    </div>
    
    <div>
    <h1 class="d-flex justify-content-center">${specialCharacter}</h1>
    </div>
    
    <div class="d-flex justify-content-end p-2">
    <i class='${iconReverse} mt-8'></i>
    </div>`;

  theCard.innerHTML = thisHTML;
  console.log(Math.floor(Math.random() * 13 + 1));
};
