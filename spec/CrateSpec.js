'use strict';

describe("Crate", function() {
  const Crate = require('../src/Crate');
  let crate;

  beforeEach(function() {
    crate = new Crate();
  })

  it('responds to location', function() {
    expect(crate.location).toBeDefined();
  })

  it('can update its location when moved by robot', function() {
    expect(crate.update([0,1])).toEqual([0,1])
  })
})