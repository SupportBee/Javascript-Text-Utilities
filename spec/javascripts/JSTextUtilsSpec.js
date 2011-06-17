// DateJS is used for testing some of the stuff

describe("JSUtils", function() {

  describe("JSUtils.Date", function() {

    describe("isToday", function() {
      it("should tell if the date is not today's date", function() {
        var yday = (1).days().ago();
        expect(JSUtils.Date.isToday(yday)).toEqual(false);
      });  
      
      it("should tell if the date is today's date", function() {
        var now = Date.now();
        expect(JSUtils.Date.isToday(now)).toEqual(true);
      });  

    });  

    describe("isThisYear", function() {
      
      it("should tell if the date is not this year", function() {
        var lastYear = (1).year().ago();
        expect(JSUtils.Date.isThisYear(lastYear)).toEqual(false);
      });
      
      it("should tell if the date is this year", function() {
        var now = Date.now();
        expect(JSUtils.Date.isThisYear(now)).toEqual(true);
      });  

    });  
    
    
    
   describe("Today's timestamps", function() {

     it("should show 0 - 12 hours today as AM", function(){
       var dateNow = Date.now();
       var amTime = new Date(dateNow.getFullYear(),
                             dateNow.getMonth(),
                             dateNow.getDate(),
                             2, 49, 0, 0);
       expect(JSUtils.Date.toHuman(amTime)).toEqual('2:49 am');
     });
     
     it("should show 13 - 23 hours today as AM", function(){
       var dateNow = Date.now();
       var amTime = new Date(dateNow.getFullYear(),
                             dateNow.getMonth(),
                             dateNow.getDate(),
                             12, 9, 0, 0);
       expect(JSUtils.Date.toHuman(amTime)).toEqual('12:09 pm');
     });
     
     it("should show 13 - 23 hours today as AM", function(){
       var dateNow = Date.now();
       var amTime = new Date(dateNow.getFullYear(),
                             dateNow.getMonth(),
                             dateNow.getDate(),
                             23, 49, 0, 0);
       expect(JSUtils.Date.toHuman(amTime)).toEqual('11:49 pm');
     });
     
     it("should show any date in the last year as dd mm", function(){
       var dateNow = Date.now();
       var amTime = new Date(dateNow.getYear(),
                             5,
                             9,
                             23, 49, 0, 0);

       // Force it to be this year and not today's
       var whenMock = sinon.mock(JSUtils.Date);

       // Lets assume all dates are today's
       whenMock.expects('isToday').once().returns(false);
       whenMock.expects('isThisYear').once().returns(true);

       expect(JSUtils.Date.toHuman(amTime)).toEqual('Jun 9');

       whenMock.verify();
       whenMock.restore();
     });
     
     it("should show any date befor last year fully", function(){
       var dateNow = Date.now();
       var amTime = new Date(2010,
                             5,
                             9,
                             23, 49, 0, 0);

       // Force it to be this year and not today's
       var whenMock = sinon.mock(JSUtils.Date);

       // Lets assume all dates are today's
       whenMock.expects('isToday').once().returns(false);
       whenMock.expects('isThisYear').once().returns(false);

       expect(JSUtils.Date.toHuman(amTime)).toEqual('6/9/2010');

       whenMock.verify();
       whenMock.restore();
     });
   });  
     

  });  
  
  
});  

