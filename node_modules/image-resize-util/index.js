'use strict';

module.exports = {
  name: require('./package').name,
  included() {
    this._super.included.apply(this, arguments);
    this.import('node_modules/pica/dist/pica.js');
    this.import('vendor/shims/pica.js');
  },
};
