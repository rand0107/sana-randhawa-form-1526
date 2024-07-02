// Stating the active elements 
let btn = document.getElementById('button');
let fname = document.getElementById('fullname');
let email = document.getElementById('email');
let mess = document.getElementById('message');

// this is a regular expression for an email 
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// adding the event handler
function validateForm() {

  let user_input = {};
  let errs = [];


  // validating the fullname here 
  fname.value = fname.value.trim();
  if (fname.value) {
    user_input.fname = fname.value;
  } else {
    errs.push('<p>Please enter your Full Name.</p>');
  }


  //  validating the email here 
  email.value = email.value.trim();
  if (email.value) {
    user_input.userEmail = email.value;

    if (pattern.test(email.value)) {
      user_input.userEmail = email.value;
    } else {
      errs.push('<p>Please add a valid email ID.</p>')
    }

  } else {
    errs.push("<p>Please enter your email.</p>")
  } 


  // validating the message here 
  mess.value = mess.value.trim();
  if (mess.value) {
    user_input.mess = mess.value;
  } else {
    errs.push('<p>Please enter your Message.</p>');
  }


  // PRINT YOUR FEEDBACK/ERROR MESSAGES
  if (errs.length === 0) {
    console.log(user_input); 
    document.getElementById('form') . reset();
  } else {
    console.log(errs);
  }
}

btn.addEventListener('click', validateForm);