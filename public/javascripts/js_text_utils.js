var JSUtils = {};

(function(){

  // Private function
  var ensureDate = function(date){
      if(!(date instanceof Date)){
        return Date.parse(date);
      }
      return date;
  };

  var monthArray=new Array("January","February","March","April","May","June",
                            "July","August","September","October","November","December")
  

  JSUtils.Date = {

    isToday: function(date){
      date = ensureDate(date);
      var nowDate = new Date();
      return (nowDate.getDate() === date.getDate()) &&
             (nowDate.getMonth() === date.getMonth()) &&
             (nowDate.getFullYear() === date.getFullYear());
    },

    isThisYear: function(date){
      date = ensureDate(date);
      var nowDate = new Date();
      return (nowDate.getFullYear() === date.getFullYear());
    },


    toHuman: function(date){
      date = ensureDate(date);

      // Today?
      if(JSUtils.Date.isToday(date)){
        if(date.getHours() < 12){
          return date.getHours() + ':' + date.getMinutes() + ' am';
        }
        if(date.getHours() === 12){
          return '12:' + date.getMinutes() + ' pm';
        }
        return (date.getHours() - 12) + ':' + date.getMinutes() + ' pm';
      }

      // This Year?
      if(JSUtils.Date.isThisYear(date)){
        return monthArray[date.getMonth()].substring(0,3) + ' ' + date.getDate();
      }
      
      return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }

  };
})();
