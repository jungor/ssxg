$(function(){
  $(".extra.content a").click(function() {
  	var text = $("#1text").text();
  	var sum = parseInt($("#1sum").text());
  	if (text == '点赞') {
  		sum++;
  		$("#1thumbs").removeClass("outline");
  		$("#1sum").text(sum);
  		$("#1text").text('取消');
  	} else {
  		sum--;
  		$("#1thumbs").addClass("outline");
  		$("#1sum").text(sum);
  		$("#1text").text('点赞');
  	}
  })
})