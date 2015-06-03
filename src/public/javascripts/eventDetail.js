$(function(){
  $("#enroll").click(function() {
  	var text = $("#enroll").text();
  	var sum = parseInt($("#enrollNum").text());
  	if (text == '我要报名') {
  		sum++;
  		$("#enrollNum").text(sum);
  		$("#enroll").text('取消报名');
  	} else {
  		sum--;
  		$("#enrollNum").text(sum);
  		$("#enroll").text('我要报名');
  	}
  })
})