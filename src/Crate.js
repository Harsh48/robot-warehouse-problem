'use strict';

function Crate() {

  this.location = [];

}

Crate.prototype.update = function(location) {
  this.location = location;
  return this.location
}

module.exports = Crate;