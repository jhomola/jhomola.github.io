---
layout: page
title: "Research"
---

### + This is a first question
 This is the first line of an answer to the question above. This is a second line of the answer. 
 
 * Bullet points
 * Can be used too
 
 ### + This is a second question
 This is a one line answer to the question above. 
 
      <script>
     $(document).ready(function(){
     $('.markdown-block .sqs-block-content h3').css('cursor','pointer');
     $(".markdown-block .sqs-block-content h3").nextUntil("h3").slideToggle();
     $(".markdown-block .sqs-block-content h3").click(function() {$(this).nextUntil("h3").slideToggle();});
     });
     </script>
