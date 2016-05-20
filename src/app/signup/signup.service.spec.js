(function(){
  'use strict';

   describe('service ChecklistSignup', function() {
     var ClS;

     beforeEach(module('angularChecklist'));
     beforeEach(inject(function(_ChecklistSignup_) {
       ClS = _ChecklistSignup_;
     }));

     it('should be registered', function() {
       expect(ClS).not.toEqual(null);
     });

     describe('vaidEmail()', function() {
       it('returns true for a valid email', function(){
         var validEmail = 'damien@example.com';
         expect(ClS.validEmail(validEmail)).toBe(true);
       });

       it('fails a badly formed email address', function(){
         var badEmail = 'xxx@,,,';
         expect(ClS.validEmail(badEmail)).toBe(false);
       });
     });

     describe('validPassword()', function(){
       it('requires the two passwords given to match', function(){
         var password = 'password1';
         var mismatchPassword = 'pasword1';
         var matchedPassword = 'password1';

         expect(ClS.validPassword(password, mismatchPassword)).toBe(false);
         expect(ClS.validPassword(password, matchedPassword)).toBe(true);
       });

       it('requires the password meets the minimum length', function(){
         var shortPass = 'pass1';
         var validLengthPass = 'password1';
         expect(ClS.validPassword(shortPass, shortPass)).toBe(false);
         expect(ClS.validPassword(validLengthPass, validLengthPass)).toBe(true);
       });
     });
   });
})();
