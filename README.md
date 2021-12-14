# robot-warehouse-problem
## Installation

```
git clone https://github.com/Harsh48/robot-warehouse-problem
cd robot-warehouse-problem
npm install
```

## Usage

Program runs in the command line. Start it with `npm start`. Initially there is one crate in the north-east corner of the warehouse and one in the centre.

* The robot moves along a 10x10 grid in the warehouse, and will not move outside its confines.
* The robot will not grab a crate if it already holding one
* The robot will not grab a crate if there is not one present
* The robot will not drop a crate on another crate!
* Anything but the following list returns an error.
* `N`  - move north
* `W`  - move west
* `E`  - move east
* `S`  - move south
* `G`  - grab crate
* `D`  - drop crate

### Example command sequences

* The command sequence: `N E S W` will move the robot in a full square, returning it to where it started.

## Testing

This was built with TDD. To run the tests:

* This was built with TDD. Run the tests with npm test.
