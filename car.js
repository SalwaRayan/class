class Car {
  constructor(brand, speed) {
    this.brand = brand
    this.speed = speed
  }

  accelerate(num) {
    this.speed += num
  }
  
  brake(num) {
    this.speed -= num
  }

  describe() {
    console.log(`${this.brand} is running at ${this.speed} km/h`)
  }
}

const ford = new Car("ford", 0)
ford.accelerate(50)
ford.brake(25)
ford.describe()

const opel = new Car("opel", 0)
opel.accelerate(70)
opel.brake(40)
opel.describe()
