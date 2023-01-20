class Book {  
  constructor(title, author, genre, year){
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.year = year
  }
  
  getSummary() {
    return `${this.title} was written by ${this.author}. The genre is ${this.genre} and it was published in ${this.year}.`
  }
}

const book1 = new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", "Fantasy", 1999);
console.log(book1);

class Magazine extends Book {
  constructor(title, author, genre, year, length){
    super(title, author, genre, year)
    this.length = length
  }
};

const mag1 = new Magazine("Mag One", "Nathan Cai", "Tech", 2022, 100);
console.log(mag1)

class Employee{
  constructor(name, rating, grade, nextGrade){
    this.name = name,
    this.rating = rating,
    this.grade = grade,
    this.nextGrade = nextGrade
  };

  promotionToGradeAbove() {
    if(this.rating >= 7){
      return `${this.name} will like by promoted from ${this.grade} to ${this.nextGrade}.`    
    } else {
      return `${this.name} will not be getting a promotion.`
    };
  };
};

class Vehicle{
  constructor(name, size){
    this.name = name,
    this.size = size,
    this.currentVelocity = 0,
    this.currentDirection = 0;
  }
  
  getCurrentDirection(){
    return this.currentDirection
  }

  getCurrentVelocity(){
    return this.currentVelocity
  }

  steer(direction){
    this.currentDirection += direction;
    console.log(`Vehicle.steer(): Steering at ${this.currentDirection} degrees`);
  }

  move(velocity, direction){
    this.currentDirection = direction;
    this.currentVelocity = velocity;
    console.log(`Vehicle.move(): Moving at ${this.currentVelocity} kph in direction ${this.currentDirection}.`);
  }

  stop(){
    this.currentDirection = 0;
    this.currentVelocity = 0;
  }
}

class Car extends Vehicle{
  constructor(name, size, wheels, doors, gears, isManual){
    super(name,size),
    this.wheels = wheels,
    this.doors = doors,
    this.gears =  gears,
    this.isManual = isManual
  }

  changeGear(currentGear){
    this.currentGear = currentGear
    console.log(`Car.changeGear(): Changed to gear ${this.currentGear}`)
  };

  changeVelocity(speed, direction){
    console.log(`Car.changeVelocity(): Velocity ${speed} direction ${direction}`)
    super.move(speed,direction)
  }
}

class Ferrari extends Car{
  constructor(roadServiceMonths){
    super("Ferrari", "RWD", 4, 5, 6, false),
    this.roadServiceMonths = roadServiceMonths
  }

  accelerate(rate){
    let newVelocity = super.getCurrentVelocity() + rate;
    if(newVelocity === 0){
      super.stop();
      super.changeGear(1)
    } else if (newVelocity > 0 && newVelocity <= 10){
      super.changeGear(1);
    } else if (newVelocity > 10 && newVelocity <= 20){
      super.changeGear(2);
    } else if (newVelocity > 20 && newVelocity <= 40){
      super.changeGear(3);
    } else if (newVelocity > 30 && newVelocity <= 50){
      super.changeGear(4);
    } else{
      super.changeGear(5);
    };

    if(newVelocity > 0){
      super.changeVelocity(newVelocity, super.getCurrentDirection());
    }
  }
}