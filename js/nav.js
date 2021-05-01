
function openNav()  {
  var links = document.getElementById("myLinks");
  var icon = document.getElementById("icon");
  var x_icon = document.getElementById("x_icon");
  links.style.display = "block";
  icon.style.display = "none";
  x_icon.style.display = "block";
}

function closeNav(){
  var links = document.getElementById("myLinks");
  var icon = document.getElementById("icon");
  var x_icon = document.getElementById("x_icon");
    // if (links.style.display === "block" ) {
      links.style.display = "none";
      icon.style.display = "block";
      x_icon.style.display = "none";
}

  //bug - if screen moves from 600 to 900 - mylinks disappear and need a reload
  // however this is a minr bug as it the website will be diplayed on on size device at a time
  if(screen.width>900){
      links.style.display = "block";
  }

