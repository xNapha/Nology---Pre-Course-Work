const body = document.querySelector("body")
body.innerHTML = `
  <header>
    <h1 class="gameTitle">Hostile Aliens</h1>
    <button class="newGame" onclick="createNewGame(alienShipFleetArr)">New Game</button>
  </header>
  <main>
    <div class="alienFleet">
      <div class="motherShipCon"></div>
      <div class="defenceShipCon"></div>
      <div class="attackShipCon"></div>
    </div>
    <button class="fireCannon" onclick="fireAtAlienShip(alienShipFleetArr)">Fire!</button>
  </main>
  <footer>© Nathan Cai</footer>
`;

let alienShipFleetArr = [];

// What all ships have in common, HP, and a lose of health, if they are alive, gets damaged
class AlienShip {
  constructor(healthPoints, damagePoints,isAlive = true){
    this.maxHealthPoints = healthPoints,
    this.currentHealthPoints = healthPoints,
    this.damagePoints = damagePoints,
    this.isAlive = isAlive
  }; 

  damageShip(){
    this.currentHealthPoints = this.currentHealthPoints - this.damagePoints;
    this.destroyShip();
  };

  roundHealthToZero(){
    this.currentHealthPoints = 0;
  }

  destroyShip(){
    if(this.currentHealthPoints <= 0){
      this.isAlive = false;
      this.roundHealthToZero();
    }
  };
};
/*
Attack Ship x8
  - 45 HP
  - Loses 12 HP when hit
*/
class AttackShip extends AlienShip {
  constructor(healthPoints = 45,damagePoints = 12, isAlive = true){
    super(healthPoints,damagePoints, isAlive),
    this.typeOfShip = "attack"
  };

  destroyedMotherShip(){
    this.currentHealthPoints = 0;
    this.destroyShip()
};

  
  displayShip(){
    const alienShip = document.querySelector(`.${this.typeOfShip}ShipCon`);
      alienShip.innerHTML += `
      <div class="alienShip">
        <p>${this.currentHealthPoints}/${this.maxHealthPoints}</p>
        <p>${this.typeOfShip.toUpperCase()} Ship</p>
      </div>
      `;
  }; 
};
/*
Defence Ship x5
 - 80 HP
 - Loses 10 HP when hit
*/
class DefenceShip extends AlienShip {
  constructor(healthPoints = 80,damagePoints = 10, isAlive = true){
    super(healthPoints,damagePoints, isAlive),
    this.typeOfShip = "defence"
  };
  destroyedMotherShip(){
      this.currentHealthPoints = 0;
      this.destroyShip()
  };

  displayShip(){
    const alienShip = document.querySelector(`.${this.typeOfShip}ShipCon`);
      alienShip.innerHTML += `
      <div class="alienShip">
        <p>${this.currentHealthPoints}/${this.maxHealthPoints}</p>
        <p>${this.typeOfShip.toUpperCase()} Ship</p>
      </div>
      `;
  }; 
};
/*
Mother Ship x1
 - 100 HP
 - Loses 9 HP  when hit
 - All ships destoryed if this ship dies
*/
class MotherShip extends AlienShip {
  constructor(healthPoints = 100,damagePoints = 9, isAlive = true){
    super(healthPoints ,damagePoints , isAlive),
    this.typeOfShip = "mother"
  };

  displayShip(){
    const alienShip = document.querySelector(`.${this.typeOfShip}ShipCon`);
      alienShip.innerHTML += `
      <div class="alienShip">
        <p>${this.currentHealthPoints}/${this.maxHealthPoints}</p>
        <p>${this.typeOfShip.toUpperCase()} Ship</p>
      </div>
      `;
  }; 
};


const addMotherShipToFleet = (fleetArr) => {
  const motherShip = new MotherShip();
  fleetArr.push(motherShip)
};

const addDefenceShipsToFleet = (fleetArr) => {
  for(let i = 0; i < 5; i++){
    const defenceShip = new DefenceShip();
    fleetArr.push(defenceShip);
  }
};

const addAttackShipsToFleet = (fleetArr) => {
  for(let i = 0; i < 8; i++){
    const attackShip = new AttackShip();
    fleetArr.push(attackShip);
  }
};

const addAllShipstoFleet = (alienShipFleetArr) => {
  addMotherShipToFleet(alienShipFleetArr);
  addDefenceShipsToFleet(alienShipFleetArr);
  addAttackShipsToFleet(alienShipFleetArr);
};

const fireAtAlienShip = (alienShipFleetArr) => {
  clearBoard();
  let randomShip = Math.floor(Math.random()* alienShipFleetArr.length)
  // pick a different ship if that ship is already destoryed
  while(alienShipFleetArr[randomShip].currentHealthPoints == 0){
    randomShip = Math.floor(Math.random()* alienShipFleetArr.length)
  }
  alienShipFleetArr[randomShip].damageShip()
  checkIfMotherShipIsDetroyed(alienShipFleetArr)
  populateBoard(alienShipFleetArr);
}

// Simplest way i could think of that would refresh and display an update to the game board 
const clearBoard = () => {
  document.querySelector(".gameTitle").innerHTML = "Hostile Aliens"
  document.querySelector(".newGame").innerHTML = "New Game"
  document.querySelector(".motherShipCon").innerHTML = "";
  document.querySelector(".defenceShipCon").innerHTML = "";
  document.querySelector(".attackShipCon").innerHTML = "";
}

const populateBoard = (alienShipFleetArr) => {
  return alienShipFleetArr.forEach(ship => ship.displayShip())
}

// Create New Game button
const createNewGame = (alienShipFleetArr) => {
  clearBoard()
  alienShipFleetArr = [];
  addAllShipstoFleet(alienShipFleetArr);
  populateBoard(alienShipFleetArr);
}

// All Ships are destroyed if the Mother Ship is destoryed
const checkIfMotherShipIsDetroyed = (alienShipFleetArr) => {
  const isMotherShipAlive = alienShipFleetArr[0].isAlive
  if(!isMotherShipAlive){
    victoryScreen();
    alienShipFleetArr.forEach(ship =>{
      try{
        ship.destroyedMotherShip();
      } catch(err){}
    }); 
  }
}

const victoryScreen = () => {
  document.querySelector(".gameTitle").innerHTML = "All Hostile Aliens Are Now Destroyed"
  document.querySelector(".newGame").innerHTML += "?"
}

addAllShipstoFleet(alienShipFleetArr);
populateBoard(alienShipFleetArr);
