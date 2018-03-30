 function onload() {
    IN.Event.on(IN, "auth", onLinkedInAuth);
    $('#profiles').css('display','none');

  }
  function onLinkedInAuth() {

    IN.API.Profile("me").fields("first-name", "last-name","picture-url").result(displayProfiles);
    $('#profiles').css('display','none');
  }

  function displayProfiles(profiles) {
    member = profiles.values[0];
    
    
	$('#profiles').css('display','block');
	$('#pic').attr('src',member.pictureUrl);
	$('#fname').text(member.firstName);
	$('#lname').text(member.lastName);
  }

  function closesession(){
  	IN.User.logout();
  	location.href="index.html";
   	
  }