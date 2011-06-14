describe("JSUtils.Email", function() {
  
  describe("Quoted Text Processing", function() {
    
    it("should put a div around any quoted text or block quote", function() {
      
      var emailWithQuoted = ["Try updating rake", "", "$ sudo gem update", "", "-- ", "Wael Nasreddine", "Sent from my iPhone", "", "On Jun 14, 2011, at 7:56, spatten <scott@ruboss.com> wrote:", "", "> I did some further testing:", ">", "> 1) I tried a more recent version of Ruby 1.8.7 using rvm, and still", "> had the same error", ">", "> $ ruby --version", "> ruby 1.8.7 (2011-02-18 patchlevel 334) [i686-darwin10.6.0]"].join('<br/>');
      console.log(emailWithQuoted);

      var expectedText = ["Try updating rake", "", "$ sudo gem update", "", "-- ", "Wael Nasreddine", "Sent from my iPhone", "", "On Jun 14, 2011, at 7:56, spatten <scott@ruboss.com> wrote:", "", "<div class='quoted'>", "> I did some further testing:", ">", "> 1) I tried a more recent version of Ruby 1.8.7 using rvm, and still", "> had the same error", ">", "> $ ruby --version", "> ruby 1.8.7 (2011-02-18 patchlevel 334) [i686-darwin10.6.0]", "</div>"].join('<br/>'); 

      expect(JSUtils.Email.wrapQuotedText(emailWithQuoted)).toEqual(expectedText);

    });
    

  });  
  

});  
    
