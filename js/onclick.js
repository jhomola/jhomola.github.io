$(document).ready(function(){
$('.markdown-block .sqs-block-content h3').css('cursor','pointer');
$(".markdown-block .sqs-block-content h3").nextUntil("h3").slideToggle();
$(".markdown-block .sqs-block-content h3").click(function() {$(this).nextUntil("h3").slideToggle();});
  })
