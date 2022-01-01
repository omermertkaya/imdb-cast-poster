(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['pica'],
      __esModule: true,
    };
  }

  define('pica', [], vendorModule);
})();
