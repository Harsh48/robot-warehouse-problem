// get files

const Robot = require('./src/Robot')
const Warehouse = require('./src/Warehouse')
const Crate = require('./src/Crate')

// create instances
let warehouse = new Warehouse()
let robot = new Robot(warehouse)
let crate = new Crate
let crate2 = new Crate
let crate3 = new Crate

// display instances

crate
crate2
crate3
robot
warehouse

// warehouse receive crates

warehouse.crates
warehouse.receive(crate, 0, 0)
warehouse.receive(crate2, 5, 5)
warehouse.receive(crate2, 5, 5)
warehouse.receive(crate3, 5, 5)
warehouse.crates

// move robot

robot.instruct('E')
robot.instruct('W')
robot.instruct('N')
robot.instruct('S')

// edgecase

robot.instruct('B')

// boundary test

for( i=0; i<5; i++ ) { robot.instruct('N') }
robot.location
robot.instruct('N')
robot.instruct('NE')
robot.location
for( i=0; i<5; i++ ) { robot.instruct('E') }
for( i=0; i<5; i++ ) { robot.instruct('S') }
robot.location
robot.instruct('E')
robot.instruct('SE')
robot.location
for( i=0; i<5; i++ ) { robot.instruct('S') }
for( i=0; i<5; i++ ) { robot.instruct('W') }
robot.location
robot.instruct('S')
robot.instruct('SW')
robot.location
for( i=0; i<5; i++ ) { robot.instruct('W') }
for( i=0; i<5; i++ ) { robot.instruct('N') }
robot.location
robot.instruct('W')
robot.instruct('NW')
robot.location

// robot grab function

robot.instruct('G')
for( i=0; i<10; i++ ) { robot.instruct('E') }
for( i=0; i<5; i++ ) { robot.instruct('N') }
robot.location
warehouse.crates
robot.instruct('G')
robot.crate
warehouse.crates
for( i=0; i<5; i++ ) { robot.instruct('S') }
for( i=0; i<5; i++ ) { robot.instruct('W') }
robot.location
crate2.location
robot.crate
robot.instruct('G')

// robot drop function

robot.instruct('D')
robot.crate
robot.instruct('N')
robot.instruct('D')
crate2.location
robot.crate
robot.instruct('S')
crate2.location
