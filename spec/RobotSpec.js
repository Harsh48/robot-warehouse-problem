'use strict';

describe('robot', function() {

  const Robot = require('../src/Robot');
  let robot;
  let warehouse;
  let crate;

  beforeEach(function() {
    warehouse = jasmine.createSpyObj('warehouse', ['crates', 'occupied'])
    robot = new Robot(warehouse);
    crate = jasmine.createSpyObj('crate', ['update', 'location'])
    warehouse.crates = [crate]
  })
  
  it('has a location', function() {
    expect(robot.location).toBeDefined();
  })

  it('responds to instruct', function() {
    expect(robot.instruct).toBeDefined();
  })

  it('moves one space east when instruct("E") is called', function() {
    expect(robot.instruct('E')).toEqual([1,0])
  })

  it('moves one space west when instruct("W") is called', function() {
    expect(robot.instruct('W')).toEqual([-1,0])
  })

  it('moves one space north when instruct("N") is called', function() {
    expect(robot.instruct('N')).toEqual([0,1])
  })

  it('moves one space south when instruct("S") is called', function() {
    expect(robot.instruct('S')).toEqual([0,-1])
  })


  it('will not move outside warehouse north wall', function() {
    for(let i=0; i < 5; i++) { robot.instruct('N') }
    expect(robot.instruct('N')).toEqual([0,5])
  })

  it('will not move outside warehouse east wall', function() {
    for(let i=0; i < 5; i++) { robot.instruct('E') }
    expect(robot.instruct('E')).toEqual([5,0])
  })

  it('will not move outside warehouse south wall', function() {
    for(let i=0; i < 5; i++) { robot.instruct('S') }
    expect(robot.instruct('S')).toEqual([0,-5])
  })

  it('will not move outside west wall', function() {
    for(let i=0; i < 5; i++) { robot.instruct('W') }
    expect(robot.instruct('W')).toEqual([-5,0])
  })

  

   

   

  
  it('returns an error if given invalid instructions', function() {
    expect(robot.instruct('Z')).toEqual('Invalid instruction.')
  })

  it('responds to grab', function() {
    expect(robot.grab).toBeDefined()
  })

  it('holds a crate once grabbed', function() {
    crate.location = [0,0]
    expect(robot.instruct('G')).toEqual(crate)
    expect(warehouse.crates).toEqual([])
  })

  it('will not grab a crate if none present at robot location', function() {
    crate.location = [0,1]
    expect(robot.instruct('G')).toEqual('No crate to grab.')
  })

  it('will not drop a crate when not holding one', function() {
    expect(robot.instruct('D')).toEqual('No crate to drop.')
  })

  describe('when holding a crate', function() {
    beforeEach(function() {
      crate.location = [0,0]
      robot.instruct('G')
    })

    it('will not grab if holding a crate already', function() {
      expect(robot.instruct('G')).toEqual('Already holding crate.')
    })

    it('updates crate location upon movement', function() {
      robot.instruct('N')
      expect(crate.update).toHaveBeenCalledWith([0,1])
    })

    it('will return Dropped Crate message when instructed', function() {
      expect(robot.instruct('D')).toEqual('Dropped crate gently.') 
    })
    
    it('will not drop crate on another crate', function() {
      warehouse.occupied.and.returnValue(true);
      expect(robot.instruct('D')).toEqual('Cannot drop crate here.')
    })

    it('returns crate to warehouse inventory when dropped', function() {
      expect(warehouse.crates).toEqual([])
      robot.instruct('D')
      expect(warehouse.crates).toEqual([crate])
    })
 
    it('will drop the crate it is holding when instructed', function() {
      expect(robot.crate).toEqual(crate)
      robot.instruct('D')
      expect(robot.crate).toBeNull()
    })
  })
})