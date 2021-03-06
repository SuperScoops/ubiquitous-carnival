/*!
**|  CyTube Enhanced Layout Options
**|
**|  Version 2015.05.12
**|
**@preserve
*/
//$('nav.navbar a[href="#"][onclick]').attr("href","javascript:void(0)");if(!$('a[onclick*="removeUntilNext"]').length){$('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href","javascript:void(0)").attr("onclick","javascript:removeUntilNext()").text("Remove Video Until Next")))}function removeUntilNext(){socket.once("changeMedia",unremoveVideo);return removeVideo()}function removeVideo(event){try{PLAYER.setVolume(0);if(PLAYER.type==="rv"){killVideoUntilItIsDead($(PLAYER.player))}}catch(e){console.log(e)}CLIENT.removedOnGDrive=PLAYER.mediaType=="gd"?true:false;$("#videowrap").hide().attr("id","videowrap_disabled");$("#ytapiplayer").attr("id","ytapiplayer_disabled");$("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12");$('a[onclick*="removeVideo"]').attr("onclick","javascript:unremoveVideo(event)").text("Restore video");if(event)event.preventDefault()}function unremoveVideo(event){socket.emit("playerReady");$("#chatwrap").addClass("col-lg-5 col-md-5").removeClass("col-md-12");$("#videowrap_disabled").attr("id","videowrap").show();$("#ytapiplayer_disabled").attr("id","ytapiplayer");$('a[onclick*="removeVideo"]').attr("onclick","javascript:removeVideo(event)").text("Remove video");if(event)event.preventDefault();if(CLIENT.removedOnGDrive){CLIENT.removedOnGDrive=false;setTimeout(function(){$("#mediarefresh").click()},1e3)}}if(!$('a[onclick*="toggleChat"]').length){$('a[onclick*="chatOnly"]').parent().after($("<li>").append($("<a>").attr("href","javascript:void(0)").attr("onclick","javascript:toggleChat()").text("Remove Chat")))}function toggleChat(){if($("#chatwrap").parent().attr("id")==="main"){$("#chatwrap").appendTo("#customSettingsStaging");$("#videowrap").css("margin","0 auto");$("#videowrap").css("float","initial");$("#videowrap").css("margin-bottom","20px");$('a[onclick*="toggleChat"]').text("Restore Chat");return}if(!USEROPTS.layout.match(/synchtube/)){$("#chatwrap").prependTo("#main")}else{$("#chatwrap").appendTo("#main")}$("#videowrap").css("margin","");$("#videowrap").css("float","");$("#videowrap").css("margin-bottom","");$('a[onclick*="toggleChat"]').text("Remove Chat")}(function(){if(window.cinemaLoaded){return}window.cinemaLoaded=true;$('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href","javascript:void(0)").attr("onclick",'javascript:$("#cinematoggle").click()').text("Cinema Mode")));Cinema={};Cinema.rootDir="https://pink.horse/resources/css/";Cinema.addCSS=function(){$.ajax(Cinema.rootDir+"cinema.css?cache"+Math.random()).done(function(data){$("#cinemacss").remove();$("#cinematoggle").remove();var cinemastyle=$("<style type='text/css' title='cinemacss' id='cinemacss'></style>").appendTo("head");cinemastyle.html(data);$('<div id="cinematoggle"><span class="glyphicon glyphicon-new-window "></span></div>').appendTo("body").click(function(){if(!$("body").hasClass("cinemachat")){if($("#userlist").is(":visible")){$("#userlisttoggle").click()}}$("body").toggleClass("cinemachat");if($("iframe[src*=livestream]").length){PLAYER.mediaType="";PLAYER.mediaId="";socket.emit("playerReady")}handleWindowResize()})})};Cinema.addCSS()})();
var userVol=0;
$('nav.navbar a[href="#"][onclick]').attr("href", "javascript:void(0)");
if(!$('a[onclick*="removeUntilNext"]').length) {
  $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:removeUntilNext()").text("Remove Video Until Next")))
}

function removeUntilNext() {
  socket.once("changeMedia", unremoveVideo);
  return removeVideo()
}

function removeVideo(event) {
  try {
    PLAYER.getVolume(function(curVol){userVol=curVol})
    PLAYER.setVolume(0);
    if(PLAYER.type === "rv") {
      killVideoUntilItIsDead($(PLAYER.player))
    }
  } catch(e) {
    console.log(e)
  }
  CLIENT.removedOnGDrive = PLAYER.mediaType == "gd" ? true : false;
  $("#videowrap").hide().attr("id", "videowrap_disabled");
  $("#ytapiplayer").attr("id", "ytapiplayer_disabled");
  $("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12");
  $('a[onclick*="removeVideo"]').attr("onclick", "javascript:unremoveVideo(event)").text("Restore video");
  if(event) event.preventDefault()
}

function unremoveVideo(event) {
  setTimeout(function() {
    PLAYER.setVolume(userVol)
  }, 250);
  socket.emit("playerReady");
  $("#chatwrap").addClass("col-lg-5 col-md-5").removeClass("col-md-12");
  $("#videowrap_disabled").attr("id", "videowrap").show();
  $("#ytapiplayer_disabled").attr("id", "ytapiplayer");
  $('a[onclick*="removeVideo"]').attr("onclick", "javascript:removeVideo(event)").text("Remove video");
  if(event) event.preventDefault();
  if(CLIENT.removedOnGDrive) {
    CLIENT.removedOnGDrive = false;
    setTimeout(function() {
      $("#mediarefresh").click()
    }, 1e3)
  }
}
if(!$('a[onclick*="toggleChat"]').length) {
  $('a[onclick*="chatOnly"]').parent().after($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:toggleChat()").text("Remove Chat")))
}

function toggleChat() {
  if($("#chatwrap").parent().attr("id") === "main") {
    $("#chatwrap").appendTo("#customSettingsStaging");
    $("#videowrap").css("margin", "0 auto");
    $("#videowrap").css("float", "initial");
    $("#videowrap").css("margin-bottom", "20px");
    $('a[onclick*="toggleChat"]').text("Restore Chat");
    return
  }
  if(!USEROPTS.layout.match(/synchtube/)) {
    $("#chatwrap").prependTo("#main")
  } else {
    $("#chatwrap").appendTo("#main")
  }
  $("#videowrap").css("margin", "");
  $("#videowrap").css("float", "");
  $("#videowrap").css("margin-bottom", "");
  $('a[onclick*="toggleChat"]').text("Remove Chat")
}(function() {
  if(window.cinemaLoaded) {
    return
  }
  window.cinemaLoaded = true;
  $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", 'javascript:$("#cinematoggle").click()').text("Cinema Mode")));
  Cinema = {};
  Cinema.rootDir = "https://pink.horse/resources/css/";
  Cinema.addCSS = function() {
    $.ajax(Cinema.rootDir + "cinema.css?cache" + Math.random()).done(function(data) {
      $("#cinemacss").remove();
      $("#cinematoggle").remove();
      var cinemastyle = $("<style type='text/css' title='cinemacss' id='cinemacss'></style>").appendTo("head");
      cinemastyle.html(data);
      $('<div id="cinematoggle"><span class="glyphicon glyphicon-new-window "></span></div>').appendTo("body").click(function() {
        if(!$("body").hasClass("cinemachat")) {
          if($("#userlist").is(":visible")) {
            $("#userlisttoggle").click()
          }
        }
        $("body").toggleClass("cinemachat");
        if($("iframe[src*=livestream]").length) {
          PLAYER.mediaType = "";
          PLAYER.mediaId = "";
          socket.emit("playerReady")
        }
        handleWindowResize()
      })
    })
  };
  Cinema.addCSS()
})();
