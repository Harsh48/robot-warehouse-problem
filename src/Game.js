const Crate = require('./Crate')
const Warehouse = require('./Warehouse')
const Robot = require('./Robot')
const Readline = require('readline');

function Game() {
  this.warehouse = new Warehouse()
  this.robot = new Robot(this.warehouse)
  this.crate = new Crate()
  this.crate2 = new Crate()
  this.warehouse.receive(this.crate, 0, 0)
  this.warehouse.receive(this.crate2, 5, 5)
}

Game.prototype.run = function() {
  this.interface = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  this.getCommand()
}

Game.prototype.getCommand = function() {
  game = this
  this.interface.question("\nCOMMAND THE ROBOT.\n\n", function(instruction) {
    let instructions = instruction.split(' ')
    game.execute(instructions)
  });
}

Game.prototype.execute = function(instructions) {
  instructions.forEach(function(instruction) {
    console.log(`\n${game.robot.instruct(instruction)}`)
  })
  this.interface.close()
  this.run()
}

module.exports = Game