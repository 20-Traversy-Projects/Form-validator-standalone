const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwprd2 = document.getElementById('password2');

//check username
function checkLength (input){
    if(input.value.length < 3 || input.value.length > 20){
        console.log('Please enter the username between 3 and 20 characters');
    }
}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Submit button was clicked");

    checkLength(username);
})