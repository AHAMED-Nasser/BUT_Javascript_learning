let A_temperature = [];

const O_sectionTempContainer = document.getElementById("temp-container");
const O_pMessage = document.getElementById('message');
const O_devTempBox = document.getElementById('temp-box');
const O_pTempVal = document.getElementById('temp-text');

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

O_pTempVal.textContent = getRandomValInArray(A_temperature) + ' °C';

setInterval(() => {
    let I_tempVal = getRandomValInArray(A_temperature);

    if (I_tempVal < 0) {
        O_pMessage.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    } else if (I_tempVal > 30) {
        O_pMessage.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !";
    } else {
        O_pMessage.textContent = '';
    }
    
    let B_bleuBox = I_tempVal >= -10 && I_tempVal <= 0;
    let B_greenBox = I_tempVal > 0 && I_tempVal <= 20;
    let B_orangeBox = I_tempVal > 20 && I_tempVal <= 30;
    let B_redBox = I_tempVal > 30 && I_tempVal <= 40;

    if (B_bleuBox) {
        O_devTempBox.setAttribute('class', 'blue-box');
    } else if (B_greenBox) {
        O_devTempBox.setAttribute('class', 'green-box');
    } else if (B_orangeBox) {
        O_devTempBox.setAttribute('class', 'orange-box');
    } else if (B_redBox) {
        O_devTempBox.setAttribute('class', 'red-box');
    }

    O_pTempVal.textContent = I_tempVal + ' °C';
}, 2000); // Affichage toute les deux seconds


O_devTempBox.appendChild(O_pTempVal); // Ajout de l'élément p dans la div créé
O_sectionTempContainer.appendChild(O_devTempBox);
