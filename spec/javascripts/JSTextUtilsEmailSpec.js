describe("JSUtils.Email", function() {
  
  describe("Quoted Text Processing", function() {
    
    it("should quote text with one block of quoted text", function() {
      
      var emailWithQuoted = ["Try updating rake", "", "$ sudo gem update", "", "-- ", "Wael Nasreddine", "Sent from my iPhone", "", "On Jun 14, 2011, at 7:56, spatten <scott@ruboss.com> wrote:", "", "> I did some further testing:", ">", "> 1) I tried a more recent version of Ruby 1.8.7 using rvm, and still", "> had the same error", ">", "> $ ruby --version", "> ruby 1.8.7 (2011-02-18 patchlevel 334) [i686-darwin10.6.0]"].join('<br/>');

      var expectedText = ["Try updating rake", "", "$ sudo gem update", "", "-- ", "Wael Nasreddine", "Sent from my iPhone", "", "On Jun 14, 2011, at 7:56, spatten <scott@ruboss.com> wrote:", "", "<div class='quoted'>", "> I did some further testing:", ">", "> 1) I tried a more recent version of Ruby 1.8.7 using rvm, and still", "> had the same error", ">", "> $ ruby --version", "> ruby 1.8.7 (2011-02-18 patchlevel 334) [i686-darwin10.6.0]", "</div>"].join('<br/>'); 

      expect(JSUtils.Email.wrapQuotedText(emailWithQuoted)).toEqual(expectedText);

    });
    
    it("should work if there are multiple quoted block", function() {
      
      var emailWithQuoted = ["> A: Because it messes up the order in which people normally read text.", "> Q: Why is top-posting such a bad thing?", ">", "", "Funny very (:", "", "", "> A: Top-posting.", "> Q: What is the most annoying thing in e-mail?", ">", "> Folks - it's very hard to follow and participate in conversations where", "> people are top-posting[1].", "> It's hereby verboten on this list.", ">", "> Thanks.", ">", "> [1] http://en.wikipedia.org/wiki/Posting_style", ">", "> --", "> You received this message because you are subscribed to the Google Groups", "> \"Cukes\" group.", "> To post to this group, send email to cukes@googlegroups.com.", "> To unsubscribe from this group, send email to", "> cukes+unsubscribe@googlegroups.com.", "> For more options, visit this group at", "> http://groups.google.com/group/cukes?hl=en.", ">"].join('<br/>');
      console.log(emailWithQuoted);

      var expectedText = ["<div class='quoted'>", "> A: Because it messes up the order in which people normally read text.", "> Q: Why is top-posting such a bad thing?", ">", "</div>", "", "Funny very (:", "", "", "<div class='quoted'>", "> A: Top-posting.", "> Q: What is the most annoying thing in e-mail?", ">", "> Folks - it's very hard to follow and participate in conversations where", "> people are top-posting[1].", "> It's hereby verboten on this list.", ">", "> Thanks.", ">", "> [1] http://en.wikipedia.org/wiki/Posting_style", ">", "> --", "> You received this message because you are subscribed to the Google Groups", "> \"Cukes\" group.", "> To post to this group, send email to cukes@googlegroups.com.", "> To unsubscribe from this group, send email to", "> cukes+unsubscribe@googlegroups.com.", "> For more options, visit this group at", "> http://groups.google.com/group/cukes?hl=en.", ">", "</div>"].join('<br/>');

      expect(JSUtils.Email.wrapQuotedText(emailWithQuoted)).toEqual(expectedText);
      console.log(JSUtils.Email.wrapQuotedText(emailWithQuoted));
      console.log(expectedText);
    });
    
    it("should work if <br> is used as line break ", function() {
      
      var emailWithQuoted = ["> A: Because it messes up the order in which people normally read text.", "> Q: Why is top-posting such a bad thing?", ">", "", "Funny very (:", "", "", "> A: Top-posting.", "> Q: What is the most annoying thing in e-mail?", ">", "> Folks - it's very hard to follow and participate in conversations where", "> people are top-posting[1].", "> It's hereby verboten on this list.", ">", "> Thanks.", ">", "> [1] http://en.wikipedia.org/wiki/Posting_style", ">", "> --", "> You received this message because you are subscribed to the Google Groups", "> \"Cukes\" group.", "> To post to this group, send email to cukes@googlegroups.com.", "> To unsubscribe from this group, send email to", "> cukes+unsubscribe@googlegroups.com.", "> For more options, visit this group at", "> http://groups.google.com/group/cukes?hl=en.", ">"].join('<br>');
      console.log(emailWithQuoted);

      var expectedText = ["<div class='quoted'>", "> A: Because it messes up the order in which people normally read text.", "> Q: Why is top-posting such a bad thing?", ">", "</div>", "", "Funny very (:", "", "", "<div class='quoted'>", "> A: Top-posting.", "> Q: What is the most annoying thing in e-mail?", ">", "> Folks - it's very hard to follow and participate in conversations where", "> people are top-posting[1].", "> It's hereby verboten on this list.", ">", "> Thanks.", ">", "> [1] http://en.wikipedia.org/wiki/Posting_style", ">", "> --", "> You received this message because you are subscribed to the Google Groups", "> \"Cukes\" group.", "> To post to this group, send email to cukes@googlegroups.com.", "> To unsubscribe from this group, send email to", "> cukes+unsubscribe@googlegroups.com.", "> For more options, visit this group at", "> http://groups.google.com/group/cukes?hl=en.", ">", "</div>"].join('<br/>');

      expect(JSUtils.Email.wrapQuotedText(emailWithQuoted)).toEqual(expectedText);
      console.log(JSUtils.Email.wrapQuotedText(emailWithQuoted));
      console.log(expectedText);
    });

  });  
  

});  
    
