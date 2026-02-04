import { TabsManual } from "./tab.js";

let A_temperature = [];

const O_sectionTempContainer = document.getElementById("temp-container");
const O_pMessage = document.getElementById('message');
const O_devTempBox = document.getElementById('temp-box');
const O_TempVal = document.getElementById('temp-val');


const O_historyList = document.getElementById('history-list');

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

let S_unitTemp = '°C';

O_TempVal.textContent = getRandomValInArray(A_temperature) + ' ' + S_unitTemp;
O_TempVal.dataset.value = getRandomValInArray(A_temperature);
O_TempVal.dataset.unity = S_unitTemp

setInterval(() => {
    const O_dataTemperature = document.createElement('data')
    O_dataTemperature.style.padding = "10px";


    let I_tempVal = getRandomValInArray(A_temperature);

    if (I_tempVal < 0) {
        O_pMessage.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        O_pMessage.classList.remove('hidden');
    } else if (I_tempVal > 30) {
        O_pMessage.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !";
        O_pMessage.classList.remove('hidden');
    } else {
        O_pMessage.textContent = '';
        O_pMessage.classList.add('hidden');
    }
    
    let B_bleuBox = I_tempVal >= -10 && I_tempVal <= 0;
    let B_greenBox = I_tempVal > 0 && I_tempVal <= 20;
    let B_orangeBox = I_tempVal > 20 && I_tempVal <= 30;
    let B_redBox = I_tempVal > 30 && I_tempVal <= 40;

    if (B_bleuBox) {
        O_devTempBox.setAttribute('class', 'blue-box');
        O_dataTemperature.setAttribute('class', 'blue-box');
    } else if (B_greenBox) {
        O_devTempBox.setAttribute('class', 'green-box');
        O_dataTemperature.setAttribute('class', 'green-box');
    } else if (B_orangeBox) {
        O_devTempBox.setAttribute('class', 'orange-box');
        O_dataTemperature.setAttribute('class', 'orange-box');
    } else if (B_redBox) {
        O_devTempBox.setAttribute('class', 'red-box');
        O_dataTemperature.setAttribute('class', 'red-box');
    }

    let S_tempAndUnit = I_tempVal + ' ' + S_unitTemp;

    O_TempVal.textContent = S_tempAndUnit;
    O_TempVal.dataset.value = I_tempVal;
    O_TempVal.dataset.unity = S_unitTemp;

    // Création d'une balise data qui stocke les température
    
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
