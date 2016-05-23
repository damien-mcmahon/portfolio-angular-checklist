(function() {
  'use strict';

  describe('controllers - Main', function(){
    var vm;

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($controller, $window) {
      var MockImmutable = $window.Immutable;
      vm = $controller('MainController', {Immutable: MockImmutable});
    }));

    it('creates an empty list initially', function(){
      expect(vm.items.toJS()).toEqual([]);
    });

    describe('addItemToList()', function(){
      it('adds a new item to the list', function(){
        vm.addItemToList({title: "My New Item"});
        var items = vm.items.toJS();

        expect(items.length).toBe(1);
        expect(items[0].title).toEqual("My New Item");
      });
    });

    describe('removeItemFromList()', function(){
      var mockItem, items;

      beforeEach(function(){
        mockItem = { id: '123334', title: "An Item to remove"};
        vm.addItemToList(mockItem);
      });

      it('removes the item by given id', function(){
        vm.removeItemFromList('123334');
        items = vm.items.toJS();
        expect(items.length).toBe(0);
      });

      it('finds the item by the correct index', function(){
        var newMockItem = { id: '122333', title: "A new item to remove"};
        vm.addItemToList(newMockItem);
        vm.removeItemFromList(mockItem.id);
        items = vm.items.toJS();
        expect(items.length).toBe(1);
        expect(items[0].title).toEqual(newMockItem.title);
      });

      it('only removes an item with an id found in the list', function(){
        vm.removeItemFromList('1');
        items = vm.items.toJS();
        expect(items.length).toBe(1);
        expect(items[0].title).toEqual(mockItem.title);
      });

    });
  });
})();
