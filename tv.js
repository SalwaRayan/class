class TV {
  constructor(brand) {
    this.brand = brand
    this.channel = 1
    this.volume = 50
  }

  volumePlus(num){
    this.volume += num
    if (this.volume > 100){
      this.volume = 100
    }
  }

  volumeLess(num){
    this.volume -= num
    if (this.volume < 0){
      this.volume = 0
    }
  }

  chaineChange(num){
    this.channel += num
    if (this.channel < 1){
      this.channel = 1
    } else if (this.channel > 50){
      this.channel = 50
    }
  }

  reset(){
    this.channel = 1
    this.volume = 50
  }

  describe() {
    console.log(`${this.brand} is on the channel ${this.channel} with a volume of ${this.volume}`)
  }

}

const toshiba = new TV("toshiba")

toshiba.volumeLess(25)
toshiba.chaineChange(6)
toshiba.describe()
toshiba.volumePlus(5)
toshiba.chaineChange(-2)
toshiba.describe()
toshiba.reset()
toshiba.describe()

