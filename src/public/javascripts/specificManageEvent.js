$(function(){
  $("#button").click(function() {

    var name = document.getElementById("eventName").value;
    document.getElementById("newEventName").value = name;
    //alert(document.getElementById("newEventName").value);

    var time = document.getElementById("eventTime").value;
    document.getElementById("newEventTime").value = time;
    //alert(document.getElementById("newEventTime").value);

    var type = document.getElementById("eventType").value;
    document.getElementById("newEventType").value = type;
    //alert(document.getElementById("newEventType").value);

    var tag = document.getElementById("eventTag").value;
    document.getElementById("newEventTag").value = tag;
    //alert(document.getElementById("newEventTag").value);

    $("#newEvent").submit();
  })
})