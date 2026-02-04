export class CurrentTemp {
    constructor(tempContainer, tempValueDisplay, messageDisplay) {
        this.tempContainer = tempContainer;
        this.tempValueDisplay = tempValueDisplay;
        this.messageDisplay = messageDisplay;
    }

    displayTemp(currentTemp) {
        let S_unitTemp = '°C';

        if (currentTemp < 0) {
            this.messageDisplay.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            this.messageDisplay.classList.remove('hidden');
        } else if (currentTemp > 30) {
            this.messageDisplay.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !";
            this.messageDisplay.classList.remove('hidden');
        } else {
            messageDisplay.textContent = '';
            messageDisplay.classList.add('hidden');
        }
    
        let B_bleuBox = currentTemp >= -10 && currentTemp <= 0;
        let B_greenBox = currentTemp > 0 && currentTemp <= 20;
        let B_orangeBox = currentTemp > 20 && currentTemp <= 30;
        let B_redBox = currentTemp > 30 && currentTemp <= 40;

        if (B_bleuBox) {
            this.tempContainer.setAttribute('class', 'blue-box');
        } else if (B_greenBox) {
            this.tempContainer.setAttribute('class', 'green-box');
        } else if (B_orangeBox) {
            this.tempContainer.setAttribute('class', 'orange-box');
        } else if (B_redBox) {
            this.tempContainer.setAttribute('class', 'red-box');
        }

        let S_tempAndUnit = currentTemp + ' ' + '°C';

        this.tempValueDisplay.textContent = S_tempAndUnit;
        this.tempValueDisplay.dataset.value = currentTemp;
        this.tempValueDisplay.dataset.unity = '°C';
    }

    displayMessage() {

    }
}
