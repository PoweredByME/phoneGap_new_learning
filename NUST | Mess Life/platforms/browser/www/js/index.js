var serverName = "nustfineartsclub.com/mess";

var app = {

    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        getMessData();
    },
    
};


function getMessData(){
    $.ajax({
        url : "http://" + serverName + "/massDMManager.php",
        type : "post",
        data : "action=requestByApp",
        async : true, 
        success : function(resp){
            $(".result-div").append(resp);
            $(".theLoadScreen").addClass("hide");
        },
        error :  function(jqXHR, textStatus, errorThrown){
            console.log(textStatus, errorThrown);
        }
    });
}