(function(){


  var quoteArray = function(outputArray, tmpArray){
    outputArray.push("<div class='quoted'>");
    outputArray.push(tmpArray);
    outputArray.push("</div>");
  }

  JSUtils.Email = {

    wrapQuotedText: function(text, breakPattern){
      
      if(breakPattern === undefined) breakPattern = '<br/>';

      var inputArray = text.split(breakPattern);
      var outputArray = [];
      var tmpArray = [];
      var inQuoted = false;
      _.each(inputArray, function(line){
          if(line.match(/^>.*$/) != null){
            // Quoted Line
            if(inQuoted === false){
              // Start Quoting
              inQuoted = true;
            }
            tmpArray.push(line);
          }else{
            // Regular Text
            if(tmpArray.length > 0){
              quoteArray(outputArray,tmpArray);
              tmpArray = [];
            }
            outputArray.push(line);
            inQuoted = false;
          }
        });

      // Text ended quoted
      if(tmpArray.length > 0){
        quoteArray(outputArray,tmpArray);
      }
      return _.flatten(outputArray).join('<br/>');
    }

  };
})();
