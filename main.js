// Validate Name
var validName = $('#firstname').parsley();
console.log(validName.isValid()); // maxlength is 10, so field is valid, check in console

$('#firstname').attr('data-parsley-maxlength', 10);
console.log(validName.isValid()); // No longer valid, as maxlength is 10


// Validate Email
var validEmail = $('#mail').parsley();
console.log(validEmail.isValid()); // check, in console

$('#mail').attr('data-parsley-minlength', 10);
console.log(validEmail.isValid());


$(function() {
  $('#form').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
      $('.bs-callout-info').toggleClass('hidden', !ok);
      $('.bs-callout-warning').toggleClass('hidden', ok);
    })
    .on('form:submit', function() {
      return false; // Will not submit! Demo only!
    });
});

// other validation attempt
// function formValidation() {
//   var name = document.getElementById("firstname");
//   name.addEventListener("input", function(event) {
//     if (email.validity.typeMismatch) {
//       name.setCustomValidity("Good, you've got a name!");
//     } else {
//       name.setCustomValidity("please use a valid email");
//     }
//   });
//
//   var email = document.getElementById("mail");
//
//   email.addEventListener("input", function(event) {
//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("Yes, a valid email!");
//     } else {
//       email.setCustomValidity("Please use a valid email");
//     }
//   });
// }
// return formValidation();
//