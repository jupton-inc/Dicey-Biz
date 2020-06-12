let diceArr = [];

function Dice() {
    this.value = this.rollDice();
    this.div = document.createElement('div');
    this.div.innerText = this.value;
    this.div.className = 'dice';
    document.getElementById('container').appendChild(this.div);
    this.div.addEventListener('click', () => {
        this.value = this.rollDice();
        this.div.innerText = this.value;
    });
    this.div.addEventListener('dblclick', () => {
        this.div.remove();
        let id = diceArr.indexOf(this);
        diceArr.splice(id, 1);
    });
}

document.getElementById('getDie').addEventListener('click', function () {
    let d = new Dice();
    diceArr.push(d);
});

document.getElementById('rollDice').addEventListener('click', function () {
    for (let i = 0; i < diceArr.length; i++) {
        diceArr[i].value = diceArr[i].rollDice();
        diceArr[i].div.innerText = diceArr[i].value;
    }
});

document.getElementById('sumDice').addEventListener('click', function () {
    let total = 0;
    for (let i = 0; i < diceArr.length; i++) {
        total += diceArr[i].value;
    }
    alert('The sum of all dice = ' + total);
});

Dice.prototype.rollDice = function () {
    return random();

}

function random() {
    return Math.floor(Math.random() * 6) + 1;
}


