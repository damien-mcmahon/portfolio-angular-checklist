(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('angularChecklist'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

  });
})();
