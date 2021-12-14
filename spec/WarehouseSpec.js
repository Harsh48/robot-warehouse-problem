'use strict';

describe('Warehouse', function() {
  const Warehouse = require('../src/Warehouse');
  let warehouse;
  let crate;
  let crate2;

  beforeEach(function() {
    warehouse = new Warehouse();
    crate = jasmine.createSpyObj('crate', ['update']);
    crate2 = jasmine.createSpyObj('crate', ['update'])
    crate.location = [0,0]
    crate2.location = [0,0]
  })

  it('has dimensions', function() {
    expect(warehouse.dimensions).toBeDefined();
  })

  it('can contain crates', function() {
    expect(warehouse.crates).toBeDefined();
  })

  it('responds to receive', function() {
    expect(warehouse.receive).toBeDefined()
  })

  it('can receive a crate', function() {
    expect(warehouse.receive(crate)).toEqual([crate])
  })

  it('adds location to crate when received', function() {
    warehouse.receive(crate, 0, 0)
    expect(crate.update).toHaveBeenCalled()
  })

  it('will not receive a crate if already in crates array', function() {
    warehouse.receive(crate, 0, 0)
    expect(warehouse.receive(crate, 0, 1)).toEqual('Crate already in warehouse.')
  })

  it('will not receive crate in same location as existing one', function() {
    warehouse.receive(crate, 0, 0)
    expect(warehouse.receive(crate2, 0, 0)).toEqual('Position occupied.')
  })

  it('can identify whether a space is occupied', function() {
     warehouse.receive(crate, 0, 0)
     expect(warehouse.occupied([0,0])).toEqual(true)
  })
})