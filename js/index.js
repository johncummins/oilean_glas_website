
// these two functions control the styles of the two buttns on the inde.html page

//this function is called when the mouse hovers over the button
function mouseOverFunc(val){
    //ref to the first button on the page
    var homeButton1 = document.getElementById("home_button1"); 
    //ref to the 2nd button on the page
    var homeButton2 = document.getElementById("home_button2");
    //if the value passed in is 1 - button 1 is set to bold
    if(val==1){
        homeButton1.style.fontWeight = "bold";
    }
    else {  // else button 2 is set to bold
        homeButton2.style.fontWeight = "bold";
    }
}

//this function is called when the mouse moves away from the button
function mouseOutFunc(val){
    var homeButton1 = document.getElementById("home_button1");
    var homeButton2 = document.getElementById("home_button2");
    if(val==1){
        homeButton1.style.fontWeight = "normal";
    }
    else{
        homeButton2.style.fontWeight = "normal";
    }
}