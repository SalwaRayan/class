class TV {
  constructor(brand) {
    this.brand = brand
    this.channel = 1
    this.volume = 50
  }

  volumeUp(num){
    this.volume += num

    if (this.volume > 100){
      this.volume = 100
    }
  }

  volumeDown(num){
    this.volume -= num

    if (this.volume < 0){
      this.volume = 0
    }
  }

  chaineChange(channel){
    if (channel < 50 && channel > 0) {
      this.channel = channel
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

toshiba.volumeDown(25)
toshiba.chaineChange(9)
toshiba.describe()
toshiba.volumeUp(5)
toshiba.chaineChange(25)
toshiba.describe()
toshiba.reset()
toshiba.describe()