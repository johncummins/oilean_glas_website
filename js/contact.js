// validate full name - field not empty, no numbers
// email               - field true against regex
// message

//regex for email
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var numberRegex = /^[^0-9]+$/;

// array with all the form field names
var inputArray = ["name", "email", "address", "message"];

//variable to store the form
var formVar = document.getElementById("form");

//error message element 
var errorMessage = document.getElementById("error_message");

//stops page from submitting before the inputs are validated
formVar.addEventListener("submit", (e) =>{

    //array to store the error messages
    var errorMessageArr = []

    var nameString = document.getElementById("name");  
    if(nameString.value === '' || nameString.value == null){
        errorMessageArr.push("*Your name is required ");
        nameString.focus();
    }
    else if (numberRegex.test(nameString.value)=== false){
        errorMessageArr.push("*Your name is  invalid, your name must not contain numbers");
        nameString.focus();
    }

    //get email input from the user 
    var emailString = document.getElementById("email");  
    if(emailString.value === '' || emailString.value == null){
        errorMessageArr.push("*Your email is required ");
        emailString.focus();
    }
    else if(emailRegex.test(emailString.value) === false){
        errorMessageArr.push("*Your email is not invalid");
        emailString.focus();
    }

    var messageString = document.getElementById("message");  
    if(messageString.value === '' || messageString.value == null){
        errorMessageArr.push("*You did not type a message");
        messageString.focus();
    }

    if (errorMessageArr.length >0){
        e.preventDefault();
        errorMessage.innerText = errorMessageArr.join("\n");
    }
    else{
        window.alert("Form submitted successfully");
    }
})

// // cheachs fields for blanks and empties
// function emptyFieldCheck(){
//     if(nameString.value === '' || nameString.value == null){
//         errorMessageArr.push("Your name is required ");
//     }

// }



// functionvalidateForm(){ 
//     var inputArray = ["fname", "email", "address", "message"];

    

//     for(i=0; i<inputArray.length; i++){
//         var inputString = document.forms["contact_form"][inputArray[i]].value;
//         document.getElementById("par").innerHTML = inputString;
//         // if (inputString == ""){
//         //     alert("name must be filled out");
//         //     return false
//         // }
//     }

// }



// ************************************************  Map functionality JS **********************************

