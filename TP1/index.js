import { TabsManual } from "./tab.js";
import { CurrentTemp } from "./metier/CurrentTemp.js";

let A_temperature = [];

const O_sectionTempContainer = document.getElementById("temp-container");
const O_pMessage = document.getElementById('message');
const O_devTempBox = document.getElementById('temp-box');
const O_TempVal = document.getElementById('temp-val');

const O_historyList = document.getElementById('history-list');

let O_currentTemp = new CurrentTemp(O_devTempBox, O_TempVal, O_pMessage);

// add random number
function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomValInArray(A_array) {
    let I_index = getRandomInterval(0, 19);
    return A_array[I_index];
}

for (let I_i = 0; I_i < 20; I_i++) {
    A_temperature.push(getRandomInterval(-10, 40));
}



O_TempVal.textContent = getRandomValInArray(A_temperature) + ' ' + S_unitTemp;
O_TempVal.dataset.value = getRandomValInArray(A_temperature);
O_TempVal.dataset.unity = S_unitTemp;

setInterval(() => {

    
    const O_dataTemperature = document.createElement('data')
    O_dataTemperature.style.padding = "10px";
    
    O_currentTemp.displayTemp(getRandomValInArray(A_temperature));
    
    O_dataTemperature.setAttribute('id', 'temp-val-hist');
    O_dataTemperature.textContent = S_tempAndUnit;

    O_historyList.appendChild(O_dataTemperature);
}, 2000); // Affichage toute les deux seconds

O_sectionTempContainer.appendChild(O_devTempBox);


window.addEventListener('load', function () {
  var tablists = document.querySelectorAll('[role=tablist].manual');
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
});
