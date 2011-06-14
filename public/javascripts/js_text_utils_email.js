(function(){

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
            console.log('quoted');

            if(inQuoted === false){
              // Start Quoting
              inQuoted = true;
            }
            tmpArray.push(line);
          }else{
            // Regular Text
            console.log('regular text');
            outputArray.push(line);
            inQuoted = false;
          }
          console.log(line);
        });

      // Text ended quoted
      if(tmpArray.length > 0){
        outputArray.push("<div class='quoted'>");
        outputArray.push(tmpArray);
        outputArray.push("</div>");

      }
      console.log(_.flatten(outputArray));
      console.log(tmpArray);
      return _.flatten(outputArray).join('<br/>');
    }

  };
})();
